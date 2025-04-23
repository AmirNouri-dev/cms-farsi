import React, { useEffect, useState } from "react";
import "./CommentsTable.css";
import ErrorBox from "../ErrorBox/ErrorBox";
import DetailsModal from "../DetailsModal/DetailsModal";
import DeleteModal from "../DeleteModal/DeleteModal";
import EditModal from "../EditModal/EditModal";
import { FcOk } from "react-icons/fc";
import { FcCancel } from "react-icons/fc";
import { FaQuestionCircle } from "react-icons/fa";

export default function CommentsTable({ title }) {
  const [allComments, setAllComments] = useState([]);
  const [selectedCommentID, setSelectedCommentID] = useState(null);
  const [selectedCommentBody, setSelectedCommentBody] = useState("");
  const [isShowDetailsModal, setIsShowDetailsModal] = useState(false);
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
  const [isShowEditModal, setIsShowEditModal] = useState(false);
  const [isShowAcceptModal, setIsShowAcceptModal] = useState(false);
  const [isShowRejectModal, setIsShowRejectModal] = useState(false);

  useEffect(() => {
    getAllComments();
  }, []);
  /*show all comments method */
  const getAllComments = () => {
    fetch("http://localhost:8000/api/comments")
      .then((res) => res.json())
      .then((data) => {
        setAllComments(data);
        console.log(data);
      })
      .catch((err) => setAllComments([]));
  };
  /*show selected comment details modal method */
  const showComment = () => {
    setIsShowDetailsModal(true);
  };
  /*close selected comment details modal method */
  const closeDetailsModal = () => {
    setIsShowDetailsModal(false);
  };
  /*close selected comment delete modal method */
  const closeDeleteModal = () => {
    setIsShowDeleteModal(false);
  };
  /*show selected comment delete modal method */
  const deleteComment = () => {
    fetch(`http://localhost:8000/api/comments/${selectedCommentID}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        getAllComments();
        closeDeleteModal();
      });
  };
  /*close selected comment edit modal method */
  const closeEditModal = () => {
    setIsShowEditModal(false);
  };
  /*show selected comment edit modal method */
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
        getAllComments();
        closeEditModal();
      });
  };
  /*show selected comment accept modal method */
  const acceptComment = () => {
    fetch(`http://localhost:8000/api/comments/accept/${selectedCommentID}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("accept");
        getAllComments();
        closeAcceptModal();
        console.log(data);
      });
  };
  /*show selected comment reject modal method */
  const rejectComment = () => {
    fetch(`http://localhost:8000/api/comments/reject/${selectedCommentID}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("reject");
        getAllComments();
        closeRejectModal();
      });
  };
  const closeAcceptModal = () => setIsShowAcceptModal(false);
  const closeRejectModal = () => setIsShowRejectModal(false);

  return (
    <>
      <h2 className="comments-title">{title}</h2>
      {allComments.length ? (
        <div className="comments-main">
          <table className="comments-table">
            <thead>
              <tr className="comments-table-heading-tr">
                <th className="comments-table-body-th">وضعیت</th>
                <th className="comments-table-body-th">نام کاربر</th>
                <th className="comments-table-body-th">نام محصول</th>
                <th className="comments-table-body-th">نمایش کامنت</th>
                <th className="comments-table-body-th">تاریخ ثبت</th>
                <th className="comments-table-body-th">ساعت ثبت</th>
                <th className="comments-table-body-th"></th>
              </tr>
            </thead>
            <tbody>
              {allComments.map((comment) => (
                <tr key={comment.id} className="comments-table-body-tr">
                  <td className="users-table-body-td">
                    {comment.isAccept === 1 ? (
                      <div>
                        <span>تایید شده</span>
                        <FcOk />
                      </div>
                    ) : comment.isAccept === 0 ? (
                      <div>
                        <span>در انتظار</span>
                        <FaQuestionCircle style={{ color: "orange" }} />
                      </div>
                    ) : comment.isAccept === -1 ? (
                      <div>
                        <span>رد شده</span>
                        <FcCancel />
                      </div>
                    ) : null}
                  </td>
                  <td className="users-table-body-td">{comment.userID}</td>
                  <td className="users-table-body-td">{comment.productID}</td>
                  <td className="users-table-body-td">
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
                  <td className="users-table-body-td">{comment.date}</td>
                  <td className="users-table-body-td">{comment.hour}</td>
                  <td className="users-table-body-td comments-table-body-tr-btn">
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
                    {comment.isAccept === 1 ? (
                      <button
                        onClick={() => {
                          setIsShowRejectModal(true);
                          setSelectedCommentID(comment.id);
                        }}
                      >
                        رد
                      </button>
                    ) : comment.isAccept === -1 ? (
                      <button
                        onClick={() => {
                          setIsShowAcceptModal(true);
                          setSelectedCommentID(comment.id);
                        }}
                      >
                        تایید مجدد
                      </button>
                    ) : (
                      <>
                        <button
                          onClick={() => {
                            setIsShowAcceptModal(true);
                            setSelectedCommentID(comment.id);
                          }}
                        >
                          تایید
                        </button>
                        <button
                          onClick={() => {
                            setIsShowRejectModal(true);
                            setSelectedCommentID(comment.id);
                          }}
                        >
                          رد
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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
      {isShowAcceptModal && (
        <DeleteModal
          title={"آیا از تایید کامنت اطمینان دارید؟"}
          submitAction={acceptComment}
          cancelAction={closeAcceptModal}
        />
      )}
      {isShowRejectModal && (
        <DeleteModal
          title={"آیا از رد کامنت اطمینان دارید؟"}
          submitAction={rejectComment}
          cancelAction={closeRejectModal}
        />
      )}
    </>
  );
}
