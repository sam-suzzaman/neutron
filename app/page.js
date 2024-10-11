"use client";
import React, { useEffect, useState } from "react";
import ConfirmModal from "@/components/ConfirmModal/ConfirmModal";
import EditModal from "@/components/EditModal/EditModal";
import PageTitle from "@/components/PageTitle/PageTitle";
import ProfileCard from "@/components/ProfileCard/ProfileCard";
import ProfileLoadingSecle from "@/components/ProfileLoading/ProfileLoading";

const pageTitleData = {
    title: "contacts list",
    subtitle:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit.Provident vitae nobis tenetur, nesciunt nam recusandae totam eumminima iusto quia.",
};
const arr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

const loadingArr = [1, 2, 3, 4];

const AllContactPage = () => {
    const [contacts, setContacts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // Required States for modal
    const [editModal, setEditModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);

    // fetching contacts
    useEffect(() => {
        setTimeout(() => {
            setContacts(arr);
            setIsLoading(false);
        }, 3000);
    }, []);

    return (
        <section className="page-wrapper all-contacts-page">
            <div className="page-container">
                <PageTitle
                    title={pageTitleData.title}
                    subtitle={pageTitleData.subtitle}
                />

                <div className="profile-cards-container">
                    {isLoading
                        ? loadingArr?.map((item, i) => (
                              <ProfileLoadingSecle key={i + i} />
                          ))
                        : contacts?.map((item, i) => (
                              <ProfileCard
                                  key={i + i}
                                  setEditModal={setEditModal}
                                  setDeleteModal={setDeleteModal}
                                  index={i}
                              />
                          ))}
                    {}
                </div>

                <EditModal open={editModal} onClose={setEditModal} />
                <ConfirmModal open={deleteModal} onClose={setDeleteModal} />
            </div>
        </section>
    );
};

export default AllContactPage;
