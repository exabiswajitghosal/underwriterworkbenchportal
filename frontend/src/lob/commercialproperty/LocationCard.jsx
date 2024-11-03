import React from 'react';
import { Card, Col, Row } from 'antd';

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
            <p style={{ color: 'black', margin: 0, fontSize: '16px' }}>Flood Risk Score: {floodScore}</p>
            <p style={{ color: 'black', margin: 0, fontSize: '16px' }}>Flood Zone: AE</p>
            <p style={{ color: 'black', margin: 0, fontSize: '16px' }}>Elevation Variance: -1.1ft</p>
            <p style={{ color: 'black', margin: 0, fontSize: '16px' }}>Property Elevation: 6ft</p>
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
                    padding: '1px 0',
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
            <p style={{ color: 'black', margin: 0, fontSize: '16px' }}>Wild Risk Score: {wildfireScore}</p>
            <p style={{ color: 'black', margin: 0, fontSize: '16px' }}>Risk Description: Urban</p>
            <p style={{ color: 'black', margin: 0, fontSize: '16px' }}>Number of Past Fires: 0</p>
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
            <p style={{ color: 'black', margin: 0, fontSize: '16px' }}>USA Earthquake Risk Score: {earthquakeScore}</p>
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
            <p style={{ color: 'black', margin: 0, fontSize: '16px' }}>Storm Surge: {stormSurgeScore}</p>
            <p style={{ color: 'black', margin: 0, fontSize: '16px' }}>Hail Probability: Very low</p>
            <p style={{ color: 'black', margin: 0, fontSize: '16px' }}>Tornado Exposure: 5-Very High</p>
            <p style={{ color: 'black', margin: 0, fontSize: '16px' }}>Wind Pool Eligibility: Out</p>
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
          <p style={{ color: 'black', margin: 0 ,fontSize:"16px"}}>Sinkhole Risk: Extreme</p>
          <p style={{ color: 'black', margin: 0 ,fontSize:"16px"}}>Sinkhole Score: {sinkholeScore}</p>
  
          
          <Row gutter={5} style={{ marginTop: 'auto' }}>
          
          <Col span={12}>
            <button
              style={{
                width: '100%',
                height:"30px",
                backgroundColor: '#003f5c',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                padding: '5px 0',
                marginTop:"54px"
                
              }}
            >
              <b style={{fontSize:"12px"}}>View More</b>
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
            <p style={{ color: 'black', margin: 0 ,fontSize:"16px"}}>Fire Protected Class: Fully Protected</p>
            <p style={{ color: 'black', margin: 0 ,fontSize:"16px"}}>Distance from Fire Station: 2.1 Miles</p>
            <Row gutter={5} style={{ marginTop: 'auto' }}>
          
          <Col span={12}>
            <button
              style={{
                width: '100%',
                height:"30px",
                backgroundColor: '#003f5c',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                padding: '5px 0',
                marginTop:"55px"
                
              }}
            >
              <b style={{fontSize:"12px"}}>View More</b>
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
