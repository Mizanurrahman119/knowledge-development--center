import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Component/header/Header';
import Home from './Component/Home/Home';
import Footer from './Component/Footer/Footer';
import Service from './Component/Service/Service';
import NotFound from './Component/NotFound/NotFound';
import About from './Component/About/About';
import Show from './Component/Show up/Show';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Router exact path="/home">
            <Home></Home>
          </Router>
          <Route path="/service">
            <Service></Service>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/show">
            <Show></Show>
          </Route>
          <Route path="*">
              <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
