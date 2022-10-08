import React, { useEffect, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Link } from "react-router-dom";
import { Col, Row, Container, Table } from "react-bootstrap";
import QuotationSettingSidebar from "../QuotationSettingsSidebar/QuotationSettingsSidebar";
import edit from "../../images/edit.png";
import { Switch } from "antd";

const QuotationShowHideEditFields = () => {
  function onChange(checked) {
    console.log(`switch to ${checked}`);
  }

  function change(that){
    var val = "true";
 
    

     }

  

  return (
    <Row>
      <Col xs={12} md={2} className="m-0 p-0">
        <span>just</span>
      </Col>

      <Col xs={12} md={10} className="m-0 p-4 mt-5 pt-5">
        <div id="parentdivs">
          <h2 id="heading-1">Show/Hide Header Edit Fields <i className="fas fa-bars opener ml-5"></i></h2>
          <p id="para-1">
            Pick the header fields which are displayed when editing
          </p>
          <table id="Table">
            <tr>
              <td id="TD4">Name</td>
              <td id="TD5">Custom Field</td>
              <td id="TD6">Search Page</td>
            </tr>
            <tr>
              <td>Description</td>
              <td></td>
              <td id="TD7">
                <form>
                  <select className="selecthtml1" onChange={change(this)}>
                    <option value="true">Show</option>
                    <option value="false">Hide</option>
                  </select>
                </form>
              </td>
            </tr>
            <tr>
              <td>Photo</td>
              <td></td>
              <td id="TD7">
                <form>
                  <select className="selecthtml1">
                    <option value="Show">Show</option>
                    <option value="Hide">Hide</option>
                  </select>
                </form>
              </td>
            </tr>
            <tr>
              <td>Company</td>
              <td></td>
              <td id="TD7">
                <form>
                  <select className="selecthtml1">
                    <option value="Show">Show</option>
                    <option value="Hide">Hide</option>
                  </select>
                </form>
              </td>
            </tr>
            <tr>
              <td>Contact</td>
              <td></td>
              <td id="TD7">
                <form>
                  <select className="selecthtml1">
                    <option value="Show">Show</option>
                    <option value="Hide">Hide</option>
                  </select>
                </form>
              </td>
            </tr>
            <tr>
              <td>InvoiceAddir</td>
              <td></td>
              <td id="TD7">
                <form>
                  <select className="selecthtml1">
                    <option value="Show">Show</option>
                    <option value="Hide">Hide</option>
                  </select>
                </form>
              </td>
            </tr>
            <tr>
              <td>SiteAddir</td>
              <td></td>
              <td id="TD7">
                <form>
                  <select className="selecthtml1">
                    <option value="Show">Show</option>
                    <option value="Hide">Hide</option>
                  </select>
                </form>
              </td>
            </tr>
            <tr>
              <td>Client Ref</td>
              <td></td>
              <td id="TD7">
                <form>
                  <select className="selecthtml1">
                    <option value="Show">Show</option>
                    <option value="Hide">Hide</option>
                  </select>
                </form>
              </td>
            </tr>
            <tr>
              <td>Client PO#</td>
              <td></td>
              <td id="TD7">
                <form>
                  <select className="selecthtml1">
                    <option value="Show">Show</option>
                    <option value="Hide">Hide</option>
                  </select>
                </form>
              </td>
            </tr>
            <tr>
              <td>Date Created</td>
              <td></td>
              <td id="TD7">
                <form>
                  <select className="selecthtml1">
                    <option value="Show">Show</option>
                    <option value="Hide">Hide</option>
                  </select>
                </form>
              </td>
            </tr>
            <tr>
              <td>No Days valid</td>
              <td></td>
              <td id="TD7">
                <form>
                  <select className="selecthtml1">
                    <option value="Show">Show</option>
                    <option value="Hide">Hide</option>
                  </select>
                </form>
              </td>
            </tr>
            <tr>
              <td>Deleivery Date</td>
              <td></td>
              <td id="TD7">
                <form>
                  <select className="selecthtml1">
                    <option value="Show">Show</option>
                    <option value="Hide">Hide</option>
                  </select>
                </form>
              </td>
            </tr>
            <tr>
              <td>Assigned User</td>
              <td></td>
              <td id="TD7">
                <form>
                  <select className="selecthtml1">
                    <option value="Show">Show</option>
                    <option value="Hide">Hide</option>
                  </select>
                </form>
              </td>
            </tr>
            <tr>
              <td>Price List</td>
              <td></td>
              <td id="TD7">
                <form>
                  <select className="selecthtml1">
                    <option value="Show">Show</option>
                    <option value="Hide">Hide</option>
                  </select>
                </form>
              </td>
            </tr>
            <tr>
              <td>Note For Client</td>
              <td></td>
              <td id="TD7">
                <form>
                  <select className="selecthtml1">
                    <option value="Show">Show</option>
                    <option value="Hide">Hide</option>
                  </select>
                </form>
              </td>
            </tr>
            <tr>
              <td>Account Code</td>
              <td></td>
              <td id="TD7">
                <form>
                  <select className="selecthtml1">
                    <option value="Show">Show</option>
                    <option value="Hide">Hide</option>
                  </select>
                </form>
              </td>
            </tr>
            <tr>
              <td>Business Type</td>
              <td></td>
              <td id="TD7">
                <form>
                  <select className="selecthtml1">
                    <option value="Show">Show</option>
                    <option value="Hide">Hide</option>
                  </select>
                </form>
              </td>
            </tr>
            <tr>
              <td>End Date</td>
              <td></td>
              <td id="TD7">
                <form>
                  <select className="selecthtml1">
                    <option value="Show">Show</option>
                    <option value="Hide">Hide</option>
                  </select>
                </form>
              </td>
            </tr>
            <tr>
              <td>Branch</td>
              <td></td>
              <td id="TD7">
                <form>
                  <select className="selecthtml1">
                    <option value="Show">Show</option>
                    <option value="Hide">Hide</option>
                  </select>
                </form>
              </td>
            </tr>
            <tr>
              <td>Project </td>
              <td></td>
              <td id="TD7">
                <form>
                  <select className="selecthtml1">
                    <option value="Show">Show</option>
                    <option value="Hide">Hide</option>
                  </select>
                </form>
              </td>
            </tr>
            <tr>
              <td>Currency</td>
              <td></td>
              <td id="TD7">
                <form>
                  <select className="selecthtml1">
                    <option value="Show">Show</option>
                    <option value="Hide">Hide</option>
                  </select>
                </form>
              </td>
            </tr>
            <tr>
              <td>Images</td>
              <td>
                <i className="bi bi-check"></i>
              </td>
              <td id="TD7">
                <form>
                  <select className="selecthtml1">
                    <option value="Show">Show</option>
                    <option value="Hide">Hide</option>
                  </select>
                </form>
              </td>
            </tr>
            <tr>
              <td>Client Customization</td>
              <td>
                <i className="bi bi-check"></i>
              </td>
              <td id="TD7">
                <form>
                  <select className="selecthtml1">
                    <option value="Show">Show</option>
                    <option value="Hide">Hide</option>
                  </select>
                </form>
              </td>
            </tr>
            <tr>
              <td>Note For Staff</td>
              <td>
                <i className="bi bi-check"></i>
              </td>
              <td id="TD7">
                <form>
                  <select className="selecthtml1">
                    <option value="Show">Show</option>
                    <option value="Hide">Hide</option>
                  </select>
                </form>
              </td>
            </tr>
            <tr>
              <td>Order Client</td>
              <td>
                <i className="bi bi-check"></i>
              </td>
              <td id="TD7">
                <form>
                  <select className="selecthtml1">
                    <option value="Show">Show</option>
                    <option value="Hide">Hide</option>
                  </select>
                </form>
              </td>
            </tr>
            <tr>
              <td>Order Contact</td>
              <td>
                <i className="bi bi-check"></i>
              </td>
              <td id="TD7">
                <form>
                  <select className="selecthtml1">
                    <option value="Show">Show</option>
                    <option value="Hide">Hide</option>
                  </select>
                </form>
              </td>
            </tr>
            <tr>
              <td>Contact Tags</td>
              <td>
                <i className="bi bi-check"></i>
              </td>
              <td id="TD7">
                <form>
                  <select className="selecthtml1">
                    <option value="Show">Show</option>
                    <option value="Hide">Hide</option>
                  </select>
                </form>
              </td>
            </tr>
            <tr>
              <td>Client's Contact Details</td>
              <td>
                <i className="bi bi-check"></i>
              </td>
              <td id="TD7">
                <form>
                  <select className="selecthtml1">
                    <option value="Show">Show</option>
                    <option value="Hide">Hide</option>
                  </select>
                </form>
              </td>
            </tr>
            <tr>
              <td>Contact's Contact Details</td>
              <td>
                <i className="bi bi-check"></i>
              </td>
              <td id="TD7">
                <form>
                  <select className="selecthtml1">
                    <option value="Show">Show</option>
                    <option value="Hide">Hide</option>
                  </select>
                </form>
              </td>
            </tr>
            <tr>
              <td>Order Client's Contact Details</td>
              <td>
                <i className="bi bi-check"></i>
              </td>
              <td id="TD7">
                <form>
                  <select className="selecthtml1">
                    <option value="Show">Show</option>
                    <option value="Hide">Hide</option>
                  </select>
                </form>
              </td>
            </tr>
            <tr>
              <td>Order Contac's Contact Details</td>
              <td>
                <i className="bi bi-check"></i>
              </td>
              <td id="TD7">
                <form>
                  <select className="selecthtml1">
                    <option value="Show">Show</option>
                    <option value="Hide">Hide</option>
                  </select>
                </form>
              </td>
            </tr>
            <tr>
              <td>Initial Assigned User</td>
              <td>
                <i className="bi bi-check"></i>
              </td>
              <td id="TD7">
                <form>
                  <select className="selecthtml1">
                    <option value="Show">Show</option>
                    <option value="Hide">Hide</option>
                  </select>
                </form>
              </td>
            </tr>
            <tr>
              <td>Overnight delivery to 1 x UK Adress</td>
              <td>
                <i className="bi bi-check"></i>
              </td>
              <td id="TD7">
                <form>
                  <select className="selecthtml1">
                    <option value="Show">Show</option>
                    <option value="Hide">Hide</option>
                  </select>
                </form>
              </td>
            </tr>
          </table>
        </div>
      </Col>
    </Row>
  );
};

export default QuotationShowHideEditFields;
