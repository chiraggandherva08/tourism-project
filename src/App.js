import './App.css';
import Menu from './Components/Menubar/Menu';
import Header from './Components/Header/Header';
import ChangeTheme from './Components/ChangeTheme/ChangeTheme';
import Map from './Components/Maps/Map';
import TransportData from './Components/TransportationData/TransportData';
import Translator from './Components/Translator/Translator';
import SustainableDevelopment from './Components/SustainableDevelopment/SustainableDevelopment';

function App() {
  return (
    <div className="App">
      <Menu/>
      <Header/>
      <Translator/> 
      <ChangeTheme/>
      <Map/>
      <SustainableDevelopment/>
    </div>
  );
}

export default App;
