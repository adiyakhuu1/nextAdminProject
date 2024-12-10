"use client";

import React, { useEffect } from "react";

function App() {
  const pics = async () => {
    const pic = await fetch(
      `https://randomuser.me/api/portraits/med/men/4.jpg`
    );
    const response = await pic.json();
    console.log(response);
  };
  return (
    <div>
      <button onClick={pics} style={{ width: 200, height: 50 }}>
        sdjkfghniusrdtgsdrgtui
      </button>
    </div>
  );
}
export default App;
