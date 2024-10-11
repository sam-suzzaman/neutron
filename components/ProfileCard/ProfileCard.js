import React from "react";
import { MdLocationPin, MdOutlineEmail } from "react-icons/md";
import { LiaEditSolid } from "react-icons/lia";
import { IoTrashOutline } from "react-icons/io5";

const ProfileCard = () => {
    return (
        <div className="profile-card">
            <div className="avatar">
                <img
                    src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="profile_pic"
                    className="avatar"
                />
            </div>
            <h2 className="name">what ever name</h2>
            <h6 className="contact">+880-180904372</h6>

            <ul className="info-list">
                <li className="item">
                    <MdLocationPin className="icon" />
                    address:
                    <span className="value">20/A, Motijhil, Dhaka</span>
                </li>
                <li className="item email">
                    <MdOutlineEmail className="icon" />
                    Email:
                    <span className="value">testingOne@gmail.com</span>
                </li>
            </ul>

            <div className="control-bar">
                <button className="action-btn edit">
                    <LiaEditSolid className="icon" />
                    edit
                </button>
                <button className="action-btn delete">
                    <IoTrashOutline className="icon" />
                    delete
                </button>
            </div>
        </div>
    );
};

export default ProfileCard;
