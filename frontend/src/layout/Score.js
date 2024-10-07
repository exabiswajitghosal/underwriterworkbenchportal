import React, { useState } from 'react';
import "./Score.css";


const ScoreComponent = () => {
  // States to toggle the visibility of the circles
  const [isCircleVisible, setIsCircleVisible] = useState(false);
  const [isCircle2Visible, setIsCircle2Visible] = useState(false);

  // Function to toggle first circle visibility
  const toggleCircle = () => {
    setIsCircleVisible(!isCircleVisible);
  };

  // Function to toggle second circle visibility
  const toggleCircle2 = () => {
    setIsCircle2Visible(!isCircle2Visible);
  };

  return (
    <div className="column">
      <div className="score-container">
        <button onClick={toggleCircle} className="score-title">Submission Score</button>
        <div
          id="circle"
          className={`circle ${isCircleVisible ? '' : 'hidden'}`}
          style={{ border: '8px solid #007bff' }}
        >
          <div className="percent">100%</div>
        </div>
      </div>
      
      <div className="score-container">
        <button onClick={toggleCircle2} className="score-title">Risk Score</button>
        <div
          id="circle2"
          className={`circle ${isCircle2Visible ? '' : 'hidden'}`}
          style={{ border: '8px solid rgb(12, 163, 12)' }}
        >
          <div className="percent">100%</div>
        </div>
      </div>
    </div>
  );
};

export default ScoreComponent;
