import './App.css';
import NameFormater from './assets/nameformater/NameFormater';
import LandingSection from './sections/landingsection/LandingSection';
import StringAnimation from './assets/stringanimation/StringAnimation';
import ContactBar from './assets/contactbar/ContactBar';
import NavBar from './assets/navbar/NavBar';

function App() {
  return (
    <div className="App">
     <LandingSection 
      fullName = {<NameFormater pairs = {[["Yu", "🌌"], ["Geng", "🧑‍🌾"], ["Wang", "👑"]]} englishName = "Simon"/>}
      subTitle = {<StringAnimation strings = {["Full-Stack Developer" ,"Creative Designer"]}/>}
      contacts = {<ContactBar linkedIn = "https://www.linkedin.com/in/yu-geng-simon-wang/" gitHub = "https://github.com/mtwangyugeng" email = "mtwangyugeng@gmail.com"/>}
     />
     <NavBar />
     <LandingSection 
      fullName = {<NameFormater pairs = {[["Yu", "🌌"], ["Geng", "🧑‍🌾"], ["Wang", "👑"]]} englishName = "Simon"/>}
      subTitle = {<StringAnimation strings = {["Full-Stack Developer" ,"Creative Designer"]}/>}
      contacts = {<ContactBar linkedIn = "https://www.linkedin.com/in/yu-geng-simon-wang/" gitHub = "https://github.com/mtwangyugeng" email = "mtwangyugeng@gmail.com"/>}
     />
    </div>
  );
}

export default App;
