import React, { useState } from "react";
import "./UWQuestions.css";
import { Col, Row } from 'antd';
import Documents from "./RightSidebar";
import ModalDesign from "./Modal";
import FormInput from "../components/FormInput";
import DropdownSelect from "../components/FormDropdown";

const uwquestionsData = [
  { question: "Is the applicant a subsidiary of another entity?", response: "no", comment: "The applicant operates independently and is not owned by another entity." },
  { question: "Does the applicant have any subsidiaries?", response: "yes", comment: "The applicant has subsidiaries, which may affect risk assessment." },
  { question: "Is a formal safety program in operation?", response: "no", comment: "There is no formal safety program in place to mitigate risks." },
  { question: "Any exposure to flammables, explosives, and chemicals?", response: "na", comment: "Not applicable; the applicant does not engage in activities involving flammables or explosives." },
  { question: "Any other insurance with this company?", response: "no", comment: "The applicant does not hold any additional policies with our company." },
  { question: "Any policy or coverage declined, canceled, or non-renewed during the prior 3 years?", response: "na", comment: "Not applicable; no relevant history of declined or canceled policies." },
  { question: "Any uncorrected fire code violations?", response: "yes", comment: "There are existing fire code violations that need to be addressed." },
  { question: "Has the applicant had a foreclosure, repossession, or bankruptcy during the last five years?", response: "no", comment: "The applicant has not faced any financial setbacks in the past five years." },
];

const UWQuestions = () => {
  const [questions, setQuestions] = useState(uwquestionsData);
  const [notes, setNotes] = useState("This is a uwquestions overall feedback.");

  const handleResponseChange = (index, newResponse) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index].response = newResponse;
    setQuestions(updatedQuestions);
  };

  const handleCommentChange = (index, newComment) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index].comment = newComment;
    setQuestions(updatedQuestions);
  };

  return (
    <Row>
      <Col span={24}>
        <div className="mainContainer" id="uw">
          {/* <div className="side-by-side-container"> */}
            <div className="uw-questions-section">
              <h2>UW Questions</h2>
              <table id="underwriting-Table">
                <thead>
                  <tr>
                    <th className="table-header" style={{ width: '40%' }}>Questions</th>
                    <th className="table-header" style={{ width: '15%' }}>Response</th>
                    <th className="table-header" style={{ width: '45%' }}>Comment</th>
                  </tr>
                </thead>
                <tbody>
                  {questions.map((item, index) => (
                    <tr key={index}>
                      <td><b>{item.question}</b></td>
                      <td>
                        <DropdownSelect 
                        options={[{value:'yes',label:"Yes"},{value:'no',label:'No'},{value:'na',label:'Not Applicable'}]}
                        required={true}
                        value={item.response}
                        />
                        
                      </td>
                      <td>
                        <FormInput 
                          value={item.comment} 
                          onChange={(e) => handleCommentChange(index, e.target.value)} 
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            {/* </div> */}
          </div>

          {/* Notes Section */}
          <h4 style={{ marginTop: '20px' }}>Notes:</h4>
          <textarea 
            className="notes" 
            placeholder="" 
            value={notes} 
            onChange={(e) => setNotes(e.target.value)}
          />

          {/* Decision Section */}
          <div className="decision-section">
            <h4>Decision:</h4>
            <div className="decision-container">
              <ModalDesign />
            </div>
          </div>
        </div>
      </Col>
      {/* Uncomment and use if Documents component is needed in future */}
      {/* <Col span={4}>
        <Documents />
      </Col> */}
    </Row>
  );
};

export default UWQuestions;
