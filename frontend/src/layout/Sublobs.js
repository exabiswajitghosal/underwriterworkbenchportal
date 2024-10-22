import React, { useState } from 'react';
import PolicyForm from './PolicyForm';
import QuoteSummary from './quoteSummary';
import './Sublob.css'; // Make sure to import the CSS
import LossInfo from './loss';
import UWQuestions from './UWQuestions';
import '@fortawesome/fontawesome-free/css/all.min.css';
import LocationComponent from '../lob/commercialproperty/LocationComponent';
import { Button, Row, Col } from 'antd';

const Sublob = (props) => {
  const [activeSection, setActiveSection] = useState('');
  const {showAccount}=props;

  const showSublob = (sectionId) => {
    setActiveSection(sectionId);
  };

  return (
    <div style={{ padding: '10px', marginTop: '20px', position: 'relative' }}>
      <Row gutter={[16, 16]} justify="center" align="middle" wrap>
        <Col xs={24} sm={12} md={8} lg={6} xl={4} >
          <Button
            id="policy"
            className={`sublob-item ${activeSection === 'policyInfo' ? 'active' : ''}`}
            onClick={() => {showSublob('policyInfo');showAccount(false);}}
            block style={{width:'13rem'}}
          >
            <i className="fas fa-file-alt"></i> Application/Policy
          </Button>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6} xl={4}>
          <Button
            id="Location"
            className={`sublob-item ${activeSection === 'locationInfo' ? 'active' : ''}`}
            onClick={() => {showSublob('locationInfo'); showAccount(false);}}
            block style={{width:'13rem'}}
          >
            <i className="fas fa-map-marker-alt"></i> Location
          </Button>
        </Col>
        <Col  xs={24} sm={12} md={8} lg={6} xl={4}>
          <Button
            id="Loss"
            className={`sublob-item ${activeSection === 'lossInfo' ? 'active' : ''}`}
            onClick={() => {showSublob('lossInfo');showAccount(false);}}
            block style={{width:'13rem'}}
          >
            <i className="fas fa-exclamation-triangle"></i> Loss
          </Button>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6} xl={4}>
          <Button
            id="uwquestion"
            className={`sublob-item ${activeSection === 'uw' ? 'active' : ''}`}
            onClick={() => {showSublob('uw');showAccount(false);}}
            block style={{width:'13rem'}}
          >
            <i className="fas fa-question-circle"></i> UW
          </Button>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6} xl={4}>
          <Button
            id="uwdecision"
            className={`sublob-item ${activeSection === 'quoteSummary' ? 'active' : ''}`}
            onClick={() => {showSublob('quoteSummary'); showAccount(false);}}
            block style={{width:'13rem'}}
          >
            <i className="fas fa-gavel"></i> Quote Summary
          </Button>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6} xl={4}>
          <Button
            id="bindIssue"
            className={`sublob-item ${activeSection === 'bindIssue' ? 'active' : ''}`}
            onClick={() => {showSublob('bindIssue'); showAccount(false);}}
            block style={{width:'13.5rem'}}
          >
            <i className="fas fa-gavel"></i> Bind/Issue
          </Button>
        </Col>
      </Row>

      {/* Conditional rendering based on the active section */}
      {activeSection === 'policyInfo' && (
        <div className="sublob-item.active" id="policyInfo">
          <PolicyForm />
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
      {activeSection === 'uw' && (
        <div className="sublob-item.active" id="uw">
          <UWQuestions />
        </div>
      )}
      {activeSection === 'quoteSummary' && (
        <div className="sublob-item.active" id="quoteSummary">
          <QuoteSummary />
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
