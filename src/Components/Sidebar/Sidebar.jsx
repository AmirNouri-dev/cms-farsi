import "./Sidebar.css";
import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineProduct } from "react-icons/ai";
import { TfiCommentAlt } from "react-icons/tfi";
import { FiUsers } from "react-icons/fi";
import { BsBagCheck } from "react-icons/bs";
import { MdOutlineDiscount } from "react-icons/md";
import { FiBarChart2 } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h1 className="sidebar-title">به داشبورد خود خوش آمدید</h1>
      <ul className="sidebar-links">
        <li>
          <Link to="/">
            <AiOutlineHome className="sidebar-icon" />
            صفحه اصلی
          </Link>
        </li>
        <li className="active">
          <Link to="/products">
            <AiOutlineProduct className="sidebar-icon" />
            محصولات
          </Link>
        </li>
        <li>
          <Link to="/comments">
            <TfiCommentAlt className="sidebar-icon" />
            کامنت ها
          </Link>
        </li>
        <li>
          <Link to="/users">
            <FiUsers className="sidebar-icon" />
            کاربران
          </Link>
        </li>
        <li>
          <Link to="/orders">
            <BsBagCheck className="sidebar-icon" />
            سفارشات
          </Link>
        </li>
        <li>
          <Link to="/offs">
            <MdOutlineDiscount className="sidebar-icon" />
            تخفیف ها
          </Link>
        </li>
        <li>
          <Link to="/statistics">
            <FiBarChart2 className="sidebar-icon" />
            آمار فروش
          </Link>
        </li>
      </ul>
    </div>
  );
}
