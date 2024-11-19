import React, { useState } from "react";
import { Modal } from "antd";
import fire_flood_print from '../assets/documents/fire_flood_print.pdf'
import riskmeter_report from '../assets/documents/riskmeter_report.pdf'
import SampleInspectionReport from '../assets/documents/Sample Inspection Report.pdf'

const Documents = () => {
  const [isDocumentMenuVisible, setDocumentMenuVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [documentUrl, setDocumentUrl] = useState("");

  const handleDocumentMenuHover = () => {
    setDocumentMenuVisible(true);
  };

  const handleDocumentMenuLeave = () => {
    setDocumentMenuVisible(false);
  };

  const openDocument = (url) => {
    setDocumentUrl(url);
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
    setDocumentUrl("");
  };

  return (
    <>
      {/* Vertical "Documents" button */}
      <div
        onMouseEnter={handleDocumentMenuHover}
        onMouseLeave={handleDocumentMenuLeave}
        style={{
          position: "fixed",
          top: "80%",
          right: 0,
          transform: "translateY(-50%)",
          backgroundColor: "#7eaada",
          color: "#fff",
          padding: "10px",
          width: "50px",
          height: "200px",
          borderRadius: "8px 0 0 8px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          writingMode: "vertical-rl",
          textAlign: "center",
          cursor: "pointer",
          zIndex: 1000,
          fontWeight: "600",
          fontSize: "22px",
        }}
      >
        Documents
      </div>

      {/* Document menu */}
      <div
        style={{
          position: "fixed",
          top: "25%",
          right: isDocumentMenuVisible ? "0" : "-300px",
          width: "300px",
          height: "50%",
          backgroundColor: "#f4f4f4",
          transition: "right 0.3s ease",
          padding: "20px",
          zIndex: 999,
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)",
          borderRadius: "8px 0 0 8px",
        }}
        onMouseEnter={handleDocumentMenuHover}
        onMouseLeave={handleDocumentMenuLeave}
      >
        <h3>Documents</h3>
        <ul style={{ listStyleType: "disc", paddingLeft: "20px", fontSize: "18px" }}>
          <li><span onClick={() => openDocument({fire_flood_print})} style={{ cursor: "pointer", color: "blue", textDecoration: "underline" }}>Application.pdf</span></li>
          <li><span onClick={() => openDocument({riskmeter_report})} style={{ cursor: "pointer", color: "blue", textDecoration: "underline" }}>Loss_Runs.pdf</span></li>
          <li><span onClick={() => openDocument({fire_flood_print})} style={{ cursor: "pointer", color: "blue", textDecoration: "underline" }}>SOVs.pdf</span></li>
          <li><span onClick={() => openDocument({fire_flood_print})} style={{ cursor: "pointer", color: "blue", textDecoration: "underline" }}>Riskmeter Corelogic Report.pdf</span></li>
          <li><span onClick={() => openDocument({riskmeter_report})} style={{ cursor: "pointer", color: "blue", textDecoration: "underline" }}>Hazard Hub Report.pdf</span></li>
          <li><span onClick={() => openDocument({SampleInspectionReport})} style={{ cursor: "pointer", color: "blue", textDecoration: "underline" }}>Inspection Report.pdf</span></li>
          <li><span onClick={() => openDocument({riskmeter_report})} style={{ cursor: "pointer", color: "blue", textDecoration: "underline" }}>Contractor's proof of insurance.pdf</span></li>
        </ul>
      </div>

      {/* Modal for viewing documents */}
      <Modal
        title="Document Viewer"
        visible={isModalVisible}
        onCancel={closeModal}
        footer={null}
        width="80%"
        style={{ top: 20 }}
      >
        <iframe
          src={documentUrl}
          title="Document Viewer"
          style={{ width: "100%", height: "80vh", border: "none" }}
        />
      </Modal>
    </>
  );
};

export default Documents;
