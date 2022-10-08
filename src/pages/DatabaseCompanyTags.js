import React from "react";
import { Col, Row, Container, Table} from "react-bootstrap";
import DatabaseSettingsSidebar from "../components/DatabaseSettingsSidebar/DatabaseSettingsSidebar";
import Navbar from "../components/Navbar/Navbar";
import DatabaseCompanyTags from "../components/DatabaseCompanyTags/DatabaseCompanyTags";
const DatabaseCompanyTagsPage = () => {
  return (
    <div>
      <Navbar />
      <Row>
        <DatabaseSettingsSidebar />
        <DatabaseCompanyTags />
      </Row>
      
    </div>
  );
};

export default DatabaseCompanyTagsPage;
