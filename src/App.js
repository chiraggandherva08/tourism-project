import './App.css';

// Fixed.
import Menu from './Components/Menubar/Menu';
import Translator from './Components/Translator/Translator';
import Popup from './Components/CardPopup/Popup';
import Emergency from './Components/EmergencyLocation/Emergency';
// import ChangeTheme from './Components/ChangeTheme/ChangeTheme';

// Planning Section.
import Planning from './Components/NavBars/Planning';
import TripPlanner from './Components/PlanningSection/AIPlannedTrip/PlanTrip';
import Header from './Components/PlanningSection/Header/Header';
import SustainableDevelopment from './Components/PlanningSection/SustainableDevelopment/SustainableDevelopment';
import Reviews from './Components/PlanningSection/Reviews/Reviews';
import Weather from './Components/PlanningSection/Weather/weather';

// Travelling Section.
import TourGuide from './Components/TravellingSection/TourGuides/TourGuide';
import TravellingActivities from './Components/TravellingSection/TravellingActivities';
import TravellingNews from './Components/TravellingSection/TravellingNews';

const getLocation = () => {
  const successCallback = (position) => {
    return position;
  };

  const errorCallback = (error) => {
    return error;
  };

  navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
}

function App() {
  
  getLocation();

  return (
    <div className="App">

      <Menu />
      <Translator />
      <Emergency />

      <div className='planning'>
        <Planning />
        <TripPlanner />
        <SustainableDevelopment />
        <Weather />
        <Reviews />
      </div>

      <div className="travelling">
        <TravellingNews />
        <TravellingActivities />
        <TourGuide />
      </div>


    </div>
  );
}

export default App;