// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected;

// Add a row
function addR() {
    //alert("Clicked Add Row"); // Replace this line with your code.
    if (numCols == 0) numCols = 1;
    let grid = document.getElementById("grid");
	let row = grid.insertRow();
	for (let i = 0; i < numCols; i++) {
		let cell = row.insertCell();
		cell.onclick = function() { this.style.backgroundColor = colorSelected };
	}
	numRows++;
}

// Add a column
function addC() {
    //alert("Clicked Add Col"); // Replace this line with your code.
    if (numRows == 0) addR();
    let rows = document.querySelectorAll("tr");
	for (const i of rows) {
		let cell = i.insertCell();
		cell.onclick = function() { this.style.backgroundColor = colorSelected };
	}
	numCols++;
}
// Remove a row
function removeR() { 
        //alert("Clicked Remove Row"); // Replace this line with your code.
        if (numRows == 0) return;
        let grid = document.getElementById("grid");
        grid.deleteRow(-1);
        numRows--;
        if (numRows == 0) numCols = 0;
    }


// Remove a column
function removeC() {
  if (numCols == 0){
    return;
  }
  if (numCols > 0) {
      for (let i = 0; i < numRows; i++) {
          grid.rows[i].deleteCell(numCols - 1);
      }
      numCols--;
  }
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    //alert("Clicked Fill All Uncolored"); // Replace this line with your code.
	const cells = document.querySelectorAll("td");
	for (const i of cells) {
		if (i.style.backgroundColor == "") {
			i.style.backgroundColor = colorSelected;
		}
	}
}

// Fill all cells
function fillAll(){
    //alert("Clicked Fill All"); // Replace this line with your code.
	const cells = document.querySelectorAll("td");
	for (const i of cells) {
		i.style.backgroundColor = colorSelected;
	}
}

// Clear all cells
function clearAll(){
    //alert("Clicked Clear All"); // Replace this line with your code.
	const cells = document.querySelectorAll("td");
	for (const i of cells) {
		i.style.backgroundColor = "white";
	}
}
