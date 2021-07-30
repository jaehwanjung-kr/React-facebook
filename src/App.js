import React from "react";
import "./App.css";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Header from "./Header";
import RightSidebar from "./RightSidebar";

function App() {
  return (
    <div className="app">
      <Header />

      <div className="app__body">
        <Sidebar />
        <Feed />
        <RightSidebar />
      </div>
    </div>
  );
}

export default App;
