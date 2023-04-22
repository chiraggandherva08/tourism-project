import './App.css';
import Menu from './Components/Menubar/Menu';
import TripPlanner from './Components/PlanningSection/AIPlannedTrip/PlanTrip';
import Header from './Components/PlanningSection/Header/Header';
import SustainableDevelopment from './Components/PlanningSection/SustainableDevelopment/SustainableDevelopment';
import Reviews from './Components/PlanningSection/Reviews/Reviews';
import Weather from './Components/PlanningSection/Weather/weather';
import Planning from './Components/NavBars/Planning';
import Translator from './Components/Translator/Translator';
import TransportData from './Components/PlanningSection/TransportationData/TransportData';
import Popup from './Components/CardPopup/Popup';
import Emergency from './Components/EmergencyLocation/Emergency';

function App() {
  return (
    <div className="App">

      <Menu />
      <Translator />
      <Popup />
      <Emergency/>

      <div className='planning'>
        <Planning />
        <TripPlanner />
        <Header />
        <SustainableDevelopment />
        <Weather />
        {/* <TransportData /> */}
        <Reviews />
      </div>

    </div>
  );
}

export default App;