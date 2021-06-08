import './App.css';


import {BrowserRouter as Router,Switch,Route} from "react-router-dom"

import Dashboard from "../src/components/Dashboard/Dashboard"
import Home from "../src/Pages/Home/Home"
import Appointments from './Pages/Appointments/Appointments';
import Cards from './Pages/Cards/Cards';
import Login from './components/Login/Login';

function App() {

  return (
    <div className="App">
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/dashboard' component={Cards} />
        <Route path='/Appointments' component={Appointments} />
        <Route path='/login' component={Login} />
      </Switch>
    </Router>

    </div>
  );
}

export default App;
