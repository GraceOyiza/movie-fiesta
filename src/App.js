import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage';

const App = () => (
  <Router>
    <div className="App max-width">
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  </Router>
);

export default App;
