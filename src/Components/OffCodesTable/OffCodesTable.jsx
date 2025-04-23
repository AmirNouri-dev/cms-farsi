import React, { useEffect, useState } from "react";
import "./OffCodesTable.css";
import ErrorBox from "../ErrorBox/ErrorBox";
import DetailsModal from "../DetailsModal/DetailsModal";
import DeleteModal from "../DeleteModal/DeleteModal";
import EditModal from "../EditModal/EditModal";
import { FcOk } from "react-icons/fc";
import { FcCancel } from "react-icons/fc";
import { FaQuestionCircle } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";

export default function OffCodesTable({ title }) {
  const OffCodesDb = [
    { id: 1, percentage: 60, code: "takhfif60", date: 30, isActive: 1 },
    { id: 2, percentage: 50, code: "takhfif50", date: 20, isActive: -1 },
    { id: 3, percentage: 30, code: "takhfif30", date: 15, isActive: -1 },
    { id: 4, percentage: 15, code: "takhfif15", date: 10, isActive: 0 },
  ];
  const [allOffs, setAllOffs] = useState(OffCodesDb);
  const [selectedOffID, setSelectedOffID] = useState(null);
  const [selectedOffBody, setSelectedOffBody] = useState("");
  const [isShowDetailsModal, setIsShowDetailsModal] = useState(false);
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
  const [isShowEditModal, setIsShowEditModal] = useState(false);
  const [isShowAcceptModal, setIsShowAcceptModal] = useState(false);
  const [isShowRejectModal, setIsShowRejectModal] = useState(false);
  const [offNewCode, setOffNewCode] = useState("");
  const [offNewDate, setOffNewDate] = useState("");
  const [offNewPercentage, setOffNewPercentage] = useState("");

  const showOff = () => {
    setIsShowDetailsModal(true);
  };
  /*close selected Off details modal method */
  const closeDetailsModal = () => {
    setIsShowDetailsModal(false);
  };
  /*close selected Off delete modal method */
  const closeDeleteModal = () => {
    setIsShowDeleteModal(false);
  };
  /*show selected Off delete modal method */
  const deleteOff = () => {
    closeDeleteModal();
  };
  /*close selected Off edit modal method */
  const closeEditModal = () => {
    setIsShowEditModal(false);
  };
  /*show selected Off edit modal method */
  const editOff = () => {};
  /*show selected Off accept modal method */
  const acceptOff = () => {};
  /*show selected Off reject modal method */
  const rejectOff = () => {};
  const closeAcceptModal = () => setIsShowAcceptModal(false);
  const closeRejectModal = () => setIsShowRejectModal(false);

  return (
    <>
      <h2 className="Offs-title">{title}</h2>
      {allOffs.length ? (
        <div className="Offs-main">
          <table className="Offs-table">
            <thead>
              <tr className="Offs-table-heading-tr">
                <th className="Offs-table-body-th">وضعیت</th>
                <th className="Offs-table-body-th">کد تخفیف</th>
                <th className="Offs-table-body-th">درصد تخفیف</th>
                <th className="Offs-table-body-th">مدت زمان</th>
                <th className="Offs-table-body-th"></th>
              </tr>
            </thead>
            <tbody>
              {allOffs.map((Off) => (
                <tr key={Off.id} className="Offs-table-body-tr">
                  <td className="Offs-table-body-td">
                    {Off.isActive === 1 ? (
                      <div>
                        <span>تایید شده</span>
                        <FcOk />
                      </div>
                    ) : Off.isActive === 0 ? (
                      <div>
                        <span>در انتظار</span>
                        <FaQuestionCircle style={{ color: "orange" }} />
                      </div>
                    ) : Off.isActive === -1 ? (
                      <div>
                        <span>رد شده</span>
                        <FcCancel />
                      </div>
                    ) : null}
                  </td>
                  <td className="users-table-body-td">{Off.code}</td>
                  <td className="users-table-body-td">{Off.percentage} %</td>
                  <td className="users-table-body-td">{Off.date} روز</td>
                  <td className="users-table-body-td Offs-table-body-tr-btn">
                    <button
                      onClick={() => {
                        setIsShowEditModal(true);
                        setSelectedOffID(Off.id);
                        setSelectedOffBody(Off.code);
                      }}
                    >
                      ویرایش کد
                    </button>
                    <button
                      onClick={() => {
                        setIsShowDeleteModal(true);
                        setSelectedOffID(Off.id);
                      }}
                    >
                      حذف
                    </button>
                    {Off.isActive === 1 ? (
                      <button
                        onClick={() => {
                          setIsShowRejectModal(true);
                          setSelectedOffID(Off.id);
                        }}
                      >
                        منقضی نمودن
                      </button>
                    ) : Off.isActive === -1 ? (
                      <button
                        onClick={() => {
                          setIsShowAcceptModal(true);
                          setSelectedOffID(Off.id);
                        }}
                      >
                        فعال نمودن
                      </button>
                    ) : (
                      <>
                        <button
                          onClick={() => {
                            setIsShowAcceptModal(true);
                            setSelectedOffID(Off.id);
                          }}
                        >
                          فعال نمودن
                        </button>
                        <button
                          onClick={() => {
                            setIsShowRejectModal(true);
                            setSelectedOffID(Off.id);
                          }}
                        >
                          منقضی نمودن
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
        <ErrorBox msg="هیچ کد تخفیفی یافت نشد !" />
      )}
      {isShowDetailsModal && (
        <DetailsModal onClick={closeDetailsModal} onHide={closeDetailsModal}>
          <p>{selectedOffBody}</p>
        </DetailsModal>
      )}
      {isShowDeleteModal && (
        <DeleteModal
          submitAction={deleteOff}
          cancelAction={closeDeleteModal}
          title="آیا از حذف کد تخفیف اطمینان دارید؟"
        />
      )}
      {isShowEditModal && (
        <EditModal onSubmit={editOff} onClose={closeEditModal}>
          <div className="edit-Offs-form-group">
            <span>
              <AiFillEdit />
              کد تخفیف:
            </span>
            <input
              type="text"
              placeholder="کد تخفیف جدید را وارد نمایید"
              className="edit-Off-input"
              value={offNewCode}
              onChange={() => setOffNewCode(event.target.value)}
            />
          </div>
          <div className="edit-Offs-form-group">
            <span>
              <AiFillEdit />
              درصد تخفیف:
            </span>
            <input
              type="text"
              placeholder="درصد تخفیف جدید را وارد نمایید"
              className="edit-product-input"
              value={offNewPercentage}
              onChange={() => setOffNewPercentage(event.target.value)}
            />
          </div>
          <div className="edit-Offs-form-group">
            <span>
              <AiFillEdit />
              مدت زمان :
            </span>
            <input
              type="text"
              placeholder="مدت زمان تخفیف جدید را وارد نمایید"
              className="edit-product-input"
              value={offNewDate}
              onChange={() => setOffNewDate(event.target.value)}
            />
          </div>
        </EditModal>
      )}
      {isShowAcceptModal && (
        <DeleteModal
          title={"آیا از تایید کد تخفیف اطمینان دارید؟"}
          submitAction={acceptOff}
          cancelAction={closeAcceptModal}
        />
      )}
      {isShowRejectModal && (
        <DeleteModal
          title={"آیا از رد کد تخفیف اطمینان دارید؟"}
          submitAction={rejectOff}
          cancelAction={closeRejectModal}
        />
      )}
    </>
  );
}
