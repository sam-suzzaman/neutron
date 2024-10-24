"use client";
import React from "react";
import PageTitle from "@/components/PageTitle/PageTitle";
import ProfileCard from "@/components/ProfileCard/ProfileCard";
import ProfileLoadingSecle from "@/components/ProfileLoading/ProfileLoading";
import {
    useGetAllContactsQuery,
    useGetFavouriteContactsQuery,
} from "@/redux/features/api/baseAPI";

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
    const {
        data: favContactsData,
        isLoading: favLoading,
        isError: isFavError,
        error: favError,
    } = useGetFavouriteContactsQuery();

    if (isGetError || isFavError) {
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
                            {getError?.message ||
                                favError?.message ||
                                "something went wrong"}
                        </h5>
                        <p className="message">
                            {getError?.result ||
                                favError?.result ||
                                "Please try again later or reload the page"}
                        </p>
                    </div>
                </div>
            </section>
        );
    }

    if (getLoading || favLoading) {
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

    if (contactsData?.result?.length === 0) {
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
                        <h5 className="title">Empty list</h5>
                        <p className="message">
                            There is no contacts in the list. Please add new
                            contacts to the contact list
                        </p>
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
                            index={i}
                            contact={item}
                            favouriteList={favContactsData?.result}
                            controller={true}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AllContactPage;
