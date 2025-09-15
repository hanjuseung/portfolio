import "./ProjectCard.css";
import { Link } from "react-router-dom";

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

                <Link className="detail-btn" to={github}>
                    자세히 보기
                </Link>
            </div>
        </div>
    );
}

export default ProjectCard;