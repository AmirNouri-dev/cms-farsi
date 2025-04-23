import React from "react";
import "./Emails.css";

export default function Emails() {
  return (
    <div className="email-wrapper">
      <div className="email-header">
        <h2>به پروژه ما خوش آمدید</h2>
        <p className="email-from">از طرف: no-reply@yourdomain.com</p>
      </div>
      <div className="email-body">
        <p>سلام امیرحسین عزیز،</p>
        <p>
          از ثبت‌نام شما متشکریم! حساب کاربری شما با موفقیت ایجاد شد. برای ورود
          به داشبورد روی دکمه زیر کلیک کنید.
        </p>
        <a className="email-button" href="https://yourwebsite.com">
          ورود به داشبورد
        </a>
      </div>
      <div className="email-footer">
        <p>اگر سوالی داشتید با ما در تماس باشید.</p>
      </div>
    </div>
  );
}
