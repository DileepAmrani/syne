import React from "react";
import { Col, Row, Container, Table} from "react-bootstrap";
import DatabaseSettingsSidebar from "../components/DatabaseSettingsSidebar/DatabaseSettingsSidebar";
import Navbar from "../components/Navbar/Navbar";
import DatabaseContactShowHideListColumns from "../components/DatabaseContactShowHideListColumns/DatabaseContactShowHideListColumns";
const DatabaseContactShowHideListColumnsPage = () => {
  return (
    <div>
      <Navbar />
      <Row>
        <DatabaseSettingsSidebar />
        <DatabaseContactShowHideListColumns />
      </Row>
      
    </div>
  );
};

export default DatabaseContactShowHideListColumnsPage;
