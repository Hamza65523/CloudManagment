import './App.css';
import About from './Components/About/About';
import AllInOne from './Components/AllInOne/AllInOne';
import Footer from './Components/Footer/Footer';
import Intro from './Components/Intro/Intro';
import Navbar from './Components/Navbar/Navbar';
import Price from './Components/Price/Price';
import Testamonials from './Components/Testimonials/Testamonials';
function App() {
  return (
    <div className="">
      <Navbar/>
      <Intro/>
      <AllInOne/>
      <About/>
      <Price/>
      <Testamonials/>
      <Footer/>
    </div>
  );
}

export default App;
