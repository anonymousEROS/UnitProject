import './App.css';
import About from './Pages/About';
import Code from './Pages/Code';
import newWorldorder from './Pages/newWorldorder';
import Kulture from './Pages/Kulture'
import signUp from './Pages/signUp';
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar';
import {BrowserRouter as Routes, Route, Switch} from 'react-router-dom';
import Sidebar from './components/Sidebar';
import React, {useState} from 'react';
import Plan from './Pages/Plan'
import Call from './Pages/Call'
import link from './Pages/Link'


function App() {

  const[isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
  
    <Routes>
    
    <Switch>
    
        <Route path="/" exact component={HeroSection} />
        <Route path="/thePlan" exact component={Plan} />
        
       
          {/* <Navbar /> */}
        <Route path="/Navbar" exact component={Navbar} />
        <>
          <Sidebar isOpen={isOpen} toggle={toggle} />
          <Navbar toggle={toggle}/>
          <Route path="/about" exact component={About} />
          <Route path="/code" exact component={Code} />
          <Route path="/NWO" exact component={newWorldorder} />
          <Route path="/TommyGun" exact component={Kulture} />
          <Route path="/signUp" exact component={signUp} />
          <Route path="/call" exact component={Call} />
          <Route path="/link" exact component={link} />
        </>
        
      </Switch>
      
    </Routes>
 
  );
}

export default App;
