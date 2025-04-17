import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import Header from "./Components/Header/Header";

function App() {
  return (
    <>
      <Sidebar />
      <div className="main">
        <Header />
        {/*route */}
      </div>
    </>
  );
}

export default App;
