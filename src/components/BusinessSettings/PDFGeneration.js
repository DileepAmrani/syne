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



const PDFGeneration = () => {

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
      <h1 className="text-center">PDF Generation</h1>
      <br />
      <div class="form-check form-check-inline col-md-5">
        <label class="form-check-label">
        <h2>Enable Password Protect PDFs :</h2>
        </label>
          <input class="form-check-input float-end" type="checkbox" name="" id="" value="checkedValue" /> 
      
      </div>
      <br />
      <br />
      <div class="form form-inline col-md-8">
        <label class="form-label">
        <h2>Set PDF Generation password :</h2> &nbsp; &nbsp; &nbsp;
          <input class="form-control-lg" type="text" name="" id="" value="checkedValue" /> 
        </label>
      </div>
      <br />
      <button type="button" class="btn btn-lg btn-primary bg-green b-0">Save Settings</button>

      

    </div>
                
            


        </Col>
        </Row>
};

export default PDFGeneration;
