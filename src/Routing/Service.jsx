import React from "react";
import { Link, Outlet } from "react-router-dom";
import XOgame from "../Game/XOgame";

export default function Service() {
  return (
    <div>
      <h1>Service component</h1>
      <XOgame />
      <div className="Header">
        <Link to={"WebDevelopment"}>Web development</Link>
        <Link to={"AppDevelopment"}>App development</Link>
      </div>
      <Outlet />
    </div>
  );
}
