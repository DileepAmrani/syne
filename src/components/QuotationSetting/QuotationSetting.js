import React, { useEffect, useState } from "react";
import "./QuotationSetting.css";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Link } from "react-router-dom";
import { Col, Row, Container, Table} from "react-bootstrap";
import QuotationSettingSidebar from "../QuotationSettingsSidebar/QuotationSettingsSidebar";
import $ from "jquery";


const QuotationSetting = () => {

  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  useEffect(() => {
    console.log(editorState);
  }, [editorState]);
  $('.opener').on('click', function() {
    $('#leftsidebar').addClass('displaysidebar');
  });
  
  $('.closer').on('click', function() {
    $('#leftsidebar').removeClass('displaysidebar');
  });


  return <Row>
  <Col xs={12} md={2} className="m-0 p-0"><span>just</span>
</Col>
  
  <Col xs={12} md={10} className="m-0 p-4 mt-5 pt-5">
  
    <div id="div-mar">
    
    <h2 id="quote-h2">Quotation Defaults <i className="fas fa-bars opener ml-5"></i></h2>
    </div>
    <div id="div-mar">
    <h3 id="quote-h3">Starting Reference:</h3>
    <p id="quote-p">Enter the Starting reference used on all newly created records</p>
    <input id="quote-input" type="text" name="" /></div>
    <div id="div-mar">
    <h3 id="quote-h3">Starting Number:</h3>
    <p id="quote-p"> Enter the Starting incremental number used on all newly created records</p>
    <input id="quote-input" type="text" name="" />
    </div>
    <div id="div-mar">
    <h3 id="quote-h3">Default Numbers Days Valid:</h3>
    <p id="quote-p">Enter the Number of days valid used on all newly created records</p>
    <input id="quote-input" type="text" name="" />
    </div>
    <div>
    <h3 id="quote-h3">Auto Deprecate Old Versions:</h3>
    <p id="quote-p-s">Automatically depreciate older versions of Quotation when new versions are created</p>
    <input type="checkbox" id="1" /><label id="quote-label" for="1">Auto Depreciate Old Versions</label>
    </div>
    <div><h3 id="quote-h3-s">Default Company Note:</h3>
    <p id="quote-p-s">Enter the default note entered into all newly created records</p>

    <div style={{ border: "1px solid black", padding: '2px', minHeight: '400px' }}>
        <Editor
          editorState={editorState}
          onEditorStateChange={setEditorState}
        />
      </div>
    </div><br /><div>
        <h3 id="quote-h3-m">Defauly Company Customiztion Settings:</h3>
        <p id="quote-p-m">Pick the default customization settings for quotes sent to your Companies</p>
        <div><input type="checkbox" id="2" /><label id="quote-label" for="2">Allow Company to Customize Quotation</label></div>
        <div><input type="checkbox" id="3" /><label id="quote-label" for="3">Allow Company to Customize Line Item Quantities</label></div>
        <div><input type="checkbox" id="4" /><label id="quote-label" for="4">Allow Company to Deselect Sections</label></div>
        <div><input type="checkbox" id="5" /><label id="quote-label" for="5">Customized Version Needs To Be Checked After Company Submission</label>
        </div>
        </div>
        <div>
            <h3 id="quote-h3-m">Default Copy Settings:</h3>
        </div>
        <div>
            <input type="checkbox" id="6" /><label id="quote-label" for="6">Keep the same version number when copying a quote</label></div>
            <br /><div id="quote-flex"><h3 id="quote-h3-m">Default Optional Item Settings:</h3>
            <p id="quote-p-s">Pick the PDF default font colour for Optional Items</p>
            <div id="quote-flex-center"><input type={"color"} value="#ff0000" /></div>
            </div>
        
            <button id="quote-btn">Save Settings </button>

        </Col>
        </Row>
};

export default QuotationSetting;
