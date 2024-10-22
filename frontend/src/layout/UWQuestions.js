import React from "react";
import "./UWQuestions.css"; // Importing the CSS
import { Col, Row } from 'antd';
import Documents from "./RightSidebar";
import ModalDesign from "./Modal";

const UWQuestions = () => {
  return (
    <Row>
      <Col span={20}>
        <div className="mainContainer" id="uw">
          <div className="side-by-side-container">
            {/* UW Questions Section */}
            <div className="uw-questions-section">
              <h2>UW Questions</h2>
              <table id="underwriting-Table">
                <thead>
                  <tr>
                    <th className="table-header">Questions</th>
                    <th className="table-header">Response</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    "Is the applicant a subsidiary of another entity?",
                    "Does the applicant have any subsidiaries?",
                    "Is a formal safety program in operation?",
                    "Any Exposure to flammables, Explosives and chemicals?",
                    "Any other insurance with this company?",
                    "Any policy or coverage declined, canceled or non-renewed during the prior 3 years?",
                    "Any uncorrected fire code violations?",
                    "Has applicant had a foreclosure, repossession, bankruptcy during the last five years?"
                  ].map((question, index) => (
                    <tr key={index}>
                      <td><b>{question}</b></td>
                      <td>Yes</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Decision Section */}
            <div className="decision-section">
              <h2 className="decision-header">Decision</h2>
              <div className="decision-container">
                <ModalDesign/>
                {/*<div className="buttons">
                  <button className="action-button">Approve</button>
                  <button className="action-button">Decline</button>
                  <button className="action-button">Referral</button>
                </div>*/}
                <h4 style={{marginTop:'20px'}}>Notes:</h4>
                <textarea className="notes" placeholder=""></textarea>
              </div>
            </div>
          </div>
        </div>
      </Col>
      <Col span={4}>
        <Documents />
       
      </Col>
    </Row>
  );
};

export default UWQuestions;
