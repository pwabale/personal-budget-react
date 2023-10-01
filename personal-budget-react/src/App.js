import AboutPage from './AboutPage/AboutPage';
import './App.scss';
import Footer from './Footer/Footer';
import Hero from './Hero/Hero';
import HomePage from './HomePage/HomePage';
import LoginPage from './LoginPage/LoginPage';
import Menu from './Menu/Menu';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Menu></Menu>
      <Hero></Hero>
      <div className='mainContainer'>
        <Routes>
          <Route path='/about' exact element={<AboutPage/>}></Route>
          <Route path='/login' exact element={<LoginPage/>}></Route>
          <Route path='/' exact element={<HomePage/>}></Route>
        </Routes>
      </div>
      <Footer></Footer>
    </Router>
  );
}

export default App;
