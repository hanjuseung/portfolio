import "./Project2.css";
import Header from "../main/Header";

import { FaJava } from "react-icons/fa";
import { SiEclipseide, SiSpring, SiOracle } from "react-icons/si";

function Project2() {
    return (
        <div className="container1">
            <Header />
            <h1>공공데이터를 활용한 여행지 추천 및 여행 기록 공유 커뮤니티 사이트</h1>

            <section className="project-overview">
                <h2>프로젝트 개요</h2>
                <p className="project2-p">제주도는 국내에서 가장 인기 있는 여행지 중 하나지만, 정보가 방대하고 파편화되어 정확하고 신뢰할 수 있는 내용을 찾기 어렵습니다.
                    이에 따라 여행자가 제주도의 다양한 명소와 테마별 코스를 쉽고 빠르게 탐색하고, 실시간으로 제공되는 맞춤형 정보를 통해 보다 풍부한 여행 경험을 누릴 수 있는 플랫폼의 필요성을 느껴 이번 프로젝트를 기획했습니다.
                </p>
                <ul>
                    <li>기간 : 2025.07.28 ~ 2025.08.14</li>
                    <li>인원 : 5명</li>
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

            <section>
                <h2>프로젝트 일정</h2>
                <div>
                    <img src={process.env.PUBLIC_URL + "/images/WBS2.png"} alt="프로젝트일정" style={{ width: '900px', height: '600px' }}></img>
                </div>
            </section>

            <section>
                <h2>요구사항 명세서</h2>
                <img src={process.env.PUBLIC_URL + "/images/Requirements2.png"} alt="요구사항명세서" style={{ width: '900px', objectFit: 'contain' }}></img>
            </section>

            <section className="diagram-wrap">
                <div className="diagram-item">
                    <h2>메뉴트리</h2>
                    <img
                        src={process.env.PUBLIC_URL + "/images/Menutree2.png"}
                        alt="메뉴트리"
                        style={{ width: "450px", height: "350px", objectFit: "contain" }}
                    />
                </div>

                <div className="diagram-item">
                    <h2>ERD</h2>
                    <img
                        src={process.env.PUBLIC_URL + "/images/ERD2.png"}
                        alt="ERD"
                        style={{ width: "450px", height: "350px", objectFit: "contain" }}
                    />
                </div>
            </section>

            <section>
                <h2>영상 시연</h2>
                <video
                    src={process.env.PUBLIC_URL + "/videos/project2.mp4"}    // public 기준 절대경로
                    controls                 // 재생 컨트롤 표시
                    autoPlay                 // 자동 재생 (옵션)
                    muted                    // 자동 재생 시 필수
                    loop                     // 반복 재생 (옵션)
                    width="850"              // 원하는 크기
                ></video>
            </section>

            <section className="project-result">
                <h2>프로젝트를 통해 느낀 점, 배운 점</h2>
                <p>
                    제가 맡은 부분은 <strong>메인 페이지, 여행지 리스트, 여행지 상세 페이지</strong> 구현이었습니다.
                    2차 프로젝트에서는 <strong>Spring MVC</strong>와 <strong>Oracle DB</strong>를 활용해
                    전체 서비스 구조를 설계하는 과정을 직접 경험했습니다.
                </p>

                <p>
                    DB 연동과 검색·조건 쿼리 작성 과정을 통해
                    <strong>데이터 모델링과 SQL 최적화</strong>의 중요성을 깊이 이해했고,
                    복잡한 조건을 효율적으로 처리하기 위한
                    <strong>인덱스 설계와 쿼리 튜닝</strong> 방법도 학습했습니다.
                </p>

                <p>
                    또한 문제 해결 과정을 팀원들과 적극적으로 공유하며
                    <strong>코드 리뷰와 원활한 소통</strong>의 필요성을 실감했고,
                    발생한 에러를 분석하고 재현하는 과정을 통해
                    <strong>로그 디버깅과 예외 처리</strong> 방법을 익혔습니다.
                </p>

                <p>
                    이 경험을 통해 단순 구현을 넘어
                    <strong>안정성과 유지보수</strong>를 고려한
                    백엔드 개발 역량을 한층 강화할 수 있었습니다.
                </p>
            </section>

            <section className="project-retro">
                <h2>문제점과 해결방안</h2>

                <p>
                    <strong>문제 1 :</strong> DB 연동 시 검색 결과를 출력하는 과정에서
                    오류가 발생하였다.
                </p>
                <p>
                    <strong>해결 :</strong> DB 테이블에 기본 데이터를 생성하고 기준
                    컬럼을 찾아 검색 조건을 부여하였다.
                </p>

                <p>
                    <strong>문제 2 :</strong> 팀원마다 이미지를 불러오는 방식이 달라
                    코드 병합 시 일부 이미지가 표시되지 않았다.
                </p>
                <p>
                    <strong>해결 :</strong> <code>&lt;resources&gt;</code> 매핑을 설정하고
                    경로를 <code>/resources/…</code> 형식으로 통일하였다.
                </p>

                <p>
                    <strong>문제 3 :</strong> MVC 패턴 적용 중 오류가 발생하고 초기 단계에서
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