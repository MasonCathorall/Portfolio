import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Footer } from './components/Footer';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Projects } from './components/Projects';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {

  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects /> 
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
