import './App.css';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import Main from './components/Main.js';
import Main2 from './components/Main2.js';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Main /> 
        <Main2 />
      <Footer />
    </div>
  );
}

export default App;
