import React from "react";
import { Col, Row, Container, Table} from "react-bootstrap";
import DatabaseSettingsSidebar from "../components/DatabaseSettingsSidebar/DatabaseSettingsSidebar";
import Navbar from "../components/Navbar/Navbar";
import DatabaseShowHideListColumns from "../components/DatabaseCompanyShowHideListColumns/DatabaseCompanyShowHideListColumns";
const DatabaseShowHideListColumnsPage = () => {
  return (
    <div>
      <Navbar />
      <Row>
        <DatabaseSettingsSidebar />
        <DatabaseShowHideListColumns />
      </Row>
      
    </div>
  );
};

export default DatabaseShowHideListColumnsPage;
