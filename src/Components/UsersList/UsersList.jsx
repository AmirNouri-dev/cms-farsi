import React, { useEffect, useState } from "react";
import "./UsersList.css";
import ErrorBox from "../ErrorBox/ErrorBox";
import DeleteModal from "../DeleteModal/DeleteModal";
export default function UsersList() {
  const [users, setUsers] = useState([]);
  const [selectedUserID, setSelectedUserID] = useState(null);
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
  useEffect(() => {
    getUsers();
  }, []);
  const getUsers = () => {
    fetch("http://localhost:8000/api/users")
      .then((res) => res.json())
      .then((data) => {
        console.log("لیست یوزرها دریافت شد");
        setUsers(data);
      })
      .catch((err) => {
        console.log(err);
        setUsers([]);
      });
  };
  const closeDeleteModal = () => setIsShowDeleteModal(false);
  const userDelete = () => {
    fetch(`http://localhost:8000/api/users/${selectedUserID}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("یوزر دیلیت شد");
        getUsers();
        closeDeleteModal();
      });
  };
  return (
    <>
      <h2 className="users-title">لیست کاربران</h2>
      {users.length ? (
        <div className="users-main">
          <table className="users-table">
            <thead className="users-table-heading">
              <tr className="users-table-heading-tr">
                <th className="users-table-body-th">نام و نام خانوادگی</th>
                <th className="users-table-body-th">نام کاربری</th>
                <th className="users-table-body-th">رمز عبور</th>
                <th className="users-table-body-th">ایمیل</th>
                <th className="users-table-body-th">شماره تماس</th>
                <th className="users-table-body-th users-table-body-th-btn">
                  {" "}
                </th>
              </tr>
            </thead>
            <tbody className="users-table-body">
              {users.map((user) => (
                <tr key={user.id} className="users-table-body-tr">
                  <td className="users-table-body-td">
                    {user.firsname}-{user.lastname}
                  </td>
                  <td className="users-table-body-td">{user.username}</td>
                  <td className="users-table-body-td">{user.password}</td>
                  <td className="users-table-body-td">{user.email}</td>
                  <td className="users-table-body-td">{user.phone}</td>
                  <td className="users-table-body-td users-table-body-td-btn">
                    <button>جزییات</button>
                    <button
                      onClick={() => {
                        setIsShowDeleteModal(true);
                        setSelectedUserID(user.id);
                      }}
                    >
                      حذف
                    </button>
                    <button>ویرایش</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <ErrorBox msg="هیچ کاربری یافت نشد !" />
      )}

      {isShowDeleteModal && (
        <DeleteModal
          title={"آیا از حذف این کاربر مطمئن هستید؟"}
          submitAction={userDelete}
          cancelAction={closeDeleteModal}
        />
      )}
    </>
  );
}
