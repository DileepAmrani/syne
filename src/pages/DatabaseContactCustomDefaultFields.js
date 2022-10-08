import React from "react";
import { Col, Row, Container, Table} from "react-bootstrap";
import DatabaseSettingsSidebar from "../components/DatabaseSettingsSidebar/DatabaseSettingsSidebar";
import Navbar from "../components/Navbar/Navbar";
import DatabaseContactCustomDefaultFields from "../components/DatabaseContactCustomDefaultFields/DatabaseContactCustomDefaultFields";

const DatabaseContactCustomDefaultFieldsPage = () => {
  return (
    <div>
      <Navbar />
      <Row>
        <DatabaseSettingsSidebar />
        <DatabaseContactCustomDefaultFields />
      </Row>
      
    </div>
  );
};

export default DatabaseContactCustomDefaultFieldsPage;
