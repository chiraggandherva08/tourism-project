import './App.css';
import Menu from './Components/Menubar/Menu';
import Header from './Components/PlanningSection/Header/Header';
import SustainableDevelopment from './Components/PlanningSection/SustainableDevelopment/SustainableDevelopment';
import Reviews from './Components/PlanningSection/Reviews/Reviews';
import Weather from './Components/PlanningSection/Weather/weather';
import Planning from './Components/NavBars/Planning';
import Translator from './Components/Translator/Translator';
import TransportData from './Components/PlanningSection/TransportationData/TransportData';

function App() {
  return (
    <div className="App">

      <Menu />
      <Translator />

      <div className='planning'>
        <div className="header-bg">
          <Planning />
          <Header />
        </div>
        <SustainableDevelopment />
        <Weather />
        <TransportData />
        <Reviews />
      </div>

    </div>
  );
}

export default App;