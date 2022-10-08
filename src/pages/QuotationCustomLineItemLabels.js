import React from "react";
import { Col, Row, Container, Table} from "react-bootstrap";
import QuotationSettingsSidebar from "../components/QuotationSettingsSidebar/QuotationSettingsSidebar";
import Navbar from "../components/Navbar/Navbar";
import QuotationCustomLineItemLabels from "../components/QuotationCustomLineItemLabel/QuotationCustomLineItemLabels"
const QuotationCustomLineItemLabelsPage = () => {
  return (
    <div>
      <Navbar />
      <Row>
        <QuotationSettingsSidebar />
        <QuotationCustomLineItemLabels />
      </Row>
      
    </div>
  );
};

export default QuotationCustomLineItemLabelsPage;
