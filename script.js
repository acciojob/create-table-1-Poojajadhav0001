function insert_Row() {
    //Write your code here
	//Get table element by its ID
  let table = document.getElementById("sampleTable");

  //insert a new row at the top (index 0)
	let newRow = table.insertRow(0);

	//insert two new cells into the new row
	let cell1 = newRow.insertCell(0);
	let cell2 = newRow.insertCell(1);

	 // Set the cell contents
  cell1.innerHTML = "New Cell1";
  cell2.innerHTML = "New Cell2";
} 

	

