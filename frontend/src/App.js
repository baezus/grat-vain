import logo from './logo.svg';
import Splash from './pages/Splash';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Register from './pages/Register';
import Login from './pages/Login';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './styles/App.scss';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <Navbar/>
      </header>
      <body>
        <div className="container" style={{marginTop:40}}>
          <Switch>

            <Route exact path="/">
              <Splash/>
            </Route>

            <Route exact path="/register">
              <Register/>
            </Route>

            <Route exact path="/login">
              <Login/>
            </Route>

          </Switch>
        </div>
      </body>
      <div className="footer-div">
        <Footer/>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
