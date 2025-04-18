import React from "react";
import "./Comments.css";
import ErrorBox from "../../Components/ErrorBox/ErrorBox";
import DeleteModal from "../../Components/DeleteModal/DeleteModal";

export default function Comments() {
  return (
    <div>
      <ErrorBox msg="هیچ کامنتی یافت نشد !" />
      <DeleteModal />
    </div>
  );
}
