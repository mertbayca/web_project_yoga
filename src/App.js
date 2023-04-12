import './App.css';
import NavbarComponent from './components/navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header'
import About from './components/about/About'
import Testimonials from './components/testimonials/Testimonials';

function App() {
  return (
    <div className="App">
      <div className="page_background">
        <NavbarComponent />
        <Header />
        <About />
        <Testimonials />
      </div>
    </div>
  );
}

export default App;
