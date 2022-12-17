import React from "react";
// import add from "./calculator";
function App() {
  let currDate = new Date(2022, 12, 17, 8);
  currDate = currDate.getHours();
  let greeting = "";
  const cssStyle = {};


if (currDate > 1 && currDate < 12) {
  greeting = "Good Morning";
  cssStyle.color = "blue";
} else if (currDate >= 12 && currDate < 20) {
  greeting = "Good Afternoon";
  cssStyle.color = "orange";
} else if (currDate >= 20 && currDate <= 24) {
  greeting = "Good Night";
  cssStyle.color = "black";
}

return (
  <>
  {/* <div> 
    <ul>
      <li> {add(30,20)} </li>
      
      </ul> 
    
     </div> */}
    <div>
      <h1>
        Hello Sir, <span syle={cssStyle}> {greeting} </span>
      </h1>
    </div>
  </>
);
}

export default App;