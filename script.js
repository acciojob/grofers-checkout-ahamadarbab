const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {

	// remove old total row if already present
	const oldRow = document.getElementById("total-Row");
	if(oldRow) {
		oldRow.remove();
	}

	// get all price cells
	let prices = document.querySelectorAll(".price");
	let total = 0;
	
	prices.forEach((price) => {
		total += Number(price.textContent);
	});

	// create new row
	let totalRow = document.createElement("tr");
	totalRow.id = "total-Row";
	
	// create new cell
	let priceCell = document.createElement("td");

	// set colSpan & total price in the cell
	priceCell.colSpan = 2;
	priceCell.textContent = `Total Price = ${total}`;

	// append cell to row
	totalRow.appendChild(priceCell);

	// append row to table
	document.getElementById("groceryTable").appendChild(totalRow);
};

getSumBtn.addEventListener("click", getSum);

