import React from "react";
import "./ErrorBox.css";
export default function ErrorBox({ msg }) {
  return (
    <div className="cms-empty-err">
      <h2>{msg}</h2>
    </div>
  );
}
