import React from "react";
import styles from "./PolicyForm.module.css";
import { MapView } from "../lob/commercialproperty/Map";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row } from "antd";
import FormInput from "../components/FormInput ";
import "./Tab.css";
export function LocationForm() {
  const [activeTab, setActiveTab] = useState("Tab1"); // Set default tab

  // Function to open the selected tab
  const openMainTab = (event, tabName) => {
    setActiveTab(tabName);
  };
  return (
    <div className={styles.container}>
      <div>
        {/* Tab Buttons */}
        <div className="tab">
          <button
            className={`tablinks ${activeTab === "Tab1" ? "active" : ""}`}
            onClick={(event) => openMainTab(event, "Tab1")}
          >
            Details
          </button>
          <button
            className={`tablinks ${activeTab === "Tab2" ? "active" : ""}`}
            onClick={(event) => openMainTab(event, "Tab2")}
          >
            Coverages
          </button>
          <button
            className={`tablinks ${activeTab === "Tab3" ? "active" : ""}`}
            onClick={(event) => openMainTab(event, "Tab3")}
          >
            Additional Interest
          </button>
        </div>
        {/* Tab Content */}
        {activeTab === "Tab1" && (
          <div id="Tab1" className="tabcontent">
            <h5 className={styles.sectionTitle}>Building Information</h5>
            <Row gutter={16}>
              <Col span={12}>
                <Row gutter={26}>
                  <Col span={10}>
                    <FormInput
                      label="Location"
                      value="1: 2134 Parkway, Pigeon Forge, CA"
                      reqired={true}
                    />
                  </Col>
                  <Col span={10}>
                    <FormInput
                      label="Description"
                      value="Businnes property"
                      reqired={true}
                    />
                  </Col>

                  <Col span={10}>
                    <FormInput
                      label="Class Code"
                      value="787737"
                      reqired={true}
                      readOnly
                    />
                  </Col>
                  <Col span={10}>
                    <FormInput
                      label="Property Class Description"
                      value="functional property"
                      reqired={true}
                    />
                  </Col>
                  <Col span={10}>
                    <FormInput
                      label="Coverage Form"
                      value="None"
                      reqired={true}
                      readOnly
                    />
                  </Col>
                  <Col span={10}>
                    <FormInput
                      label="Rate Type"
                      value="Class"
                      reqired={true}
                      readOnly
                    />
                  </Col>
                  <Col span={10}>
                    <label className="customlable">Construction</label>
                  </Col>
                  <Col span={10}>
                    <label className="customlable"></label>
                  </Col>
                  <Col span={10}>
                    <FormInput
                      label="Year Built"
                      value="2020"
                      reqired={true}
                      readOnly
                    />
                  </Col>
                  <Col span={10}>
                    <FormInput
                      label="Construction Type"
                      value="None"
                      reqired={true}
                      readOnly
                    />
                  </Col>

                  <Col span={10}>
                    <FormInput
                      label="# of Stories"
                      value="2"
                      reqired={true}
                      readOnly
                    />
                  </Col>
                  <Col span={10}>
                    <FormInput
                      label="# of Basements"
                      value="1"
                      reqired={true}
                      readOnly
                    />
                  </Col>
                  <Col span={10}>
                    <FormInput
                      label="Total Area (excl basement)"
                      value="1200"
                      reqired={true}
                      readOnly
                    />
                  </Col>
                </Row>
              </Col>
              <Col span={10}>
                <Row gutter={16}>
                  <Col span={12}>
                    <label>
                      <div>
                        <MapView />
                      </div>
                    </label>
                  </Col>
                  <Col span={15}>
                    <label className="customlable"></label>
                  </Col>
                  <Col span={15}>
                    <label>
                      <h5 className={styles.sectionTitle}>Burglar Alarm</h5>
                    </label>
                  </Col>
                  <Col span={15}>
                    <label className="customlable"></label>
                  </Col>
                  <Col span={12}>
                    <FormInput
                      label="Burglary Safeguard"
                      value="None"
                      readOnly
                      reqired={true}
                    />
                  </Col>
                  <Col span={12}>
                    <FormInput
                      label="Has Alarm"
                      type="checkbox"
                      readOnly
                      reqired={true}
                    />
                  </Col>
                  <Col span={12}>
                    <label>
                      <h5 className={styles.sectionTitle}>Improvements</h5>
                    </label>
                  </Col>
                  <Col span={12}>
                    <label className="customlable"></label>
                  </Col>

                  <Col span={12}>
                    <FormInput
                      label="Year of Last Update - Heating"
                      value="2022"
                      readOnly
                      reqired={true}
                    />
                  </Col>
                  <Col span={12}>
                    <FormInput
                      label="Year of Last Update - Plumbing"
                      value="2015"
                      readOnly
                      reqired={true}
                    />
                  </Col>
                  <Col span={12}>
                    <FormInput
                      label="Year of Last Update - Roofing"
                      value="2021"
                      readOnly
                      reqired={true}
                    />
                  </Col>
                  <Col span={12}>
                    <FormInput
                      label="Year of Last Update - Wiring"
                      value="2015"
                      readOnly
                      reqired={true}
                    />
                  </Col>
                  <Col span={12}>
                    <label>
                      <h3 className={styles.sectionTitle}>Other</h3>
                    </label>
                  </Col>
                  <Col span={12}></Col>
                  <Col span={12}>
                    <FormInput
                      label="Interest Type"
                      value="None"
                      readOnly
                      reqired={true}
                    />
                  </Col>
                  <Col span={12}>
                    <FormInput
                      label="Rented To Others"
                      value="None"
                      readOnly
                      reqired={true}
                    />
                  </Col>
                  <Col span={12}>
                    <FormInput
                      label="% Vacant"
                      value="None"
                      readOnly
                      reqired={true}
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        )}

        {activeTab === "Tab2" && (
          <div id="Tab2" className="tabcontent">
            <Row gutter={16}>
              <Col span={12}>
                <Row gutter={26}>
                  <Col span={15}>
                    <label>
                      <h6 className={styles.sectionTitle}>
                        Building Coverages
                      </h6>
                    </label>
                  </Col>
                  <Col span={5}></Col>

                  <Col span={10}>
                    <FormInput
                      label="Limit:"
                      value="100,000"
                      reqired={true}
                      readOnly
                    />
                  </Col>
                  <Col span={10}>
                    <FormInput
                      label="Cause of loss:"
                      value="Basic"
                      reqired={true}
                    />
                  </Col>
                  <Col span={10}>
                    <FormInput
                      label="Exclude Vandalism:"
                      value="Yes"
                      reqired={true}
                      readOnly
                    />
                  </Col>
                  <Col span={10}>
                    <FormInput
                      label="Exclude Sprinkler:"
                      value="Yes"
                      reqired={true}
                      readOnly
                    />
                  </Col>

                  <Col span={10}>
                    <FormInput
                      label="Deductible:"
                      value="2500"
                      reqired={true}
                      readOnly
                    />
                  </Col>
                  <Col span={10}>
                    <FormInput
                      label="Wind % Deductible:"
                      value="2%"
                      reqired={true}
                      readOnly
                    />
                  </Col>

                  <Col span={10}>
                    <FormInput
                      label="Valuation Method"
                      value="Replacement Cost"
                      reqired={true}
                      readOnly
                    />
                  </Col>
                  <Col span={10}>
                    <FormInput
                      label="Coinsurance:"
                      value="80%"
                      reqired={true}
                      readOnly
                    />
                  </Col>
                  <Col span={10}>
                    <FormInput
                      label="Reporting Form:"
                      value="Non Reporting"
                      reqired={true}
                      readOnly
                    />
                  </Col>
                </Row>
              </Col>
              <Col span={10}>
                <Row gutter={16}>
                  <Col span={25}>
                    <label>
                      <h5 className={styles.sectionTitle}>
                        Business Income Coverage
                      </h5>
                    </label>
                  </Col>
                  <Col span={4}>
                    <label className="customlable"></label>
                  </Col>
                  <Col span={12}>
                    <FormInput
                      label="Income Limit - Not Mfg or Rental:"
                      value="2500"
                      readOnly
                      reqired={true}
                    />
                  </Col>
                  <Col span={12}>
                    <FormInput
                      label="Coinsurance %:"
                      value="1200"
                      readOnly
                      reqired={true}
                    />
                  </Col>

                  <Col span={12}>
                    <FormInput
                      label="Coinsurance %:"
                      value="80%"
                      readOnly
                      reqired={true}
                    />
                  </Col>
                  <Col span={12}>
                    <FormInput
                      label="Waiting Period (in hours):"
                      value="72"
                      readOnly
                      reqired={true}
                    />
                  </Col>
                  <Col span={12}>
                    <FormInput
                      label="Period of Coverage (in days):"
                      value="30"
                      readOnly
                      reqired={true}
                    />
                  </Col>
                  <Col span={12}></Col>
                  <Col span={20}>
                    <label>
                      {" "}
                      <h5 className={styles.sectionTitle}>
                        Extra Expense Coverage
                      </h5>
                    </label>
                  </Col>
                  <Col span={4}></Col>
                  <Col span={12}>
                    <FormInput
                      label="Limit:"
                      value="10,000"
                      readOnly
                      reqired={true}
                    />
                  </Col>
                  <Col span={12}>
                    <FormInput
                      label="Monthly Limit:"
                      value="100%/100%/100%"
                      readOnly
                      reqired={true}
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        )}

        {activeTab === "Tab3" && (
          <div id="Tab3" className="tabcontent">
            <h5>Building Additional Interests</h5>
            <label htmlFor="add_dropdown" className={styles.label}>
              Add from:
            </label>
            <select id="add_dropdown" className={styles.input}>
              <option value="new_company">New Company</option>
              <option value="new_person">New Person</option>
              <option value="from_address_book">From Address Book</option>
              <option value="other_contacts">Other Contacts</option>
            </select>

            <table class="table">
              <caption>List of users</caption>
              <thead>
                <tr>
                  <th scope="col" style={{ backgroundColor: "ghostwhite" }}>
                    <span>Type</span>
                  </th>

                  <th scope="col" style={{ backgroundColor: "ghostwhite" }}>
                    <span>Certificate Required</span>
                  </th>

                  <th scope="col" style={{ backgroundColor: "ghostwhite" }}>
                    <span>Contract Number</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>New Person</td>
                  <td>Yes</td>
                  <td>+3938939983</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
