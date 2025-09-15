import './MainPage.css';
import Header from './Header.js';
import ProjectCard from './ProjectCard.js';
import { DiHtml5, DiCss3, DiJavascript1 } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { SiEclipseide, SiSpring, SiOracle } from "react-icons/si";


function MainPage() {

    return (
        <div className='main-container'>
            <Header />
            <div className=''>
                <h1>한주승 풀스택 6개월 교육과정</h1>
                <p className='page-explanation'>이 글은 제가 6개월간의 풀스택 교육 프로그램 동안 완료한 3개의 팀 프로젝트를 모아서 정리한 것입니다.</p>
            </div>

            <div className="cards-wrap">
                <ProjectCard
                    title="1차 프로젝트"
                    subtitle="펀딩 사이트"
                    imgSrc={process.env.PUBLIC_URL + "/images/project1.JPG"}
                    desc="React만으로 제작한 펀딩 웹사이트로, 컴포넌트 기반 설계와 SPA 구조를 
                            적용해 프로젝트 등록과 참여 기능을 구현했습니다."
                    github="/project1"
                    icons={[DiHtml5,DiCss3,DiJavascript1,FaReact]}
                />

                <ProjectCard
                    title="2차 프로젝트"
                    subtitle="여행지 추천 사이트"
                    imgSrc={process.env.PUBLIC_URL + "/images/project2.JPG"}
                    desc="Spring MVC와 Oracle DB를 활용해 공공데이터 기반 여행지 정보를 제공하고 
                            회원·리뷰 기능을 구현한 웹사이트입니다."
                    github="/project2"
                    icons={[FaJava,SiEclipseide,SiSpring,SiOracle]}
                />

                <ProjectCard
                    title="3차 프로젝트"
                    subtitle="주유소/충전소 정보제공 사이트"
                    imgSrc={process.env.PUBLIC_URL + "/images/project3.JPG"}
                    desc="1차(React)와 2차(Spring+DB)에서 익힌 기술을 통합해 개발한
                            주유소·전기차 충전소 정보 제공 웹사이트입니다.
                            React 프론트엔드와 Spring 백엔드를 분리해 구현하고,
                            공공데이터 API와 실시간 가격·충전소 상태 정보를 연동했습니다."
                    github="/project3"
                    icons={[DiHtml5,DiCss3,DiJavascript1,FaReact,FaJava,SiEclipseide,SiSpring,SiOracle]}
                />
            </div>
        </div>
    );
}

export default MainPage;