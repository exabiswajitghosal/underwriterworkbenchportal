import React, { useState } from 'react';
import './Sublob.css'; // Import the CSS file for styling
import LossInfo from './loss';
import UWQuestions from './UWQuestions';
import '@fortawesome/fontawesome-free/css/all.min.css';
import LocationComponent from '../lob/commercialproperty/LocationComponent';
import { Button, Row, Col } from 'antd';
import CreateSubmission from '../SidebarComponents/CreateSubmission';
import QuoteSummary from '../lob/commercialproperty/quoteSummary';
import PremiumSummary from '../lob/commercialproperty/PremiumSummary';
import Bind from '../lob/commercialproperty/Bind';
import Coverages from '../lob/commercialproperty/Coverages';

const Sublob2 = (props) => {
  const [activeSection, setActiveSection] = useState('');
  
  const showSublob = (sectionId) => {
    setActiveSection(sectionId);
  };

  return (
    <div style={{ padding: '10px', marginTop: '20px', position: 'relative' }}>
      {/* Reduce the gap between buttons by setting gutter to 8 */}
      <Row gutter={[4, 4]} justify="center" align="stretch">
        <Col xs={22} sm={11} md={7} lg={5} xl={3}>
          <Button
            id="policy"
            className={`sublob-item ${activeSection === 'policyInfo' ? 'active' : ''}`}
            onClick={() => { showSublob('policyInfo') }}
            block style={{ width: '10rem' }}
          >
            <i className="fas fa-file-alt"></i> Insured Info
          </Button>
        </Col>
        <Col xs={22} sm={11} md={7} lg={5} xl={3}>
          <Button
            id="Location"
            className={`sublob-item ${activeSection === 'locationInfo' ? 'active' : ''}`}
            onClick={() => { showSublob('locationInfo') }}
            block style={{ width: '10rem' }}
          >
            <i className="fas fa-map-marker-alt"></i>Risk
          </Button>
        </Col>
        <Col xs={22} sm={11} md={7} lg={5} xl={3}>
          <Button
            id="Loss"
            className={`sublob-item ${activeSection === 'lossInfo' ? 'active' : ''}`}
            onClick={() => { showSublob('lossInfo') }}
            block style={{ width: '10rem' }}
          >
            <i className="fas fa-exclamation-triangle"></i> Loss
          </Button>
        </Col>
        <Col xs={22} sm={11} md={7} lg={5} xl={3}>
          <Button
            id="coverages"
            className={`sublob-item ${activeSection === 'coverages' ? 'active' : ''}`}
            onClick={() => { showSublob('coverages') }}
            block style={{ width: '10rem' }}
          >
            <i className="fas fa-exclamation-triangle"></i> Coverages 
          </Button>
        </Col>
        <Col xs={22} sm={11} md={7} lg={5} xl={3}>
          <Button
            id="uwquestion"
            className={`sublob-item ${activeSection === 'uw' ? 'active' : ''}`}
            onClick={() => { showSublob('uw') }}
            block style={{ width: '10rem' }}
          >
            <i className="fas fa-question-circle"></i> UW
          </Button>
        </Col>
        <Col xs={22} sm={11} md={7} lg={5} xl={3}>
          <Button
            id="premiumSummary"
            className={`sublob-item ${activeSection === 'premiumSummary' ? 'active' : ''}`}
            onClick={() => { showSublob('premiumSummary') }}
            block style={{ width: '10rem' }}
          >
            <i className="fas fa-gavel"></i> Premium Summary
          </Button>
        </Col>
        <Col xs={22} sm={11} md={7} lg={5} xl={3}>
          <Button
            id="quoteSummary"
            className={`sublob-item ${activeSection === 'quoteSummary' ? 'active' : ''}`}
            onClick={() => { showSublob('quoteSummary') }}
            block style={{ width: '10rem' }}
          >
            <i className="fas fa-gavel"></i> Quote Summary
          </Button>
        </Col>
        <Col xs={22} sm={11} md={7} lg={5} xl={3}>
          <Button
            id="bindIssue"
            className={`sublob-item ${activeSection === 'bindIssue' ? 'active' : ''}`}
            onClick={() => { showSublob('bindIssue') }}
            block style={{ width: '10rem' }}
          >
            <i className="fas fa-gavel"></i> Bind/Issue
          </Button>
        </Col>
      </Row>

      {/* Conditional rendering based on the active section */}
      {activeSection === 'policyInfo' && (
        <div className="sublob-item.active" id="policyInfo">
          <CreateSubmission />
        </div>
      )}
      {activeSection === 'locationInfo' && (
        <div className="sublob-item.active" id="locationInfo">
          <LocationComponent />
        </div>
      )}
      {activeSection === 'lossInfo' && (
        <div className="sublob-item.active" id="lossInfo">
          <LossInfo />
        </div>
      )}
      {activeSection === 'coverages' && (
        <div className="sublob-item.active" id="coverages">
          <Coverages/>
        </div>
      )}
      {activeSection === 'uw' && (
        <div className="sublob-item.active" id="uw">
          <UWQuestions />
        </div>
      )}
      {activeSection === 'premiumSummary' && (
        <div className="sublob-item.active" id="premiumSummary">
          <PremiumSummary/>
        </div>
      )}
      {activeSection === 'quoteSummary' && (
        <div className="sublob-item.active" id="quoteSummary">
          <QuoteSummary/>
        </div>
      )}
      {activeSection === 'bindIssue' && (
        <div className="sublob-item.active" id="bindIssue">
          <Bind/>
        </div>
      )}
    </div>
  );
};

export default Sublob2;
