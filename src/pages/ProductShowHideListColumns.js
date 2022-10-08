import React from "react";
import { Col, Row, Container, Table} from "react-bootstrap";
import ProductSettingsSidebar from "../components/ProductSettingsSidebar/ProductSettingsSidebar";
import Navbar from "../components/Navbar/Navbar";
import ProductShowHideListColumns from "../components/ProductShowHideListColumns/ProductShowHideListColumns";
const ProductShowHideListColumnsPage = () => {
  return (
    <div>
      <Navbar />
      <Row>
        <ProductSettingsSidebar />
        <ProductShowHideListColumns />
      </Row>
      
    </div>
  );
};

export default ProductShowHideListColumnsPage;
