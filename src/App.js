import './App.css';
import { BrowserRouter,Route,Routes } from "react-router-dom";
import MainPage from './main/MainPage';
import Project1 from './project/Project1';
import Project2 from './project/Project2';
import Project3 from './project/Project3';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/portfolio" element={<MainPage/>} />
        <Route path="/project1" element={<Project1/>} />
        <Route path="/project2" element={<Project2/>} />
        <Route path="/project3" element={<Project3/>} />
        
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
