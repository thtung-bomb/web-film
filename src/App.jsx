import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom/cjs/react-router-dom.js';
import Login from './Components/Login/Login.jsx';
import Homepage from './Components/Homepage.jsx';
import Watchlist from './Components/Watchlist';
import MovieDetail from './Components/MoviesDetail/MovieDetail';
import ContactForm from './Components/ContactForm';
import AllMovie from './Components/AllMovie';
import Original from './Components/Original';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/watchlist" component={Watchlist} />
          <Route path="/originals" component={Original} />
          <Route path="/movies" component={AllMovie} />
          <Route path="/contact" component={ContactForm} />
          <Route path="/detail/:id" component={MovieDetail} />
          <Route path="/login" component={Login} />
        </Switch>
      </BrowserRouter>

    </div>
  )
}

export default App
