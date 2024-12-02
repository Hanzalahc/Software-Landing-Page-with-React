import React from "react";
import { Link } from "react-router-dom";

function OnTopButton() {
  return (
    <Link to="#" className="scrollup" style={{ display: "none" }}>
      <i className="ion-ios-arrow-up"></i>
    </Link>
  );
}

export default OnTopButton;
