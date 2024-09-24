import React, { useState } from 'react';
import PolicyForm from './PolicyForm';
import QuoteSummary from './quoteSummary';
import { LocationComponent } from '../lob/commercialproperty/LocationComponent';
import './Sublob.css'; // Make sure to import the CSS

const Sublob = () => {
  const [activeSection, setActiveSection] = useState('');

  const showSublob = (sectionId) => {
    setActiveSection(sectionId);
  };

  return (
    <div className='lobs'>
      <div className="sublob">
        <div
          id="policy"
          className={`sublob-item ${activeSection === 'policyInfo' ? 'active' : ''}`}
          onClick={() => showSublob('policyInfo')}
        >
          <i className="fas fa-file-alt"></i> Application/Policy
        </div>
        <div
          id="Location"
          className={`sublob-item ${activeSection === 'locationInfo' ? 'active' : ''}`}
          onClick={() => showSublob('locationInfo')}
        >
          <i className="fas fa-map-marker-alt"></i> Location
        </div>
        <div
          id="Loss"
          className={`sublob-item ${activeSection === 'lossInfo' ? 'active' : ''}`}
          onClick={() => showSublob('lossInfo')}
        >
          <i className="fas fa-exclamation-triangle"></i> Loss
        </div>
        <div
          id="uwquestion"
          className={`sublob-item ${activeSection === 'uw' ? 'active' : ''}`}
          onClick={() => showSublob('uw')}
        >
          <i className="fas fa-question-circle"></i> UW
        </div>
        <div
          id="uwdecision"
          className={`sublob-item ${activeSection === 'quoteSummary' ? 'active' : ''}`}
          onClick={() => showSublob('quoteSummary')}
        >
          <i className="fas fa-gavel"></i> Quote Summary
        </div>
        <div
          id="bindIssue"
          className={`sublob-item ${activeSection === 'bindIssue' ? 'active' : ''}`}
          onClick={() => showSublob('bindIssue')}
        >
          <i className="fas fa-gavel"></i> Bind/Issue
        </div>
      </div>

      {/* Conditional rendering based on the active section */}
      {activeSection === 'policyInfo' && (
      <div className="sublob-item.active" id="policyInfo">
          <PolicyForm />
        </div>
      )}
      {activeSection === 'locationInfo' && (
        <div className="sublob-item.active" id="locationInfo">
          Location Information <LocationComponent />
        </div>
      )}
      {activeSection === 'lossInfo' && (
        <div className="sublob-item.active" id="lossInfo">
          Loss Information
        </div>
      )}
      {activeSection === 'uw' && (
        <div className="sublob-item.active" id="uw">
          Underwriting Questions
        </div>
      )}
      {activeSection === 'quoteSummary' && (
        <div className="sublob-item.active" id="quoteSummary">
          Quote Summary <QuoteSummary />
        </div>
      )}
      {activeSection === 'bindIssue' && (
        <div className="sublob-item.active" id="bindIssue">
          Bind/Issue
        </div>
      )}
    </div>
  );
};

export default Sublob;
