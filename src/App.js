import React from 'react';
import './App.css';
import listicon from './image/list_icon.svg';
import face from './image/face.png';
import locationicon from './image/location_icon.svg';
import greendot from './image/greendot_icon.png';
import github from './image/github_logo.svg';
import stackoverflow from './image/stackoverflow_logo.svg';
import twitter from './image/twitter_logo.svg';

import js from './image/js_logo.png';
import ts from './image/ts_logo.png';
import react from './image/react_logo.png';
import next from './image/nextjs_logo.png';
import node from './image/nodejs_logo.png';
import express from './image/expressjs_logo.png';
import nest from './image/nestjs_logo.png';
// import socket from './image/socketjs_logo.jpg';
// import postgre from './image/postgreSQL_logo.png';
// import mongo from './image/mongodb_logo.png';
// import sass from './image/sass_logo.png';
import tailwind from './image/tailwindcss_logo.png';
// import figma from './image/figma_logo.png';
// import cypress from './image/cypress_logo.png';
// import storybook from './image/storybook_logo.png';
// import git from './image/git';
import upwork from './image/logo-upwork.png';

function App() {
  return (
    <div className="full-page">
      <div className="header">
        <div className="page-logo">&lt;SS /&gt;</div>
        <img className="top-right-icon" src={listicon}></img>
      </div>
      <div className="profile-info">
        <div className="my-face-picture">
          <img src={face} className="my-face"></img>
          <div className="my-face-background"></div>
        </div>
        <div className="profile-title">Hi, I`m Sagar</div>
        <div>
          I`m a full stack developer (React.js & Node.js) with a focus on
          creating (and occasionally designing) exceptional digital experiences
          that are fast, accessible visually appealing, and responsive. Even
          though I have been creating web applicaitons for over 7 years, I still
          love it as if it was something new.
        </div>
        <div className="project-status-container">
          <div className="project-status-wrapper">
            <img src={locationicon} className="location-icon"></img>
            <div className="location-place">Ahmedabad, India</div>
          </div>
          <div className="project-status-wrapper">
            <img src={greendot} className="greendot-icon"></img>
            <div className="availability-text">Available for new projects</div>
          </div>
        </div>
        <div className="personal-resources">
          <img src={github} className="logo-redirect"></img>
          <img src={stackoverflow} className="logo-redirect"></img>
          <img src={twitter} className="logo-redirect"></img>
        </div>
      </div>
      <div className="details">
        <div className="about-me-oval">About me</div>
        <div className="my-face-picture">
          <img src={face} className="my-face"></img>
        </div>
        <div className="details-paragraph">
          Curious about me? Here you have it:
        </div>
        <div className="details-wrapper">
          <div className="details-text">
            I`m a passionate, self-proclaimed designer who specializes in full
            stack development (React.js & Node.js). I am very enthusiastic about
            bringing the technical and visual aspects of digital products to
            life. User experience, pixel perfect design, and writing clear,
            readable, highly performant code matters to me.
          </div>
          <div className="details-text">
            I began my journey as a web developer in 2015, and since then, I`ve
            continued to grow and evolve as a developer, taking on new
            challenges and learning the latest technologies along the way. Now,
            in my early thirties, 7 years after starting my web development
            journey, I`m building cutting-edge web applications using modern
            technologies such as Next.js, TypeScript, Nestjs, Tailwindcss,
            Supabase and much more.
          </div>
          <div className="details-text">
            I am very much a progressive thinker and enjoy working on products
            end to end, from ideation all the way to development.
          </div>
          <div className="details-text">
            When I`m not in full-on developer mode, you can find me hovering
            around on twitter or on indie hacker, witnessing the journey of
            early startups or enjoying some free time. You can follow me on
            Twitter where I share tech-related bites and build in public, or you
            can follow me on GitHub.
          </div>
          <div className="details-text">Finally, some quick bits about me.</div>
          <ul className="skills-list">
            <li>B.E. in Computer Engineering</li>
            <li>Avid learner</li>
            <li>Full time freelancer</li>
            <li>Aspiring indie hacker</li>
          </ul>
          <div className="details-text">
            One last thing, I`m available for freelance work, so feel free to
            reach out and say hello! I promise I don`t bite 😉
          </div>
        </div>
      </div>
      <div className="skills-and-logos">
        <div className="skills-wrapper">
          <div className="skills-oval">Skills</div>
          <div>The skills, tools and technologies I am really good at:</div>
        </div>
        <div className="achievements">
          <div className="logo-and-name-wrapper">
            <img src={js} className="logo-from-skills"></img>
            <div>Javascript</div>
          </div>
          <div className="logo-and-name-wrapper">
            <img src={ts} className="logo-from-skills"></img>
            <div>Typescript</div>
          </div>
          <div className="logo-and-name-wrapper">
            <img src={react} className="logo-from-skills"></img>
            <div>React</div>
          </div>
          <div className="logo-and-name-wrapper">
            <img src={next} className="logo-from-skills"></img>
            <div>Next.js</div>
          </div>
          <div className="logo-and-name-wrapper">
            <img src={node} className="logo-from-skills"></img>
            <div>Node.js</div>
          </div>
          <div className="logo-and-name-wrapper">
            <img src={express} className="logo-from-skills"></img>
            <div>Express.js</div>
          </div>
          <div className="logo-and-name-wrapper">
            <img src={nest} className="logo-from-skills"></img>
            <div>Nest.js</div>
          </div>
          <div className="logo-and-name-wrapper">
            <img src={nest} className="logo-from-skills"></img>
            <div>Nest.js</div>
          </div>
          <div className="logo-and-name-wrapper">
            <img src={nest} className="logo-from-skills"></img>
            <div>Nest.js</div>
          </div>
          <div className="logo-and-name-wrapper">
            <img src={nest} className="logo-from-skills"></img>
            <div>Nest.js</div>
          </div>
          <div className="logo-and-name-wrapper">
            <img src={nest} className="logo-from-skills"></img>
            <div>Nest.js</div>
          </div>
          <div className="logo-and-name-wrapper">
            <img src={tailwind} className="logo-from-skills"></img>
            <div>Nest.js</div>
          </div>
        </div>
      </div>
      <div className="experience">
        <div className="skills-wrapper">
          <div className="experience-oval">Experience</div>
          <div>Here is a quick summary of my most recent experiences:</div>
        </div>
        <div className="experience-element">
          <img className="upwork-logo" src={upwork}></img>
          <div className="experience-date">Nov 2021 - Present</div>
          <div className="experience-role">Sr. Frontend Developer</div>
          <ul className="experience-list">
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Ut pretium arcu et massa semper, id fringilla leo semper.</li>
            <li>Sed quis justo ac magna.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default App;
