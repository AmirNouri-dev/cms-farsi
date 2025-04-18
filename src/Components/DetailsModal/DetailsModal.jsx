import React, { useEffect } from "react";
import "./DetailsModal.css";
export default function DetailsModal({ onHide, onClick }) {
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
        <table className="cms-table">
          <thead>
            <tr>
              <th>اسم</th>
              <th>قیمت</th>
              <th>محبوبیت</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>ژامبون میکس</th>
              <th>230.000 تومان</th>
              <th>92%</th>
            </tr>
          </tbody>
        </table>
        <div className="detail-btn-container">
          <button
            className="detail-btn detail-modal-accept-btn"
            onClick={() => onClick()}
          >
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
