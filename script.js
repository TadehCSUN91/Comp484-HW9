// ==========================
// Part 1: Date Display
// ==========================

// Create a Date object for right now
var today = new Date();

// getMonth() is zero-based (0 = January), so add 1 to get a real month number
var currentMonth = today.getMonth() + 1;
var currentDay = today.getDate();
var currentYear = today.getFullYear();

// Add a leading zero to the month and day if they are single digits,
// so the format is always two digits (MM and DD)
var formattedMonth = currentMonth < 10 ? "0" + currentMonth : currentMonth;
var formattedDay = currentDay < 10 ? "0" + currentDay : currentDay;

// Build the final message in the required MM/DD/YYYY format
var dateMessage = "Today is " + formattedMonth + "/" + formattedDay + "/" + currentYear;

// Display the result on the page (not just the console)
document.getElementById("dateOutput").textContent = dateMessage;


// ==========================
// Part 2: Number Conversion
// ==========================

// Four separate starting values, all as strings
var priceInput = "42";        // numeric string, whole number
var shippingInput = "19.75";  // numeric string, decimal
var nameInput = "hello";      // cannot be converted to a number
var quantityInput = "100";    // numeric string, whole number

// Convert each value with Number(), then test it with Number.isNaN() and Number.isInteger()
var priceValue = Number(priceInput);
var priceIsNotANumber = Number.isNaN(priceValue);
var priceIsWholeNumber = Number.isInteger(priceValue);

var shippingValue = Number(shippingInput);
var shippingIsNotANumber = Number.isNaN(shippingValue);
var shippingIsWholeNumber = Number.isInteger(shippingValue);

var nameValue = Number(nameInput);
var nameIsNotANumber = Number.isNaN(nameValue);
var nameIsWholeNumber = Number.isInteger(nameValue);

var quantityValue = Number(quantityInput);
var quantityIsNotANumber = Number.isNaN(quantityValue);
var quantityIsWholeNumber = Number.isInteger(quantityValue);

// Conditional #1: check whether the "hello" value converted successfully.
// This is one of the required if/else statements.
var nameValidityMessage;
if (nameIsNotANumber) {
    nameValidityMessage = "This value is not a valid number.";
} else {
    nameValidityMessage = "This value is a valid number.";
}

// Build one sentence per value, then join them all into a single string
var conversionResults =
    "<p class='result-line'>Original value: '" + priceInput + "' &rarr; Converted: " + priceValue +
    " &rarr; isNaN: " + priceIsNotANumber + " &rarr; isInteger: " + priceIsWholeNumber + "</p>" +

    "<p class='result-line'>Original value: '" + shippingInput + "' &rarr; Converted: " + shippingValue +
    " &rarr; isNaN: " + shippingIsNotANumber + " &rarr; isInteger: " + shippingIsWholeNumber + "</p>" +

    "<p class='result-line'>Original value: '" + nameInput + "' &rarr; Converted: " + nameValue +
    " &rarr; isNaN: " + nameIsNotANumber + " &rarr; isInteger: " + nameIsWholeNumber + "</p>" +
    "<p class='message'>" + nameValidityMessage + "</p>" +

    "<p class='result-line'>Original value: '" + quantityInput + "' &rarr; Converted: " + quantityValue +
    " &rarr; isNaN: " + quantityIsNotANumber + " &rarr; isInteger: " + quantityIsWholeNumber + "</p>";

// Display the combined result on the page
document.getElementById("numberConversionOutput").innerHTML = conversionResults;


// ==========================
// Part 3: Math & Formatting
// ==========================

// Three numeric values for a simple price calculator
var itemPrice = 49.99;
var taxRate = 0.0825;
var shippingCost = 5.50;

// Addition: item price + shipping cost = subtotal
var subtotal = itemPrice + shippingCost;

// Multiplication: item price * tax rate = tax amount
var taxAmount = itemPrice * taxRate;

// Addition again: subtotal + tax amount = total cost
var totalCost = subtotal + taxAmount;

// Format the total using toFixed(2) so it always shows two decimal places, like a price
var formattedTotal = totalCost.toFixed(2);

// Conditional #2: decide whether this order qualifies for free shipping.
// This is the second required if/else statement.
var shippingMessage;
if (totalCost >= 75) {
    shippingMessage = "This order qualifies for free shipping!";
} else {
    shippingMessage = "Add more to your order to qualify for free shipping.";
}

// Build the results string for the Math section
var mathResults =
    "<p class='result-line'>Item price: $" + itemPrice.toFixed(2) + "</p>" +
    "<p class='result-line'>Shipping cost: $" + shippingCost.toFixed(2) + "</p>" +
    "<p class='result-line'>Subtotal (price + shipping): $" + subtotal.toFixed(2) + "</p>" +
    "<p class='result-line'>Tax amount (price &times; tax rate): $" + taxAmount.toFixed(2) + "</p>" +
    "<p class='result-line'>Total cost: $" + formattedTotal + "</p>" +
    "<p class='message'>" + shippingMessage + "</p>";

// Display the math results on the page
document.getElementById("mathOutput").innerHTML = mathResults;