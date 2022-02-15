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
import IAccess from './assets/iaccess/IAccess';

function App() {
  return (
    <>    <IAccess />
    <div className="App">
      
     <LandingSection 
      fullName = {<NameFormater pairs = {[["Yu", "🌌"], ["Geng", "🧑‍🌾"], ["Wang", "👑"]]} englishName = "Simon"/>}
      subTitle = {<StringAnimation strings = {["Full-Stack Developer" ,"Creative Designer"]}/>}
      contacts = {<ContactBar linkedIn = "https://www.linkedin.com/in/yu-geng-simon-wang/" gitHub = "https://github.com/mtwangyugeng" email = "mtwangyugeng@gmail.com"/>}
     />
      
     <NavBar navLinks = {[
       {name: 'About', id: '#About'},
       {name: 'Résumé', id: '#Résumé'},
       {name: 'Contact', id: '#contact'}
     ]}/>
      
     <ContentSection id="About" title={<SceneTitle title="About"/>} content={
       <NameCard 
        picURL = "https://media-exp1.licdn.com/dms/image/C4D35AQHfugfeLpf31Q/profile-framedphoto-shrink_400_400/0/1612897111197?e=1645030800&v=beta&t=J-rdLfmLCZaJ63Ow00JaQlHM0sygJp7QvjOimJ1QEZI"
        name={<NameFormater pairs = {[["Yu", "🌌"], ["Geng", "🧑‍🌾"], ["Wang", "👑"]]} englishName = "Simon"/>}
        location="Scarborough, ON, CA"
        about={<article>
          <p>
            A bachelor that majors in computer science and mathematics. 
            I am aiming to become a full-stack developer.
          </p>
          <br/>
          <p>
            I also like MOBA and sandbox video games,
            nature sight-seeing, 
            philosophy
            and social science.
          </p>
          </article>}
       />
     }/>
     <ContentSection id="Résumé" title={<SceneTitle title="Résumé"/>} content = {
      <Timeline timeline={[
        {
          date:new Date("2020-12-31"),
          text:'I made my first web-app ---- a music beatbox! Everything was sloppy... but hey there is a first time for everthing!',
          tag: {
            title: 'Project',
            color: '#1DA1F2'
          },
          link: {
            url: 'https://github.com/mtwangyugeng/hbeatbox',
            text: 'Check it out on GitHub'
          }
        },
          {
            date:new Date("2022-01-15"),
            text:'With the help of the online communities, things in web-developement are no longer intimidating.',
            tag: {
              title: 'bootcamp',
              color: 'blue'
            },
            link: {
              url: 'https://www.freecodecamp.org/fcc12596072-1ec4-4ea7-95f2-9a3d396f55eb',
              text: 'Check out my bootcamp certificates'
            }
          }
          ,
          {
            date:new Date("2022-02-11"),
            text:'I used what I learned about react so far to make this website. Scalable and reuseable components!',
            tag: {
              title: 'Project',
              color: '#1DA1F2'
            },
            link: {
              url: '#!',
              text: 'Check out the source code of this website on GitHub'
            }
          }
      ]} />
      } />

    <EndingSection 
      author="Yu Geng Wang"
      year="2022"
      contacts = {[
        {
          text: "Connect with me on LinkedIn",
          url: "https://www.linkedin.com/in/yu-geng-simon-wang/"
        },
        {
          text: "Send me an e-mail",
          url: "mailto:mtwangyugeng@gmail.com"
        }
      ]}
    />

  
    </div>
    </>
  );
}

export default App;
