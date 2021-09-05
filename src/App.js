import { Switch, Route } from 'react-router-dom';
import Homepage from './pages/homepage';
import Movie from './pages/movie';
import Navbar from './component/Navigation';

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/movie" component={Movie} />
      </Switch>
    </div>
  );
}

export default App;
