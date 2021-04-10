import logo from './logo.svg';
import Splash from './pages/Splash';
import Navbar from './components/Navbar';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
      <body>
        <Splash/>
      </body>
    </div>
  );
}

export default App;
