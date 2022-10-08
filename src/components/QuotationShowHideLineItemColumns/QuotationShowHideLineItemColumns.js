import React, { useEffect, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Link } from "react-router-dom";
import { Col, Row, Container, Table } from "react-bootstrap";
import QuotationSettingSidebar from "../QuotationSettingsSidebar/QuotationSettingsSidebar";
import edit from "../../images/edit.png";
import { Switch } from "antd";

const QuotationShowHideLineItemColumns = () => {
  function onChange(checked) {
    console.log(`switch to ${checked}`);
  }

  return (
    <Row>
      <Col xs={12} md={2} className="m-0 p-0">
        <span>just</span>
      </Col>

      <Col xs={12} md={10} className="m-0 p-4 mt-5 pt-5">
        <div id="TD12">
          <h2 id="TD2">Show/Hide Line Item Edit Columns <i className="fas fa-bars opener ml-5"></i></h2>
          <p id="TD3">
            Pick the Line Item Columns Which are dsplayed when editing.
          </p>
          <table id="TD">
            <tr>
              <td id="TD4">Names</td>
              <td id="TD5">Custom Field</td>
              <td id="TD6">Search Page</td>
            </tr>
            <tr>
              <td>Photo</td>
              <td></td>
              <td id="TD7">
                <button
                  type="button"
                  role="switch"
                  aria-checked="true"
                  className="ant-switch On ant-switch-checked"
                >
                  <div className="ant-switch-handle"></div>
                  <span className="ant-switch-inner">Show</span>
                </button>
              </td>
            </tr>
            <tr>
              <td>Item Code</td>
              <td></td>
              <td id="TD7">
                <button
                  type="button"
                  role="switch"
                  aria-checked="true"
                  className="ant-switch On ant-switch-checked"
                >
                  <div className="ant-switch-handle"></div>
                  <span className="ant-switch-inner">Show</span>
                </button>
              </td>
            </tr>
            <tr>
              <td>Category</td>
              <td></td>
              <td id="TD7">
                <button
                  type="button"
                  role="switch"
                  aria-checked="true"
                  className="ant-switch On ant-switch-checked"
                >
                  <div className="ant-switch-handle"></div>
                  <span className="ant-switch-inner">Show</span>
                </button>
              </td>
            </tr>
            <tr>
              <td>Unit</td>
              <td></td>
              <td id="TD7">
                <button
                  type="button"
                  role="switch"
                  aria-checked="true"
                  className="ant-switch On ant-switch-checked"
                >
                  <div className="ant-switch-handle"></div>
                  <span className="ant-switch-inner">Show</span>
                </button>
              </td>
            </tr>
            <tr>
              <td>Tax</td>
              <td></td>
              <td id="TD7">
                <button
                  type="button"
                  role="switch"
                  aria-checked="true"
                  className="ant-switch On ant-switch-checked"
                >
                  <div className="ant-switch-handle"></div>
                  <span className="ant-switch-inner">Show</span>
                </button>
              </td>
            </tr>
            <tr>
              <td>Discount</td>
              <td></td>
              <td id="TD7">
                <button
                  type="button"
                  role="switch"
                  aria-checked="true"
                  className="ant-switch On ant-switch-checked"
                >
                  <div className="ant-switch-handle"></div>
                  <span className="ant-switch-inner">Show</span>
                </button>
              </td>
            </tr>
            <tr>
              <td>List price</td>
              <td></td>
              <td id="TD7">
                <button
                  type="button"
                  role="switch"
                  aria-checked="true"
                  className="ant-switch On ant-switch-checked"
                >
                  <div className="ant-switch-handle"></div>
                  <span className="ant-switch-inner">Show</span>
                </button>
              </td>
            </tr>
            <tr>
              <td>List Code</td>
              <td></td>
              <td id="TD7">
                <button
                  type="button"
                  role="switch"
                  aria-checked="true"
                  className="ant-switch On ant-switch-checked"
                >
                  <div className="ant-switch-handle"></div>
                  <span className="ant-switch-inner">Show</span>
                </button>
              </td>
            </tr>
            <tr>
              <td>Agrred Cost</td>
              <td></td>
              <td id="TD7">
                <button
                  type="button"
                  role="switch"
                  aria-checked="true"
                  className="ant-switch On ant-switch-checked"
                >
                  <div className="ant-switch-handle"></div>
                  <span className="ant-switch-inner">Show</span>
                </button>
              </td>
            </tr>
            <tr>
              <td>Setup price</td>
              <td></td>
              <td id="TD7">
                <button
                  type="button"
                  role="switch"
                  aria-checked="true"
                  className="ant-switch On ant-switch-checked"
                >
                  <div className="ant-switch-handle"></div>
                  <span className="ant-switch-inner">Show</span>
                </button>
              </td>
            </tr>
            <tr>
              <td>Markup</td>
              <td></td>
              <td id="TD7">
                <button
                  type="button"
                  role="switch"
                  aria-checked="true"
                  className="ant-switch On ant-switch-checked"
                >
                  <div className="ant-switch-handle"></div>
                  <span className="ant-switch-inner">Show</span>
                </button>
              </td>
            </tr>
            <tr>
              <td>Margin</td>
              <td></td>
              <td id="TD7">
                <button
                  type="button"
                  role="switch"
                  aria-checked="true"
                  className="ant-switch On ant-switch-checked"
                >
                  <div className="ant-switch-handle"></div>
                  <span className="ant-switch-inner">Show</span>
                </button>
              </td>
            </tr>
            <tr>
              <td>Margin Percentage</td>
              <td></td>
              <td id="TD7">
                <button
                  type="button"
                  role="switch"
                  aria-checked="true"
                  className="ant-switch On ant-switch-checked"
                >
                  <div className="ant-switch-handle"></div>
                  <span className="ant-switch-inner">Show</span>
                </button>
              </td>
            </tr>
            <tr>
              <td>Sales Account code</td>
              <td></td>
              <td id="TD7">
                <button
                  type="button"
                  role="switch"
                  aria-checked="true"
                  className="ant-switch On ant-switch-checked"
                >
                  <div className="ant-switch-handle"></div>
                  <span className="ant-switch-inner">Show</span>
                </button>
              </td>
            </tr>
            <tr>
              <td>Purchases Account Code</td>
              <td></td>
              <td id="TD7">
                <button
                  type="button"
                  role="switch"
                  aria-checked="true"
                  className="ant-switch On ant-switch-checked"
                >
                  <div className="ant-switch-handle"></div>
                  <span className="ant-switch-inner">Show</span>
                </button>
              </td>
            </tr>
            <tr>
              <td>Labour Rate</td>
              <td></td>
              <td id="TD7">
                <button
                  type="button"
                  role="switch"
                  aria-checked="true"
                  className="ant-switch On ant-switch-checked"
                >
                  <div className="ant-switch-handle"></div>
                  <span className="ant-switch-inner">Show</span>
                </button>
              </td>
            </tr>
            <tr>
              <td>Supplier Discount</td>
              <td></td>
              <td id="TD7">
                <button
                  type="button"
                  role="switch"
                  aria-checked="true"
                  className="ant-switch On ant-switch-checked"
                >
                  <div className="ant-switch-handle"></div>
                  <span className="ant-switch-inner">Show</span>
                </button>
              </td>
            </tr>
            <tr>
              <td>Row Number</td>
              <td></td>
              <td id="TD7">
                <button
                  type="button"
                  role="switch"
                  aria-checked="true"
                  className="ant-switch On ant-switch-checked"
                >
                  <div className="ant-switch-handle"></div>
                  <span className="ant-switch-inner">Show</span>
                </button>
              </td>
            </tr>
            <tr>
              <td>Multiplier 1</td>
              <td></td>
              <td id="TD7">
                <button
                  type="button"
                  role="switch"
                  aria-checked="true"
                  className="ant-switch On ant-switch-checked"
                >
                  <div className="ant-switch-handle"></div>
                  <span className="ant-switch-inner">Show</span>
                </button>
              </td>
            </tr>
            <tr>
              <td>Multiplier 2</td>
              <td></td>
              <td id="TD7">
                <button
                  type="button"
                  role="switch"
                  aria-checked="true"
                  className="ant-switch On ant-switch-checked"
                >
                  <div className="ant-switch-handle"></div>
                  <span className="ant-switch-inner">Show</span>
                </button>
              </td>
            </tr>
            <tr>
              <td>Multipler 3</td>
              <td></td>
              <td id="TD7">
                <button
                  type="button"
                  role="switch"
                  aria-checked="true"
                  className="ant-switch On ant-switch-checked"
                >
                  <div className="ant-switch-handle"></div>
                  <span className="ant-switch-inner">Show</span>
                </button>
              </td>
            </tr>
            <tr>
              <td>Multiplier 4</td>
              <td>
                <i className="bi bi-check"></i>
              </td>
              <td id="TD7">
                <button
                  type="button"
                  role="switch"
                  aria-checked="true"
                  className="ant-switch On ant-switch-checked"
                >
                  <div className="ant-switch-handle"></div>
                  <span className="ant-switch-inner">Show</span>
                </button>
              </td>
            </tr>
            <tr>
              <td>Cost Adjustment4</td>
              <td>
                <i className="bi bi-check"></i>
              </td>
              <td id="TD7">
                <button
                  type="button"
                  role="switch"
                  aria-checked="true"
                  className="ant-switch On ant-switch-checked"
                >
                  <div className="ant-switch-handle"></div>
                  <span className="ant-switch-inner">Show</span>
                </button>
              </td>
            </tr>
            <tr>
              <td>Cost Adjustment3</td>
              <td>
                <i className="bi bi-check"></i>
              </td>
              <td id="TD7">
                <button
                  type="button"
                  role="switch"
                  aria-checked="true"
                  className="ant-switch On ant-switch-checked"
                >
                  <div className="ant-switch-handle"></div>
                  <span className="ant-switch-inner">Show</span>
                </button>
              </td>
            </tr>
            <tr>
              <td>Cost Adjustment2</td>
              <td>
                <i className="bi bi-check"></i>
              </td>
              <td id="TD7">
                <button
                  type="button"
                  role="switch"
                  aria-checked="true"
                  className="ant-switch On ant-switch-checked"
                >
                  <div className="ant-switch-handle"></div>
                  <span className="ant-switch-inner">Show</span>
                </button>
              </td>
            </tr>
            <tr>
              <td>Cost Adjustment1</td>
              <td>
                <i className="bi bi-check"></i>
              </td>
              <td id="TD7">
                <button
                  type="button"
                  role="switch"
                  aria-checked="true"
                  className="ant-switch On ant-switch-checked"
                >
                  <div className="ant-switch-handle"></div>
                  <span className="ant-switch-inner">Show</span>
                </button>
              </td>
            </tr>
            <tr>
              <td>Off-Cost1</td>
              <td>
                <i className="bi bi-check"></i>
              </td>
              <td id="TD7">
                <button
                  type="button"
                  role="switch"
                  aria-checked="true"
                  className="ant-switch On ant-switch-checked"
                >
                  <div className="ant-switch-handle"></div>
                  <span className="ant-switch-inner">Show</span>
                </button>
              </td>
            </tr>
            <tr>
              <td>Off-Cost2</td>
              <td>
                <i className="bi bi-check"></i>
              </td>
              <td id="TD7">
                <button
                  type="button"
                  role="switch"
                  aria-checked="true"
                  className="ant-switch On ant-switch-checked"
                >
                  <div className="ant-switch-handle"></div>
                  <span className="ant-switch-inner">Show</span>
                </button>
              </td>
            </tr>
            <tr>
              <td>Cost Adjustment4</td>
              <td>
                <i className="bi bi-check"></i>
              </td>
              <td id="TD7">
                <button
                  type="button"
                  role="switch"
                  aria-checked="true"
                  className="ant-switch On ant-switch-checked"
                >
                  <div className="ant-switch-handle"></div>
                  <span className="ant-switch-inner">Show</span>
                </button>
              </td>
            </tr>
            <tr>
              <td>true Unit cost</td>
              <td>
                <i className="bi bi-check"></i>
              </td>
              <td id="TD7">
                <button
                  type="button"
                  role="switch"
                  aria-checked="true"
                  className="ant-switch On ant-switch-checked"
                >
                  <div className="ant-switch-handle"></div>
                  <span className="ant-switch-inner">Show</span>
                </button>
              </td>
            </tr>
            <tr>
              <td>Unit Cost uplift 1</td>
              <td>
                <i className="bi bi-check"></i>
              </td>
              <td id="TD7">
                <button
                  type="button"
                  role="switch"
                  aria-checked="true"
                  className="ant-switch On ant-switch-checked"
                >
                  <div className="ant-switch-handle"></div>
                  <span className="ant-switch-inner">Show</span>
                </button>
              </td>
            </tr>
            <tr>
              <td>Unit cost uplift 2</td>
              <td>
                <i className="bi bi-check"></i>
              </td>
              <td id="TD7">
                <button
                  type="button"
                  role="switch"
                  aria-checked="true"
                  className="ant-switch On ant-switch-checked"
                >
                  <div className="ant-switch-handle"></div>
                  <span className="ant-switch-inner">Show</span>
                </button>
              </td>
            </tr>
            <tr>
              <td>Tags</td>
              <td>
                <i className="bi bi-check"></i>
              </td>
              <td id="TD7">
                <button
                  type="button"
                  role="switch"
                  aria-checked="true"
                  className="ant-switch On ant-switch-checked"
                >
                  <div className="ant-switch-handle"></div>
                  <span className="ant-switch-inner">Show</span>
                </button>
              </td>
            </tr>
            <tr>
              <td>Initial Price</td>
              <td>
                <i className="bi bi-check"></i>
              </td>
              <td id="TD7">
                <button
                  type="button"
                  role="switch"
                  aria-checked="true"
                  className="ant-switch On ant-switch-checked"
                >
                  <div className="ant-switch-handle"></div>
                  <span className="ant-switch-inner">Show</span>
                </button>
              </td>
            </tr>
            <tr>
              <td>Initial Discount</td>
              <td>
                <i className="bi bi-check"></i>
              </td>
              <td id="TD7">
                <button
                  type="button"
                  role="switch"
                  aria-checked="true"
                  className="ant-switch On ant-switch-checked"
                >
                  <div className="ant-switch-handle"></div>
                  <span className="ant-switch-inner">Show</span>
                </button>
              </td>
            </tr>
            <tr>
              <td>Multilier Total</td>
              <td>
                <i className="bi bi-check"></i>
              </td>
              <td id="TD7">
                <button
                  type="button"
                  role="switch"
                  aria-checked="true"
                  className="ant-switch On ant-switch-checked"
                >
                  <div className="ant-switch-handle"></div>
                  <span className="ant-switch-inner">Show</span>
                </button>
              </td>
            </tr>
            <tr>
              <td>Labour</td>
              <td>
                <i className="bi bi-check"></i>
              </td>
              <td id="TD7">
                <button
                  type="button"
                  role="switch"
                  aria-checked="true"
                  className="ant-switch On ant-switch-checked"
                >
                  <div className="ant-switch-handle"></div>
                  <span className="ant-switch-inner">Show</span>
                </button>
              </td>
            </tr>
            <tr>
              <td>Labour hours</td>
              <td>
                <i className="bi bi-check"></i>
              </td>
              <td id="TD7">
                <button
                  type="button"
                  role="switch"
                  aria-checked="true"
                  className="ant-switch On ant-switch-checked"
                >
                  <div className="ant-switch-handle"></div>
                  <span className="ant-switch-inner">Show</span>
                </button>
              </td>
            </tr>
            <tr>
              <td>Labour Rate</td>
              <td>
                <i className="bi bi-check"></i>
              </td>
              <td id="TD7">
                <button
                  type="button"
                  role="switch"
                  aria-checked="true"
                  className="ant-switch On ant-switch-checked"
                >
                  <div className="ant-switch-handle"></div>
                  <span className="ant-switch-inner">Show</span>
                </button>
              </td>
            </tr>
            <tr>
              <td>Detailed Description</td>
              <td>
                <i className="bi bi-check"></i>
              </td>
              <td id="TD7">
                <button
                  type="button"
                  role="switch"
                  aria-checked="true"
                  className="ant-switch On ant-switch-checked"
                >
                  <div className="ant-switch-handle"></div>
                  <span className="ant-switch-inner">Show</span>
                </button>
              </td>
            </tr>
            <tr>
              <td>vendor code</td>
              <td>
                <i className="bi bi-check"></i>
              </td>
              <td id="TD7">
                <button
                  type="button"
                  role="switch"
                  aria-checked="true"
                  className="ant-switch On ant-switch-checked"
                >
                  <div className="ant-switch-handle"></div>
                  <span className="ant-switch-inner">Show</span>
                </button>
              </td>
            </tr>
            <tr>
              <td>manufacturer</td>
              <td>
                <i className="bi bi-check"></i>
              </td>
              <td id="TD7">
                <button
                  type="button"
                  role="switch"
                  aria-checked="true"
                  className="ant-switch On ant-switch-checked"
                >
                  <div className="ant-switch-handle"></div>
                  <span className="ant-switch-inner">Show</span>
                </button>
              </td>
            </tr>
            <tr>
              <td colspan="3">
                <div className=" d-flex gap-5">
                  <nav aria-label="Page navigation">
                    <ul className="pagination pagination-sm">
                      <li className="page-item">
                        <a className="page-link" href="/" aria-label="Previous">
                          <span aria-hidden="true">«</span>
                        </a>
                      </li>
                      <li className="page-item active">
                        <a className="page-link" href="/">
                          1
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="/">
                          2
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="/">
                          3
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="/">
                          4
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="/">
                          5
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="/">
                          6
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="/">
                          7
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="/">
                          8
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="/">
                          9
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="/">
                          10
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="/" aria-label="Next">
                          <span aria-hidden="true">»</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                  <div className="form-group row ml-3 align-items-center input-group-sm">
                    <select
                      className="form-control col"
                      id="inputGroupSelect03"
                    >
                      <option value="100">100</option>
                      <option value="90">90</option>
                      <option value="80">80</option>
                      <option value="70">70</option>
                      <option value="60">60</option>
                      <option value="50">50</option>
                      <option value="40">40</option>
                      <option value="30">30</option>
                      <option value="20">20</option>
                      <option value="10">10</option>
                    </select>
                    <label className="form-control-label font-weight-light col mb-0  item-per-page-table">
                      Items per page
                    </label>
                  </div>
                </div>
              </td>
            </tr>
          </table>
        </div>
      </Col>
    </Row>
  );
};

export default QuotationShowHideLineItemColumns;
