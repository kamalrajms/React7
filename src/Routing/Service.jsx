import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Service() {
  return (
    <div>
      <h1>Service component</h1>
      <div className="Header">
        <Link to={"WebDevelopment"}>Web development</Link>
        <Link to={"AppDevelopment"}>App development</Link>
      </div>
      <Outlet />
    </div>
  );
}
