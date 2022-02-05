import './App.css';
import NameFormater from './nameformater/NameFormater';
import LandingSection from './sections/landingsection/LandingSection';
import StringAnimation from './stringanimation/StringAnimation';

function App() {
  return (
    <div className="App">
     <LandingSection 
      fullName = {<NameFormater pairs = {[["Yu", "🌌"], ["Geng", "🧑‍🌾"], ["Wang", "👑"]]} englishName = "Simon"/>}
      subTitle = {<StringAnimation strings = {["Full-Stack Developer" ,"Creative Designer"]}/>}
     />
    </div>
  );
}

export default App;
