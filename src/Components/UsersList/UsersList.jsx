import React, { useEffect, useState } from "react";
import "./UsersList.css";
import ErrorBox from "../ErrorBox/ErrorBox";
import DeleteModal from "../DeleteModal/DeleteModal";
import EditModal from "../EditModal/EditModal";
import { AiFillEdit } from "react-icons/ai";

export default function UsersList() {
  const [users, setUsers] = useState([]);
  const [selectedUserID, setSelectedUserID] = useState(null);
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
  const [isShowEditModal, setIsShowEditModal] = useState(false);
  const [userNewFirstName, setUserNewFirstName] = useState("");
  const [userNewLastName, setUserNewLastName] = useState("");
  const [userNewUserName, setUserNewUserName] = useState("");
  const [userNewPassword, setUserNewPassword] = useState("");
  const [userNewPhone, setUserNewPhone] = useState("");
  const [userNewCity, setUserNewCity] = useState("");
  const [userNewAddress, setUserNewAddress] = useState("");
  const [userNewScore, setUserNewScore] = useState("");
  const [userNewBuy, setUserNewBuy] = useState("");
  const [userNewEmail, setUserNewEmail] = useState("");

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
  const emptyInput = () => {
    setUserNewFirstName("");
    setUserNewLastName("");
    setUserNewUserName("");
    setUserNewPassword("");
    setUserNewPhone("");
    setUserNewCity("");
    setUserNewAddress("");
    setUserNewScore("");
    setUserNewBuy("");
  };

  const closeEditModal = (event) => {
    event.preventDefault();
    setIsShowEditModal(false);
  };
  const editUser = (event) => {
    event.preventDefault();
    const userNewInfo = {
      firsname: userNewFirstName,
      lastname: userNewLastName,
      username: userNewUserName,
      password: userNewPassword,
      phone: userNewPhone,
      city: userNewCity,
      email: userNewEmail,
      address: userNewAddress,
      score: userNewScore,
      buy: userNewBuy,
    };
    fetch(`http://localhost:8000/api/users/${selectedUserID}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userNewInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        getUsers();
        setIsShowEditModal(false);
        emptyInput();
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
                    <button
                      onClick={() => {
                        setIsShowEditModal(true);
                        setSelectedUserID(user.id);
                        setUserNewFirstName(user.firsname);
                        setUserNewLastName(user.lastname);
                        setUserNewUserName(user.username);
                        setUserNewPassword(user.password);
                        setUserNewPhone(user.phone);
                        setUserNewCity(user.city);
                        setUserNewAddress(user.address);
                        setUserNewScore(user.score);
                        setUserNewBuy(user.buy);
                        setUserNewEmail(user.email);
                      }}
                    >
                      ویرایش
                    </button>
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
      {isShowEditModal && (
        <EditModal onClose={closeEditModal} onSubmit={editUser}>
          <div className="edit-products-form-group">
            <span>
              <AiFillEdit />
              نام:
            </span>
            <input
              type="text"
              placeholder="نام جدید را وارد نمایید"
              className="edit-product-input"
              value={userNewFirstName}
              onChange={() => setUserNewFirstName(event.target.value)}
            />
          </div>
          <div className="edit-products-form-group">
            <span>
              <AiFillEdit />
              نام خانوادگی:
            </span>
            <input
              type="text"
              placeholder="نام خانوادگی جدید را وارد نمایید"
              className="edit-product-input"
              value={userNewLastName}
              onChange={() => setUserNewLastName(event.target.value)}
            />
          </div>
          <div className="edit-products-form-group">
            <span>
              <AiFillEdit />
              نام کاربری:
            </span>
            <input
              type="text"
              placeholder="نام کاربری جدید را وارد نمایید"
              className="edit-product-input"
              value={userNewUserName}
              onChange={() => setUserNewUserName(event.target.value)}
            />
          </div>
          <div className="edit-products-form-group">
            <span>
              <AiFillEdit />
              رمز عبور:
            </span>
            <input
              type="text"
              placeholder="رمز عبور جدید را وارد نمایید"
              className="edit-product-input"
              value={userNewPassword}
              onChange={() => setUserNewPassword(event.target.value)}
            />
          </div>
          <div className="edit-products-form-group">
            <span>
              <AiFillEdit />
              تلفن:
            </span>
            <input
              type="text"
              placeholder="تلفن جدید را وارد نمایید"
              className="edit-product-input"
              value={userNewPhone}
              onChange={() => setUserNewPhone(event.target.value)}
            />
          </div>
          <div className="edit-products-form-group">
            <span>
              <AiFillEdit />
              ایمیل:
            </span>
            <input
              type="text"
              placeholder="ایمیل جدید را وارد نمایید"
              className="edit-product-input"
              value={userNewEmail}
              onChange={() => setUserNewEmail(event.target.value)}
            />
          </div>
          <div className="edit-products-form-group">
            <span>
              <AiFillEdit />
              شهر:
            </span>
            <input
              type="text"
              placeholder="شهر جدید را وارد نمایید"
              className="edit-product-input"
              value={userNewCity}
              onChange={() => setUserNewCity(event.target.value)}
            />
          </div>
          <div className="edit-products-form-group">
            <span>
              <AiFillEdit />
              آدرس:
            </span>
            <input
              type="text"
              placeholder="آدرس جدید را وارد نمایید"
              className="edit-product-input"
              value={userNewAddress}
              onChange={() => setUserNewAddress(event.target.value)}
            />
          </div>
          <div className="edit-products-form-group">
            <span>
              <AiFillEdit />
              میزان خرید:
            </span>
            <input
              type="text"
              placeholder="میزان خرید جدید را وارد نمایید"
              className="edit-product-input"
              value={userNewBuy}
              onChange={() => setUserNewBuy(event.target.value)}
            />
          </div>
          <div className="edit-products-form-group">
            <span>
              <AiFillEdit />
              امتیاز:
            </span>
            <input
              type="text"
              placeholder="امتیاز جدید را وارد نمایید"
              className="edit-product-input"
              value={userNewScore}
              onChange={() => setUserNewScore(event.target.value)}
            />
          </div>
        </EditModal>
      )}
    </>
  );
}
