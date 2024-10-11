import React from "react";

const Modal = ({ isShowModal, setIsShowModal }) => {
    return (
        <div className={`modal-wrapper ${isShowModal && "show"}`}>
            <div className="modal-container">
                <button
                    className="modal-close-btn"
                    onClick={() => setIsShowModal(!isShowModal)}
                >
                    X
                </button>
                <div className="modal-body">
                    <h3>modal body</h3>
                </div>
            </div>
        </div>
    );
};

export default Modal;
