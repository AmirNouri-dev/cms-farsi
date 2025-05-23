import React from "react";
import "./DeleteModal.css";
import ReactDOM from "react-dom";
export default function DeleteModal({ submitAction, cancelAction, title }) {
  return ReactDOM.createPortal(
    <div className="modal-parent active">
      <div className="delete-modal">
        <h1>{title || "آیا از حذف اطمینان دارید؟"}</h1>
        <div className="delete-modal-btns">
          <button
            className="delete-btn delete-modal-accept-btn"
            onClick={() => submitAction()}
          >
            بله
          </button>
          <button
            className="delete-btn delete-modal-close-btn"
            onClick={() => cancelAction()}
          >
            خیر
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("modals-parent")
  );
}
