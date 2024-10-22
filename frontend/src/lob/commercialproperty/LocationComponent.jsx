import React from "react";
import styles from "./LocationComponent.module.css";
import { LocationHeader } from "./LocationHeader";


import Documents from "../../layout/RightSidebar";

import { Col, Row } from "antd";

import Tableantd
 from "../../layout/Tableantd";

export function LocationComponent() {
  return (
    <Row>
      <Col span={20}>
        <main className={styles.mainContainer}>
          <LocationHeader />
          <Tableantd/>
          {/* <LocationForm/> */}
        </main>
      </Col>
      <Col span={4}>
        <Documents />
       
      </Col>
    </Row>
  );
}

export default LocationComponent;
