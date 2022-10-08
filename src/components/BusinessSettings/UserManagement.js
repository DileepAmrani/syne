import React, { useEffect, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Link } from "react-router-dom";
import { Col, Row, Container, Table } from "react-bootstrap";
import QuotationSettingSidebar from "../QuotationSettingsSidebar/QuotationSettingsSidebar";
import black from "../../images/black.png";
import white from "../../images/white.png";
import colorfull from "../../images/color.png";
import selected from "../../images/select.png";

const UserManagement = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  useEffect(() => {
    console.log(editorState);
  }, [editorState]);

  return (
    <Row className="mt-5 pt-5 container-fluid">
      <Col xs={12} md={12} className="m-0 p-0">
        <h1 className="m-2 float-start">User Management</h1>
        <div className="float-end">
        <button type="button" class="btn btn-primary bg-blue b-0 m-2 d-inline"><i class="fas fa-user-friends"></i>  Manage Teams</button>
        <button type="button" class="btn btn-primary bg-green b-0 m-2 d-inline"><i class="fas fa-user-friends"></i>  Manage Roles</button>
        <button type="button" class="btn btn-primary bg-danger b-0 m-2 d-inline"><i class="fas fa-user-friends"></i>  Assign Role</button>
        </div>
       
      </Col>
      <hr />
      <Col xs={12} md={12} className="m-0 p-0">
        <table class="table container">
          <thead>
            <tr className="bg-green text-white">
              <th>Email</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Modules</th>
              <th>Locked</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td scope="row">abc@mail.com</td>
              <td>ABX</td>
              <td>SGE</td>
              <td></td>
              <td></td>
              <td> <i class="fas fa-edit"></i>&nbsp; <i class="fa fa-recycle" aria-hidden="true"></i> &nbsp;<i class="fa fa-trash" aria-hidden="true"></i></td>

            </tr>
            <tr>
            <td scope="row">abc@mail.com</td>
              <td>ABX</td>
              <td>SGE</td>
              <td></td>
              <td></td>
              <td> <i class="fas fa-edit    "></i>&nbsp; <i class="fa fa-recycle" aria-hidden="true"></i> &nbsp;<i class="fa fa-trash" aria-hidden="true"></i></td>
            </tr>
          </tbody>
        </table>
      </Col>
    </Row>
  );
};

export default UserManagement;
