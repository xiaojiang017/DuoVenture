import './App.css';
import Login from './common/login/index.tsx';
import {Route, Switch , BrowserRouter as Router } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
        <Route path="/" component={Login}/>
      </Switch>
      </Router>
    </div>
  );
}
export default App;
