// Function for addition
function sum() {
    const num1 = parseInt(document.getElementById("input_one").value); // Change: Get the first input value
    const num2 = parseInt(document.getElementById("input_two").value); // Change: Get the second input value
    const res = num1 + num2; // Customize: Define the operation here
    document.getElementById("result").innerHTML = res; // Update the result element
}

// Function for subtraction
function sub() {
    const num1 = parseInt(document.getElementById("input_one").value); // Change: Get the first input value
    const num2 = parseInt(document.getElementById("input_two").value); // Change: Get the second input value
    const res = num1 - num2; // Customize: Define the operation here
    document.getElementById("result").innerHTML = res; // Update the result element
}

// Function for multiplication
function mul() {
    const num1 = parseInt(document.getElementById("input_one").value); // Change: Get the first input value
    const num2 = parseInt(document.getElementById("input_two").value); // Change: Get the second input value
    const res = num1 * num2; // Customize: Define the operation here
    document.getElementById("result").innerHTML = res; // Update the result element
}

// Function for division
function div() {
    const num1 = parseInt(document.getElementById("input_one").value); // Change: Get the first input value
    const num2 = parseInt(document.getElementById("input_two").value); // Change: Get the second input value
    const res = num1 / num2; // Customize: Define the operation here
    document.getElementById("result").innerHTML = res; // Update the result element
}
