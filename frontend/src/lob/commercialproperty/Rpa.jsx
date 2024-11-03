import React, { useState } from 'react';
import { Radio, Modal, Typography, Row, Col } from 'antd';

const { Title, Text } = Typography;

function Rpa() {
  const [address, setAddress] = useState('');
  const [showRpa, setShowRpa] = useState(false);
  const [zillowIframeError, setZillowIframeError] = useState(false);
  const [streetEasyIframeError, setStreetEasyIframeError] = useState(false);

  // Sample addresses
  const addresses = {
    // nyAddress1: '456 Park Ave, New York, NY',
    // nyAddress2: '225 Rector Place, New York, NY',
    // nyAddress3: 'Trump World Tower, New York, NY',
    nyAddress1: '1234 Elm Street, New York, NY',
    nyAddress2: '123 Innovation Drive, New York, NY',
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
      <Title level={2}>Search for an Address on Zillow and StreetEasy</Title>
      <div style={{ display: 'flex', alignItems: 'flex-start' }}>
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
          style={{ top: 0 }}
        >
          <RpaWindow
            address={address}
            zillowUrl={generateZillowSearchUrl(address)}
            streetEasyUrl={generateStreetEasyUrl(address)}
            zillowIframeError={zillowIframeError}
            streetEasyIframeError={streetEasyIframeError}
            setZillowIframeError={setZillowIframeError}
            setStreetEasyIframeError={setStreetEasyIframeError}
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
  setStreetEasyIframeError 
}) {
  return (
    <div>
      <Text strong>Address:</Text> <Text>{address}</Text>
      <Row gutter={16} style={{ marginTop: '20px' }}>
        <Col span={12}>
          <div className="iframe-container">
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

        <Col span={12}>
          <div className="iframe-container">
            <iframe
              src={streetEasyIframeError ? null : streetEasyUrl}
              title="StreetEasy Search"
              onError={() => setStreetEasyIframeError(true)}
              style={{ width: '100%', height: '400px', border: '1px solid #ddd' }}
            />
            {streetEasyIframeError && (
              <Text type="danger">StreetEasy iframe could not load. Try opening in a new tab.</Text>
            )}
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Rpa;
