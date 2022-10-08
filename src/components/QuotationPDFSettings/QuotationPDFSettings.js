import React, { useEffect, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Link } from "react-router-dom";
import { Col, Row, Container, Table } from "react-bootstrap";
import QuotationSettingSidebar from "../QuotationSettingsSidebar/QuotationSettingsSidebar";
import edit from "../../images/edit.png";
import { Switch } from "antd";

const QuotationPDFSettings = () => {
  function onChange(checked) {
    console.log(`switch to ${checked}`);
  }

  return (
    <Row>
      <Col xs={12} md={2} className="m-0 p-0">
        <span>just</span>
      </Col>

      <Col xs={12} md={10} className="m-0 p-4 mt-5 pt-5">
        <div id="pdfparent2">
          <div id="pdftop-div">
            <div>
              <h2 className="pdfh2">Quotation PDF Templates <i className="fas fa-bars opener ml-5"></i></h2>
            </div>
            <div>
              <button id="pdf-btn">
                <i className="pdf-icon bi bi-card-list"></i>View Tag List
              </button>
              <button id="pdf-btn-color">
                <i className="pdf-icon bi bi-file-earmark-pdf-fill"></i>View Sample
                PDf Templates
              </button>
            </div>
          </div>
          <button id="pdf-btn-color1">
            <i className="pdf-icon bi bi-upload"></i>Upload New PDF Template
          </button>
          <div className="pdf-flex">
            <h2 id="pdf-flex-h2">Front Cover PDF Templates</h2>
            <div className="pdf-flex-row">
              <h2 className="pdf-flex-h2-s">
                Replace
                <div className="btn-group">
                  <button
                    type="button"
                    className="btn btn-sm btn-danger dropdown-toggle"
                    id="pdf-flex-btn"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Audio Front Cover(17/03/2018 12:43:24)
                  </button>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="/">
                      Action
                    </a>
                    <a className="dropdown-item" href="/">
                      Another action
                    </a>
                    <a className="dropdown-item" href="/">
                      Something else here
                    </a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="/">
                      Separated link
                    </a>
                  </div>
                </div>
              </h2>
              <h2 className="pdf-flex-h2-s">
                with
                <div className="btn-group">
                  <button
                    type="button"
                    className=" btn btn-sm btn-danger dropdown-toggle"
                    id="pdf-flex-btn"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Audio Front Cover(17/03/2018 12:43:24)
                  </button>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="/">
                      Action
                    </a>
                    <a className="dropdown-item" href="/">
                      Another action
                    </a>
                    <a className="dropdown-item" href="/">
                      Something else here
                    </a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="/">
                      Separated link
                    </a>
                  </div>
                </div>
              </h2>
            </div>
            <button id="pdf-flex-btn-1">
              <i className="pdf-icon bi bi-reply-all-fill"></i>Repace with all
              Pre-builds
            </button>
          </div>
          <div className="pdftable-upper-div">
            <button className="pdftable-upper-div-btn">
              <div className="pdftable-upper-div-div">
                <i className="pdftable-upper-div-div-btn bi bi-cloud-upload-fill"></i>
                <div className="pdftable-upper-div-div-div">
                  <p className="pdftable-upper-div-div-div-p">Select File or</p>
                  <h1 className="pdftable-upper-div-div-div-h1">
                    Drag and Drop Here...
                  </h1>
                </div>
              </div>
            </button>
          </div>
          <table className="pdftable">
            <tr>
              <th id="pdftable-th-1">Format</th>
              <th id="pdftable-th-2">Filename</th>
              <th id="pdftable-th-3">Size</th>
              <th id="pdftable-th-4">Uploaded</th>
              <th id="pdftable-th-5">Archived</th>
              <th id="pdftable-th-6"></th>
            </tr>
            <tr className="pdftable-tr">
              <td>
                <button className="pdftable-btn">Docx</button>
              </td>
              <td className="pdftable-td-h2">Audio Front Cover</td>
              <td className="pdftable-td">668kbps</td>
              <td className="pdftable-td">17/03/18 12:43</td>
              <td className="pdftable-td"></td>
              <td className="pdftable-td">
                <div className="pdftable-div">
                  <img
                    src="/static/media/edit-primary.c0057ad4614f43e0facf34ffd0254748.svg"
                    alt=""
                  />
                  <img
                    src="/static/media/Delete_icon.3d68933bd3c10a8c298080d47edd122c.svg"
                    alt=""
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <button className="pdftable-btn">Docx</button>
              </td>
              <td className="pdftable-td-h2">Basic Front Cover</td>
              <td className="pdftable-td">128bkpbs</td>
              <td className="pdftable-td">17/03/18 12:43</td>
              <td className="pdftable-td"></td>
              <td className="pdftable-td">
                <div className="pdftable-div">
                  <img
                    src="/static/media/edit-primary.c0057ad4614f43e0facf34ffd0254748.svg"
                    alt=""
                  />
                  <img
                    src="/static/media/Delete_icon.3d68933bd3c10a8c298080d47edd122c.svg"
                    alt=""
                  />
                </div>
              </td>
            </tr>
            <tr className="pdftable-tr">
              <td>
                <button className="pdftable-btn">Docx</button>
              </td>
              <td className="pdftable-td-h2">Catering Front Cover</td>
              <td className="pdftable-td">128bkpbs</td>
              <td className="pdftable-td">17/03/18 12:43</td>
              <td className="pdftable-td"></td>
              <td className="pdftable-td">
                <div className="pdftable-div">
                  <img
                    src="/static/media/edit-primary.c0057ad4614f43e0facf34ffd0254748.svg"
                    alt=""
                  />
                  <img
                    src="/static/media/Delete_icon.3d68933bd3c10a8c298080d47edd122c.svg"
                    alt=""
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <button className="pdftable-btn">Docx</button>
              </td>
              <td className="pdftable-td-h2">Construction Front Cover</td>
              <td className="pdftable-td">128bkpbs</td>
              <td className="pdftable-td">17/03/18 12:43</td>
              <td className="pdftable-td"></td>
              <td className="pdftable-td">
                <div className="pdftable-div">
                  <img
                    src="/static/media/edit-primary.c0057ad4614f43e0facf34ffd0254748.svg"
                    alt=""
                  />
                  <img
                    src="/static/media/Delete_icon.3d68933bd3c10a8c298080d47edd122c.svg"
                    alt=""
                  />
                </div>
              </td>
            </tr>
            <tr className="pdftable-tr">
              <td>
                <button className="pdftable-btn">Docx</button>
              </td>
              <td className="pdftable-td-h2">Convering Letters -inc total</td>
              <td className="pdftable-td">128bkpbs</td>
              <td className="pdftable-td">17/03/18 12:43</td>
              <td className="pdftable-td"></td>
              <td className="pdftable-td">
                <div className="pdftable-div">
                  <img
                    src="/static/media/edit-primary.c0057ad4614f43e0facf34ffd0254748.svg"
                    alt=""
                  />
                  <img
                    src="/static/media/Delete_icon.3d68933bd3c10a8c298080d47edd122c.svg"
                    alt=""
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <button className="pdftable-btn">Docx</button>
              </td>
              <td className="pdftable-td-h2">Events Front Cover</td>
              <td className="pdftable-td">128bkpbs</td>
              <td className="pdftable-td">17/03/18 12:43</td>
              <td className="pdftable-td"></td>
              <td className="pdftable-td">
                <div className="pdftable-div">
                  <img
                    src="/static/media/edit-primary.c0057ad4614f43e0facf34ffd0254748.svg"
                    alt=""
                  />
                  <img
                    src="/static/media/Delete_icon.3d68933bd3c10a8c298080d47edd122c.svg"
                    alt=""
                  />
                </div>
              </td>
            </tr>
            <tr className="pdftable-tr">
              <td>
                <button className="pdftable-btn">Docx</button>
              </td>
              <td className="pdftable-td-h2">Kitchen Front Cover</td>
              <td className="pdftable-td">128bkpbs</td>
              <td className="pdftable-td">17/03/18 12:43</td>
              <td className="pdftable-td"></td>
              <td className="pdftable-td">
                <div className="pdftable-div">
                  <img
                    src="/static/media/edit-primary.c0057ad4614f43e0facf34ffd0254748.svg"
                    alt=""
                  />
                  <img
                    src="/static/media/Delete_icon.3d68933bd3c10a8c298080d47edd122c.svg"
                    alt=""
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <button className="pdftable-btn">Docx</button>
              </td>
              <td className="pdftable-td-h2">Office Front Cover</td>
              <td className="pdftable-td">128bkpbs</td>
              <td className="pdftable-td">17/03/18 12:43</td>
              <td className="pdftable-td"></td>
              <td className="pdftable-td">
                <div className="pdftable-div">
                  <img
                    src="/static/media/edit-primary.c0057ad4614f43e0facf34ffd0254748.svg"
                    alt=""
                  />
                  <img
                    src="/static/media/Delete_icon.3d68933bd3c10a8c298080d47edd122c.svg"
                    alt=""
                  />
                </div>
              </td>
            </tr>
            <tr className="pdftable-tr">
              <td>
                <button className="pdftable-btn">Docx</button>
              </td>
              <td className="pdftable-td-h2">Plumbing Front Cover</td>
              <td className="pdftable-td">128bkpbs</td>
              <td className="pdftable-td">17/03/18 12:43</td>
              <td className="pdftable-td"></td>
              <td className="pdftable-td">
                <div className="pdftable-div">
                  <img
                    src="/static/media/edit-primary.c0057ad4614f43e0facf34ffd0254748.svg"
                    alt=""
                  />
                  <img
                    src="/static/media/Delete_icon.3d68933bd3c10a8c298080d47edd122c.svg"
                    alt=""
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <button className="pdftable-btn">Docx</button>
              </td>
              <td className="pdftable-td-h2">Windows Front Cover</td>
              <td className="pdftable-td">128bkpbs</td>
              <td className="pdftable-td">17/03/18 12:43</td>
              <td className="pdftable-td"></td>
              <td className="pdftable-td">
                <div className="pdftable-div">
                  <img
                    src="/static/media/edit-primary.c0057ad4614f43e0facf34ffd0254748.svg"
                    alt=""
                  />
                  <img
                    src="/static/media/Delete_icon.3d68933bd3c10a8c298080d47edd122c.svg"
                    alt=""
                  />
                </div>
              </td>
            </tr>
          </table>
          <div className="pdf-flex">
            <h2 id="pdf-flex-h2">Body PDF Templates</h2>
            <div className="pdf-flex-row">
              <h2 className="pdf-flex-h2-s">
                Replace
                <div className="btn-group">
                  <button
                    type="button"
                    className="btn btn-sm btn-danger dropdown-toggle"
                    id="pdf-flex-btn"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Audio Front Cover(17/03/2018 12:43:24)
                  </button>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="/">
                      Action
                    </a>
                    <a className="dropdown-item" href="/">
                      Another action
                    </a>
                    <a className="dropdown-item" href="/">
                      Something else here
                    </a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="/">
                      Separated link
                    </a>
                  </div>
                </div>
              </h2>
              <h2 className="pdf-flex-h2-s">
                with
                <div className="btn-group">
                  <button
                    type="button"
                    className=" btn btn-sm btn-danger dropdown-toggle"
                    id="pdf-flex-btn"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Audio Front Cover(17/03/2018 12:43:24)
                  </button>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="/">
                      Action
                    </a>
                    <a className="dropdown-item" href="/">
                      Another action
                    </a>
                    <a className="dropdown-item" href="/">
                      Something else here
                    </a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="/">
                      Separated link
                    </a>
                  </div>
                </div>
              </h2>
            </div>
            <button id="pdf-flex-btn-1">
              <i className="pdf-icon bi bi-reply-all-fill"></i>Repace with all
              Pre-builds
            </button>
          </div>
          <div className="pdftable-upper-div">
            <button className="pdftable-upper-div-btn">
              <div className="pdftable-upper-div-div">
                <i className="pdftable-upper-div-div-btn bi bi-cloud-upload-fill"></i>
                <div className="pdftable-upper-div-div-div">
                  <p className="pdftable-upper-div-div-div-p">Select File or</p>
                  <h1 className="pdftable-upper-div-div-div-h1">
                    Drag and Drop Here...
                  </h1>
                </div>
              </div>
            </button>
          </div>
          <table className="pdftable">
            <tr>
              <th id="pdftable-th-1">Format</th>
              <th id="pdftable-th-2">Filename</th>
              <th id="pdftable-th-3">Size</th>
              <th id="pdftable-th-4">Uploaded</th>
              <th id="pdftable-th-5">Archived</th>
              <th id="pdftable-th-6"></th>
            </tr>
            <tr className="pdftable-tr">
              <td>
                <button className="pdftable-btn">File</button>
              </td>
              <td className="pdftable-td-h2">Blue</td>
              <td className="pdftable-td">668kbps</td>
              <td className="pdftable-td">17/03/18 12:43</td>
              <td className="pdftable-td"></td>
              <td className="pdftable-td">
                <div className="pdftable-div">
                  <img
                    src="/static/media/edit-primary.c0057ad4614f43e0facf34ffd0254748.svg"
                    alt=""
                  />
                  <img
                    src="/static/media/Delete_icon.3d68933bd3c10a8c298080d47edd122c.svg"
                    alt=""
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <button className="pdftable-btn">File</button>
              </td>
              <td className="pdftable-td-h2">Blue (No Photo)</td>
              <td className="pdftable-td">128bkpbs</td>
              <td className="pdftable-td">17/03/18 12:43</td>
              <td className="pdftable-td"></td>
              <td className="pdftable-td">
                <div className="pdftable-div">
                  <img
                    src="/static/media/edit-primary.c0057ad4614f43e0facf34ffd0254748.svg"
                    alt=""
                  />
                  <img
                    src="/static/media/Delete_icon.3d68933bd3c10a8c298080d47edd122c.svg"
                    alt=""
                  />
                </div>
              </td>
            </tr>
            <tr className="pdftable-tr">
              <td>
                <button className="pdftable-btn">File</button>
              </td>
              <td className="pdftable-td-h2">Default</td>
              <td className="pdftable-td">128bkpbs</td>
              <td className="pdftable-td">17/03/18 12:43</td>
              <td className="pdftable-td"></td>
              <td className="pdftable-td">
                <div className="pdftable-div">
                  <img
                    src="/static/media/edit-primary.c0057ad4614f43e0facf34ffd0254748.svg"
                    alt=""
                  />
                  <img
                    src="/static/media/Delete_icon.3d68933bd3c10a8c298080d47edd122c.svg"
                    alt=""
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <button className="pdftable-btn">File</button>
              </td>
              <td className="pdftable-td-h2">Default (No Photo)</td>
              <td className="pdftable-td">128bkpbs</td>
              <td className="pdftable-td">17/03/18 12:43</td>
              <td className="pdftable-td"></td>
              <td className="pdftable-td">
                <div className="pdftable-div">
                  <img
                    src="/static/media/edit-primary.c0057ad4614f43e0facf34ffd0254748.svg"
                    alt=""
                  />
                  <img
                    src="/static/media/Delete_icon.3d68933bd3c10a8c298080d47edd122c.svg"
                    alt=""
                  />
                </div>
              </td>
            </tr>
            <tr className="pdftable-tr">
              <td>
                <button className="pdftable-btn">Docx</button>
              </td>
              <td className="pdftable-td-h2">Syne Total quote FP_V2</td>
              <td className="pdftable-td">128bkpbs</td>
              <td className="pdftable-td">17/03/18 12:43</td>
              <td className="pdftable-td"></td>
              <td className="pdftable-td">
                <div className="pdftable-div">
                  <img
                    src="/static/media/edit-primary.c0057ad4614f43e0facf34ffd0254748.svg"
                    alt=""
                  />
                  <img
                    src="/static/media/Delete_icon.3d68933bd3c10a8c298080d47edd122c.svg"
                    alt=""
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <button className="pdftable-btn">Docx</button>
              </td>
              <td className="pdftable-td-h2">Syne Unit quote FP_V2</td>
              <td className="pdftable-td">128bkpbs</td>
              <td className="pdftable-td">17/03/18 12:43</td>
              <td className="pdftable-td"></td>
              <td className="pdftable-td">
                <div className="pdftable-div">
                  <img
                    src="/static/media/edit-primary.c0057ad4614f43e0facf34ffd0254748.svg"
                    alt=""
                  />
                  <img
                    src="/static/media/Delete_icon.3d68933bd3c10a8c298080d47edd122c.svg"
                    alt=""
                  />
                </div>
              </td>
            </tr>
            <tr className="pdftable-tr">
              <td>
                <button className="pdftable-btn">Docx</button>
              </td>
              <td className="pdftable-td-h2">Syne Unit qote FP_V3</td>
              <td className="pdftable-td">128bkpbs</td>
              <td className="pdftable-td">17/03/18 12:43</td>
              <td className="pdftable-td"></td>
              <td className="pdftable-td">
                <div className="pdftable-div">
                  <img
                    src="/static/media/edit-primary.c0057ad4614f43e0facf34ffd0254748.svg"
                    alt=""
                  />
                  <img
                    src="/static/media/Delete_icon.3d68933bd3c10a8c298080d47edd122c.svg"
                    alt=""
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <button className="pdftable-btn">Docx</button>
              </td>
              <td className="pdftable-td-h2">Syne Unit quote FP_V3 PRODUCT</td>
              <td className="pdftable-td">128bkpbs</td>
              <td className="pdftable-td">17/03/18 12:43</td>
              <td className="pdftable-td"></td>
              <td className="pdftable-td">
                <div className="pdftable-div">
                  <img
                    src="/static/media/edit-primary.c0057ad4614f43e0facf34ffd0254748.svg"
                    alt=""
                  />
                  <img
                    src="/static/media/Delete_icon.3d68933bd3c10a8c298080d47edd122c.svg"
                    alt=""
                  />
                </div>
              </td>
            </tr>
          </table>
          <div className="pdf-flex">
            <h2 id="pdf-flex-h2">Back Cover PDF Templates</h2>
            <div className="pdf-flex-row">
              <h2 className="pdf-flex-h2-s">
                Replace
                <div className="btn-group">
                  <button
                    type="button"
                    className="btn btn-sm btn-danger dropdown-toggle"
                    id="pdf-flex-btn"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Audio Front Cover(17/03/2018 12:43:24)
                  </button>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="/">
                      Action
                    </a>
                    <a className="dropdown-item" href="/">
                      Another action
                    </a>
                    <a className="dropdown-item" href="/">
                      Something else here
                    </a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="/">
                      Separated link
                    </a>
                  </div>
                </div>
              </h2>
              <h2 className="pdf-flex-h2-s">
                with
                <div className="btn-group">
                  <button
                    type="button"
                    className=" btn btn-sm btn-danger dropdown-toggle"
                    id="pdf-flex-btn"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Audio Front Cover(17/03/2018 12:43:24)
                  </button>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="/">
                      Action
                    </a>
                    <a className="dropdown-item" href="/">
                      Another action
                    </a>
                    <a className="dropdown-item" href="/">
                      Something else here
                    </a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="/">
                      Separated link
                    </a>
                  </div>
                </div>
              </h2>
            </div>
            <button id="pdf-flex-btn-1">
              <i className="pdf-icon bi bi-reply-all-fill"></i>Repace with all
              Pre-builds
            </button>
          </div>
          <div className="pdftable-upper-div">
            <button className="pdftable-upper-div-btn">
              <div className="pdftable-upper-div-div">
                <i className="pdftable-upper-div-div-btn bi bi-cloud-upload-fill"></i>
                <div className="pdftable-upper-div-div-div">
                  <p className="pdftable-upper-div-div-div-p">Select File or</p>
                  <h1 className="pdftable-upper-div-div-div-h1">
                    Drag and Drop Here...
                  </h1>
                </div>
              </div>
            </button>
          </div>
          <table className="pdftable">
            <tr>
              <th id="pdftable-th-1">Format</th>
              <th id="pdftable-th-2">Filename</th>
              <th id="pdftable-th-3">Size</th>
              <th id="pdftable-th-4">Uploaded</th>
              <th id="pdftable-th-5">Archived</th>
              <th id="pdftable-th-6"></th>
            </tr>
            <tr>
              <td>
                <button className="pdftable-btn">Docx</button>
              </td>
              <td className="pdftable-td-h2">Basic Specification</td>
              <td className="pdftable-td">128bkpbs</td>
              <td className="pdftable-td">17/03/18 12:43</td>
              <td className="pdftable-td"></td>
              <td className="pdftable-td">
                <div className="pdftable-div">
                  <img
                    src="/static/media/edit-primary.c0057ad4614f43e0facf34ffd0254748.svg"
                    alt=""
                  />
                  <img
                    src="/static/media/Delete_icon.3d68933bd3c10a8c298080d47edd122c.svg"
                    alt=""
                  />
                </div>
              </td>
            </tr>
            <tr className="pdftable-tr">
              <td>
                <button className="pdftable-btn">File</button>
              </td>
              <td className="pdftable-td-h2">Product Specifications</td>
              <td className="pdftable-td">668kbps</td>
              <td className="pdftable-td">17/03/18 12:43</td>
              <td className="pdftable-td"></td>
              <td className="pdftable-td">
                <div className="pdftable-div">
                  <img
                    src="/static/media/edit-primary.c0057ad4614f43e0facf34ffd0254748.svg"
                    alt=""
                  />
                  <img
                    src="/static/media/Delete_icon.3d68933bd3c10a8c298080d47edd122c.svg"
                    alt=""
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <button className="pdftable-btn">Docx</button>
              </td>
              <td className="pdftable-td-h2">Showcase Specification</td>
              <td className="pdftable-td">128bkpbs</td>
              <td className="pdftable-td">17/03/18 12:43</td>
              <td className="pdftable-td"></td>
              <td className="pdftable-td">
                <div className="pdftable-div">
                  <img
                    src="/static/media/edit-primary.c0057ad4614f43e0facf34ffd0254748.svg"
                    alt=""
                  />
                  <img
                    src="/static/media/Delete_icon.3d68933bd3c10a8c298080d47edd122c.svg"
                    alt=""
                  />
                </div>
              </td>
            </tr>
          </table>
        </div>
      </Col>
    </Row>
  );
};

export default QuotationPDFSettings;
