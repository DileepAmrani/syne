import React from "react";
import { Col, Row, Container, Table} from "react-bootstrap";
import ProductSettingsSidebar from "../components/ProductSettingsSidebar/ProductSettingsSidebar";
import Navbar from "../components/Navbar/Navbar";
import ProductShowHidePanelColumns from "../components/ProductShowHidePanelColumns/ProductShowHidePanelColumns";
const ProductShowHidePanelColumnsPage = () => {
  return (
    <div>
      <Navbar />
      <Row>
        <ProductSettingsSidebar />
        <ProductShowHidePanelColumns />
      </Row>
      
    </div>
  );
};

export default ProductShowHidePanelColumnsPage;
