import '/Users/L-Hodges/my-app/src/index.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Pages/Navbar';
import Home from './components/Pages/Home';
import Todolist from './components/Todolist';
import Form from './components/Form';


function App() {
  return (
    <Router>     
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Todolist.js" component={Todolist} />
        <Route path="/Form.js" component={Form} />
      </Switch>
    </Router>
  );
};

export default App;