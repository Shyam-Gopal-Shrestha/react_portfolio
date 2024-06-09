
import { Route, Routes } from 'react-router-dom';
import './App.css'
import SkillsPage from './pages/Skills';
import Test from './pages/test';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';
import ProjectsPage from './pages/Projects';
import DarkModeSwitch from './Component/DarkModeSwitch';
import Header from './Component/Header';
import Footer from './Component/Footer';

function App() {
// Logic

//UI
  return (
    <>
    <DarkModeSwitch />
    <Header />

    <div className='wrapper-container'>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='skills' element={<SkillsPage/>}></Route>
        <Route path='projects' element={<ProjectsPage/>}></Route>
        <Route path='about' element={<AboutPage/>}></Route>
        <Route path='contact' element={<ContactPage/>}></Route>
      </Routes>
    </div>
    <Footer />
    <Test />
    </>
      )
}

export default App;
