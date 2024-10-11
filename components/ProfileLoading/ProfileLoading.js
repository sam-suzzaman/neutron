import React from "react";
import Skeleton from "react-loading-skeleton";

const ProfileLoadingSecle = () => {
    return (
        <div className="profile-card">
            <div className="avatar">
                <Skeleton circle={true} width={100} height={100} />
            </div>
            <h2 className="name">
                <Skeleton />
            </h2>
            <h6 className="contact">
                <Skeleton />
            </h6>

            <ul className="info-list">
                <Skeleton count={3} />
            </ul>
        </div>
    );
};

export default ProfileLoadingSecle;
