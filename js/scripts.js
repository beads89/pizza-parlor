

function Pizza(pizzaSize1, pizzaSize2, pizzaTopping1, pizzaTopping2) {
  this.pizzaSize1 = pizzaSize1;
  this.pizzaSize2 = pizzaSize2;
  this.pizzaTopping1 = pizzaTopping1;
  this.pizzaTopping2 = pizzaTopping2;
  
}

let pizzaSize1 = new Pizza('Large');
let pizzaSize2 = new Pizza('Extra Large');
let pizzaTopping1 = new Pizza('Pepperoni');
let pizzaTopping2 = new Pizza('Mushroom');

let completeLarge = new Pizza("Large");
let completeLargeP = new Pizza("Large", "Pepperoni");
let completeLargeM = new Pizza("Large", "Mushroom");
let completeLarge2 = new Pizza("Large", "Pepperoni", "Mushroom");

let completeXL = new Pizza("Extra Large");
let completeXLP = new Pizza("Extra Large", "Pepperoni");
let completeXLM = new Pizza("Extra Large", "Mushroom");
let completeXL2 = new Pizza("Extra Large", "Pepperoni", "Mushroom");



/*
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







*/
