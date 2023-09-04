import logo from './logo.svg';
import './App.css';

import HomeNav from './Screen/HomeNav';
import Home from './Screen/Home';
import Destination from './Screen/Destination';
import Gallery from './Screen/Gallery';
import Offers from './Screen/Offers';
import Fotter from './Screen/Fotter';
import Nav from './Screen/Nav';

function App() {
  return (
    <div>
    <Nav/>
    <HomeNav/>
    <Home/>
    <Destination/>
    <Gallery/>
    <Offers/>
    <Fotter/>
   
    </div>
  );
}

export default App;
