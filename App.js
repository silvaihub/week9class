
import './App.css';
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import About from './Pages/About';
import {useState} from 'react';

function App() {
  const [state, setState] = useState(0)
  
  
  return (
    <div className="App">
      <nav>
        <Link to="/linkbout">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/">Home</Link>
      </nav>
      <button onClick = {() => setState(state + 1)}>Click me</button>
      <h1>{state}</h1>
      <h1>Hello to My world!</h1>
      <Switch>
      <Route path='/about'>
        <About />
      </Route>
      <Route path = '/contact'>
        <Contact />
      </Route>
      
      <Route path='/'>
        <Home />
      </Route>
      </Switch>
    
      
    </div>
  );
}

export default App;
