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



const YourBranding = () => {

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
        <div className="row p-3 bm">

        <h2 id="quotefield-h2" className="text-center m-4">Your Branding<i className="fas fa-bars opener ml-5"></i></h2>
          <h3>Company Logo for Documents: </h3>
          <p>Upload  your own business logo that will appear on the PDF Document and  emails created by the system</p>
          <img src={colorfull} alt="#" className="col-md-6 col-xs-12" />
          <img src={black} alt="#" className="col-md-6 col-xs-12" />
          <img src={white} alt="#" className="col-md-6 col-xs-12 mt-4" />
                  
        </div>

        <div className="row p-3 bm mt-3">

        <h2 id="quotefield-h2" className="text-center m-4">Theme Customization Option<i className="fas fa-bars opener ml-5"></i></h2>
          <h3>Company Logo for Documents: </h3>
          <p>Upload  your own business logo that will appear on the PDF Document and  emails created by the system</p>
          
          <span><input type="color" className="w-5" /></span>
          <img src={selected} alt="#" className="col-md-8 col-xs-12" />

          
</div>

<div className="row p-3 bm mt-3">

<h2 id="quotefield-h2" className="text-center m-4">Mobile Theme Colors<i className="fas fa-bars opener ml-5"></i></h2>
  <div className="d-inline text-center">
  <h5 className="d-inline m-2">Qutation Table Color:<input type="color" className="w-5" value="#EF6F26" /></h5> 
  <h5 className="d-inline m-2">Jobs Table Color: <input type="color" className="w-5" value="#324A5D" /></h5>
  <h5 className="d-inline m-2">Invoice Table Color: <input type="color" className="w-5" /></h5>
  </div>
  
</div>
    </div>
                
            


        </Col>
        </Row>
};

export default YourBranding;
