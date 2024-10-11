"use client";
import ConfirmModal from "@/components/ConfirmModal/ConfirmModal";
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
    const [deleteModal, setDeleteModal] = useState(false);

    return (
        <section className="page-wrapper all-contacts-page">
            <div className="page-container">
                <PageTitle
                    title={pageTitleData.title}
                    subtitle={pageTitleData.subtitle}
                />

                <div className="profile-cards-container">
                    <ProfileCard
                        setEditModal={setEditModal}
                        setDeleteModal={setDeleteModal}
                    />
                </div>

                <EditModal open={editModal} onClose={setEditModal} />
                <ConfirmModal open={deleteModal} onClose={setDeleteModal} />
            </div>
        </section>
    );
};

export default AllContactPage;
