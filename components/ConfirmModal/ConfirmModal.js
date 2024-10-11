import React from "react";
import Modal from "react-responsive-modal";
import { FaRegCircleQuestion } from "react-icons/fa6";

const ConfirmModal = ({ open, onClose }) => {
    return (
        <Modal
            open={open}
            onClose={() => onClose(false)}
            center
            closeOnOverlayClick={true}
            classNames={{
                overlay: "modalOverlay",
                modal: "modalContainer",
            }}
        >
            <div className="confirm-modal-body">
                <div className="icon-holder">
                    <FaRegCircleQuestion className="icon" />
                </div>
                <h4 className="title">are you sure?</h4>
                <p className="info">
                    Contact will be permanantly delete and can't be recover.
                </p>

                <div className="decission-row">
                    <button className="decission yes">yes,delete it</button>
                    <button className="decission cancel">
                        No,cancel operaition
                    </button>
                </div>
            </div>
        </Modal>
    );
};

export default ConfirmModal;
