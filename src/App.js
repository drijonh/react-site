import drijon_pfp from './drijon.jpg';
import './App.css';

function App() {
return (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
      <header className="App-header">
        <img src="https://cdn.discordapp.com/avatars/778557320123777026/ef5053106258547bef3ad691e681fd5d.png?size=2048" className="App-logo" alt="app logo" draggable="false" /><br />
        <br />
        <strong className="drijon">Drijon</strong>
        <p>
        <strong className="about">👋 About me</strong>
        <br />
        <div className="about-text">
          Hey, my name is <strong>Drijon</strong> my prefered pronouns are <strong>He/Him</strong> and <strong>They/Them</strong>. I was born at <strong>27th of April</strong> some years ago and I currently live in Europe, to be presice in <strong>Italy</strong>... I am a hobby <strong>Software Engineer</strong> and <strong>Technology helper</strong> around my Village. 
          <br />
          <br />
          I currently mainly work at my <strong>heart project Sienna</strong> - a Discord Bot with the main weight on <strong>Giveaways</strong> and <strong>Server Utilities</strong>. You can learn more about it at <a class="link" href="https://sienna.drijon.tech" target="_blank" rel="Sienna">https://sienna.drijon.tech</a>
          <br />
          <br />
          </div>
          <strong className="about">⚙️ Technologies</strong>
          <div className="tech-list">
          •&nbsp; JavaScript, Node.JS<br />
          •&nbsp; React, NextJS<br />
          •&nbsp; HTML, CSS<br />
          •&nbsp; Python<br />
          </div>
          <strong className="about">📞 Contact</strong><br />
          <div className="contact-text">
          You want to collaborate with me or just want to have a nice talk in with my community? <br />
          Feel free to join my <a class="link" href="https://dc.drijon.xyz">Discord server</a> and shoot a ping at me!
          </div>
        </p>
      </header>
  </div>
  )
}
export default App;
