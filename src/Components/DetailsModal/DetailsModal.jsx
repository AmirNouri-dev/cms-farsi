import React from "react";
import "./DetailsModal.css";
export default function DetailsModal() {
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
      </div>
    </div>
  );
}
