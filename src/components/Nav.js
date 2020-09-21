import React, {useState, useEffect} from 'react';

import '../App.css';
import { Link } from 'react-router-dom';


const menuItems = [
    'Home', 
    'Support',
    'Messages',
    'Browse'
]
function Nav() {
    return (
        <div className="App">
          <header className="nav">
            <nav>
              <h1 className='nav-header'>Canary</h1>
              {
                menuItems.map(item => (
                <Link 
                  className='nav-link' 
                  key={item} 
                  id={item}
                  >
                    {item}
                </Link>
                ))
              }
            </nav>     
          </header>
    
        </div>
        
      );
}
export default Nav;