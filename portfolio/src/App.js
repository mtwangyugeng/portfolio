import './App.css';
import NameFormater from './assets/nameformater/NameFormater';
import LandingSection from './sections/landingsection/LandingSection';
import StringAnimation from './assets/stringanimation/StringAnimation';
import ContactBar from './assets/contactbar/ContactBar';
import NavBar from './assets/navbar/NavBar';
import Timeline from './assets/timeline/Timeline';
import ContentSection from './sections/contentsection/ContentSection';
import NameCard from './assets/namecard/NameCard';
import SceneTitle from './assets/scenetitle/SceneTitle';
import EndingSection from './sections/endingsection/EndingSection';

function App() {
  return (
    <div className="App">
     <LandingSection 
      fullName = {<NameFormater pairs = {[["Yu", "🌌"], ["Geng", "🧑‍🌾"], ["Wang", "👑"]]} englishName = "Simon"/>}
      subTitle = {<StringAnimation strings = {["Full-Stack Developer" ,"Creative Designer"]}/>}
      contacts = {<ContactBar linkedIn = "https://www.linkedin.com/in/yu-geng-simon-wang/" gitHub = "https://github.com/mtwangyugeng" email = "mtwangyugeng@gmail.com"/>}
     />
      
     <NavBar />
      
     <ContentSection title={<SceneTitle title="About"/>} content={
       <NameCard 
        name={<NameFormater pairs = {[["Yu", "🌌"], ["Geng", "🧑‍🌾"], ["Wang", "👑"]]} englishName = "Simon"/>}
        location="Scarborough, ON, CA"
        about={<article>
          <p>
            Bachelor major in computer science and mathematics. My other passions
            include video games, front-end design,
            nature sight-seeing, and social science.
          </p>
          <br/>
          <p>
           I am aiming to become a fullstack developer.
          </p>
          </article>}
       />
     }/>
     <ContentSection title={<SceneTitle title="Résumé"/>} content = {
      <Timeline timeline={[
        {
          date:new Date("1996-07-09"),
          text:'Bob is born in Jacksville Florida. The best city of the USA.',
          tag: {
            title: 'twitter',
            color: '#1DA1F2'
          },
          link: {
            url: '#!',
            text: 'Check it out on GitHub'
          }
        },
          {
            date:new Date("1996-07-09"),
            text:'Bob is born in Jacksville Florida. The best city of the USA.',
            tag: {
              title: 'Github',
              color: 'red'
            },
            link: {
              url: '#!',
              text: 'Check it out on GitHub'
            }
          }
          ,
          {
            date:new Date("1996-07-09"),
            text:'Bob is born in Jacksville Florida. The best city of the USA.',
            tag: {
              title: 'Github',
              color: 'red'
            },
            link: {
              url: '#!',
              text: 'Check it out on GitHub'
            }
          }
      ]} />
      } />

    <ContentSection title={<SceneTitle title="Projects"/>} content={
      "what"
    }/>
    <EndingSection 
      author="Yu Geng Wang"
      year="2022"
    />
    </div>
  );
}

export default App;
