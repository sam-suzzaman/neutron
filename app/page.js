"use client";
import EditModal from "@/components/EditModal/EditModal";
import Modal from "@/components/Modal/Modal";
import PageTitle from "@/components/PageTitle/PageTitle";
import ProfileCard from "@/components/ProfileCard/ProfileCard";
import React, { useState } from "react";

const pageTitleData = {
    title: "contacts list",
    subtitle:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit.Provident vitae nobis tenetur, nesciunt nam recusandae totam eumminima iusto quia.",
};
const AllContactPage = () => {
    const [editModal, setEditModal] = useState(false);

    // Edit modal handlers
    // const openEditModal = () => setEditModal(true);
    const closeEditModal = () => setEditModal(false);

    return (
        <section className="page-wrapper all-contacts-page">
            <div className="page-container">
                <PageTitle
                    title={pageTitleData.title}
                    subtitle={pageTitleData.subtitle}
                />

                <div className="profile-cards-container">
                    <ProfileCard setEditModal={setEditModal} />
                </div>
                <EditModal open={editModal} onClose={closeEditModal} />

                {/* <Modal
                    isShowModal={isShowModal}
                    setIsShowModal={setIsShowModal}
                /> */}
            </div>
        </section>
    );
};

export default AllContactPage;
