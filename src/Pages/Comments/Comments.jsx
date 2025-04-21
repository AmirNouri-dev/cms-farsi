import React from "react";
import "./Comments.css";
import ErrorBox from "../../Components/ErrorBox/ErrorBox";
import CommentsTable from "../../Components/CommentsTable/CommentsTable";

export default function Comments() {
  return (
    <div>
      <CommentsTable />
    </div>
  );
}
