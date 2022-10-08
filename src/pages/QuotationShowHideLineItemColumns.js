import React from "react";
import { Col, Row, Container, Table} from "react-bootstrap";
import QuotationSettingsSidebar from "../components/QuotationSettingsSidebar/QuotationSettingsSidebar";
import Navbar from "../components/Navbar/Navbar";
import QuotationShowHideLineItemColumns from "../components/QuotationShowHideLineItemColumns/QuotationShowHideLineItemColumns";
const QuotationShowHideLineItemColumnsPage = () => {
  return (
    <div>
      <Navbar />
      <Row>
        <QuotationSettingsSidebar />
        <QuotationShowHideLineItemColumns />
      </Row>
      
    </div>
  );
};

export default QuotationShowHideLineItemColumnsPage;
