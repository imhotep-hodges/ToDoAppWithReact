import '/Users/L-Hodges/my-app/src/index.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Pages/Navbar';
import Home from './components/Pages/Home';
import Test from './components/Pages/Test';
import Form from './components/Form';


function App() {
  return (
    <Router>     
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Test.js" component={Test} />
        <Route path="/Form.js" component={Form} />
      </Switch>
    </Router>
  );
};

export default App;