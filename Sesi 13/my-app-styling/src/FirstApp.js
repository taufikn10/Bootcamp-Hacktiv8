import React from "react";

import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import "bootstrap"; // import JS
import "bootstrap/dist/css/bootstrap.min.css"; //import css

export default function FirstApp() {
  return (
    <>
      <Header />
      <div className="container">
        <Content />
      </div>
      <Footer />
    </>
  );
}
