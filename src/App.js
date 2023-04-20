import './App.css';
import Menu from './Components/Menubar/Menu';
import Header from './Components/Header/Header';
import SustainableDevelopment from './Components/SustainableDevelopment/SustainableDevelopment';
import Reviews from './Components/Reviews/Reviews';
import Weather from './Components/Weather/weather';
import Planning from './Components/NavBars/Planning';
import Translator from './Components/Translator/Translator'

function App() {
  return (
    <div className="App">
      
      <Menu/>
      <Translator/>

      <div className='planning'>
        <Planning/>
        <Header/>
        <SustainableDevelopment/>
        <Reviews/>
        <Weather/>
      </div>


    </div>
  );
}

export default App;