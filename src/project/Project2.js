import "./Project2.css";
import Header from "../main/Header";

import { FaJava } from "react-icons/fa";
import { SiEclipseide, SiSpring, SiOracle } from "react-icons/si";

function Project2() {
    return (
        <div className="container1">
            <Header />
            <h1>2차 프로젝트</h1>

            <video
                src={process.env.PUBLIC_URL + "/videos/project2.mp4"}    // public 기준 절대경로
                controls                 // 재생 컨트롤 표시
                autoPlay                 // 자동 재생 (옵션)
                muted                    // 자동 재생 시 필수
                loop                     // 반복 재생 (옵션)
                width="850"              // 원하는 크기
            ></video>

            <section className="project-overview">
                <h2>공공데이터를 활용한 여행지 추천 및 여행 기록 공유 커뮤니티 서비스를 제공하는 사이트</h2>
                <ul>
                    <li>기간 : 2025.07.28 ~ 2025.08.14</li>
                    <li>인원 : 5명</li>
                    <li>내 역할 : 메인, 여행지 리스트, 여행지 상세 페이지</li>
                </ul>
                <div className="links">
                    <a href="https://github.com/hanjuseung/scout" target="_blank">GitHub 주소</a>
                </div>
            </section>

            <section className="project-tech">
                <h2>사용 기술</h2>
                <div className="tech-list">
                    <div className="tech-item">
                        <FaJava className="tech-icon" />
                        <span>Java</span>
                    </div>
                    <div className="tech-item">
                        <SiEclipseide className="tech-icon" />
                        <span>Eclipse</span>
                    </div>
                    <div className="tech-item">
                        <SiSpring className="tech-icon" />
                        <span>Spring (Tomcat 포함)</span>
                    </div>
                    <div className="tech-item">
                        <SiOracle className="tech-icon" />
                        <span>Oracle DB</span>
                    </div>
                </div>
            </section>

            <section className="project-result">
                <h2>프로젝트를 통해 배운 점</h2>
                <p>
                    DB 연동과 검색·조건 쿼리 작성 과정을 통해 {" "}
                    <strong>데이터 모델링 및 SQL 최적화</strong>에 대한 이해를 넓혔다.
                </p>
                <p>
                    문제 해결 과정을 팀원과 공유하며 {" "}
                    <strong>코드 리뷰와 소통의 필요성</strong>을 실감했고,
                    에러를 분석하고 재현하는 방법을 익혔다.
                </p>
            </section>

            <section className="project-retro">
                <h2>문제점과 해결방안</h2>

                <p>
                    <strong>문제 2 :</strong> DB 연동 시 검색 결과를 출력하는 과정에서
                    오류가 발생하였다.
                </p>
                <p>
                    <strong>해결 :</strong> DB 테이블에 기본 데이터를 생성하고 기준
                    컬럼을 찾아 검색 조건을 부여하였다.
                </p>

                <p>
                    <strong>문제 3 :</strong> 팀원마다 이미지를 불러오는 방식이 달라
                    코드 병합 시 일부 이미지가 표시되지 않았다.
                </p>
                <p>
                    <strong>해결 :</strong> <code>&lt;resources&gt;</code> 매핑을 설정하고
                    경로를 <code>/resources/…</code> 형식으로 통일하였다.
                </p>

                <p>
                    <strong>문제 5 :</strong> MVC 패턴 적용 중 오류가 발생하고 초기 단계에서
                    수정이 어려웠다.
                </p>
                <p>
                    <strong>해결 :</strong> MVC 패턴을 먼저 학습 후 적용하고, 작성된 코드를
                    재검토하며 구조를 개선하였다.
                </p>
            </section>
        </div>
    )
}

export default Project2;