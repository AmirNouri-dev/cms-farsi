import React from "react";
import "./Header.css";
import { AiOutlineBell } from "react-icons/ai";
import { BsBrightnessHigh } from "react-icons/bs";

export default function Header() {
  return (
    <>
      <div className="header">
        <div className="admin-profile">
          <img src="./../../public/images/userImg.jpg" alt="admin pic" />
          <div>
            <h2 className="admin-profile-name">امیرحسین نوری</h2>
            <h4 className="admin-profile-job">برنامه نویس فرانت اند</h4>
          </div>
        </div>
        <div className="header-left-section">
          <div className="search-box">
            <input type="text" placeholder="جست و جو کنید ..." />
            <button>جست و جو</button>
          </div>
          <button className="header-left-icon">
            <AiOutlineBell />
          </button>
          <button className="header-left-icon">
            <BsBrightnessHigh />
          </button>
        </div>
      </div>
    </>
  );
}
