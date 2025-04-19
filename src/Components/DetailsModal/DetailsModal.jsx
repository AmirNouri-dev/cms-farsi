import React, { useEffect } from "react";
import "./DetailsModal.css";
export default function DetailsModal({ onHide, onClick, children }) {
  useEffect(() => {
    const checkKey = (event) => {
      if (event.keyCode === 27) {
        onHide();
      }
      console.log(event);
    };
    window.addEventListener("keyup", checkKey);
    return () => window.removeEventListener("keyup", checkKey);
  });

  return (
    <div className="modal-parent active">
      <div className="details-modal">
        {children}
        <div className="detail-btn-container">
          <button className="detail-confirm-btn" onClick={() => onClick()}>
            باشه
            <p>
              press <span>Esc</span> on keyboard{" "}
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}
