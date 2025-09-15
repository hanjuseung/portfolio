import "./Project3.css";
import Header from "../main/Header";
import { DiHtml5, DiCss3, DiJavascript1 } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { SiEclipseide, SiSpring, SiOracle } from "react-icons/si";

function Project3() {
    return (
        <div className="container1">
            <Header />
            <h1>3차 프로젝트</h1>
            <video
                src={process.env.PUBLIC_URL + "/videos/project3.mp4"}    // public 기준 절대경로
                controls                 // 재생 컨트롤 표시
                autoPlay                 // 자동 재생 (옵션)
                muted                    // 자동 재생 시 필수
                loop                     // 반복 재생 (옵션)
                width="800"              // 원하는 크기
            ></video>

            <section className="project-overview">
                <h2>주유소/전기차 충전소 정보제공 및 현재위치 기준 목적지 추천 사이트</h2>
                <ul>
                    <li>기간 : 2025.08.21 ~ 2025.09.12</li>
                    <li>인원 : 5명</li>
                    <li>내 역할 : 주유소,충전소 페이지</li>
                </ul>
                <div className="links">
                    <a href="https://github.com/hanjuseung/oilmoney" target="_blank">GitHub 주소</a>
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
                    DB 연동과 검색·조건 쿼리 작성 과정을 통해{" "}
                    <strong>데이터 모델링 및 SQL 최적화</strong>에 대한 이해를 넓혔다.
                </p>

                <p>
                    API 데이터 표준화와 스케줄링 처리 경험을 통해{" "}
                    <strong>비동기 처리·성능 최적화</strong> 및
                    <strong>서비스 안정성 확보</strong> 방법을 체득했다.
                </p>

                <p>
                    특히 <strong>프론트엔드와 백엔드 간 REST API를 설계·연동</strong>하며
                    요청/응답 구조, JSON 데이터 매핑, CORS 설정 등
                    <strong>클라이언트-서버 통신의 전체 흐름</strong>을 이해하고
                    안정적으로 데이터를 주고받는 방법을 배웠다.
                </p>
            </section>

            <section className="project-retro">
                <h2>문제점과 해결방안</h2>

                <p>
                    <strong>문제 1 :</strong> 동일한 정보라도 API마다 JSON 구조나 키 값이
                    제각각(statId, STAT_ID, stationId 등)이라 데이터 매핑 과정에서
                    오류가 발생하였다.
                </p>
                <p>
                    <strong>해결 :</strong> 정규화 함수를 만들어 공통 구조로 변환하여
                    처리하도록 했다.
                </p>

                <p>
                    <strong>문제 2 :</strong> 서비스 파일마다 API 키를 직접 하드코딩하여
                    키 변경 시 모든 파일을 수정해야 했다.
                </p>
                <p>
                    <strong>해결 :</strong> property 어노테이션으로 나뉘어 있던 API 키를
                    하나로 묶어 리팩토링하였다.
                </p>

                <p>
                    <strong>문제 3 :</strong> 코드의 훅(Hook) 부분에서 불필요하게 API 호출이
                    반복되어 호출 횟수가 빠르게 소진됨.
                </p>
                <p>
                    <strong>해결 :</strong> 불필요한 API 호출 로직 제거 및 비동기 처리
                    최적화로 호출 횟수를 절감하였다.
                </p>

                <p>
                    <strong>문제 4 :</strong> API로 데이터를 받을 때 트래픽에 의존적이었다.
                </p>
                <p>
                    <strong>해결 :</strong> API에서 받은 데이터를 별도 테이블에 저장하고
                    스케줄러를 이용해 트래픽을 줄였다.
                </p>
            </section>
        </div>
    )
}

export default Project3;