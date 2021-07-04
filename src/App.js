import './App.css';
import Display from './pages/Display';
import AddUser from './pages/AddUser';
import EditUser from './pages/EditUser';
import ViewUser from './pages/ViewUser';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Router>
        <  NavBar/>
        <Switch>
          <Route exact path="/" component={Display} />
          <Route exact path="/addUser" component={AddUser} />
          <Route exact path="/view/:id" component={ViewUser} />
          <Route exact path="/edit/:id" component={EditUser} />
        </Switch>
      </Router>
     
    </div>
  );
}

export default App;
