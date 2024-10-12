import React from "react";
import Modal from "react-responsive-modal";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { useDeleteContactMutation } from "@/redux/features/api/baseAPI";
import toast from "react-hot-toast";

const ConfirmModal = ({ open, onClose, contactID }) => {
    // delete task mutation
    const [deleteContact, { data, isLoading, isError, error }] =
        useDeleteContactMutation();

    // delete contact handler
    const contactDeleteHandler = async (id) => {
        try {
            const response = await deleteContact(id);

            if (response.data.status) {
                onClose(false);
                toast.success(response.data.message);
            } else {
                toast.error(
                    `${response.data.message}(${response.data.result})`
                );
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    };

    // delete contact delete handler
    const cancelDeleteHandler = () => {
        toast.success("Canceled, Your contact is saved");
        onClose(false);
    };

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
                    <button
                        className="decission yes"
                        onClick={() => contactDeleteHandler(contactID)}
                    >
                        yes,delete it
                    </button>
                    <button
                        className="decission cancel"
                        onClick={cancelDeleteHandler}
                    >
                        No,cancel operaition
                    </button>
                </div>
            </div>
        </Modal>
    );
};

export default ConfirmModal;
