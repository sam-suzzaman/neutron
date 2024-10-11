import React from "react";

const PageTitle = ({ title, subtitle }) => {
    return (
        <div className="page-title-row">
            <h3 className="title">{title}</h3>
            <p className="subtitle">{subtitle}</p>
        </div>
    );
};

export default PageTitle;
