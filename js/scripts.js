// Business Logic

function Pizza(pizzaSize, pizzaTopping) {
  this.pizzaSize = pizzaSize;
  this.pizzaTopping = pizzaTopping;
  this.pizzaPrice = 0
}

Pizza.prototype.size = function(pizzaSize) {
  if (this.pizzaSize === "large") {
    this.pizzaPrice += 15
  } else {
    this.pizzaPrice += 20
  }
}

Pizza.prototype.topping = function(pizzaTopping) {
  for (let i = 0; i < this.pizzaTopping.length; i++) {
    this.pizzaPrice += 3;
  }
};

// UI Logic

$(document).ready(function() {
  $("form#pizzaOrder").submit(function(event) {
    event.preventDefault();
    let sizeInput = $("input:radio[name=sizes]:checked").val();
    let toppingInput = $("#toppings:checked");
    let toppingOutput = [];
    toppingInput.each(function() {
      toppingOutput.push($(this).val());
    })

    let output = new Pizza(sizeInput, toppingOutput);
    output.size();
    output.topping();

    let toppingSpaced = (output.pizzaTopping).join(", ");
    $("#pizzaToppings").text(toppingSpaced);

    $(".ordered").show();
    $("#sizeInput").text(output.pizzaSize);
    $("#pizzaCost").text("$" + output.pizzaPrice);


  });
})

//     $("#pizzaToppings").text(output.pizzaTopping);
