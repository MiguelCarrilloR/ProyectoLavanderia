import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="app">
      <header className="header">
        <img src="https://i.imgur.com/esKP4yV.png" alt="Lavaseco Primavera Logo" />
        <button className="admin-button">
          <span>Administrador</span>
          <span className="menu-icon">☰</span>
        </button>
      </header>
      <main className="main">
        <div className="option-grid">
          <Link to="/billing">
          <div className="option-card">
            <img src="https://i.imgur.com/EPNITMk.png" alt="Facturación" className="card-icon" />
            <span>Facturación</span>
          </div>
          </Link>
          <div className="option-card">
            <img src="https://i.imgur.com/DbRqShf.png" alt="Gestión de Inventario" className="card-icon" />
            <span>Gestión De Inventario</span>
          </div>
          <div className="option-card">
            <img src="https://i.imgur.com/Vw0Phbp.png" alt="Seguimiento de Costos" className="card-icon" />
            <span>Seguimiento De Costos</span>
          </div>
          <div className="option-card">
            <img src="https://i.imgur.com/ocWnz7Q.png" alt="Generación de Informes" className="card-icon" />
            <span>Generación De Informes</span>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
