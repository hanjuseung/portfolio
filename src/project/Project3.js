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
            <h1>주유소/전기차 충전소 정보제공 및 현재위치 기준 목적지 추천 사이트</h1>
            <section className="project-overview">
                <h2>프로젝트 개요</h2>
                <p className="project3-p">전기차 보급이 확대되면서 주유소와 충전소를 동시에 확인하고 이용할 수 있는 통합 서비스의 필요성이 커지고 있습니다.
                    이에 따라 사용자가 현재 위치와 차량 정보를 기반으로 최적의 경로와 실시간 주유·충전 정보를 쉽고 빠르게 탐색하고,
                    맞춤형 필터링을 통해 보다 편리하고 신뢰할 수 있는 서비스를 제공받을 수 있는 플랫폼의 필요성을 느껴 이번 프로젝트를 기획했습니다.</p>
                <ul>
                    <li>기간 : 2025.08.21 ~ 2025.09.12</li>
                    <li>인원 : 5명</li>
                </ul>
                <div className="links">
                    <a href="https://github.com/hanjuseung/oilmoney" target="_blank">GitHub 주소</a>
                </div>
            </section>

            <section>
                <h2>프로젝트 일정</h2>
                <div>
                    <img src={process.env.PUBLIC_URL + "/images/WBS3.png"} alt="프로젝트일정" style={{ width: '850px', height: '350px', objectFit: 'contain' }}></img>
                </div>
            </section>

            <section>
                <h2>요구사항 명세서</h2>
                <img src={process.env.PUBLIC_URL + "/images/Requirements3.png"} alt="요구사항명세서" style={{ width: '850px', objectFit: 'contain' }}></img>
            </section>

            <section>
                <h2>메뉴트리</h2>
                <div>
                    <img src={process.env.PUBLIC_URL + "/images/Menutree3.png"} alt="메뉴트리" style={{ width: '850px', height: '350px', objectFit: 'contain' }}></img>
                </div>
            </section>

            <section>
                <h2>ERD</h2>
                <div><img src={process.env.PUBLIC_URL + "/images/ERD3.png"} alt="ERD" style={{ width: '850px', objectFit: 'contain' }}></img></div>
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

            <section>
                <h2>영상 시연</h2>
                <video
                    src={process.env.PUBLIC_URL + "/videos/project3.mp4"}    // public 기준 절대경로
                    controls                 // 재생 컨트롤 표시
                    autoPlay                 // 자동 재생 (옵션)
                    muted                    // 자동 재생 시 필수
                    loop                     // 반복 재생 (옵션)
                    width="800"              // 원하는 크기
                ></video>
            </section>

            <section className="project-result">
                <h2>프로젝트를 통해 느낀 점, 배운 점</h2>
                <p>
                    제가 맡은 부분은 <strong>주유소·충전소 페이지</strong> 구현이었습니다.
                    마지막 3차 프로젝트에서는 1차(React)와 2차(Spring + DB)에서 익힌 기술을 통합해
                    프론트엔드와 백엔드를 하나의 서비스로 완성하는 데 집중했습니다.
                </p>

                <p>
                    <strong>지도 API</strong>와 공공데이터를 활용해 실시간 주유소·충전소 정보를 제공하고,
                    위치 기반 검색과 조건 필터링 기능을 구현하며
                    <strong>대규모 데이터 처리와 비동기 통신</strong>의 중요성을 실감했습니다.
                </p>

                <p>
                    특히 프론트엔드와 백엔드 간 <strong>REST API 설계·연동</strong>을 직접 수행하면서
                    요청과 응답 구조, <strong>JSON 데이터 매핑</strong>, <strong>CORS 설정</strong>, 예외 처리까지
                    클라이언트-서버 통신 전 과정을 깊이 이해했고,
                    안정적으로 데이터를 주고받기 위한 <strong>에러 핸들링과 응답 속도 최적화</strong> 방법을 배웠습니다.
                </p>

                <p>
                    또한 팀 내 <strong>코드 리뷰와 브랜치 전략</strong>을 통해
                    병렬 개발 시 발생할 수 있는 충돌을 관리하며 협업 역량을 강화했습니다.
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