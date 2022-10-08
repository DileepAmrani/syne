import React from "react";
import { Col, Row, Container, Table} from "react-bootstrap";
import DatabaseSettingsSidebar from "../components/DatabaseSettingsSidebar/DatabaseSettingsSidebar";
import Navbar from "../components/Navbar/Navbar";
import DatabaseCompanyTypes from "../components/DatabaseCompanyTypes/DatabaseCompanyTypes";
const DatabaseCompanyTypesPage = () => {
  return (
    <div>
      <Navbar />
      <Row>
        <DatabaseSettingsSidebar />
        <DatabaseCompanyTypes />
      </Row>
      
    </div>
  );
};

export default DatabaseCompanyTypesPage;
