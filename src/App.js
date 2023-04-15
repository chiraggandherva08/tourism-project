import './App.css';
import Menu from './Components/Menubar/Menu';
import Header from './Components/Header/Header';
import Map from './Components/Maps/Map';
import TransportData from './Components/TransportationData/TransportData';
import Translator from './Components/Translator/Translator';

function App() {
  return (
    <div className="App">
      <Menu/>
      <Header/>
      <Translator/> 
      <Map/>
      {/* 
      <TransportData/>*/}
    </div>
  );
}

export default App;