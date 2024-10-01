import React from 'react';
import './RightSidebar.css'; // CSS file for styling


const Documents = () => {
  return (
    <div className="sidebar">
      <h5 className="sidebar-header"> Documents</h5>
      <div className="sidebar-links">
        <a href="document1.pdf" target="_blank" rel="noopener noreferrer">
          Application Form
        </a>
        <a href="document2.pdf" target="_blank" rel="noopener noreferrer">
          Loss Run
        </a>
        <a href="document3.pdf" target="_blank" rel="noopener noreferrer">
          Corelogic Riskmeter
        </a>
      </div>
    </div>
  );
};

export default Documents;
