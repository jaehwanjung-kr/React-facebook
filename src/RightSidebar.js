import React from "react";
import Contacts from "./Contacts";
import "./RightSidebar.css";
import Sponsored from "./Sponsored";

function RightSidebar() {
  return (
    <div className="rightSidebar">
      <div className="rightSidebar__Top">
        <Sponsored />
      </div>
      <div className="rightSidebar__Bottom">
        <Contacts />
      </div>
    </div>
  );
}

export default RightSidebar;
