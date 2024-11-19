import React, { useState } from 'react';

const Documents = () => {
  const [isDocumentMenuVisible, setDocumentMenuVisible] = useState(false);

  const handleDocumentMenuHover = () => {
    setDocumentMenuVisible(true);
  };

  const handleDocumentMenuLeave = () => {
    setDocumentMenuVisible(false);
  };

  return (
    <>
      {/* Vertical "Documents" button */}
      <div
        onMouseEnter={handleDocumentMenuHover}
        onMouseLeave={handleDocumentMenuLeave}
        style={{
          position: 'fixed',
          top: '80%',
          right: 0,
          transform: 'translateY(-50%)',
          backgroundColor: ' #7eaada',
          color: '#fff',
          padding: '10px',
          width: '50px',
          height: '200px',
          borderRadius: '8px 0 0 8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          writingMode: 'vertical-rl',
          textAlign: 'center',
          cursor: 'pointer',
          zIndex: 1000,
          fontWeight: '600',
          fontSize: '22px',
        }}
      >
        Documents
      </div>

      {/* Document menu */}
      <div
        style={{
          position: 'fixed',
          top: '25%',
          right: isDocumentMenuVisible ? '0' : '-300px',
          width: '300px',
          height: '50%',
          backgroundColor: '#f4f4f4',
          transition: 'right 0.3s ease',
          padding: '20px',
          zIndex: 999,
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)',
          borderRadius: '8px 0 0 8px',
        }}
        onMouseEnter={handleDocumentMenuHover}
        onMouseLeave={handleDocumentMenuLeave}
      >
        <h3>Documents</h3>
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px', fontSize: '18px' }}>
          <li><a href="fire_flood_print.pdf" target="_blank" rel="noopener noreferrer">Application.pdf</a></li>
          <li><a href="riskmeter_report.pdf" target="_blank" rel="noopener noreferrer">Loss_Runs.pdf</a></li>
          <li><a href="fire_flood_print.pdf" target="_blank" rel="noopener noreferrer">SOVs.pdf</a></li>
          <li><a href="fire_flood_print.pdf" target="_blank" rel="noopener noreferrer">RiskmeterCorelogicReport.pdf</a></li>
          <li><a href="riskmeter_report.pdf" target="_blank" rel="noopener noreferrer">HazardHubReport.pdf</a></li>
          <li><a href="fire_flood_print.pdf" target="_blank" rel="noopener noreferrer">InspectionReport.pdf</a></li>
          <li><a href="riskmeter_report.pdf" target="_blank" rel="noopener noreferrer">Constractor's proof of insurance.pdf</a></li>
        </ul>
      </div>
    </>
  );
};

export default Documents;
