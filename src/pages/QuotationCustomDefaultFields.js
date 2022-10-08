import React from "react";
import { Col, Row, Container, Table} from "react-bootstrap";
import QuotationSettingsSidebar from "../components/QuotationSettingsSidebar/QuotationSettingsSidebar";
import Navbar from "../components/Navbar/Navbar";
import QuotationCustomDefaultFields from "../components/QuotationCustomDefaultFields/QuotationCustomDefaultFields";

const QuotationSettings = () => {
  return (
    <div>
      <Navbar />
      <Row>
        <QuotationSettingsSidebar />
        <QuotationCustomDefaultFields />
      </Row>
      
    </div>
  );
};

export default QuotationSettings;
