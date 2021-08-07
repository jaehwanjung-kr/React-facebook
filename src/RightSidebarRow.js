import { Avatar } from "@material-ui/core";
import React from "react";
import "./RightSidebarRow.css";

function RightSidebarRow({ src, title }) {
  return (
    <div className="rightSidebarRow">
      {src && <Avatar src={src} />}
      <h4>{title}</h4>
    </div>
  );
}

export default RightSidebarRow;
