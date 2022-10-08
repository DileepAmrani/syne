import React from "react";
import { Col, Row, Container, Table} from "react-bootstrap";
import DatabaseSettingsSidebar from "../components/DatabaseSettingsSidebar/DatabaseSettingsSidebar";
import Navbar from "../components/Navbar/Navbar";
import DatabaseContactShowHideEditFields from "../components/DatabaseContactShowHideEditFields/DatabaseContactShowHideEditFields";
const DatabaseContactShowHideEditFieldsPage = () => {
  return (
    <div>
      <Navbar />
      <Row>
        <DatabaseSettingsSidebar />
        <DatabaseContactShowHideEditFields />
      </Row>
      
    </div>
  );
};

export default DatabaseContactShowHideEditFieldsPage;
