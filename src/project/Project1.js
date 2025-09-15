import FeatureItem from "../component/FeatureItem";
import Header from "../main/Header";
import "./Project1.css";
import { DiHtml5, DiCss3, DiJavascript1 } from "react-icons/di";
import { FaReact } from "react-icons/fa";

function Project1() {
    return (
        <div className="container1">
            <Header />
            <h1>1차 프로젝트</h1>

            <video
                src={process.env.PUBLIC_URL + "/videos/project1.mp4"}    // public 기준 절대경로
                controls                 // 재생 컨트롤 표시
                autoPlay                 // 자동 재생 (옵션)
                muted                    // 자동 재생 시 필수
                loop                     // 반복 재생 (옵션)
                width="850"              // 원하는 크기
            ></video>

            <section className="project-overview">
                <h2>커뮤니티 기반 클라우드 펀딩 사이트</h2>
                <ul>
                    <li>기간 : 2025.05.28 ~ 2025.06.13</li>
                    <li>인원 : 4명</li>
                    <li>내 역할 : 로그인,마이페이지 및 메인페이지 구현</li>
                </ul>
                <div className="links">
                    <a href="https://github.com/hanjuseung/funders" target="_blank">GitHub 주소</a>
                </div>
            </section>

            <section className="project-tech">
                <h2>사용 기술</h2>
                <div className="tech-list">
                    <div className="tech-item">
                        <DiHtml5 className="tech-icon" />
                        <span>HTML5</span>
                    </div>
                    <div className="tech-item">
                        <DiCss3 className="tech-icon" />
                        <span>CSS3</span>
                    </div>
                    <div className="tech-item">
                        <DiJavascript1 className="tech-icon" />
                        <span>JavaScript</span>
                    </div>
                    <div className="tech-item">
                        <FaReact className="tech-icon" />
                        <span>React</span>
                    </div>
                </div>
            </section>

            <section className="project-result">
                <h2>프로젝트를 통해 배운 점</h2>
                <p>
                    React SPA 구조와 상태 관리를 직접 구현하면서 컴포넌트 분리와
                    재사용성의 중요성을 이해했고, Git 브랜치 전략을 통한 협업 방법을 익혔습니다.
                </p>
            </section>

            <section className="project-retro">
                <h2>문제점과 해결방안</h2>

                <p>
                    <strong>문제 1 :</strong> 여러 페이지에서 동일한 클래스명을 사용해 CSS가 서로
                    덮어써지는 현상이 발생했다.
                </p>
                <p>
                    <strong>해결 :</strong> 컴포넌트 단위로 고유한 클래스명을 지정하고,
                    필요 시 CSS Module을 적용해 스타일 충돌을 방지했다.
                </p>

                <p>
                    <strong>문제 2 :</strong> GitHub에서 팀원이 동시에 작업을 병합할 때
                    merge conflict가 자주 발생했다.
                </p>
                <p>
                    <strong>해결 :</strong> 충돌 파일을 비교·분석해 공통 분기점을 찾고,
                    브랜치 전략과 PR 리뷰 과정을 도입해 충돌 빈도를 줄였다.
                </p>
            </section>

        </div>
    )
}

export default Project1;