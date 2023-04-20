import './App.css';
import Menu from './Components/Menubar/Menu';
import Header from './Components/Header/Header';
import Map from './Components/Maps/Map';
import Translator from './Components/Translator/Translator';
import SustainableDevelopment from './Components/SustainableDevelopment/SustainableDevelopment';
import Reviews from './Components/Reviews/Reviews';
import Weather from './Components/Weather/weather';
import Preview from './Components/MetroCities/Preview';
import ViewMetroMaps from './Components/MetroCities/ViewMetroMaps';

function App() {
  return (
    <div className="App">
      <Menu/>
      <Header/>
      <Preview/>
      <Translator/> 
      {/* <Map/> */}
      <SustainableDevelopment/>
      <Reviews/>
      <Weather/>
      <ViewMetroMaps/>
    </div>
  );
}

export default App;