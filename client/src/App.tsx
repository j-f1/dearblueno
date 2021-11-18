import React from "react";
import "./App.css";
import Feed from "./components/feed/Feed";
import Header from "./components/header/Header";
import HeaderButton from "./components/header/HeaderButton";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Feed></Feed>
    </div>
  );
}

export default App;