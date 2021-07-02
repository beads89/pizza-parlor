# _Pizza Parlor_

#### _Order a pizza including sizes and toppings!_

#### By _**Brandon Eads**_

## Technologies Used

* _HTML_
* _CSS_
* _JavaScript_
* _Bootstrap framework for CSS and JavaScript_
* _jQuery framework for JavaScript_

## Description

_This application allows a user to select between different sizes and toppings for a pizza. It then lists the ingredients and size the user input for their pizza and calculates the asssociated cost._

## Setup/Installation Requirements

* _Clone or download github repository to machine_
* _If a .zip was downloaded, extract contents and open folder at extracted location_
* _If cloned, navigate to and open cloned folder_
* _Open index.html_

## Known Bugs

* _None as of current. Please contact if any are found._

## License

MIT License

Copyright (c) 2021 Brandon Eads

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Contact Information

_Brandon Eads - brandon181989@hotmail.com_


** Tests **

Describe: function Pizza();
Test: It should create a pizza with size, toppings and price based on user input
Code: let newPizza = new Pizza("Large", ["Mushroom"]);
Expected output: Pizza {pizzaSize: "Large", pizzaTopping: "Mushroom", pizzaPrice: 0}

Describe: Pizza.prototype.size
Test: It should calculate size and cost depending on user input with submit button
Code: let newPizza = new Pizza("Large", ["Mushroom"]);
      newPizza.size();
      newPizza;
Expected output: Pizza {pizzaSize: "Large", pizzaTopping: ["Mushroom"], pizzaPrice: 15}

Describe: Pizza.prototype.topping
Test: Assuming the user has not refreshed the page after performing the previous test, it should add $3 per topping to the price when the user submits
Code: newPizza.topping();
      newPizza;
Expected output: Pizza {pizzaSize: "Large", pizzaTopping: ["Mushroom"], pizzaPrice: 18}

Test: Using the same described prototype, this test will output only the topping price.
Code: let newPizza = new Pizza("Large", ["Mushroom"]);
      newPizza.topping();
      newPizza;
Expected output: Pizza {pizzaSize: "Large", pizzaTopping: ["Mushrrom"], pizzaPrice: 3}



