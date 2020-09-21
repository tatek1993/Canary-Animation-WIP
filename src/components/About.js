import React from 'react';

import '../App.css';
// import bulb from './images/bulb.svg';
import Piggy from '../images/piggy.js';
import Bulb from '../images/bulb.js';
import Comp from '../images/computer.js';

function About() {
  return (
    <div className="App">
      <header className="App-header">     
        <div className="step1">
          <div class='imgBg'>
            <Bulb/>
          </div>
          <div className='textBox'>
            <h1>
              <span>1.</span> Come up with an idea for a project
            </h1>
            <p>
            Gamification crowdsource learning curve startup early adopters analytics monetization disruptive.
            </p>
            <a href='#'>Learn More</a>
          </div> 
        </div>

        <div className='step2'>
          <div className='textBox'>
            <h1>
            <span>2.</span> Get funding or a helping hand
            </h1>
            <p>
              Entrepreneur equity graphical user interface low hanging fruit.
            </p>
            <a href='#'>Learn More</a>
          </div>
          <div class="imgBg">
            <Piggy/>
          </div>
        </div>

        <div className='step1'>
          <div class="imgBg">
            <Comp/>
          </div>
          <div className='textBox'>
            <h1>
            <span>3.</span> Start creating
            </h1>
            <p>
              Investor crowdsource creative burn rate backing bandwidth ownership beta buyer.
            </p>
            <a href='#'>Learn More</a>
          </div>
        </div>

      </header>
    </div>
  );
}

export default About;
