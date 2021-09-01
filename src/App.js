import './App.css';
import { Header } from './components/Header.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Header} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
