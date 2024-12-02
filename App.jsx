import React, { useState } from "react";

function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setPosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  return (
    <div className="container" onMouseMove={handleMouseMove}>
      <h1>Mouse Tracker</h1>
      <p>Move your mouse around this area!</p>
      <div className="position">
        <span>X: {position.x}</span>
        <span>Y: {position.y}</span>
      </div>
    </div>
  );
}

export default App;
