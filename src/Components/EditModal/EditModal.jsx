import React from "react";
import "./EditModal.css";

export default function EditModal({ onSubmit, onClose, children }) {
  return (
    <div className="modal-parent active">
      <form className="edit-modal-form">
        <h1>لطفا اطلاعات جدید را وارد نمایید</h1>

        {children}
        <button className="edit-form-submit-btn"></button>
      </form>
    </div>
  );
}
