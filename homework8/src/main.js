/* eslint-disable no-trailing-spaces */
/* eslint-disable max-len */
/* eslint-disable prefer-rest-params */
/* eslint-disable no-unused-vars */
/* eslint-disable require-jsdoc */
/* eslint-disable no-var */

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++

function Machine(power) {
  this._power = power;
  this._enabled = false;

  this.enable = function() {
    this._enabled = true;
  };

  this.disable = function() {
    this._enabled = false;
  };
}

function CoffeeMachine(power, capacity, milkCapacity) {
  Machine.apply(this, arguments);
  
  var waterAmount = 0;
  this.setWaterAmount = function(amount) {
    if (amount < 0) {
      throw new Error("Negative");
    }
    waterAmount += amount;
    if (waterAmount > capacity) {
      throw new Error(`This coffee machine can't take so mush water. Max capcity ${capacity}`);
    }
  };
  this.getWaterAmount = function() {
    return waterAmount;
  };

  var milkAmount = 0;
  this.setMilkAmount = function(amount) {
    if (amount < 0) {
      throw new Error("Negative");
    }
    if (milkAmount > milkCapacity) {
      alert("So much milk");
      throw new Error(`This coffee machine can't take so mush milk. Max capcity ${milkCapacity}`);
    }
    milkAmount += amount;
  };
  this.getMilkAmount = function() {
    return milkAmount;
  };

  var coffeeСorn = 0;
  this.setCoffeeСorn = function(kg) {
    if (kg < 0) {
      throw new Error("Negative");
    }
    coffeeСorn += kg;
    if (coffeeСorn > capacity) {
      throw new Error(`This coffee machine can't take so mush coffee. Max ${capacity} kg`);
    }
  };
  this.getCoffeeСorn = function() {
    return coffeeСorn;
  };

  var WATER_HEAT_CAPACITY = 4200;
  var timerId;

  var parentDisable = this.disable;
  this.disable = function() {
    console.log("U can start");
    parentDisable.call(this);
    clearTimeout(timerId);
  };

  function getBoilTime() {
    if (waterAmount < 0 || milkAmount < 0) {
      throw new Error( `Water: ${waterAmount}. Milk: ${milkAmount}`);
    } else {
      return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    }
  };

  function onReady() {
    alert("Coffee ready. Have a nice day");
  };

  this.run = function() {
    if (milkAmount > milkCapacity || waterAmount > capacity) {
      throw new Error(`Water ${waterAmount}. Milk ${milkAmount} Max capacity of water and milk ${1000}`);
    } else if (milkAmount == 0 || waterAmount == 0 || coffeeСorn == 0) {
      throw new Error(`Water: ${waterAmount}. Milk: ${milkAmount}. Coffee ${coffeeСorn}`);
    }
    if (!this._enabled) {
      throw new Error("Please, I want 220V");
    }
    console.log(`Power value = ${power} and enabled: ${this._enabled}`);
    timerId = setTimeout(function() {
      onReady;
    }, getBoilTime());
    milkAmount -= 100;
    waterAmount -= 100;
  };
}

var coffeeMachine = new CoffeeMachine(5000, 1000, 1000);
coffeeMachine.disable();

var machineEnable = document.getElementById("enable");
var addWater= document.getElementById("add-water");
var getWater= document.getElementById("get-water");
var run = document.getElementById("run");
var stop = document.getElementById("stop");
var milkAmount = document.getElementById("milk-amount");
var corn = document.getElementById("corn-amount");

machineEnable.addEventListener("click", powerOn);
run.addEventListener("click", doCoffee);
addWater.addEventListener("click", setWater);
getWater.addEventListener("click", getWaterCapacity);
stop.addEventListener("click", disableMachine);
milkAmount.addEventListener("click", addMilk);

corn.addEventListener("click", function() {
  coffeeMachine.setCoffeeСorn(500);
});

function powerOn() {
  coffeeMachine.enable();
};

function doCoffee() {
  coffeeMachine.run();
};

function setWater() {
  coffeeMachine.setWaterAmount(100);
};

function getWaterCapacity() {
  console.log(coffeeMachine.getCoffeeСorn());
  console.log(coffeeMachine.getWaterAmount());
  console.log(coffeeMachine.getMilkAmount());
};

function disableMachine() {
  coffeeMachine.disable();
};

function addMilk() {
  coffeeMachine.setMilkAmount(100);
};
