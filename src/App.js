import './App.css';
import { NavBar } from './components/Navbar';
import { Banner } from './components/Banner';
import { Technologies } from './components/Technologies';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
        <NavBar />
        <Banner />
        <Services />
        <Projects />
        <Technologies />
        <Footer />
    </div>
  );
}

export default App;
