import React, { useState } from 'react';
import { Card, Col, Row, Popover,  Button  } from 'antd';

const LocationCard = () => {
  // Define threshold limits for each score
  const floodScore = 40;
  const wildfireScore = 60;
  const earthquakeScore = 5;
  const stormSurgeScore = 70;
  const sinkholeScore = 20;

  // Define a function to check if a score exceeds a threshold and apply the background color
  const getBackgroundColor = (score, limit = 50) => {
    return score > limit ? '#ffcccc' : '#e4f3f8';
  };
  const [open, setOpen] = useState(false);
  const hide = () => {
    setOpen(false);
  };
  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
  };
  return (
    <>
      <Row gutter={16}>
        <Col span={8}>
          <Card
            title={<div style={{ color: 'black' }}>Flood:</div>}
            headStyle={{ borderBottom: '2px solid gray' }}
            style={{
              width: 350,
              height: 230,
              border: '1px solid grey',
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
              borderRadius: '8px',
              backgroundColor: getBackgroundColor(floodScore),
              marginBottom: '20px',
            }}
          >
            <p style={{ color: 'black', margin: 0, fontSize: '16px', display: 'flex', justifyContent: 'space-between' }}>
              <span>Flood Risk Score</span> <span>{floodScore}</span>
            </p>
            <p style={{ color: 'black', margin: 0, fontSize: '16px', display: 'flex', justifyContent: 'space-between' }}>
              <span>Flood Zone</span> <span>AE</span>
            </p>
            <p style={{ color: 'black', margin: 0, fontSize: '16px', display: 'flex', justifyContent: 'space-between' }}>
              <span>Elevation Variance</span> <span>-1.1ft</span>
            </p>
            <p style={{ color: 'black', margin: 0, fontSize: '16px', display: 'flex', justifyContent: 'space-between' }}>
              <span>Property Elevation</span> <span>6ft</span>
            </p>

            <Row gutter={5} style={{ marginTop: 'auto' }}>
              <Col span={12}>
                {/* <button
                  style={{
                    width: '100%',
                    height: '30px',
                    backgroundColor: '#003f5c',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    padding: '1px 0',
                    marginTop: '10px',
                  }}
                >
                  <b style={{ fontSize: '12px' }}>View More</b>
                </button> */}
               <Popover
  content={
    <div > {/* Set the desired width */}
      <a onClick={hide} style={{ color: 'blue', margin: 0, fontSize: '16px', }}>
        <p style={{ color: 'black', margin: 0, fontSize: '16px', display: 'flex', justifyContent: 'space-between' }}>
          <span>Base Flood Risk Score</span> <span>16</span>
        </p>
        <p style={{ color: 'black', margin: 0, fontSize: '16px', display: 'flex', justifyContent: 'space-between' }}>
          <span>Structure Intersect</span> <span>YES</span>
        </p>
        <p style={{ color: 'black', margin: 0, fontSize: '16px', display: 'flex', justifyContent: 'space-between' }}>
          <span>Water Surface Elevation</span> <span>NA</span>
        </p>
        <p style={{ color: 'black', margin: 0, fontSize: '16px', display: 'flex', justifyContent: 'space-between' }}>
          <span>Risk Rating</span> <span>Very Low</span>
        </p>
        <p style={{ color: 'black', margin: 0, fontSize: '16px', display: 'flex', justifyContent: 'space-between' }}>
          <span>Base Risk Rating</span> <span>Low</span>
        </p>
        <p style={{ color: 'black', margin: 0, fontSize: '16px', display: 'flex', justifyContent: 'space-between' }}>
          <span>MAP Date</span> <span>05-09-2007</span>
        </p>
        Close
      </a>
    </div>
  }
  trigger="click"
  open={open}
  onOpenChange={handleOpenChange}
  overlayStyle={{ width: '400px' }} // Set custom width here
>
  <Button type="primary"
  style={{
    width: '100%',
    height: '30px',
    backgroundColor: '#003f5c',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    padding: '1px 0',
    marginTop: '10px',
  }}
  >View more</Button>
</Popover>

              </Col>
            </Row>
          </Card>
        </Col>

        <Col span={8}>
          <Card
            title={<div style={{ color: 'black' }}>Wildfire:</div>}
            headStyle={{ borderBottom: '2px solid gray' }}
            style={{
              width: 350,
              height: 230,
              border: '1px solid grey',
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
              borderRadius: '8px',
              backgroundColor: getBackgroundColor(wildfireScore),
            }}
          >
            <p style={{ color: 'black', margin: 0, fontSize: '16px', display: 'flex', justifyContent: 'space-between' }}>
              <span>Wildfire Risk Score</span> <span>{wildfireScore}</span>
            </p>
            <p style={{ color: 'black', margin: 0, fontSize: '16px', display: 'flex', justifyContent: 'space-between' }}>
              <span>Risk Description</span> <span>Urban</span>
            </p>
            <p style={{ color: 'black', margin: 0, fontSize: '16px', display: 'flex', justifyContent: 'space-between' }}>
              <span>Number of Past Fires</span> <span>0</span>
            </p>

            <Row gutter={5} style={{ marginTop: 'auto' }}>
              <Col span={12}>
                <button
                  style={{
                    width: '100%',
                    height: '30px',
                    backgroundColor: '#003f5c',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    padding: '5px 0',
                    marginTop: '35px',
                  }}
                >
                  <b style={{ fontSize: '12px' }}>View More</b>
                </button>
              </Col>
            </Row>
          </Card>
        </Col>

        <Col span={8}>
          <Card
            title={<div style={{ color: 'black' }}>Earthquake</div>}
            headStyle={{ borderBottom: '2px solid gray' }}
            style={{
              width: 350,
              height: 230,
              border: '1px solid gray',
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
              borderRadius: '8px',
              backgroundColor: getBackgroundColor(earthquakeScore), // Use a different threshold if needed
            }}
          >
            <p style={{ color: 'black', margin: 0, fontSize: '16px', display: 'flex', justifyContent: 'space-between' }}>
              <span>USA Earthquake Risk Score</span> <span>{earthquakeScore}</span>
            </p>

            <Row gutter={5} style={{ marginTop: 'auto' }}>
              <Col span={12}>
                <button
                  style={{
                    width: '100%',
                    height: '30px',
                    backgroundColor: '#003f5c',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    padding: '5px 0',
                    marginTop: '80px',
                  }}
                >
                  <b style={{ fontSize: '12px' }}>View More</b>
                </button>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>

      <Row gutter={10}>
        {/* Add similar threshold-based background for remaining cards */}
        <Col span={8}>
          <Card
            title={<div style={{ color: 'black' }}>Storm Surge</div>}
            headStyle={{ borderBottom: '2px solid gray' }}
            style={{
              width: 350,
              height: 230,
              border: '1px solid gray',
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
              borderRadius: '8px',
              backgroundColor: getBackgroundColor(stormSurgeScore), // Custom threshold if needed
            }}
          >
            <p style={{ color: 'black', margin: 0, fontSize: '16px', display: 'flex', justifyContent: 'space-between' }}>
              <span>Storm Surge</span> <span>{stormSurgeScore}</span>
            </p>
            <p style={{ color: 'black', margin: 0, fontSize: '16px', display: 'flex', justifyContent: 'space-between' }}>
              <span>Hail Probability</span> <span>Very low</span>
            </p>
            <p style={{ color: 'black', margin: 0, fontSize: '16px', display: 'flex', justifyContent: 'space-between' }}>
              <span>Tornado Exposure</span> <span>5-Very High</span>
            </p>
            <p style={{ color: 'black', margin: 0, fontSize: '16px', display: 'flex', justifyContent: 'space-between' }}>
              <span>Wind Pool Eligibility</span> <span>Out</span>
            </p>

            <Row gutter={5} style={{ marginTop: 'auto' }}>
              <Col span={12}>
                <button
                  style={{
                    width: '100%',
                    height: '30px',
                    backgroundColor: '#003f5c',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    padding: '5px 0',
                    marginTop: '10px',
                  }}
                >
                  <b style={{ fontSize: '12px' }}>View More</b>
                </button>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col span={8}>
          <Card
            title={<div style={{ color: 'black' }}>Sinkhole</div>}
            headStyle={{ borderBottom: '2px solid gray' }}
            style={{
              width: 350,
              height: 230,
              border: '1px solid gray',
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
              borderRadius: '8px',
              backgroundColor: getBackgroundColor(sinkholeScore), // Custom threshold if needed
            }}
          >
            <p style={{ color: 'black', margin: 0, fontSize: '16px', display: 'flex', justifyContent: 'space-between' }}>
              <span>Sinkhole Risk</span> <span>Extreme</span>
            </p>
            <p style={{ color: 'black', margin: 0, fontSize: '16px', display: 'flex', justifyContent: 'space-between' }}>
              <span>Sinkhole Score</span> <span>{sinkholeScore}</span>
            </p>



            <Row gutter={5} style={{ marginTop: 'auto' }}>

              <Col span={12}>
                <button
                  style={{
                    width: '100%',
                    height: "30px",
                    backgroundColor: '#003f5c',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    padding: '5px 0',
                    marginTop: "54px"

                  }}
                >
                  <b style={{ fontSize: "12px" }}>View More</b>
                </button>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col span={8}>
          <Card
            title={<div style={{ color: 'black' }}>Fire Station</div>}
            headStyle={{ borderBottom: '2px solid gray' }}
            style={{
              width: 350,
              height: 230,
              border: '1px solid gray',
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
              borderRadius: '8px',
              backgroundColor: '#e4f3f8',
              marginBottom: '20px',
            }}
          >
            <p style={{ color: 'black', margin: 0, fontSize: '16px', display: 'flex', justifyContent: 'space-between' }}>
              <span>Fire Protected Class</span> <span>Fully Protected</span>
            </p>
            <p style={{ color: 'black', margin: 0, fontSize: '16px', display: 'flex', justifyContent: 'space-between' }}>
              <span>Distance from Fire Station</span> <span>2.1 Miles</span>
            </p>

            <Row gutter={5} style={{ marginTop: 'auto' }}>

              <Col span={12}>
                <button
                  style={{
                    width: '100%',
                    height: "30px",
                    backgroundColor: '#003f5c',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    padding: '5px 0',
                    marginTop: "55px"

                  }}
                >
                  <b style={{ fontSize: "12px" }}>View More</b>
                </button>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default LocationCard;
