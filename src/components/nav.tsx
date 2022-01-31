import React from "react";
import { blue } from "../theme";
import { Logo } from "../assets";
export default function NavBar(): JSX.Element {
  return (
    <div className="h-24 shadow-2xl" style={{ backgroundColor: blue }}>
      <div className="p-4">
        <img className="h-16 w-24" src={Logo} />
      </div>
    </div>
  );
}
