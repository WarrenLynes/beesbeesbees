var RetiredForagerBee = function () {
  Grub.call(this, 40, 'grey', null);
  this.job = 'gamble';
  this.canFly = false;
  this.treasureChest = [];
};

RetiredForagerBee.prototype = Object.create(Grub.prototype);
RetiredForagerBee.prototype.constructor = RetiredForagerBee;
RetiredForagerBee.prototype.forage = function (treasure) {
  return 'I am too old, let me play cards instead';
};

RetiredForagerBee.prototype.gamble = function (winnings) {
  this.treasureChest.push(winnings);
};
