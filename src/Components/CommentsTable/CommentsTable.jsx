import React, { useEffect, useState } from "react";
import "./CommentsTable.css";
import ErrorBox from "../ErrorBox/ErrorBox";
import DetailsModal from "../DetailsModal/DetailsModal";
import DeleteModal from "../DeleteModal/DeleteModal";
import EditModal from "../EditModal/EditModal";
export default function CommentsTable() {
  const [allComments, setAllComments] = useState([]);
  const [selectedCommentID, setSelectedCommentID] = useState(null);
  const [selectedCommentBody, setSelectedCommentBody] = useState("");
  const [isShowDetailsModal, setIsShowDetailsModal] = useState(false);
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
  const [isShowEditModal, setIsShowEditModal] = useState(false);

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = () => {
    fetch("http://localhost:8000/api/comments")
      .then((res) => res.json())
      .then((data) => setAllComments(data))
      .catch((err) => setAllComments([]));
  };

  const showComment = () => {
    setIsShowDetailsModal(true);
  };

  const closeDetailsModal = () => {
    setIsShowDetailsModal(false);
  };
  const closeDeleteModal = () => {
    setIsShowDeleteModal(false);
  };
  const deleteComment = () => {
    // let cid = selectedComment.id;
    fetch(`http://localhost:8000/api/comments/${selectedCommentID}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        getAllProducts();
        closeDeleteModal();
      });
  };

  const closeEditModal = () => {
    setIsShowEditModal(false);
  };
  const editComment = () => {
    event.preventDefault();
    const newCommentBody = {
      body: selectedCommentBody,
    };
    fetch(`http://localhost:8000/api/comments/${selectedCommentID}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newCommentBody),
    })
      .then((res) => res.json())
      .then((data) => {
        getAllProducts();
        closeEditModal();
      });
  };
  return (
    <>
      {allComments.length ? (
        <div className="cms-main">
          <div className="cms-table">
            <table>
              <thead>
                <tr>
                  <th>نام کاربر</th>
                  <th>نام محصول</th>
                  <th>نمایش کامنت</th>
                  <th>تاریخ ثبت</th>
                  <th>ساعت ثبت</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {allComments.map((comment) => (
                  <tr key={comment.id}>
                    <td>{comment.userID}</td>
                    <td>{comment.productID}</td>
                    <td>
                      <button
                        className="cms-show-btn"
                        onClick={() => {
                          showComment();
                          setSelectedCommentBody(comment.body);
                        }}
                      >
                        دیدن متن
                      </button>
                    </td>
                    <td>{comment.date}</td>
                    <td>{comment.hour}</td>
                    <td>
                      <button
                        onClick={() => {
                          setIsShowEditModal(true);
                          setSelectedCommentID(comment.id);
                          setSelectedCommentBody(comment.body);
                        }}
                      >
                        ویرایش
                      </button>
                      <button
                        onClick={() => {
                          setIsShowDeleteModal(true);
                          setSelectedCommentID(comment.id);
                        }}
                      >
                        حذف
                      </button>
                      <button>پاسخ</button>
                      <button>تایید</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <ErrorBox msg="هیچ کامنتی یافت نشد !" />
      )}
      {isShowDetailsModal && (
        <DetailsModal onClick={closeDetailsModal} onHide={closeDetailsModal}>
          <p>{selectedCommentBody}</p>
        </DetailsModal>
      )}
      {isShowDeleteModal && (
        <DeleteModal
          submitAction={deleteComment}
          cancelAction={closeDeleteModal}
        />
      )}
      {isShowEditModal && (
        <EditModal onSubmit={editComment} onClose={closeEditModal}>
          <div>
            <textarea
              className="comment-body-text"
              type="text"
              value={selectedCommentBody}
              onChange={(event) => setSelectedCommentBody(event.target.value)}
            ></textarea>
          </div>
        </EditModal>
      )}
    </>
  );
}
