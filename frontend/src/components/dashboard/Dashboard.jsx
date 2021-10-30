import React from "react";
import Nav from "../nav/Nav";
import View from "../view/View";

//import css
import "./Dashboard.css";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <Nav />
      <View />
    </div>
  );
}
