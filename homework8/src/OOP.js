/* eslint-disable require-jsdoc */
/* eslint-disable guard-for-in */
/* eslint-disable no-var */
// eslint-disable-next-line no-unused-vars

function CoffeeMachine(power) {
  this.waterAmount = 0;
  var timerId;
  var WATER_HEAT_CAPACITY = 4200;

  var self = this;

  function getBoilTime() {
    return self.waterAmount * WATER_HEAT_CAPACITY * 80 / power;
  }

  function onReady() {
    console.log("Кофе готово!");
  }
  this.stop = function() {
    console.log("Stop");
    clearInterval(timerId);
  };

  this.run = function() {
    timerId = setTimeout(function() {
      onReady;
    }, getBoilTime());
  };
};

var coffeeMachine = new CoffeeMachine(5000);
coffeeMachine.waterAmount = 100;

coffeeMachine.run();
setTimeout(coffeeMachine.stop, 3000);
