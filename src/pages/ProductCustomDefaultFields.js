import React from "react";
import { Col, Row, Container, Table} from "react-bootstrap";
import ProductSettingsSidebar from "../components/ProductSettingsSidebar/ProductSettingsSidebar";
import Navbar from "../components/Navbar/Navbar";
import ProductCustomDefaultFields from "../components/ProductCustomDefaultFields/ProductCustomDefaultFields";

const ProductCustomDefaultFieldsPage = () => {
  return (
    <div>
      <Navbar />
      <Row>
        <ProductSettingsSidebar />
        <ProductCustomDefaultFields />
      </Row>
      
    </div>
  );
};

export default ProductCustomDefaultFieldsPage;
