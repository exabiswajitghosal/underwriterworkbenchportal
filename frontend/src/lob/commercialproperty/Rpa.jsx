import React, { useState } from 'react';
import { Radio, Modal, Typography, Row, Col, Checkbox } from 'antd';

const { Text } = Typography;

function Rpa() {
  const [address, setAddress] = useState('');
  const [showRpa, setShowRpa] = useState(false);
  const [zillowIframeError, setZillowIframeError] = useState(false);
  const [streetEasyIframeError, setStreetEasyIframeError] = useState(false);
  const [showZillow, setShowZillow] = useState(false); // Start unchecked
  const [showStreetEasy, setShowStreetEasy] = useState(false); // Start unchecked

  // Sample addresses
  const addresses = {
    nyAddress1: '1234 Elm Street',
    nyAddress2: '123 Innovation Drive',
    nyAddress3: '225 Rector Place, New York, NY',
  };

  // URL generators
  const generateZillowSearchUrl = (address) => `https://www.zillow.com/homes/${encodeURIComponent(address)}`;
  const generateStreetEasyUrl = (address) => {
    const [buildingAddress, cityState] = address.split(',');
    const formattedBuildingAddress = buildingAddress.trim().toLowerCase().replace(/ /g, '-');
    const cityName = cityState ? cityState.trim().split(' ')[0].toLowerCase().replace(/ /g, '-') : 'unknown';
    return `https://streeteasy.com/building/${formattedBuildingAddress}-${cityName}`;
  };

  const handleAddressChange = (e) => {
    const selectedAddress = e.target.value;

    // Reset errors and state to allow reopening of the same address
    setZillowIframeError(false);
    setStreetEasyIframeError(false);
    setShowRpa(false); // Close modal before reopening

    setTimeout(() => {
      setAddress(selectedAddress);
      setShowRpa(true); // Reopen modal after resetting
    }, 0);
  };

  const closeRpa = () => setShowRpa(false);

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ fontSize: '16px', marginBottom: '20px' }}>Search Address</div>
      <div style={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
        
        {/* Checkbox Controls for Zillow and StreetEasy */}
        <div style={{ marginBottom: '10px' }}>
          <Checkbox 
            checked={showZillow} 
            onChange={(e) => setShowZillow(e.target.checked)}
          >
            Zillow
          </Checkbox>
          <Checkbox 
            checked={showStreetEasy} 
            onChange={(e) => setShowStreetEasy(e.target.checked)}
          >
            StreetEasy
          </Checkbox>
        </div>

        {/* Radio Buttons for Sample Addresses */}
        <div style={{ marginRight: '20px', minWidth: '200px' }}>
          <Radio.Group onChange={handleAddressChange} value={address}>
            {Object.keys(addresses).map((key) => (
              <Radio.Button key={key} value={addresses[key]} style={{ display: 'block', marginBottom: '10px' }}>
                {addresses[key]}
              </Radio.Button>
            ))}
          </Radio.Group>
        </div>

        

        <Modal
          title="Address Details"
          visible={showRpa}
          onCancel={closeRpa}
          footer={null}
          width="90%"
          style={{ top: 0, height: '95vh', overflow: 'hidden' }} // Prevents overflow
          bodyStyle={{ overflowY: 'auto', height: 'calc(90vh - 55px)', padding: 0 }} // Adjusts body height and removes horizontal overflow
        >
          <RpaWindow
            address={address}
            zillowUrl={generateZillowSearchUrl(address)}
            streetEasyUrl={generateStreetEasyUrl(address)}
            zillowIframeError={zillowIframeError}
            streetEasyIframeError={streetEasyIframeError}
            setZillowIframeError={setZillowIframeError}
            setStreetEasyIframeError={setStreetEasyIframeError}
            showZillow={showZillow}
            showStreetEasy={showStreetEasy}
          />
        </Modal>
      </div>
    </div>
  );
}

function RpaWindow({ 
  address, 
  zillowUrl, 
  streetEasyUrl, 
  zillowIframeError, 
  streetEasyIframeError, 
  setZillowIframeError, 
  setStreetEasyIframeError, 
  showZillow, 
  showStreetEasy 
}) {
  // Determine column span based on which iframes are selected
  const colSpan = (showZillow && showStreetEasy) ? 12 : 24;

  return (
    <div>
      <Text strong>Address:</Text> <Text>{address}</Text>
      <Row gutter={16} style={{ marginTop: '20px', width: '100%' }}>

        {/* Zillow iframe */}
        {showZillow && (
          <Col span={colSpan} style={{ width: '100%' }}>
            <div className="iframe-container" style={{ width: '100%' }}>
              <iframe
                src={zillowIframeError ? null : zillowUrl}
                title="Zillow Search"
                onError={() => setZillowIframeError(true)}
                style={{ width: '100%', height: '400px', border: '1px solid #ddd' }}
              />
              {zillowIframeError && (
                <Text type="danger">Zillow iframe could not load. Try opening in a new tab.</Text>
              )}
            </div>
          </Col>
        )}

        {/* StreetEasy iframe */}
        {showStreetEasy && !streetEasyIframeError && (
          <Col span={colSpan} style={{ width: '100%' }}>
            <div className="iframe-container" style={{ width: '100%' }}>
              <iframe
                src={streetEasyUrl}
                title="StreetEasy Search"
                onError={() => setStreetEasyIframeError(true)}
                style={{ width: '100%', height: '400px', border: '1px solid #ddd' }}
              />
            </div>
          </Col>
        )}
        
        {showStreetEasy && streetEasyIframeError && (
          <Col span={colSpan} style={{ width: '100%', textAlign: 'center' }}>
            <Text type="danger">StreetEasy iframe could not load. Try searching directly on their website.</Text>
          </Col>
        )}
      </Row>
    </div>
  );
}

export default Rpa;
