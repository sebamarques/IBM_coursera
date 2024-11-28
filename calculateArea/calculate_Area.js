let length;
let width;

function calculateArea(){
    length = parseFloat(document.getElementById("length").value);
    width = parseFloat(document.getElementById("width").value);

    let area = length * width;
    document.getElementById("result").innerText = `The area of the rectangule is: ${area}`;
}
function groceryTracker(){
    grocery1 = parseFloat(document.getElementById("Grocery1").value);
    grocery2 = parseFloat(document.getElementById("Grocery2").value);
    grocery3 = parseFloat(document.getElementById("Grocery3").value);

    let totalAmount = grocery1 + grocery2 + grocery3;
    document.getElementById("resultGrocery").innerText = `The total amount is:$ ${totalAmount}`
}
