import React from "react";
import "./App.css";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Header from "./Header";
import RightSidebar from "./RightSidebar";
import Login from "./Login";

function App() {
  const user = null;
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <div className="app__body">
            <Sidebar />
            <Feed />
            <RightSidebar />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
