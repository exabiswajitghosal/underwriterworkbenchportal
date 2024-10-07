import React from 'react';
import styles from './LocationComponent.module.css';
import {LocationHeader} from './LocationHeader';
import {LocationTable} from './LocationTable';

import Documents from '../../layout/RightSidebar';
import {LocationForm} from '../../layout/Location';
import { Col, Row } from 'antd';
import LocationTable2 from './LocationTable 2';

export function LocationComponent() {
  return (
    <Row>
      <Col span={20}>
    <main className={styles.mainContainer}>
      <LocationHeader />
      <LocationTable />
      {/* <LocationForm/> */}
      
    </main></Col>
    <Col span={4}><Documents/></Col>
       </Row>
  );
}

export default LocationComponent;