function Pizza(pizzaSize1, pizzaSize2, pizzaTopping1, pizzaTopping2) {
  this.pizzaSize1 = pizzaSize1;
  this.pizzaSize2 = pizzaSize2;
  this.pizzaTopping1 = pizzaTopping1;
  this.pizzaTopping2 = pizzaTopping2;
}

let finishedPizza = new Pizza("Large", "Extra Large", "Pepperoni", "Bullets");

console.log(finishedPizza.pizzaTopping2);