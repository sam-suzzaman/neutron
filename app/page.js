import PageTitle from "@/components/PageTitle/PageTitle";
import ProfileCard from "@/components/ProfileCard/ProfileCard";
import React from "react";

const pageTitleData = {
    title: "contacts list",
    subtitle:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit.Provident vitae nobis tenetur, nesciunt nam recusandae totam eumminima iusto quia.",
};
const AllContactPage = () => {
    return (
        <section className="page-wrapper all-contacts-page">
            <div className="page-container">
                <PageTitle
                    title={pageTitleData.title}
                    subtitle={pageTitleData.subtitle}
                />

                <div className="profile-cards-container">
                    <ProfileCard />
                    <ProfileCard />
                    <ProfileCard />
                    <ProfileCard />
                    <ProfileCard />
                </div>
            </div>
        </section>
    );
};

export default AllContactPage;
