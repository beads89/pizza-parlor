Create toppings
  Pepperoni
  Bullets(may have to change?)

Create sizes
  Large
  Extra Large

Prices
  Sizes
    Base Large - $15
    Base Extra Large - $20

  Toppings
    Pepperoni - $3
    Bullets - $3


Constructor has properties for toppings/size

Use a method to return cost and type of pizza chosen


** Tests **

Describe: Pizza();
Test: It should create a pizza with size, toppings and price based on user input
Code: let testingPizza = new Pizza("large", "mushroom");
Expected output: Pizza {pizzaSize: "large", pizzaTopping: "mushroom"}

Describe: Pizza.prototype.size
Test: It should calculate size and cost depending on user input
Code: finishedPizza.completeLarge();
Expected output: Large Pepperoni Mushroom


Test: It should display an extra large pizza
Code. let completeXL = new Pizza("Extra Large");
Expected output: Extra Large



