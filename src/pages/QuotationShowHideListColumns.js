import React from "react";
import { Col, Row, Container, Table} from "react-bootstrap";
import QuotationSettingsSidebar from "../components/QuotationSettingsSidebar/QuotationSettingsSidebar";
import Navbar from "../components/Navbar/Navbar";
import QuotationShowHideListColumns from "../components/QuotationShowHideListColumns/QuotationShowHideListColumns";
const QuotationShowHideListColumnsPage = () => {
  return (
    <div>
      <Navbar />
      <Row>
        <QuotationSettingsSidebar />
        <QuotationShowHideListColumns />
      </Row>
      
    </div>
  );
};

export default QuotationShowHideListColumnsPage;
