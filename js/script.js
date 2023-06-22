


console.log("This is Step 1");


function stepTwo() {
  console.log("This is Step 2");
}


document.addEventListener("DOMContentLoaded", () => {
  console.log("This is Step 3");
});

function stepFour() {
  console.log("This is Step 4");
}


document.querySelector("h1").addEventListener("click", () => {
  console.log("This is Step 5");
});


let x = 5 + "10";
document.getElementById("output").textContent = x;
