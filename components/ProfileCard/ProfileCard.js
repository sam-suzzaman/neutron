import React, { useState } from "react";
import { MdLocationPin, MdOutlineEmail } from "react-icons/md";
import { LiaEditSolid } from "react-icons/lia";
import { IoTrashOutline } from "react-icons/io5";
import { FaHeart, FaRegHeart } from "react-icons/fa";

import { motion } from "framer-motion";
import EditModal from "../EditModal/EditModal";
import ConfirmModal from "../ConfirmModal/ConfirmModal";
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

const ProfileCard = ({ index, contact }) => {
    // Props destructure
    const { _id, username, avatar, email, phoneNumber, address } = contact;

    // States for modals
    const [editModal, setEditModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);

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
                    <FaRegHeart className="icon" />
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
