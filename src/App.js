import React from 'react';
import './App.css';
import listicon from './image/list_icon.svg';

function App() {
  return (
    <div className="full-page">
      <div className="header">
        <div className="page-logo">&lt;SS /&gt;</div>
        <img className="top-right-icon" src={listicon}></img>
      </div>
    </div>
  );
}
export default App;
