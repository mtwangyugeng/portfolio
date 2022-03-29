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
import SkillCard from './assets/skillcard/SkillCard';

function App() {
  return (
    <>    <IAccess /> <Flame />
    <div className="App">
      
     <LandingSection 
      fullName = {<NameFormater pairs = {[["Yu", "🌌"], ["Geng", "🧑‍🌾"], ["Wang", "👑"]]} englishName = "Simon"/>}
      subTitle = {<StringAnimation strings = {["Frontend Developer" ,"Creative Designer"]}/>}
      contacts = {<ContactBar linkedIn = "https://www.linkedin.com/in/yu-geng-simon-wang/" gitHub = "https://github.com/mtwangyugeng" codePen = "https://codepen.io/mtwangyugeng"/>}
     />
      
     <NavBar navLinks = {[
       {name: 'About', id: '#About'},
       {name: 'Stack', id: '#Stack'},
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
          With 7 years of overall coding experience, I can get things done with any framework I picked up. 
          </p>
          <br/>
          <p>
          I thrive the best when I have opportunities to express my creativity and insight, which is why I like front-end development. 
          In the workplace, I am good at defusing conflicts, and I love helping others. I always look for honest feedback about myself and my work.
          </p>
          <br/>
          <p>
            <i>"This is a cool quote."</i>
          </p>
          </article>}
       />
     }/>
     <ContentSection id="Stack" title={<SceneTitle title="Stack"/>} content = {
       <div className="stackContainer">
       <SkillCard 
          title="Svelte"
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/1200px-Svelte_Logo.svg.png"
          tag="Frontend"
          progress={8}
          description="I have been using svelte to develope one-page webapp projects."
          footer={`"Super fast and less boilerplate."`}
        />
        <SkillCard 
          title="React"
          image="https://icon-library.com/images/react-icon/react-icon-0.jpg"
          tag="Frontend"
          progress={10}
          description="I have developed most of my project, including those on CodePen with React."
          footer={`"Bread and Butter..."`}
        />
        <SkillCard 
          title="SVG"
          image="https://upload.wikimedia.org/wikipedia/commons/4/4f/SVG_Logo.svg"
          tag="Animation"
          progress={2}
          description="I have been importing SVG and its animations into my works."
          footer={`"I will create some SVG animations myself...later."`}
        />
        <SkillCard 
          title="Rails"
          image="https://cdn3.iconfinder.com/data/icons/popular-services-brands-vol-2/512/ruby-on-rails-512.png"
          tag="Backend"
          progress={5}
          description="I used Ruby on Rails as a json api server for my latest project."
          footer={`"Magical...but why everything have to be in separate folders?"`}
        />
        <SkillCard 
          title="Express.js"
          image="https://www.pngfind.com/pngs/m/136-1363736_express-js-icon-png-transparent-png.png"
          tag="Backend"
          progress={4}
          description="I completed the Backend API Certificate of FreeCodeCamp using Express."
          footer={`"Large ecosystem and easy to use, I like it."`}
        />
        <SkillCard 
          title="MongoDB"
          image="https://g.foolcdn.com/art/companylogos/square/mdb.png"
          tag="Database"
          progress={2}
          description="I used MongoDB for Backend API Certificate of FreeCodeCamp."
          footer={`"Very easy to use compare to SQL."`}
        />
        </div>
     } />
     <ContentSection id="Résumé" title={<SceneTitle title="Résumé"/>} content = {
      <Timeline timeline={[
        {
          date:new Date("2020-12-31"),
          text:'My first webapp was a music beatbox. Sloppy... but works!',
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
            text:'I picked up the language and framework for web developing with the helps from online communities while doing more web projects.',
            tag: {
              title: 'bootcamp',
              color: 'blue'
            },
            link: {
              url: 'https://www.freecodecamp.org/fcc12596072-1ec4-4ea7-95f2-9a3d396f55eb',
              text: 'Check out my bootcamp certificates along with projects'
            }
          }
          ,
          {
            date:new Date("2022-02-11"),
            text:'I used what I learned about react so far to make this website. Personally I am impressed by my design.',
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
