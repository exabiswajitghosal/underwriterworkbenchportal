import React, { useRef } from 'react';
import { Table, Input, Typography, Button, Collapse, Row, Col } from 'antd';
import { FilePdfOutlined } from '@ant-design/icons';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const { Title } = Typography;
const { Panel } = Collapse;

const QuoteSummary = () => {
  const summaryRef = useRef(); // Create a ref to reference the component for PDF generation

  const generatePDF = () => {
    const input = summaryRef.current;
    html2canvas(input, { useCORS: true }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      const imgWidth = 190; // Set the width of the image in the PDF
      const pageHeight = pdf.internal.pageSize.height;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;

      let position = 0;

      // Add image to PDF and handle page breaks
      pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save('quote-summary.pdf'); // Save the PDF with the desired name
    });
  };

  // Define table data for each section
  const coverageData = [
    { key: 1, location: 'Location 1', coverage: '', limit: '', deductible: '', premium: '' },
    { key: 2, location: 'Location 2', coverage: '', limit: '', deductible: '', premium: '' },
    { key: 3, location: 'Location 3', coverage: '', limit: '', deductible: '', premium: '' },
    { key: 4, location: 'Location 4', coverage: '', limit: '', deductible: '', premium: '' },
  ];

  const formData = [
    { key: 1, formNumber: '1', formName: '', description: '' },
    { key: 2, formNumber: '2', formName: '', description: '' },
    { key: 3, formNumber: '3', formName: '', description: '' },
    { key: 4, formNumber: '4', formName: '', description: '' },
  ];

  const invoiceData = [
    { key: 1, label: 'Invoice Number', value: '' },
    { key: 2, label: 'Installment No.', value: '' },
    { key: 3, label: 'Total Premium Due', value: '' },
    { key: 4, label: 'Installment Premium Due', value: '' },
  ];

  // Define columns for each table
  const coverageColumns = [
    { title: 'Location (address)/Building', dataIndex: 'location', key: 'location' },
    { title: 'Coverage', dataIndex: 'coverage', key: 'coverage' },
    { title: 'Coverage Limit', dataIndex: 'limit', key: 'limit' },
    { title: 'Deductible', dataIndex: 'deductible', key: 'deductible' },
    { title: 'Premium', dataIndex: 'premium', key: 'premium' },
  ];

  const formColumns = [
    { title: 'Form Number', dataIndex: 'formNumber', key: 'formNumber' },
    { title: 'Form Name', dataIndex: 'formName', key: 'formName' },
    { title: 'Form Description', dataIndex: 'description', key: 'description' },
  ];

  const invoiceColumns = [
    { title: 'Label', dataIndex: 'label', key: 'label' },
    { title: 'Value', dataIndex: 'value', key: 'value' },
  ];

  return (
    <div className="quote-summary" ref={summaryRef}>
      {/* PDF Icon Button */}
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '10px' }}>
        <Button
          type="primary"
          icon={<FilePdfOutlined />}
          onClick={generatePDF} // Call the PDF generation function on click
          style={{
            width: '15%',
            color: '#1d4ed8',
            backgroundColor: 'white',
            borderRadius: '5px',
          }}
        >
          Download PDF
        </Button>
      </div>

      {/* Header Information */}
      <Title level={5}>Quote Summary</Title>
      <Table
        dataSource={[
          { key: 'quoteNumber', label: 'Quote Number', value: '' },
          { key: 'effectiveDate', label: 'Policy Effective Date', value: '' },
          { key: 'endDate', label: 'Policy End Date', value: '' },
          { key: 'insuredName', label: 'Insured Name', value: '' },
          { key: 'mailingAddress', label: 'Mailing Address', value: '' },
        ]}
        columns={[
          { title: '', dataIndex: 'label', key: 'label' },
          { title: '', dataIndex: 'value', key: 'value' },
        ]}
        pagination={false}
        size="small"
        className="custom-table-header"
        bordered
      />

      <Collapse defaultActiveKey={['1']} style={{ marginTop: '20px' }}>
        <Panel header="Coverage Summary" key="1">
          <Table
            dataSource={coverageData}
            columns={coverageColumns}
            pagination={false}
            size="small"
            className="custom-table-header"
            bordered
            summary={() => (
              <>
                <Table.Summary.Row>
                  <Table.Summary.Cell colSpan={4}>Total</Table.Summary.Cell>
                  <Table.Summary.Cell>100000</Table.Summary.Cell>
                </Table.Summary.Row>
                <Table.Summary.Row>
                  <Table.Summary.Cell colSpan={4}>Fees & Taxes</Table.Summary.Cell>
                  <Table.Summary.Cell>1000</Table.Summary.Cell>
                </Table.Summary.Row>
                <Table.Summary.Row>
                  <Table.Summary.Cell colSpan={4}>Total Payable</Table.Summary.Cell>
                  <Table.Summary.Cell>101000</Table.Summary.Cell>
                </Table.Summary.Row>
              </>
            )}
          />
        </Panel>

        <Panel header="Forms" key="2">
          <Table
            dataSource={formData}
            columns={formColumns}
            pagination={false}
            size="small"
            className="custom-table-header"
            bordered
          />
        </Panel>

        <Panel header="Invoice Details" key="3">
          <Table
            dataSource={invoiceData}
            columns={invoiceColumns}
            pagination={false}
            size="small"
            className="custom-table-header"
            bordered
          />
        </Panel>
      </Collapse>

      {/* Underwriter Notes */}
      <div style={{ marginTop: '20px', marginBottom: '20px' }}>
        <Title level={4}>UW Notes:</Title>
        <Input.TextArea
          placeholder="Enter notes here"
          rows={4}
          style={{ marginTop: 10, width: '100%', border: '2px solid gray' }}
        />
      </div>

      <Row gutter={16}>
        <Col span={20}></Col>
        <Col span={4}>
          <div>
            <button type="submit" style={{ width: "10rem", marginBottom: "1rem", marginTop: "1rem" }}>
              <b>Next</b>
            </button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default QuoteSummary;
