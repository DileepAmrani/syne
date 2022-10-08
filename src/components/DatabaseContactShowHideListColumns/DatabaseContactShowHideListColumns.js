import React, { useEffect, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Link } from "react-router-dom";
import { Col, Row, Container, Table } from "react-bootstrap";
import QuotationSettingSidebar from "../QuotationSettingsSidebar/QuotationSettingsSidebar";
import edit from "../../images/edit.png";
import  {Switch}  from "antd";

const DatabaseContactShowHideListColumns = () => {
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
          <h2 id="TD2">Show/Hide List Columns <i className="fas fa-bars opener ml-5"></i></h2>
          <p id="TD3">
            Pick the columns which are displayed when on the list page.
          </p>
          <table id="TD">
            <tr>
              <td id="TD4">Name</td>
              <td id="TD5">Custom Field</td>
              <td id="TD6">Search Page</td>
            </tr>
            <tr>
              <td>Description</td>
              <td></td>
              <td id="TD7">
                <Switch   checkedChildren="Hide" unCheckedChildren="Show"  onChange={onChange}  />
              </td>
            </tr>
            <tr>
              <td>Company</td>
              <td></td>
              <td id="TD7">
                <Switch   checkedChildren="Hide" unCheckedChildren="Show"  onChange={onChange}  />
              </td>
            </tr>
            <tr>
              <td>Contact</td>
              <td></td>
              <td id="TD7">
                <Switch   checkedChildren="Hide" unCheckedChildren="Show"  onChange={onChange}  />
              </td>
            </tr>
            <tr>
              <td>InvoiceAddir</td>
              <td></td>
              <td id="TD7">
                <Switch   checkedChildren="Hide" unCheckedChildren="Show"  onChange={onChange}  />
              </td>
            </tr>
            <tr>
              <td>SiteAddir</td>
              <td></td>
              <td id="TD7">
                <Switch   checkedChildren="Hide" unCheckedChildren="Show"  onChange={onChange}  />
              </td>
            </tr>
            <tr>
              <td>Client Ref</td>
              <td></td>
              <td id="TD7">
                <Switch   checkedChildren="Hide" unCheckedChildren="Show"  onChange={onChange}  />
              </td>
            </tr>
            <tr>
              <td>Client PO#</td>
              <td></td>
              <td id="TD7">
                <Switch   checkedChildren="Hide" unCheckedChildren="Show"  onChange={onChange}  />
              </td>
            </tr>
            <tr>
              <td>Date Created</td>
              <td></td>
              <td id="TD7">
                <Switch   checkedChildren="Hide" unCheckedChildren="Show"  onChange={onChange}  />
              </td>
            </tr>
            <tr>
              <td>Date Quoted</td>
              <td></td>
              <td id="TD7">
                <Switch   checkedChildren="Hide" unCheckedChildren="Show"  onChange={onChange}  />
              </td>
            </tr>
            <tr>
              <td>No Days Valid</td>
              <td></td>
              <td id="TD7">
                <Switch   checkedChildren="Hide" unCheckedChildren="Show"  onChange={onChange}  />
              </td>
            </tr>
            <tr>
              <td>Delivery Date</td>
              <td></td>
              <td id="TD7">
                <Switch   checkedChildren="Hide" unCheckedChildren="Show"  onChange={onChange}  />
              </td>
            </tr>
            <tr>
              <td>Assigned User</td>
              <td></td>
              <td id="TD7">
                <Switch   checkedChildren="Hide" unCheckedChildren="Show"  onChange={onChange}  />
              </td>
            </tr>
            <tr>
              <td>Price List</td>
              <td></td>
              <td id="TD7">
                <Switch   checkedChildren="Hide" unCheckedChildren="Show"  onChange={onChange}  />
              </td>
            </tr>
            <tr>
              <td>Discount</td>
              <td></td>
              <td id="TD7">
                <Switch   checkedChildren="Hide" unCheckedChildren="Show"  onChange={onChange}  />
              </td>
            </tr>
            <tr>
              <td>Agreed Cost</td>
              <td></td>
              <td id="TD7">
                <Switch   checkedChildren="Hide" unCheckedChildren="Show"  onChange={onChange}  />
              </td>
            </tr>
            <tr>
              <td>Labour</td>
              <td></td>
              <td id="TD7">
                <Switch   checkedChildren="Hide" unCheckedChildren="Show"  onChange={onChange}  />
              </td>
            </tr>
            <tr>
              <td>Tax</td>
              <td></td>
              <td id="TD7">
                <Switch   checkedChildren="Hide" unCheckedChildren="Show"  onChange={onChange}  />
              </td>
            </tr>
            <tr>
              <td>Net</td>
              <td></td>
              <td id="TD7">
                <Switch   checkedChildren="Hide" unCheckedChildren="Show"  onChange={onChange}  />
              </td>
            </tr>
            <tr>
              <td>Total </td>
              <td></td>
              <td id="TD7">
                <Switch   checkedChildren="Hide" unCheckedChildren="Show"  onChange={onChange}  />
              </td>
            </tr>
            <tr>
              <td>Profit</td>
              <td></td>
              <td id="TD7">
                <Switch   checkedChildren="Hide" unCheckedChildren="Show"  onChange={onChange}  />
              </td>
            </tr>
            <tr>
              <td>Account Code</td>
              <td>
                <i className="bi bi-check"></i>
              </td>
              <td id="TD7">
                <Switch   checkedChildren="Hide" unCheckedChildren="Show"  onChange={onChange}  />
              </td>
            </tr>
            <tr>
              <td>Business Type</td>
              <td>
                <i className="bi bi-check"></i>
              </td>
              <td id="TD7">
                <Switch   checkedChildren="Hide" unCheckedChildren="Show"  onChange={onChange}  />
              </td>
            </tr>
            <tr>
              <td>End Date</td>
              <td>
                <i className="bi bi-check"></i>
              </td>
              <td id="TD7">
                <Switch   checkedChildren="Hide" unCheckedChildren="Show"  onChange={onChange}  />
              </td>
            </tr>
            <tr>
              <td>Branch</td>
              <td>
                <i className="bi bi-check"></i>
              </td>
              <td id="TD7">
                <Switch   checkedChildren="Hide" unCheckedChildren="Show"  onChange={onChange}  />
              </td>
            </tr>
            <tr>
              <td>Project</td>
              <td>
                <i className="bi bi-check"></i>
              </td>
              <td id="TD7">
                <Switch   checkedChildren="Hide" unCheckedChildren="Show"  onChange={onChange}  />
              </td>
            </tr>
            <tr>
              <td>Product Margin</td>
              <td>
                <i className="bi bi-check"></i>
              </td>
              <td id="TD7">
                <Switch   checkedChildren="Hide" unCheckedChildren="Show"  onChange={onChange}  />
              </td>
            </tr>
            <tr>
              <td>Workflow</td>
              <td>
                <i className="bi bi-check"></i>
              </td>
              <td id="TD7">
                <Switch   checkedChildren="Hide" unCheckedChildren="Show"  onChange={onChange}  />
              </td>
            </tr>
            <tr>
              <td>Tags</td>
              <td>
                <i className="bi bi-check"></i>
              </td>
              <td id="TD7">
                <Switch   checkedChildren="Hide" unCheckedChildren="Show"  onChange={onChange}  />
              </td>
            </tr>
            <tr>
              <td>Linked Orders</td>
              <td>
                <i className="bi bi-check"></i>
              </td>
              <td id="TD7">
                <Switch   checkedChildren="Hide" unCheckedChildren="Show"  onChange={onChange}  />
              </td>
            </tr>
            <tr>
              <td>Client Tags</td>
              <td>
                <i className="bi bi-check"></i>
              </td>
              <td id="TD7">
                <Switch   checkedChildren="Hide" unCheckedChildren="Show"  onChange={onChange}  />
              </td>
            </tr>
            <tr>
              <td>Order Client</td>
              <td>
                <i className="bi bi-check"></i>
              </td>
              <td id="TD7">
                <Switch   checkedChildren="Hide" unCheckedChildren="Show"  onChange={onChange}  />
              </td>
            </tr>
            <tr>
              <td>Order Contact</td>
              <td>
                <i className="bi bi-check"></i>
              </td>
              <td id="TD7">
                <Switch   checkedChildren="Hide" unCheckedChildren="Show"  onChange={onChange}  />
              </td>
            </tr>
            <tr>
              <td>Contact Tags</td>
              <td>
                <i className="bi bi-check"></i>
              </td>
              <td id="TD7">
                <Switch   checkedChildren="Hide" unCheckedChildren="Show"  onChange={onChange}  />
              </td>
            </tr>
            <tr>
              <td>Client's Contact Details</td>
              <td>
                <i className="bi bi-check"></i>
              </td>
              <td id="TD7">
                <Switch   checkedChildren="Hide" unCheckedChildren="Show"  onChange={onChange}  />
              </td>
            </tr>
            <tr>
              <td>Contact's Contact Details</td>
              <td>
                <i className="bi bi-check"></i>
              </td>
              <td id="TD7">
                <Switch   checkedChildren="Hide" unCheckedChildren="Show"  onChange={onChange}  />
              </td>
            </tr>
            <tr>
              <td>Order Client's Contact Details</td>
              <td>
                <i className="bi bi-check"></i>
              </td>
              <td id="TD7">
                <Switch   checkedChildren="Hide" unCheckedChildren="Show"  onChange={onChange}  />
              </td>
            </tr>
            <tr>
              <td>Order Contact's Contact Details</td>
              <td>
                <i className="bi bi-check"></i>
              </td>
              <td id="TD7">
                <Switch   checkedChildren="Hide" unCheckedChildren="Show"  onChange={onChange}  />
              </td>
            </tr>
            <tr>
              <td>Initial Assigned user</td>
              <td>
                <i className="bi bi-check"></i>
              </td>
              <td id="TD7">
                <Switch   checkedChildren="Hide" unCheckedChildren="Show"  onChange={onChange}  />
              </td>
            </tr>
            <tr>
              <td>Overnight delivery to 1 x UK address</td>
              <td>
                <i className="bi bi-check"></i>
              </td>
              <td id="TD7">
                <Switch   checkedChildren="Hide" unCheckedChildren="Show"  onChange={onChange}  />
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

export default DatabaseContactShowHideListColumns;
