console.log("Welcome to Futoshiki!");

function initialiseGrid() {
  const grid = document.querySelector(".grid");

  for (let i = 0; i < 6; i++) {
    const row = document.createElement("div");
    row.classList.add("row");

    for (let j = 0; j < 6; j++) {
      const gridSquare = document.createElement("span");
      gridSquare.classList.add("gridSquare");
      gridSquare.innerHTML = "0";
      row.appendChild(gridSquare);
    }

    grid.appendChild(row);
  }
}

initialiseGrid();
