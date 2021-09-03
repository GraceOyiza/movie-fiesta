import { Switch, Route } from 'react-router-dom';
import Homepage from './pages/homepage';
import Movie from './pages/movie';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/movie" component={Movie} />
      </Switch>
    </div>
  );
}

export default App;
