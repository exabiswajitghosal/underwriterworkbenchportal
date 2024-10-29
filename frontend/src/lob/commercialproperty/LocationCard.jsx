import React from 'react';
import { Card, Col, Row } from 'antd';

const LocationCard = () => {
  return (
    <>
      <Row gutter={10}>
        <Col span={8}>
          <Card
            title={<div style={{ color: 'black' }}>Flood:</div>}
            headStyle={{ borderBottom: '2px solid gray' }}
            style={{
              width: 200,
              height: 150,
              border: '1px solid grey',
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
              borderRadius: '8px',
              backgroundColor: 'white',
              marginBottom: '20px',
            }}
          >
            <p style={{ color: 'black', margin: 0 ,fontSize:"16px"}}>Flood Score: 8.2</p>
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
                    padding: '1px 0',
                    marginTop:"10px"
                  }}
                >
                  <b  style={{fontSize:"12px"}}>CoreLogic</b>
                </button>
              </Col>
              <Col span={12}>
                <button
                  style={{
                    width: '100%',
                    height:"30px",
                    backgroundColor: '#003f5c',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    padding: '1px 0',
                    marginTop:"10px"
                
                  }}
                >
                  <b style={{fontSize:"12px"}} >Hazard Hub</b>
                </button>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col span={8}>
          <Card
            title={<div style={{ color: 'black' }}>Hurricane & Tornado:</div>}
            headStyle={{ borderBottom: '2px solid gray' }}
            style={{
              width: 200,
              height: 150,
              border: '1px solid grey',
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
              borderRadius: '8px',
              backgroundColor: 'white',
            }}
          >
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
                    marginTop:"35px"
                  }}
                >
                  <b style={{fontSize:"12px"}}>CoreLogic</b>
                </button>
              </Col>
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
                    marginTop:"35px"
                    
                  }}
                >
                  <b style={{fontSize:"12px"}}>Hazard Hub</b>
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
              width: 200,
              height: 150,
              border: '1px solid gray',
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
              borderRadius: '8px',
              backgroundColor: 'white',
            }}
          />
        </Col>
      </Row>
      <Row gutter={10}>
        <Col span={8}>
          <Card
            title={<div style={{ color: 'black' }}>Sinkhole</div>}
            headStyle={{ borderBottom: '2px solid gray' }}
            style={{
              width: 200,
              height: 150,
              border: '1px solid gray',
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
              borderRadius: '8px',
              backgroundColor: 'white',
            }}
          />
        </Col>
        <Col span={8}>
          <Card
            title={<div style={{ color: 'black' }}>Hail & Wind</div>}
            headStyle={{ borderBottom: '2px solid gray' }}
            style={{
              width: 200,
              height: 150,
              border: '1px solid gray',
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
              borderRadius: '8px',
              backgroundColor: 'white',
            }}
          />
        </Col>
        <Col span={8}>
          <Card
            title={<div style={{ color: 'black' }}>Crime</div>}
            headStyle={{ borderBottom: '2px solid gray' }}
            style={{
              width: 200,
              height: 150,
              border: '1px solid gray',
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
              borderRadius: '8px',
              backgroundColor: 'white',
              marginBottom: '20px',
            }}
          />
        </Col>
      </Row>
    </>
  );
};

export default LocationCard;
