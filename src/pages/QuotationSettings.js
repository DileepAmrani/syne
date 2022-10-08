import React from "react";
import { Col, Row, Container, Table} from "react-bootstrap";
import QuotationSettingsSidebar from "../components/QuotationSettingsSidebar/QuotationSettingsSidebar";
import Navbar from "../components/Navbar/Navbar";
import QuotationSetting from "../components/QuotationSetting/QuotationSetting";
import $ from 'jquery';

const QuotationSettings = () => {
 
  return (
    <div>
      <Navbar />
      <Row>
        <QuotationSettingsSidebar />
        <QuotationSetting />
      </Row>
      
    </div>
  );
};

export default QuotationSettings;
