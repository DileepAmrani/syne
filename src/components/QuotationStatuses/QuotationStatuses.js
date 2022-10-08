import React, { useEffect, useState, Fragment } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Link } from "react-router-dom";
import { Col, Row, Container, Table } from "react-bootstrap";
import QuotationSettingSidebar from "../QuotationSettingsSidebar/QuotationSettingsSidebar";
import edit from "../../images/edit.png";
import { Switch } from "antd";
import $ from "jquery";


const QuotationStatuses = () => {

  $('.opener').on('click', function() {
    $('#leftsidebar').addClass('displaysidebar');
  });
  
  $('.closer').on('click', function() {
    $('#leftsidebar').removeClass('displaysidebar');
  });
    

  return (<Fragment>
    <Row>
      <Col xs={12} md={2} className="m-0 p-0">
        <span>just</span>
      </Col>
      <Col xs={12} md={10} className="m-0 p-4 mt-5 pt-5">

      <div className="statusparents">
  <h2 className="status-h2">Quotation Statuses <i className="fas fa-bars opener ml-5"></i></h2>
  <table id="Table">
    <tr>
      <th className="w2" ></th>
      <th className="w10">Default Name</th>
      <th className="w10">Name</th>
      <th>HexColor</th>
      <th className="w30" >Description</th>
      <th className="w35">Note</th>
      <th>Show</th>
      <th>Editable</th>
      <th>IsDefault</th>
      <th></th>
      <th></th>
    </tr>
    <tr>
      <td>
        <div className="flex col">
          <i className="bi bi-caret-up-fill"></i
          ><i className="statusicon bi bi-caret-down-fill"></i>
        </div>
      </td>
      <td>Draft</td>
      <td>Draft</td>
      <td>
        <button className="status-btn" style={{background: "red"}} >
          Draft
        </button>
      </td>
      <td>Draft</td>
      <td></td>
      <td><i className="bi bi-check"></i></td>
      <td><i className="bi bi-check"></i></td>
      <td></td>
      <td>
        <img
          src={edit} width={20} height={20}
          alt=""
        />
      </td>
      <td><i className="status-icon bi bi-arrow-clockwise"></i></td>
    </tr>
    <tr>
      <td>
        <div className="flex col">
          <i className="bi bi-caret-up-fill"></i
          ><i className="statusicon bi bi-caret-down-fill"></i>
        </div>
      </td>
      <td>Sent</td>
      <td>Sent</td>
      <td>
        <button className="status-btn" style={{background: "steelblue"}}>
          Sent
        </button>
      </td>
      <td>Sent to client</td>
      <td>*When the quote is sent to client</td>
      <td><i className="bi bi-check"></i></td>
      <td><i className="bi bi-check"></i></td>
      <td></td>
      <td>
        <img
          src={edit} width={20} height={20}
          alt=""
        />
      </td>
      <td><i className="status-icon bi bi-arrow-clockwise"></i></td>
    </tr>
    <tr>
      <td>
        <div className="flex col">
          <i className="bi bi-caret-up-fill"></i
          ><i className="statusicon bi bi-caret-down-fill"></i>
        </div>
      </td>
      <td>Accepted</td>
      <td>Accepted</td>
      <td>
        <button className="status-btn" style={{background: "mediumseagreen"}}>
          Accepted
        </button>
      </td>
      <td>Accepted by client</td>
      <td>*When the quote is accepted by client</td>
      <td><i className="bi bi-check"></i></td>
      <td><i className="bi bi-check"></i></td>
      <td></td>
      <td>
        <img
          src={edit} width={20} height={20}
          alt=""
        />
      </td>
      <td><i className="status-icon bi bi-arrow-clockwise"></i></td>
    </tr>
    <tr>
      <td>
        <div className="flex col">
          <i className="bi bi-caret-up-fill"></i
          ><i className="statusicon bi bi-caret-down-fill"></i>
        </div>
      </td>
      <td>Declined</td>
      <td>Declined</td>
      <td>
        <button className="status-btn" style={{background: "lightcoral"}}>
          Declined
        </button>
      </td>
      <td>Declined by client</td>
      <td>*When the quote is declined by client</td>
      <td><i className="bi bi-check"></i></td>
      <td><i className="bi bi-check"></i></td>
      <td></td>
      <td>
        <img
          src={edit} width={20} height={20}
          alt=""
        />
      </td>
      <td><i className="status-icon bi bi-arrow-clockwise"></i></td>
    </tr>
    <tr>
      <td>
        <div className="flex col">
          <i className="bi bi-caret-up-fill"></i
          ><i className="statusicon bi bi-caret-down-fill"></i>
        </div>
      </td>
      <td>Depreciated</td>
      <td>Depreciated</td>
      <td>
        <button className="status-btn" style={{background: "gold"}}>
          Depreciated
        </button>
      </td>
      <td>Depreciated</td>
      <td>*When there is a new version of quote</td>
      <td><i className="bi bi-check"></i></td>
      <td><i className="bi bi-check"></i></td>
      <td></td>
      <td>
        <img
          src={edit} width={20} height={20}
          alt=""
        />
      </td>
      <td><i className="status-icon bi bi-arrow-clockwise"></i></td>
    </tr>
    <tr>
      <td>
        <div className="flex col">
          <i className="bi bi-caret-up-fill"></i
          ><i className="statusicon bi bi-caret-down-fill"></i>
        </div>
      </td>
      <td>Commenced</td>
      <td>Commenced</td>
      <td>
        <button className="status-btn" style={{background: "chocolate"}}>
          Commenced
        </button>
      </td>
      <td>Commenced</td>
      <td></td>
      <td><i className="bi bi-check"></i></td>
      <td><i className="bi bi-check"></i></td>
      <td></td>
      <td>
        <img
          src={edit} width={20} height={20}
          alt=""
        />
      </td>
      <td><i className="status-icon bi bi-arrow-clockwise"></i></td>
    </tr>
    <tr>
      <td>
        <div className="flex col">
          <i className="bi bi-caret-up-fill"></i
          ><i className="statusicon bi bi-caret-down-fill"></i>
        </div>
      </td>
      <td>Completed</td>
      <td>Completed</td>
      <td>
        <button className="status-btn" style={{background: "darkslateblue"}}>
          Completed
        </button>
      </td>
      <td>Completed</td>
      <td></td>
      <td><i className="bi bi-check"></i></td>
      <td><i className="bi bi-check"></i></td>
      <td></td>
      <td>
        <img
          src={edit} width={20} height={20}
          alt=""
        />
      </td>
      <td><i className="status-icon bi bi-arrow-clockwise"></i></td>
    </tr>
    <tr>
      <td>
        <div className="flex col">
          <i className="bi bi-caret-up-fill"></i
          ><i className="statusicon bi bi-caret-down-fill"></i>
        </div>
      </td>
      <td>CUSTOM1</td>
      <td>CUSTOM1</td>
      <td>
        <button className="status-btn" style={{background: "indianred"}}>
          CUSTOM1
        </button>
      </td>
      <td>CUSTOM1</td>
      <td></td>
      <td><i className="bi bi-check"></i></td>
      <td><i className="bi bi-check"></i></td>
      <td></td>
      <td>
        <img
          src={edit} width={20} height={20}
          alt=""
        />
      </td>
      <td><i className="status-icon bi bi-arrow-clockwise"></i></td>
    </tr>
    <tr>
      <td>
        <div className="flex col">
          <i className="bi bi-caret-up-fill"></i
          ><i className="statusicon bi bi-caret-down-fill"></i>
        </div>
      </td>
      <td>CUSTOM2</td>
      <td>CUSTOM2</td>
      <td>
        <button className="status-btn" style={{background: "chocolate"}}>
          CUSTOM2
        </button>
      </td>
      <td>CUSTOM2</td>
      <td></td>
      <td><i className="bi bi-check"></i></td>
      <td><i className="bi bi-check"></i></td>
      <td></td>
      <td>
        <img
          src={edit} width={20} height={20}
          alt=""
        />
      </td>
      <td><i className="status-icon bi bi-arrow-clockwise"></i></td>
    </tr>
    <tr>
      <td>
        <div className="flex col">
          <i className="bi bi-caret-up-fill"></i
          ><i className="statusicon bi bi-caret-down-fill"></i>
        </div>
      </td>
      <td>CUSTOM3</td>
      <td>CUSTOM3</td>
      <td>
        <button className="status-btn" style={{background: "cadetblue"}}>
          CUSTOM3
        </button>
      </td>
      <td>CUSTOM3</td>
      <td></td>
      <td><i className="bi bi-check"></i></td>
      <td><i className="bi bi-check"></i></td>
      <td></td>
      <td>
        <img
          src={edit} width={20} height={20}
          alt=""
        />
      </td>
      <td><i className="status-icon bi bi-arrow-clockwise"></i></td>
    </tr>
    <tr>
      <td>
        <div className="flex col">
          <i className="bi bi-caret-up-fill"></i
          ><i className="statusicon bi bi-caret-down-fill"></i>
        </div>
      </td>
      <td>CUSTOM4</td>
      <td>CUSTOM4</td>
      <td>
        <button className="status-btn" style={{background: "greenyellow"}}>
          CUSTOM4
        </button>
      </td>
      <td>CUSTOM4</td>
      <td></td>
      <td><i className="bi bi-check"></i></td>
      <td><i className="bi bi-check"></i></td>
      <td></td>
      <td>
        <img
          src={edit} width={20} height={20}
          alt=""
        />
      </td>
      <td><i className="status-icon bi bi-arrow-clockwise"></i></td>
    </tr>
    <tr>
      <td>
        <div className="flex col">
          <i className="bi bi-caret-up-fill"></i
          ><i className="statusicon bi bi-caret-down-fill"></i>
        </div>
      </td>
      <td>CUSTOM5</td>
      <td>CUSTOM5</td>
      <td>
        <button className="status-btn" style={{background: "aquamarine"}}>
          CUSTOM5
        </button>
      </td>
      <td>CUSTOM5</td>
      <td></td>
      <td><i className="bi bi-check"></i></td>
      <td><i className="bi bi-check"></i></td>
      <td></td>
      <td>
        <img
          src={edit} width={20} height={20}
          alt=""
        />
      </td>
      <td><i className="status-icon bi bi-arrow-clockwise"></i></td>
    </tr>
    <tr>
      <td>
        <div className="flex col">
          <i className="bi bi-caret-up-fill"></i
          ><i className="statusicon bi bi-caret-down-fill"></i>
        </div>
      </td>
      <td>CUSTOM6</td>
      <td>CUSTOM6</td>
      <td>
        <button className="status-btn" style={{background: "lightsteelblue"}}>
          CUSTOM6
        </button>
      </td>
      <td>CUSTOM6</td>
      <td></td>
      <td><i className="bi bi-check"></i></td>
      <td><i className="bi bi-check"></i></td>
      <td></td>
      <td>
        <img
          src={edit} width={20} height={20}
          alt=""
        />
      </td>
      <td><i className="status-icon bi bi-arrow-clockwise"></i></td>
    </tr>
    <tr>
      <td>
        <div className="flex col">
          <i className="bi bi-caret-up-fill"></i
          ><i className="statusicon bi bi-caret-down-fill"></i>
        </div>
      </td>
      <td>CUSTOM7</td>
      <td>CUSTOM7</td>
      <td>
        <button className="status-btn" style={{background: "yellowgreen"}}>
          CUSTOM7
        </button>
      </td>
      <td>CUSTOM7</td>
      <td></td>
      <td><i className="bi bi-check"></i></td>
      <td><i className="bi bi-check"></i></td>
      <td></td>
      <td>
        <img
          src={edit} width={20} height={20}
          alt=""
        />
      </td>
      <td><i className="status-icon bi bi-arrow-clockwise"></i></td>
    </tr>
    <tr>
      <td>
        <div className="flex col">
          <i className="bi bi-caret-up-fill"></i
          ><i className="statusicon bi bi-caret-down-fill"></i>
        </div>
      </td>
      <td>CUSTOM8</td>
      <td>CUSTOM8</td>
      <td>
        <button className="status-btn" style={{background: "darkkhaki"}}>
          CUSTOM8
        </button>
      </td>
      <td>CUSTOM8</td>
      <td></td>
      <td><i className="bi bi-check"></i></td>
      <td><i className="bi bi-check"></i></td>
      <td></td>
      <td>
        <img
          src={edit} width={20} height={20}
          alt=""
        />
      </td>
      <td><i className="status-icon bi bi-arrow-clockwise"></i></td>
    </tr>
    <tr>
      <td>
        <div className="flex col">
          <i className="bi bi-caret-up-fill"></i
          ><i className="statusicon bi bi-caret-down-fill"></i>
        </div>
      </td>
      <td>CUSTOM9</td>
      <td>CUSTOM9</td>
      <td>
        <button className="status-btn" style={{background: "blueviolet"}}>
          CUSTOM9
        </button>
      </td>
      <td>CUSTOM9</td>
      <td></td>
      <td><i className="bi bi-check"></i></td>
      <td><i className="bi bi-check"></i></td>
      <td></td>
      <td>
        <img
          src={edit} width={20} height={20}
          alt=""
        />
      </td>
      <td><i className="status-icon bi bi-arrow-clockwise"></i></td>
    </tr>
    <tr>
      <td>
        <div className="flex col">
          <i className="bi bi-caret-up-fill"></i
          ><i className="statusicon bi bi-caret-down-fill"></i>
        </div>
      </td>
      <td>CUSTOM10</td>
      <td>CUSTOM10</td>
      <td>
        <button className="status-btn" style={{background: "mediumorchid"}}>
          CUSTOM10
        </button>
      </td>
      <td>CUSTOM10</td>
      <td></td>
      <td><i className="bi bi-check"></i></td>
      <td><i className="bi bi-check"></i></td>
      <td></td>
      <td>
        <img
          src={edit} width={20} height={20}
          alt=""
        />
      </td>
      <td><i className="status-icon bi bi-arrow-clockwise"></i></td>
    </tr>
  </table>
</div>

       
      </Col>
  </Row>      
  </Fragment>
  );
};

export default QuotationStatuses;
