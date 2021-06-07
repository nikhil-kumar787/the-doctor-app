import './App.css';


import {BrowserRouter as Router,Switch,Route} from "react-router-dom"

import Dashboard from "../src/components/Dashboard/Dashboard"
import Home from "../src/Pages/Home/Home"
import Appointments from './Pages/Appointments/Appointments';

function App() {

  return (
    <div className="App">
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/Appointments' component={Appointments} />
      </Switch>
    </Router>

    </div>
  );
}

export default App;
