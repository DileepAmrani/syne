import React from "react";
import { Col, Row, Container, Table} from "react-bootstrap";
import QuotationSettingsSidebar from "../components/QuotationSettingsSidebar/QuotationSettingsSidebar";
import Navbar from "../components/Navbar/Navbar";
import QuotationPDFSettings from "../components/QuotationPDFSettings/QuotationPDFSettings";
const QuotationPDFPage = () => {
  return (
    <div>
      <Navbar />
      <Row>
        <QuotationSettingsSidebar />
        <QuotationPDFSettings />
      </Row>
      
    </div>
  );
};

export default QuotationPDFPage;
