import React from "react";
import "./SponsorItem.css";

function SponsorItem({ src, title }) {
  return (
    <div className="sponsorItem">
      <img src={src} alt="sponsorImg" />
      <h4>{title}</h4>
    </div>
  );
}

export default SponsorItem;
