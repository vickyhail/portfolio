import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavbarComp from './components/NavbarComp';
import Intro from './components/Intro';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="App">
      <NavbarComp />
      <Switch>

      <Route path="/home" exact>
      <div className="home">
           <Intro />
           <About />
           <Skills />
           <Projects />
           <Contact />
           <Footer />
           </div>
        </Route>


        <Route path="/aboutme" >
           <About />
           </Route>

           <Route path="/skills" >
           <Skills />
           </Route>

           <Route path="/projects">
           <Projects /> 
           </Route>

           <Route path="/contact">
           <Contact /> 
           </Route>
        

     
    </Switch>
    </div>
    </Router>
  );
}

export default App;



