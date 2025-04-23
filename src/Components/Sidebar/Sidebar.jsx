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
        <NavLink to="/">
          <AiOutlineHome className="sidebar-icon" />
          صفحه اصلی
        </NavLink>

        <NavLink to="/products">
          <AiOutlineProduct className="sidebar-icon" />
          محصولات
        </NavLink>

        <NavLink to="/comments">
          <TfiCommentAlt className="sidebar-icon" />
          کامنت ها
        </NavLink>

        <NavLink to="/users">
          <FiUsers className="sidebar-icon" />
          کاربران
        </NavLink>

        <NavLink to="/orders">
          <BsBagCheck className="sidebar-icon" />
          سفارشات
        </NavLink>

        <NavLink to="/offs">
          <MdOutlineDiscount className="sidebar-icon" />
          تخفیف ها
        </NavLink>

        <NavLink to="/statistics">
          <FiBarChart2 className="sidebar-icon" />
          جداول آماری
        </NavLink>
      </ul>
    </div>
  );
}
