import logo from './logo.svg';
import Splash from './pages/Splash';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './styles/App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
      </header>
      <body>
        <Splash/>
      </body>
      <div className="footer-div">
        <Footer/>
      </div>
    </div>
  );
}

export default App;
