import React from "react";
import { Col, Row, Container, Table} from "react-bootstrap";
import DatabaseSettingsSidebar from "../components/DatabaseSettingsSidebar/DatabaseSettingsSidebar";
import Navbar from "../components/Navbar/Navbar";
import DatabaseCompanyShowHideEditFields from "../components/DatabaseCompanyShowHideEditFields/DatabaseCompanyShowHideEditFields";
const DatabaseCompanyShowHideEditFieldsPage = () => {
  return (
    <div>
      <Navbar />
      <Row>
        <DatabaseSettingsSidebar />
        <DatabaseCompanyShowHideEditFields />
      </Row>
      
    </div>
  );
};

export default DatabaseCompanyShowHideEditFieldsPage;
