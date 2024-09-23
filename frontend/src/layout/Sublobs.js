import React, { useState } from 'react';
import './Sublob.css'; // Optional, separate styling for LOBs

const Sublobs = () => {
  const [activeLOB, setActiveLOB] = useState('Application/Policy');

  const handleLOBClick = (lob) => {
    setActiveLOB(lob);
  };

  return (
    <div className="lobs">
     {['Application/Policy', 'Location', 'Loss', 'UW', 'Quote Summary','Bind/Issue'].map((lob) => (
        <div
          key={lob}
          className={`lob ${activeLOB === lob ? 'active' : ''}`}
          onClick={() => handleLOBClick(lob)}
        >
          {lob}
        </div>
      ))}
    </div>
  );
};

export default Sublobs;
