import PageTitle from "@/components/PageTitle/PageTitle";
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
            </div>
            <div className="profile-container">
                <div className="profile-card">
                    <img src="" alt="" className="avatar" />
                    <h2 className="name"></h2>
                    <h6 className="contact"></h6>

                    <ul className="info-list">
                        <li className="item">address:</li>
                    </ul>

                    <div className="control-bar">
                        
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AllContactPage;
