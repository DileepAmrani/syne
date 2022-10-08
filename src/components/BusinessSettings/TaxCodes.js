import React, { useEffect, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Link } from "react-router-dom";
import { Col, Row, Container, Table} from "react-bootstrap";
import QuotationSettingSidebar from "../QuotationSettingsSidebar/QuotationSettingsSidebar";
import black from "../../images/black.png";
import white from "../../images/white.png";
import colorfull from "../../images/color.png";
import selected from "../../images/select.png";



const TaxCodes = () => {

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

    <div id="quote-marg" className="container">
      <h1 className="text-center">Tax Codes</h1>
      <button type="button" class="btn btn-primary bg-green b-0 float-end">+ Add New Tax Codes</button>
      <table class="table mt-5">
        <thead>
          <tr className="bg-green text-white">
            <th>Code</th>
            <th>Description</th>
            <th>% Rate</th>
            <th>Last Saved</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td scope="row">No VAT</td>
            <td>PVC</td>
            <td>20%</td>
            <td>01 / 02 / 2021</td>
            <td><i class="fas fa-edit text-blue   "></i>&nbsp;&nbsp;
             <i class="fa fa-trash text-red" aria-hidden="true"></i></td>
          </tr>
          <tr>
            <td scope="row">Default</td>
            <td>Default</td>
            <td>50%</td>
            <td>01 / 02 / 2021</td>
            <td><i class="fas fa-edit  text-blue  "></i>&nbsp;&nbsp;
            <i class="fa fa-trash text-red" aria-hidden="true"></i></td>
          </tr>
        </tbody>
      </table>

    </div>
                
            


        </Col>
        </Row>
};

export default TaxCodes;
