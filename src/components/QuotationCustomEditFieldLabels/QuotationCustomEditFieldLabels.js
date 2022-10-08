import React, { useEffect, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Link } from "react-router-dom";
import { Col, Row, Container, Table} from "react-bootstrap";
import QuotationSettingSidebar from "../QuotationSettingsSidebar/QuotationSettingsSidebar";
import edit from "../../images/edit.png"


const QuotationCustomEditFieldLabels = () => {

  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  useEffect(() => {
    console.log(editorState);
  }, [editorState]);


  return <Row>
  <Col xs={12} md={2} className="m-0 p-0"><span>just</span>
</Col>
  
  <Col xs={12} md={10} className="m-0 p-4 mt-5 pt-5">
           
  <div  className="fieldlabel">
  <div>
    <h2  className="fieldlabel-h2">Edit Field Labels</h2>
  <p  className="fieldlabel-p">Cusomize your edit field labels</p>
  </div>
  <div>
  <table id="fieldlabel-table">
  <tr>
    <td>Field</td>
    <td>Enter Customer Name Here</td>
    <td></td>
  </tr>
  <tr>
    <td>Description</td>
    <td>Description</td>
    <td id="fieldlabel-img"><img src={edit} alt="" width={20} height={20} /></td>
  </tr>
  <tr>
    <td>Invoice Address</td>
    <td>Invoice Address</td>
    <td id="fieldlabel-img">
      <img src={edit} alt="" width={20} height={20} />
    </td>
  </tr>
  <tr>
    <td>Site Address</td>
    <td>Site Address</td>
    <td id="fieldlabel-img">
      <img src={edit} alt="" width={20} height={20} />
    </td>
  </tr>
  <tr>
    <td>Delivery Date</td>
    <td>Delivery Date</td>
    <td id="fieldlabel-img">
      <img src={edit} alt="" width={20} height={20} />
    </td>
  </tr>
  <tr>
    <td>End Date</td>
    <td>End Date</td>
    <td id="fieldlabel-img">
      <img src={edit} alt="" width={20} height={20}/>
    </td>
  </tr>
  <tr>
  <td>Client Reference</td><td>Client Reference</td>
  <td id="fieldlabel-img">
    <img src={edit} alt="" width={20} height={20} />
  </td>
  </tr>
  <tr>
    <td>Client Po#</td>
    <td>Client Po#</td>
    <td id="fieldlabel-img">
      <img src={edit} alt="" width={20} height={20} />
    </td>
  </tr>
  <tr>
    <td>Date Quoted</td>
    <td>Date Quoted</td>
    <td id="fieldlabel-img">
      <img src={edit} alt="" width={20} height={20} />
    </td>
    </tr>
    <tr>
      <td>No Days Valid</td>
      <td>No Days Valid</td>
      <td id="fieldlabel-img">
        <img src={edit} alt="" width={20} height={20} />
      </td>
    </tr>
    <tr>
      <td>Assigned user</td>
      <td>Assigned user</td>
      <td id="fieldlabel-img">
        <img src={edit} alt="" width={20} height={20} />
      </td>
    </tr>
    <tr>
      <td>Note for Client</td>
      <td>Note for Client</td>
      <td id="fieldlabel-img">
        <img src={edit} alt="" width={20} height={20} />
      </td>
    </tr>
    <tr>
      <td>Note for Staff</td>
      <td>Note for Staff</td>
      <td id="fieldlabel-img">
        <img src={edit} alt="" width={20} height={20} />
      </td>
    </tr>
    <tr>
      <td>Business Type</td>
      <td>Business Type</td>
      <td id="fieldlabel-img">
        <img src={edit} alt="" width={20} height={20} />
      </td>
    </tr>
    <tr><td>Initial Assigned User</td>
    <td>Initial Assigned User</td>
    <td id="fieldlabel-img"><img src={edit} alt="" width={20} height={20} /></td></tr><tr id="fieldlabel-col1"><td colspan="3"><div  className=" d-flex">
      <nav aria-label="Page navigation">
        <ul  className="pagination pagination-sm">
          <li  className="page-item">
            <a  className="page-link" href="/" aria-label="Previous">
              <span aria-hidden="true">«</span>
            </a>
          </li>
          <li  className="page-item active">
            <a  className="page-link" href="/">1</a>
          </li>
          <li  className="page-item">
            <a  className="page-link" href="/">2</a>
          </li>
          <li  className="page-item"><a  className="page-link" href="/">3</a></li>
          <li  className="page-item"><a  className="page-link" href="/">4</a></li>
          <li  className="page-item"><a  className="page-link" href="/">5</a></li>
          <li  className="page-item"><a  className="page-link" href="/">6</a></li>
          <li  className="page-item"><a  className="page-link" href="/">7</a></li>
          <li  className="page-item"><a  className="page-link" href="/">8</a></li>
          <li  className="page-item"><a  className="page-link" href="/">9</a></li>
          <li  className="page-item"><a  className="page-link" href="/">10</a></li>
          <li  className="page-item"><a  className="page-link" href="/" aria-label="Next">
            <span aria-hidden="true">»</span></a></li></ul></nav><div  className="form-group row ml-3 align-items-center input-group-sm"><select  className="form-control col" id="inputGroupSelect03" ><option value="100">100</option><option value="90">90</option><option value="80">80</option><option value="70">70</option><option value="60">60</option><option value="50">50</option><option value="40">40</option><option value="30">30</option><option value="20">20</option><option value="10">10</option></select><label  className="form-control-label font-weight-light col mb-0  item-per-page-table">Items per page</label></div></div></td></tr></table></div>
          <div><h3  className="fieldlabel-h3">Important Notes:</h3><p  className="fieldlabel-p">Secial Characters('),("),and(#) in the labels will be replaced with space</p></div></div>


  </Col>
        </Row>
};

export default QuotationCustomEditFieldLabels;
