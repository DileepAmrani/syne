import React from "react";
import { Col, Row, Container, Table} from "react-bootstrap";
import PrSettingsSidebar from "../components/QuotationSettingsSidebar/QuotationSettingsSidebar";
import Navbar from "../components/Navbar/Navbar";
import QuotationSetting from "../components/QuotationSetting/QuotationSetting";
import ProductSettingsSidebar from "../components/ProductSettingsSidebar/ProductSettingsSidebar"

const QuotationSettings = () => {
 
  return (
    <div>
      <Navbar />
      <Row>
        <ProductSettingsSidebar />
        <QuotationSetting />
      </Row>
      
    </div>
  );
};

export default QuotationSettings;
