import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  useEffect(() => {
    document.title = "Mason Cathorall's Portfolio"
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      {/* <Projects />
      <Contact />
      <Footer /> */}
    </div>
  );
}

export default App;
