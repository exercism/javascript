module.exports = function () {
  var last = arguments[arguments.length - 1];
  var chain = Array.from(arguments);
  this.options = {};

  if (typeof last === 'object' && last.hasOwnProperty('qualifier')) {
    this.options = chain.pop();
  }

  this.chain = chain;
  this.qualifier = this.options.qualifier ? this.options.qualifier + ' ' : '';

  this.toString = function () {
    return this.chainOfEvents() + this.conclusion();
  }.bind(this);

  this.chainOfEvents = function () {
    return this.causesAndEffects().map( function (entry) {
      return 'For want of a ' + entry.cause +
        ' the '  + entry.effect + ' was lost.\n';
    } ).join('');
  }.bind(this);

  this.causesAndEffects = function () {
    return this.chain.reduce( function (array, event, index) {
      if (index < this.chain.length - 1) {
        array.push({ cause: event, effect: this.chain[index + 1] });
      }
      return array;
    }.bind(this), [] );
  }.bind(this);

  this.conclusion = function () {
    return 'And all for the want of a ' + this.qualifier + this.chain[0] + '.';
  }.bind(this);
};
