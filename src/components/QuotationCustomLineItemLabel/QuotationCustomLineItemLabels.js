import React, { useEffect, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Link } from "react-router-dom";
import { Col, Row, Container, Table} from "react-bootstrap";
import QuotationSettingSidebar from "../QuotationSettingsSidebar/QuotationSettingsSidebar";
import edit from "../../images/edit.png"


const QuotationCustomEditFieldLabels = () => {




  return <Row>
  <Col xs={12} md={2} className="m-0 p-0"><span>just</span>
</Col>
  
  <Col xs={12} md={10} className="m-0 p-4 mt-5 pt-5">
           
 <div class="fieldlabel">
 <h2 class="fieldlabel-h2">Line Item Labels <i className="fas fa-bars opener ml-5"></i></h2>
 <p class="fieldlabel-p">Cusomize your edit field labels</p>
 <table id="fieldlabel-table">
 <tr>
  <td>Field</td>
  <td>Enter Customer Name Here</td>
  <td></td>
</tr>
<tr>
  <td>Multiplier1</td>
  <td>Multiplier1</td><td id="fieldlabel-img">
    <img src={edit} alt="" width={21} height={21} />
  </td>
</tr>
<tr>
  <td>Multiplier2</td><td>Multiplier2</td>
  <td id="fieldlabel-img">
    <img src={edit} alt="" width={21} height={21} />
  </td>
</tr>
<tr>
  <td>Multiplier3</td>
  <td>Multiplier3</td>
  <td id="fieldlabel-img">
    <img src={edit} alt="" width={21} height={21} />
  </td>
</tr>
<tr>
  <td>Muliplier4</td>
  <td>Muliplier4</td>
  <td id="fieldlabel-img">
    <img src={edit} alt="" width={21} height={21} />
  </td>
</tr>
<tr>
  <td>Cost Adjustment1</td>
  <td>Cost Adjustment1</td>
  <td id="fieldlabel-img">
    <img src={edit} alt="" width={21} height={21} />
  </td>
</tr>
<tr>
  <td>One-Off Cost 1</td>
  <td>One-Off Cost 1</td>
  <td id="fieldlabel-img">
    <img src={edit} alt="" width={21} height={21} />
  </td>
</tr>
<tr>
  <td>One-Off Cost 2</td>
  <td>One-Off Cost 2</td>
  <td id="fieldlabel-img">
    <img src={edit} alt="" width={21} height={21} />
  </td>
</tr>
<tr>
  <td>Cost Adjustment2</td>
  <td>Cost Adjustment2</td>
  <td id="fieldlabel-img">
    <img src={edit} alt="" width={21} height={21} />
  </td>
</tr>
<tr>
  <td>Unit Cost Uplift 1</td>
  <td>Unit Cost Uplift 1</td>
  <td id="fieldlabel-img">
    <img src={edit} alt="" width={21} height={21} />
  </td>
</tr>
<tr>
  <td>Cost Adjustment3</td>
  <td>Cost Adjustment3</td>
  <td id="fieldlabel-img">
    <img src={edit} alt="" width={21} height={21} />
  </td>
  </tr>
  <tr>
    <td>Cost Adjustment4</td>
    <td>Cost Adjustment4</td>
    <td id="fieldlabel-img">
      <img src={edit} alt="" width={21} height={21} />
    </td>
  </tr>
  <tr>
    <td>unit Cost Uplift2</td>
    <td>unit Cost Uplift2</td>
    <td id="fieldlabel-img">
      <img src={edit} alt="" width={21} height={21} />
    </td>
  </tr>
  <tr>
    <td>Sales Price</td>
    <td>Sales Price</td>
    <td id="fieldlabel-img">
      <img src={edit} alt="" width={21} height={21} />
    </td>
  </tr>
  <tr>
    <td>Labour Name</td>
    <td>Labour Name</td>
    <td id="fieldlabel-img">
      <img src={edit} alt="" width={21} height={21} />
    </td>
  </tr>
  <tr>
    <td>List price</td>
    <td>List price</td>
    <td id="fieldlabel-img">
      <img src={edit} alt="" width={21} height={21} />
    </td>
  </tr>
  <tr>
    <td>Labour Hour</td>
    <td>Labour Hour</td>
    <td id="fieldlabel-img">
      <img src={edit} alt="" width={21} height={21} />
    </td>
  </tr>
  <tr>
    <td>Agreed Cost</td>
    <td>Agreed Cost</td>
    <td id="fieldlabel-img">
      <img src={edit} alt="" width={21} height={21} />
    </td>
  </tr>
  <tr>
    <td>Labour Rate</td>
    <td>Labour Rate</td>
    <td id="fieldlabel-img">
      <img src={edit} alt="" width={21} height={21} />
    </td>
    </tr>
      <tr><td>labour Cost rate</td>
      <td>labour Cost rate</td>
      <td id="fieldlabel-img">
        <img src={edit} alt="" width={21} height={21} />
      </td>
    </tr>
    <tr>
      <td>List Cost</td>
      <td>List Cost</td>
      <td id="fieldlabel-img">
        <img src={edit} alt="" width={21} height={21} />
      </td>
    </tr>
    <tr>
      <td>labour Total</td>
      <td>labour Total</td>
      <td id="fieldlabel-img">
        <img src={edit} alt="" width={21} height={21} />
      </td>
    </tr>
    <tr>
      <td>Per Item price 1</td>
      <td>Per Item price 1</td>
      <td id="fieldlabel-img">
        <img src={edit} alt="" width={21} height={21} />
      </td>
    </tr>
    <tr>
      <td>Labour Charged rate</td>
      <td>Labour Charged rate</td>
      <td id="fieldlabel-img">
        <img src={edit} alt="" width={21} height={21} />
      </td>
    </tr>
    <tr>
      <td>Per Item price 2</td>
      <td>Per Item price 2</td>
      <td id="fieldlabel-img">
          <img src={edit} alt="" width={21} height={21} />
      </td>
    </tr>
    <tr>
      <td>Multiplier Total</td>
      <td>Multiplier Total</td>
      <td id="fieldlabel-img">
          <img src={edit} alt="" width={21} height={21} />
      </td>
    </tr>
    <tr>
      <td colspan="3">
        <div class=" d-flex">
          <nav aria-label="Page navigation">
            <ul class="pagination pagination-sm">
              <li class="page-item">
                <a class="page-link" href="/" aria-label="Previous">
                  <span aria-hidden="true">«</span>
                </a>
              </li>
              <li class="page-item active">
                <a class="page-link" href="/">1</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="/">2</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="/">3</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="/">4</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="/">5</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="/">6</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="/">7</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="/">8</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="/">9</a>
              </li>
              <li class="page-item"><a class="page-link" href="/">10</a></li><li class="page-item"><a class="page-link" href="/" aria-label="Next"><span aria-hidden="true">»</span></a></li></ul></nav><div class="form-group row ml-3 align-items-center input-group-sm"><select class="form-control col" id="inputGroupSelect03"><option value="100">100</option><option value="90">90</option><option value="80">80</option><option value="70">70</option><option value="60">60</option><option value="50">50</option><option value="40">40</option><option value="30">30</option><option value="20">20</option><option value="10">10</option></select><label class="form-control-label font-weight-light col mb-0  item-per-page-table">Items per page</label></div></div></td></tr></table><div><h2 class="fieldlabel-h3">Important Notes:</h2><p class="fieldlabel-p">Secial Characters('),("),and(#) in the labels will be replaced with space</p></div></div>


  </Col>
        </Row>
};

export default QuotationCustomEditFieldLabels;
