import "./Sidebar.css";
import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineProduct } from "react-icons/ai";
import { TfiCommentAlt } from "react-icons/tfi";
import { FiUsers } from "react-icons/fi";
import { BsBagCheck } from "react-icons/bs";
import { MdOutlineDiscount } from "react-icons/md";
import { FiBarChart2 } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h1 className="sidebar-title">به داشبورد خود خوش آمدید</h1>
      <ul className="sidebar-links">
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "li active" : "li")}
            to="/"
          >
            <AiOutlineHome className="sidebar-icon" />
            صفحه اصلی
          </NavLink>
        </li>
        <li className="active">
          <NavLink
            className={({ isActive }) => (isActive ? "active li" : "li")}
            to="/products"
          >
            <AiOutlineProduct className="sidebar-icon" />
            محصولات
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active li" : "li")}
            to="/comments"
          >
            <TfiCommentAlt className="sidebar-icon" />
            کامنت ها
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active li" : "li")}
            to="/users"
          >
            <FiUsers className="sidebar-icon" />
            کاربران
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active li" : "li")}
            to="/orders"
          >
            <BsBagCheck className="sidebar-icon" />
            سفارشات
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active li" : "li")}
            to="/offs"
          >
            <MdOutlineDiscount className="sidebar-icon" />
            تخفیف ها
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active li" : "li")}
            to="/statistics"
          >
            <FiBarChart2 className="sidebar-icon" />
            آمار فروش
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
