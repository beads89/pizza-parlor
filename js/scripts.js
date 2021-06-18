function Pizza(pizzaSize1, pizzaSize2, pizzaTopping1, pizzaTopping2) {
  this.pizzaSize1 = pizzaSize1;
  this.pizzaSize2 = pizzaSize2;
  this.pizzaTopping1 = pizzaTopping1;
  this.pizzaTopping2 = pizzaTopping2;
}

let finishedPizza = new Pizza("Large", "Extra Large", "Pepperoni", "Mushroom");

Pizza.prototype.completeLarge = function() {
  return this.pizzaSize1; 
};

Pizza.prototype.completeLargeP = function() {
  return this.pizzaSize1 + " " + this.pizzaTopping1; 
};

Pizza.prototype.completeLargeM = function() {
  return this.pizzaSize1 + " " + this.pizzaTopping2; 
};


Pizza.prototype.completeLarge2 = function() {
  return this.pizzaSize1 + " " + this.pizzaTopping1 + " " + this.pizzaTopping2; 
};

Pizza.prototype.completeXL = function() {
  return this.pizzaSize2; 
};

Pizza.prototype.completeXLP = function() {
  return this.pizzaSize2 + " " + this.pizzaTopping1; 
};

Pizza.prototype.completeXLM = function() {
  return this.pizzaSize2 + " " + this.pizzaTopping2; 
};

Pizza.prototype.completeXL2 = function() {
  return this.pizzaSize2 + " " + this.pizzaTopping1 + " " + this.pizzaTopping2; 
};

console.log(finishedPizza.pizzaTopping2);


let pizzaSize1 = { name: "Large", price: 15.00};
let pizzaSize2 = { name: "Extra Large", price: 20.00};
let pizzaTopping1 = { name: "Pepperoni", price: 3.00 };
let pizzaTopping2 = { Name: "Mushroom", price: 3.00};



