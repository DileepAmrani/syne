import React, { useEffect, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Link } from "react-router-dom";
import { Col, Row, Container, Table} from "react-bootstrap";
import QuotationSettingSidebar from "../QuotationSettingsSidebar/QuotationSettingsSidebar";
import edit from "../../images/edit.png";
import del from "../../images/Delete_icon.svg"


const YourInformation = () => {

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
          <h2 id="quotefield-h2" className="text-center m-4">Your Information<i className="fas fa-bars opener ml-5"></i></h2>
    </div>
    <div id="quote-marg" className="container">
        <div className="row">
        <div className="form-group col-md-6 col-xs-12">
          <label for="">Business Name:</label>
          <input type="text"
            className="form-control" name="" id="" aria-describedby="helpId" placeholder="" />
          <small id="helpId" class="form-text text-muted"></small>
        </div>
        <div className="form-group col-md-6 col-xs-12">
          <label for="">Motto:</label>
          <input type="text"
            className="form-control" name="" id="" aria-describedby="helpId" placeholder="" />
          <small id="helpId" class="form-text text-muted"></small>
        </div>
        <div className="form-group col-md-6 col-xs-12">
          <label for="">Address Line 1:</label>
          <input type="text"
            className="form-control" name="" id="" aria-describedby="helpId" placeholder="" />
          <small id="helpId" class="form-text text-muted"></small>
        </div>
        <div className="form-group col-md-6 col-xs-12">
          <label for="">Address Line 2:</label>
          <input type="text"
            className="form-control" name="" id="" aria-describedby="helpId" placeholder="" />
          <small id="helpId" class="form-text text-muted"></small>
        </div>
        <div className="form-group col-md-6 col-xs-12">
          <label for="">Address line 3:</label>
          <input type="text"
            className="form-control" name="" id="" aria-describedby="helpId" placeholder="" />
          <small id="helpId" class="form-text text-muted"></small>
        </div>
        <div className="form-group col-md-6 col-xs-12">
          <label for="">Town:</label>
          <input type="text"
            className="form-control" name="" id="" aria-describedby="helpId" placeholder="" />
          <small id="helpId" class="form-text text-muted"></small>
        </div>
        <div className="form-group col-md-6 col-xs-12">
          <label for="">Country:</label>
          <input type="text"
            className="form-control" name="" id="" aria-describedby="helpId" placeholder="" />
          <small id="helpId" class="form-text text-muted"></small>
        </div>
        <div className="form-group col-md-6 col-xs-12">
          <label for="">State:</label>
          <input type="text"
            className="form-control" name="" id="" aria-describedby="helpId" placeholder="" />
          <small id="helpId" class="form-text text-muted"></small>
        </div>
        <div className="form-group col-md-6 col-xs-12">
          <label for="">PostCode:</label>
          <input type="text"
            className="form-control" name="" id="" aria-describedby="helpId" placeholder="" />
          <small id="helpId" class="form-text text-muted"></small>
        </div>
        <div className="form-group col-md-6 col-xs-12">
          <label for="">Town:</label>
          <input type="text"
            className="form-control" name="" id="" aria-describedby="helpId" placeholder="" />
          <small id="helpId" class="form-text text-muted"></small>
        </div>
        <div className="form-group col-md-6 col-xs-12">
          <label for="">Telephone:</label>
          <input type="text"
            className="form-control" name="" id="" aria-describedby="helpId" placeholder="" />
          <small id="helpId" class="form-text text-muted"></small>
        </div>
        <div className="form-group col-md-6 col-xs-12">
          <label for="">Mobile:</label>
          <input type="text"
            className="form-control" name="" id="" aria-describedby="helpId" placeholder="" />
          <small id="helpId" class="form-text text-muted"></small>
        </div>
        <div className="form-group col-md-6 col-xs-12">
          <label for="">Email:</label>
          <input type="text"
            className="form-control" name="" id="" aria-describedby="helpId" placeholder="" />
          <small id="helpId" class="form-text text-muted"></small>
        </div>
        <div className="form-group col-md-6 col-xs-12">
          <label for="">Website:</label>
          <input type="text"
            className="form-control" name="" id="" aria-describedby="helpId" placeholder="" />
          <small id="helpId" class="form-text text-muted"></small>
        </div>
        <div className="form-group col-md-6 col-xs-12">
          <label for="">Fax:</label>
          <input type="text"
            className="form-control" name="" id="" aria-describedby="helpId" placeholder="" />
          <small id="helpId" class="form-text text-muted"></small>
        </div>
        <div className="form-group col-md-6 col-xs-12">
          <label for="">Town:</label>
          <input type="text"
            className="form-control" name="" id="" aria-describedby="helpId" placeholder="" />
          <small id="helpId" class="form-text text-muted"></small>
        </div>
        <div className="form-group col-md-6 col-xs-12">
          <label for="">Tax Number:</label>
          <input type="text"
            className="form-control" name="" id="" aria-describedby="helpId" placeholder="" />
          <small id="helpId" class="form-text text-muted"></small>
        </div>
        <div className="form-group col-md-6 col-xs-12">
          <label for="">Company Registration Number:</label>
          <input type="text"
            className="form-control" name="" id="" aria-describedby="helpId" placeholder="" />
          <small id="helpId" class="form-text text-muted"></small>
        </div>

        <button type="button" className="btn btn-primary btn-lg btn-block col-md-6 col-xs-12 m-auto bg-green b-0">Submit</button>
        
    </div>
                  
        </div>
                
            


        </Col>
        </Row>
};

export default YourInformation;
