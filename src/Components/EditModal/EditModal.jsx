import React from "react";
import "./EditModal.css";

export default function EditModal({ onSubmit, onClose, children }) {
  return (
    <div className="modal-parent active">
      <form className="edit-modal-form">
        <h1>لطفاً اطلاعات جدید را وارد نمایید</h1>

        {children}
        <div className="edit-modal-btns-container">
          <button className="edit-form-submit-btn" onClick={onSubmit}>
            ثبت اطلاعات جدید
          </button>
          <button className="edit-form-submit-btn" onClick={onClose}>
            بستن
          </button>
        </div>
      </form>
    </div>
  );
}
