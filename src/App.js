import './App.css';
import { BrowserRouter,HashRouter,Route,Routes } from "react-router-dom";
import MainPage from './main/MainPage';
import Project1 from './project/Project1';
import Project2 from './project/Project2';
import Project3 from './project/Project3';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/project1" element={<Project1/>} />
        <Route path="/project2" element={<Project2/>} />
        <Route path="/project3" element={<Project3/>} />
      </Routes>
    </HashRouter>
  );
}

export default App;
