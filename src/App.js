import React from "react";
import s from "./App.scss";
import Content from "./pages/Content/Content";
import Header from "./pages/Header/Header";

function App() {
  return (
    <div className='app'>
      <Header />
      <Content />
    </div>
  );
}

export default App;
