import React from 'react';
import './App.css';
import Welcome from './Welcome/index.js'
import MetaTags from 'react-meta-tags';


function App() {
  return (
    <div>
      <MetaTags>
            <title>Pragya Kumari</title>
            <meta name="description" content="Software Developer at adobe" />
            <meta property="og:title" content="My Resume" />
            <meta property="og:image" content="./About/picture/profilepic.png" />
          </MetaTags>
      <Welcome/>
    </div>
    );
}

export default App;
