import React from "react";
import { Col, Row, Container, Table} from "react-bootstrap";
import DatabaseSettingsSidebar from "../components/DatabaseSettingsSidebar/DatabaseSettingsSidebar";
import Navbar from "../components/Navbar/Navbar";
import DatabaseCompanyCustomDefaultFields from "../components/DatabaseCompanyCustomDefaultFields/DatabaseCompanyCustomDefaultFields";

const DatabaseCompanyCustomDefaultFieldsPage = () => {
  return (
    <div>
      <Navbar />
      <Row>
        <DatabaseSettingsSidebar />
        <DatabaseCompanyCustomDefaultFields />
      </Row>
      
    </div>
  );
};

export default DatabaseCompanyCustomDefaultFieldsPage;
