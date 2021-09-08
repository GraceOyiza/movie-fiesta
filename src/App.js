import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage';
import MoviePage from './pages/Video';

const App = () => (
  <Router>
    <div className="App max-width">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/movie" component={MoviePage} />
      </Switch>
    </div>
  </Router>
);

export default App;
