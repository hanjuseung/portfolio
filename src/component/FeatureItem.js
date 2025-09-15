import React from "react";


function FeatureItem({ title, img, desc }) {
    return (
        <div className="feature-item">
            <img src={img} alt={title} className="feature-img" />
            <h3>{title}</h3>
            <p>{desc}</p>
        </div>
    );
}

export default FeatureItem;