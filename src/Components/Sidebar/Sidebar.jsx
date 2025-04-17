import "./Sidebar.css";
import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineProduct } from "react-icons/ai";
import { TfiCommentAlt } from "react-icons/tfi";
import { FiUsers } from "react-icons/fi";
import { BsBagCheck } from "react-icons/bs";
import { MdOutlineDiscount } from "react-icons/md";
import { FiBarChart2 } from "react-icons/fi";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h1 className="sidebar-title">به داشبورد خود خوش آمدید</h1>
      <ul className="sidebar-links">
        <li>
          <a href="#">
            <AiOutlineHome className="sidebar-icon" />
            صفحه اصلی
          </a>
        </li>
        <li className="active">
          <a href="#">
            <AiOutlineProduct className="sidebar-icon" />
            محصولات
          </a>
        </li>
        <li>
          <a href="#">
            <TfiCommentAlt className="sidebar-icon" />
            کامنت ها
          </a>
        </li>
        <li>
          <a href="#">
            <FiUsers className="sidebar-icon" />
            کاربران
          </a>
        </li>
        <li>
          <a href="#">
            <BsBagCheck className="sidebar-icon" />
            سفارشات
          </a>
        </li>
        <li>
          <a href="#">
            <MdOutlineDiscount className="sidebar-icon" />
            تخفیف ها
          </a>
        </li>
        <li>
          <a href="#">
            <FiBarChart2 className="sidebar-icon" />
            آمار فروش
          </a>
        </li>
      </ul>
    </div>
  );
}
