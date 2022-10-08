import React from "react";
import { Col, Row, Container, Table} from "react-bootstrap";
import ProductSettingsSidebar from "../components/ProductSettingsSidebar/ProductSettingsSidebar";
import Navbar from "../components/Navbar/Navbar";
import ProductShowHideEditFields from "../components/ProductShowHideEditFields/ProductShowHideEditFields";
const ProductShowHideEditFieldsPage = () => {
  return (
    <div>
      <Navbar />
      <Row>
        <ProductSettingsSidebar />
        <ProductShowHideEditFields />
      </Row>
      
    </div>
  );
};

export default ProductShowHideEditFieldsPage;
