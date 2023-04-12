import './App.css';
import NavbarComponent from './components/navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header'
import About from './components/about/About'
import Testimonials from './components/testimonials/Testimonials';
import Pricing from './components/pricing/Pricing'
import Footer from './components/footer/Footer'

function App() {
  return (
    <div className="App">
      <div className="page_background">
        <NavbarComponent />
        <Header />
        <About />
        <Testimonials />
        <Pricing />
        <Footer />
      </div>
    </div>
  );
}

export default App;
