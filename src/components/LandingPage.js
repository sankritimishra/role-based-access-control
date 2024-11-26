import React, { memo } from "react";
import { TopNav } from "./common";

const navOptions = [
  { title: "Login", path: "/login" },
  { title: "Register", path: "/register" },
];

function LandingPage() {
  return (
    <div className="bgimg w3-display-container w3-animate-opacity w3-text-black">
      <div className="nav-container">
        <TopNav routes={navOptions} />
      </div>
      <div className="w3-display-middle">
        <h1 className="w3-jumbo w3-animate-top">RBAC</h1>
        <hr
          className="w3-border-grey"
          style={{ margin: "auto", width: "40%" }}
        />
        <p className="w3-large w3-center">
          This is the landing page of Role Based Access Control
        </p>
      </div>
      <div className="w3-display-bottomleft w3-padding-large">
        Developed by{" "}
        <a href="https://github.com/sankritimishra" target="_blank">
          Sankriti Mishra
        </a>
      </div>
    </div>
  );
}

export default memo(LandingPage);
