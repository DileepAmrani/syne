import React from "react";
import { Col, Row, Container, Table} from "react-bootstrap";
import QuotationSettingsSidebar from "../components/QuotationSettingsSidebar/QuotationSettingsSidebar";
import Navbar from "../components/Navbar/Navbar";
import QuotationCustomEditFieldLabels from "../components/QuotationCustomEditFieldLabels/QuotationCustomEditFieldLabels";
const QuotationCustomEditFieldsLabels = () => {
  return (
    <div>
      <Navbar />
      <Row>
        <QuotationSettingsSidebar />
        <QuotationCustomEditFieldLabels />
      </Row>
      
    </div>
  );
};

export default QuotationCustomEditFieldsLabels;
