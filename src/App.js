import './App.css';
import Menu from './Components/Menubar/Menu';
import Header from './Components/Header/Header';
import Map from './Components/Maps/Map';
import Translator from './Components/Translator/Translator';
import SustainableDevelopment from './Components/SustainableDevelopment/SustainableDevelopment';
import Reviews from './Components/Reviews/Reviews';
import Weather from './Components/Weather/weather';

function App() {
  return (
    <div className="App">
      <Menu/>
      <Header/>
      <Translator/> 
      <Map/>
      <SustainableDevelopment/>
      <Reviews/>
      <Weather/>
    </div>
  );
}

export default App;