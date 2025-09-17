import FeatureItem from "../component/FeatureItem";
import Header from "../main/Header";
import "./Project1.css";
import { DiHtml5, DiCss3, DiJavascript1 } from "react-icons/di";
import { FaReact } from "react-icons/fa";

function Project1() {
    return (
        <div className="container1">
            <Header />
            <h1>커뮤니티 기반 클라우드 펀딩 사이트</h1>

            <section className="project-overview">
                <h2>프로젝트 개요</h2>
                <p className="project1-p">기존 크라우드 펀딩 사이트는 구매자와 판매자가 직접 소통할 수 있는 창구가 부족해
                    진행 상황을 확인하기 어렵다는 한계를 지니고 있습니다.
                    펀딩은 성공 여부가 확정되어야 제품을 받을 수 있기 때문에
                    상품을 구매한 뒤에도 과정과 정보를 투명하게 확인할 수 있는 공간이 필요하다고 판단했습니다.
                    이에 구매자와 판매자가 펀딩 진행 상황을 공유하고 의견을 나눌 수 있는
                    게시판 중심의 커뮤니티형 크라우드 펀딩 플랫폼을 기획하고 구현했습니다.</p>
                <ul>
                    <li>기간 : 2025.05.28 ~ 2025.06.13</li>
                    <li>인원 : 4명</li>
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

            <section>
                <h2>프로젝트 일정</h2>
                <div>
                    <img src={process.env.PUBLIC_URL + "/images/WBS1.png"} alt="프로젝트일정" className="portfolio1-img"></img>
                </div>
            </section>

            <section>
                <h2>요구사항 명세서</h2>
                <img src={process.env.PUBLIC_URL + "/images/Requirements1.png"} alt="요구사항명세서" style={{ width: '850px', objectFit: 'contain' }}></img>
            </section>

            <section>
                <h2>메뉴트리</h2>
                <div>
                    <img src={process.env.PUBLIC_URL + "/images/Menutree.png"} alt="메뉴트리" style={{ width: '850px', height: '350px', objectFit: 'contain' }}></img>
                </div>
            </section>

            {/* <section>
                <h2>ERD</h2>
                <div></div>
            </section> */}

            <section>
                <h2>영상 시연</h2>
                <video
                    src={process.env.PUBLIC_URL + "/videos/project1.mp4"}    // public 기준 절대경로
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
                    제가 맡은 부분은 <strong>로그인, 회원가입창, 마이페이지</strong> 구현이었습니다.
                    React만으로 제작한 첫 프로젝트라서 기초 세팅부터 라우팅, 상태 관리까지
                    모든 과정을 직접 구현해야 했습니다.
                </p>

                <p>
                    특히 <strong>React SPA 구조와 상태 관리</strong>를 직접 구현하면서
                    <strong>컴포넌트 분리와 재사용성</strong>의 중요성을 깊이 이해했고,
                    <strong>Props와 State 설계</strong>를 어떻게 해야 유지보수가 쉬운지 체감했습니다.
                </p>

                <p>
                    또한 <strong>Git 브랜치 전략</strong>을 활용해 팀원들과 병렬 개발을 진행하며
                    코드 충돌을 최소화하고 <strong>협업 효율</strong>을 높이는 방법을 익혔습니다.
                </p>

                <p>
                    이 경험을 통해 단순히 기능을 완성하는 것뿐 아니라
                    <strong>코드 품질과 협업 프로세스</strong>가 프로젝트 성공에 얼마나 큰 영향을 미치는지 배울 수 있었습니다.
                </p>
            </section>

            <section className="project-retro">
                <h2>프로젝트를 진행하면서 생긴 이슈와 해결과정</h2>

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