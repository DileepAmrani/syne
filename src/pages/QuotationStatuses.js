import React from "react";
import { Col, Row, Container, Table} from "react-bootstrap";
import QuotationSettingsSidebar from "../components/QuotationSettingsSidebar/QuotationSettingsSidebar";
import Navbar from "../components/Navbar/Navbar";
import QuotationStatuses from "../components/QuotationStatuses/QuotationStatuses";
const QuotationStatusesPage = () => {
  return (
    <div>
      <Navbar />
      <Row>
        <QuotationSettingsSidebar />
        <QuotationStatuses />
      </Row>
      
    </div>
  );
};

export default QuotationStatusesPage;
