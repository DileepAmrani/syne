import React from "react";
import { Col, Row, Container, Table} from "react-bootstrap";
import DatabaseSettingsSidebar from "../components/DatabaseSettingsSidebar/DatabaseSettingsSidebar";
import Navbar from "../components/Navbar/Navbar";
import DatabaseContactTags from "../components/DatabaseContactTags/DatabaseContactTags";
const DatabaseContactTagsPage = () => {
  return (
    <div>
      <Navbar />
      <Row>
        <DatabaseSettingsSidebar />
        <DatabaseContactTags />
      </Row>
      
    </div>
  );
};

export default DatabaseContactTagsPage;
