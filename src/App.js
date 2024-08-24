import React from 'react';
import './App.css';
import listicon from './image/list_icon.svg';
import face from './image/face.png';
import locationicon from './image/location_icon.svg';
import greendot from './image/greendot_icon.png';
import github from './image/github_logo.svg';
import stackoverflow from './image/stackoverflow_logo.svg';
import twitter from './image/twitter_logo.svg';

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
        <div></div>
      </div>
    </div>
  );
}
export default App;
