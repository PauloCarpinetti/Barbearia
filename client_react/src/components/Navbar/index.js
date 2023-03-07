
import React from 'react';

import './styles.css';

export default function Navbar() {


  return (
    <header>
    <nav className="container">
      <div className="barbearia-nav-content">
        <h1>Barbearia</h1>
        <a href="https://github.com/PauloCarpinetti">
          <div className="barbearia-contact-container">
            
            <p className="barbearia-contact-link">/PauloCarpinetti</p>
          </div>
        </a>
      </div>
    </nav>
  </header>
        )
}


