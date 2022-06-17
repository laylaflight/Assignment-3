// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

function createTable(){
  const grid = document.getElementById("grid");
  for(let i = 0; i < numRows; i++){
    const trElement = document.createElement("tr");
    for(let j = 0; j < numCols; j++){
      const tdElement = document.createElement("td");
      trElement.append(tdElement);
    }
    grid.append(trElement);
  }
}
function clearTable(){
  const grid = document.getElementById("grid");
  grid.innerHTML = "";
}

function refreshTable(){
    clearTable();
    createTable();
}

// Add a row
function addR() {
    numRows++;
    refreshTable();
    //alert("Clicked Add Row"); // Replace this line with your code.
}

// Add a column
function addC() {
    //alert("Clicked Add Col"); // Replace this line with your code.
}

// Remove a row
function removeR() {
    numRows--;
    refreshTable();
    //alert("Clicked Remove Row"); // Replace this line with your code.
}

// Remove a column
function removeC() {
    alert("Clicked Remove Col"); // Replace this line with your code.
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    alert("Clicked Fill All Uncolored"); // Replace this line with your code.
}

// Fill all cells
function fillAll(){
    alert("Clicked Fill All"); // Replace this line with your code.
}

// Clear all cells
function clearAll(){
    alert("Clicked Clear All"); // Replace this line with your code.
}

createTable();