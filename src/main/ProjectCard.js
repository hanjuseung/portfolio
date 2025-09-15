import "./ProjectCard.css";
import { FaReact } from "react-icons/fa";
import { GiMeal } from "react-icons/gi";
import { TbLeaf } from "react-icons/tb";
import React from "react";

function ProjectCard({ title, subtitle, imgSrc, desc, github, icons }) {

    return (
        <div className="project-card">
            <div className="card-image">
                <img src={imgSrc} alt={`${title} 썸네일`} />
            </div>

            <div className="card-body">
                <h3 className="card-title">{title}</h3>
                <p className="card-subtitle">{subtitle}</p>

                <div className="tech-icons">
                    {icons.map((Icon, i) => (
                        <Icon key={i} />
                    ))}
                </div>

                <p className="card-desc">{desc}</p>

                <a className="detail-btn" href={github} target="_self" rel="noopener noreferrer">
                    자세히 보기
                </a>
            </div>
        </div>
    );
}

export default ProjectCard;