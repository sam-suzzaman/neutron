import React, { useState } from "react";
import { MdLocationPin, MdOutlineEmail } from "react-icons/md";
import { LiaEditSolid } from "react-icons/lia";
import { IoTrashOutline } from "react-icons/io5";
import { FaHeart, FaRegHeart } from "react-icons/fa";

import { motion } from "framer-motion";
import EditModal from "../EditModal/EditModal";
import ConfirmModal from "../ConfirmModal/ConfirmModal";
import {
    useAddToFavouriteMutation,
    useRemoveFromFavouriteMutation,
} from "@/redux/features/api/baseAPI";
import toast from "react-hot-toast";

const fadeInVariants = {
    initial: {
        opacity: 0,
        y: 50,
    },
    animate: {
        opacity: 1,
        y: 0,
    },
};

const ProfileCard = ({ index, contact, favouriteList, controller }) => {
    // Props destructure
    const { _id, username, avatar, email, phoneNumber, address } = contact;

    // mutations
    const [addToFavourite, {}] = useAddToFavouriteMutation();
    const [removeFromFavourite, {}] = useRemoveFromFavouriteMutation();

    // States for modals
    const [editModal, setEditModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);

    const addToFavouriteHandler = async (id) => {
        try {
            const response = await addToFavourite(id);

            if (response.data.status) {
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

    const removeFromFavouriteHandler = async (id) => {
        try {
            const response = await removeFromFavourite(id);

            if (response.data.status) {
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

    // Check if the item is in the favourite list
    const isInFavourite =
        favouriteList?.some((item) => item?.contact_id?._id === _id) || false;

    return (
        <motion.div
            initial={fadeInVariants.initial}
            whileInView={fadeInVariants.animate}
            transition={{ duration: 0.5, delay: 0.06 * index }}
            viewport={{ once: true }}
            key={_id}
        >
            <div className="profile-card">
                <div
                    className="wishlist-icon"
                    onClick={() => setEditModal(false)}
                >
                    {isInFavourite ? (
                        <FaHeart
                            className="icon"
                            onClick={() => removeFromFavouriteHandler(_id)}
                        />
                    ) : (
                        <FaRegHeart
                            className="icon"
                            onClick={() => addToFavouriteHandler(_id)}
                        />
                    )}
                </div>
                <div className="avatar">
                    <img src={avatar} alt="profile_pic" className="avatar" />
                </div>
                <h2 className="name">{username}</h2>
                <h6 className="contact">{phoneNumber || "Not avaialbe"}</h6>

                <ul className="info-list">
                    <li className="item">
                        <MdLocationPin className="icon" />
                        address:
                        <span className="value">
                            {address || "not available"}
                        </span>
                    </li>
                    <li className="item email">
                        <MdOutlineEmail className="icon" />
                        Email:
                        <span className="value">
                            {email || "not available"}
                        </span>
                    </li>
                </ul>

                {controller && (
                    <div className="control-bar">
                        <button
                            className="action-btn edit"
                            onClick={() => setEditModal(true)}
                        >
                            <LiaEditSolid className="icon" />
                            edit
                        </button>
                        <button
                            className="action-btn delete"
                            onClick={() => setDeleteModal(true)}
                        >
                            <IoTrashOutline className="icon" />
                            delete
                        </button>
                    </div>
                )}
            </div>
            <EditModal
                open={editModal}
                onClose={setEditModal}
                contact={contact}
            />
            <ConfirmModal
                open={deleteModal}
                onClose={setDeleteModal}
                contactID={_id}
            />
        </motion.div>
    );
};

export default ProfileCard;
