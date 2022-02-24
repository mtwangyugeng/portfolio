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
import Flame from './assets/flame/Flame';

import myPic from './my_pic.jpg'

function App() {
  return (
    <>    <IAccess /> <Flame />
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
        picURL = {myPic}
        name={<NameFormater pairs = {[["Yu", "🌌"], ["Geng", "🧑‍🌾"], ["Wang", "👑"]]} englishName = "Simon"/>}
        location="Scarborough, ON, CA"
        about={<article>
          <p>
            Keen on working with: React.js, Express.js. I am great with javascript and CSS; I am also familiar with C, C#, java, and python.
             I know a good deal about software architecture and algorithm design. 
          </p>
          <br/>
          <p>
            I am open to networking, criticism and insights. <b><i> I am also interested in nature of Ontario and social science. :-)</i></b>
          </p>
          <br/>
          <p>
            "This area is reserved for a cool quote that I might come up with in the future. : ^)"
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
              url: 'https://github.com/mtwangyugeng/portfolio',
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
