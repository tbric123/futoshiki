import React, { useState } from "react";

function GridSquare() {
  const [selected, setSelected] = useState(false);
  const [number, setNumber] = useState(0);

  return (
    <>
      <span class="gridSquare">{number}</span>
    </>
  );
}

export default GridSquare;
