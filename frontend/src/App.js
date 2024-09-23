import React from 'react';
import Sidebar from './layout/Sidebar';
import Header from './layout/Header';
import LOBs, { PolicyCards } from './layout/PolicyCards';
import './App.css'; // Global styles
import Sublobs from './layout/Sublobs';
import PolicyForm from './layout/PolicyForm';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <Header />
         <PolicyCards/>
        <Sublobs/>
        <PolicyForm/>

      </div>
    </div>
  );
}

export default App;

