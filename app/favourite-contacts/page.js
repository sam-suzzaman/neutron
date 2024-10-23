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
    title: "Favourite list",
    subtitle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Provident vitae nobis tenetur, nesciunt nam recusandae totam eumminima iusto quia.",
};
const loadingArr = [1, 2, 3, 4];

const FavouriteContactsPage = () => {
    const {
        data: favContactsData,
        isLoading: favLoading,
        isError: isFavError,
        error: favError,
    } = useGetFavouriteContactsQuery();

    // console.log(favContactsData?.result);
    console.log({ isFavError, favError, favContactsData });

    if (isFavError) {
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
                            {favError?.message || "something went wrong"}
                        </h5>
                        <p className="message">
                            {favError?.result ||
                                "Please try again later or reload the page"}
                        </p>
                    </div>
                </div>
            </section>
        );
    }

    if (favContactsData?.result?.length === 0) {
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
                            The favourite list is empty. To see at first add
                            contacts to the favourite list.
                        </p>
                    </div>
                </div>
            </section>
        );
    }

    if (favLoading) {
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
                    {favContactsData?.result?.map((item, i) => (
                        <ProfileCard
                            key={item?._id + i}
                            index={i}
                            contact={item?.contact_id}
                            favouriteList={favContactsData?.result}
                            controller={false}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FavouriteContactsPage;
