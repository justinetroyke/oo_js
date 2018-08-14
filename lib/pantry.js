function Pantry () {
  this.stock = {}

  Pantry.prototype.stockCheck = function (ingredient){
    return this.stock[ingredient]
  }
}

module.exports = Pantry
