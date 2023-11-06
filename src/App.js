import "./styles.css";
import { useState } from "react";

var mainHeading = "Welcome";
var bColor = "darkblue";
var fontColor = "skyblue";
var userName = "Sameer";

export default function App() {
  var [likeCounter, setLikeCounter] = useState(0);

  function likeClickCounter() {
    likeCounter += 1;
    setLikeCounter(likeCounter);
  }
  return (
    <div className="App">
      <h1 style={{ color: fontColor, backgroundColor: bColor }}>
        {mainHeading} {userName}
      </h1>
      <button onClick={likeClickCounter}>like!</button>
      {likeCounter}
    </div>
  );
}
