import React, { useState } from "react";

function App() {
  // setInterval(updateTime, 1000);
  const now = new Date().toLocaleTimeString("en-GB");

  const [currTime, setTime] = useState(now);

  function updateTime() {
    const time = new Date().toLocaleTimeString("en-GB");
    setTime(time);
  }

  return (
    <div className="container">
      <h1>{currTime}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;
