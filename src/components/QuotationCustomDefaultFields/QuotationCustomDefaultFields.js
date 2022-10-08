import React, { useEffect, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Link } from "react-router-dom";
import { Col, Row, Container, Table} from "react-bootstrap";
import QuotationSettingSidebar from "../QuotationSettingsSidebar/QuotationSettingsSidebar";


const QuotationCustomDefaultFields = () => {

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
           
    <div>
          <h2 id="quotefield-h2">Custom Quotation Fields <i className="fas fa-bars opener ml-5"></i></h2>
    </div>
    <div id="quote-marg">
              <button id="quotefield-btn">
                  <i class="bi bi-plus"></i>New Custom Field</button>
                  </div>
                  <div>
                        <table id="customers">
                          <tr><th id="quotefield-td1"></th>
                          <th id="quotefield-td2">Type</th>
                          <th id="quotefield-td3">Tag Name</th>
                          <th id="quotefield-td4">Label Name on screen</th>
                          <th></th><th></th></tr><tr><td>
                              <div id="quotefield-flex"><i class="bi bi-caret-up-fill"></i><i id="quotefield-icon" class="bi bi-caret-down-fill"></i></div>
                              </td>
                              <td><h1 id="quotefield-h1">Text</h1></td>
                              <td><h1 id="quotefield-h1">DEL</h1></td>
                                  <td>Overnight Delivery to 1 x UK address</td>
                                  <td><button>CreateUpdateAccess</button></td>
                                  <td>
                                      <div>
                                      <img id="quotefield-img" src="/static/media/edit-primary.c0057ad4614f43e0facf34ffd0254748.svg" alt="" />
                                      <img id="quotefield-img" src="/static/media/Delete_icon.3d68933bd3c10a8c298080d47edd122c.svg" alt="" />
                                      </div>
                                  </td>
                                </tr>
                        </table>
                    </div>
                                      <div><h3 id="quotefield-h3">Important Notes:</h3>
                                      </div><div><p id="quotefield-p">The following custom fields will appear on your Quotation edit page</p>
                                      <p id="quotefield-p-s">When creating a pdf template,custom fields must be in the tag format(CustomFieldName).</p></div>
                      <div id="quotefield-flex-s"><h3 id="quotefield-h3-s">Example:</h3><p id="quotefield-p-m">For the custom field "ProjectName",the tag should be (ProjectName)</p></div>


        </Col>
        </Row>
};

export default QuotationCustomDefaultFields;
