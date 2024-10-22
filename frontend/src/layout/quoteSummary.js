import React from "react";
import "./QuoteSummary.css"; // Assuming you have your styles in a separate CSS file
import { Col, Row } from "antd";
import Documents from "./RightSidebar";
const QuoteSummary = () => {
  return (
    <Row>
      <Col span={20}>
        <div className="maincontainer" id="quoteSummary">
          <div style={{ marginTop: "20px" }}>
            {/* Quote Details */}
            <div style={{ width: "50%", float: "left" }}>
              <h2>Quote</h2>
              <table className="quote-table">
                <tbody>
                  <tr>
                    <td>
                      <strong>Submission Number</strong>
                    </td>
                    <td>0000122428</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Policy Period</strong>
                    </td>
                    <td>09/03/2024 - 09/03/2025</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Primary Named Insured</strong>
                    </td>
                    <td>Workers Comp Test</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Address</strong>
                    </td>
                    <td>2134 Parkway, CA 37863-2995</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>County</strong>
                    </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Address Type</strong>
                    </td>
                    <td>Billing</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Address Description</strong>
                    </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Underwriting Company</strong>
                    </td>
                    <td>Acme Low Hazard Insurance</td>
                  </tr>
                </tbody>
              </table>

              {/* Premiums Section */}
              <h3>Premiums</h3>
              <table className="premium-table">
                <thead>
                  <tr>
                    <th>#Description</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan="2">1:2134 Parkway, Pigeon Forge, CA</td>
                  </tr>
                  <tr>
                    <td>1: Building #1</td>
                    <td style={{ textAlign: "right" }}>$173.00</td>
                  </tr>
                  <tr>
                    <td colSpan="2" style={{ textAlign: "right" }}>
                      $173.00
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="2">2:New Location Address 1, City, AL</td>
                  </tr>
                  <tr>
                    <td>1: Building #1</td>
                    <td style={{ textAlign: "right" }}>$173.00</td>
                  </tr>
                  <tr>
                    <td colSpan="2" style={{ textAlign: "right" }}>
                      $173.00
                    </td>
                  </tr>
                </tbody>
              </table>

              {/* Other Charges Section */}
              <h3>Other Charges</h3>
              <table className="other-charges-table">
                <thead>
                  <tr>
                    <th>Description</th>
                    <th>State</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Alabama Tax</td>
                    <td>Alabama</td>
                    <td>$10.00</td>
                  </tr>
                  <tr>
                    <td>California Tax</td>
                    <td>California</td>
                    <td>$13.00</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Cost Summary */}
            <div
              style={{
                width: "35%",
                float: "right",
                marginTop: "52px",
                marginRight: "100px",
              }}
            >
              <table className="cost-summary-table">
                <tbody>
                  <tr>
                    <td style={{ textAlign: "right" }}>
                      <strong>Total Premium</strong>
                    </td>
                    <td style={{ textAlign: "right" }}>$346.00</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: "right" }}>
                      <strong>Taxes & Surcharges</strong>
                    </td>
                    <td style={{ textAlign: "right" }}>$23.00</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: "right" }}>
                      <strong>Total Cost</strong>
                    </td>
                    <td style={{ textAlign: "right" }}>$369.00</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div style={{ clear: "both" }}></div>
          </div>
        </div>{" "}
      </Col>
      <Col span={4}>
        <Documents />
        
      </Col>
    </Row>
  );
};

export default QuoteSummary;
