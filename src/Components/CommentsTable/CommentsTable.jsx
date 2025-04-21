import React, { useEffect, useState } from "react";
import "./CommentsTable.css";
import ErrorBox from "../ErrorBox/ErrorBox";
import DetailsModal from "../DetailsModal/DetailsModal";
import DeleteModal from "../DeleteModal/DeleteModal";
export default function CommentsTable() {
  const [allComments, setAllComments] = useState([]);
  const [selectedComment, setSelectedComment] = useState([]);
  const [isShowDetailsModal, setIsShowDetailsModal] = useState(false);
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);

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
    fetch(`http://localhost:8000/api/comments/${selectedComment.id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        getAllProducts();
        closeDeleteModal();
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
                          setSelectedComment(comment);
                        }}
                      >
                        دیدن متن
                      </button>
                    </td>
                    <td>{comment.date}</td>
                    <td>{comment.hour}</td>
                    <td>
                      <button>ویرایش</button>
                      <button
                        onClick={() => {
                          setIsShowDeleteModal(true);
                          setSelectedComment(comment);
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
          <p>{selectedComment.body}</p>
        </DetailsModal>
      )}
      {isShowDeleteModal && (
        <DeleteModal
          submitAction={deleteComment}
          cancelAction={closeDeleteModal}
        />
      )}
    </>
  );
}
