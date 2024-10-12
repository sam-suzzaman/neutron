"use client";
import React, { useEffect, useState } from "react";
import ConfirmModal from "@/components/ConfirmModal/ConfirmModal";
import EditModal from "@/components/EditModal/EditModal";
import PageTitle from "@/components/PageTitle/PageTitle";
import ProfileCard from "@/components/ProfileCard/ProfileCard";
import ProfileLoadingSecle from "@/components/ProfileLoading/ProfileLoading";
import { useGetAllContactsQuery } from "@/redux/features/api/baseAPI";

import { MdError } from "react-icons/md";

const pageTitleData = {
    title: "contacts list",
    subtitle:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit.Provident vitae nobis tenetur, nesciunt nam recusandae totam eumminima iusto quia.",
};

const loadingArr = [1, 2, 3, 4];

const AllContactPage = () => {
    // Fetching all contacts data
    const {
        data: contactsData,
        isLoading: getLoading,
        isError: isGetError,
        error: getError,
    } = useGetAllContactsQuery();

    // Required States for modal
    const [editModal, setEditModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);

    if (isGetError) {
        return (
            <section className="page-wrapper all-contacts-page">
                <div className="page-container">
                    <PageTitle
                        title={pageTitleData.title}
                        subtitle={pageTitleData.subtitle}
                    />
                    <div className="error-content-row">
                        <div className="placeholder">
                            <MdError className="icon" />
                        </div>
                        <h5 className="title">
                            {getError?.message || "something went wrong"}
                        </h5>
                        <p className="message">{getError?.result}</p>
                    </div>
                </div>
            </section>
        );
    }

    if (getLoading) {
        return (
            <section className="page-wrapper all-contacts-page">
                <div className="page-container">
                    <PageTitle
                        title={pageTitleData.title}
                        subtitle={pageTitleData.subtitle}
                    />

                    <div className="profile-cards-container">
                        {loadingArr?.map((_, i) => (
                            <ProfileLoadingSecle key={i + i} />
                        ))}
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="page-wrapper all-contacts-page">
            <div className="page-container">
                <PageTitle
                    title={pageTitleData.title}
                    subtitle={pageTitleData.subtitle}
                />

                <div className="profile-cards-container">
                    {contactsData?.result?.map((item, i) => (
                        <ProfileCard
                            key={item._id + i}
                            setEditModal={setEditModal}
                            setDeleteModal={setDeleteModal}
                            index={i}
                            contact={item}
                        />
                    ))}
                </div>

                <EditModal open={editModal} onClose={setEditModal} />
                <ConfirmModal open={deleteModal} onClose={setDeleteModal} />
            </div>
        </section>
    );
};

export default AllContactPage;
