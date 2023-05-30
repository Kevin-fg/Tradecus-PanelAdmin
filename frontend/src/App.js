import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Routers from './router/Routers';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="content-container">
        <Navbar />
        <div className="content">
          <Routers />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
