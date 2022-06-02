import React from 'react';
import Navigation from '../navigation/Navigation'
import './Home.css'

const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <div className="title-container">
        <p>OkSurvey</p>
      </div>
    </div>
  );
}

export default Home;
