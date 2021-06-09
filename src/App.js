import React, { useState } from "react";
import {BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/navbar.js";
import Footer from "./components/footer.js"
import TopBar from "./components/topbar.js";

function App() {

  const [showNav , SetShowNav]  = useState(true);

  function handleClick(){
    SetShowNav( previous => !previous)
  }

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
        {showNav && <NavBar />}
        <TopBar 
          onClickked = {handleClick}
          toShow = {showNav}
        />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
