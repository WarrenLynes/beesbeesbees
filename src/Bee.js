var Bee = function (age, color, job) {
  age = age || 5;
  color = color || 'yellow';
  job = job || 'keep on growing';

  Grub.call(this, age, color, null);
  this.job = job;
};

Bee.prototype = Object.create(Grub.prototype);
Bee.prototype.constructor = Bee;

