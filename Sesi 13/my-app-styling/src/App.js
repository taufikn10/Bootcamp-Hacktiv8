import "./style/css/App.css";
import React from "react";
import fontStyle from "./style/js/AppStyle";
import StyleComp from "./style/js/StyleComp";

//Object Variable CSS
const divStyle = {
  backgroundColor: "#ccccee",
  padding: "30px",
  fontFamily: "Arial",
};

function App() {
  return (
    // Inline Css
    <div>
      <div
        style={{
          backgroundColor: "#eeeeee",
          padding: "30px",
          fontFamily: "Arial",
        }}
      >
        <h1>Hello World 2021</h1>
      </div>
      {/* Object Variable CSS */}
      <div style={divStyle}>
        <h1>Hello World</h1>
      </div>
      {/* external CSS */}
      <div className="container">
        <h1>Hello World</h1>
      </div>
      {/* external object variable CSS */}
      <div style={fontStyle}>
        <h1>Hello World</h1>
      </div>
      {/* Styled Components */}
      <StyleComp />
    </div>
  );
}

export default App;
