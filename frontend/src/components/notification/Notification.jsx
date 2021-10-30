import React from "react";

//import css
import "./Notification.css";

export default function Notification({ popupText }) {
  return (
    <div id="notification" className="notification focus">
      {popupText}
    </div>
  );
}
