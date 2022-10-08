import React from "react";
import "./Quotation.css";
import {
  Form,
  InputGroup,
  Col,
  Row,
  Container,
  Dropdown,
  DropdownButton,
  Table,
} from "react-bootstrap";
import Delete_icon from "../../images/Delete_icon.svg";
import DatePicker from 'react-date-picker';
import checkicon from "../../images/check-square.svg";
import pdf from "../../images/pdf.png";
import external from "../../images/external-link.png";
import calandericon from "../../images/calendar-primary.svg";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
import { getQuotations } from "../../api/auth/Quotations";
import { useState } from 'react';
import { useEffect } from 'react';
import axios from "axios";


const auth = axios.create({
  baseURL: `${process.env.REACT_APP_BACKEND_URL}`,
});

const Quotation = () => {
  const [quotationList, setQuotationList] = useState([1, 2]);
  const [quotationId, setQuotationId] = useState();
  const [deleteQuotation, setDeleteQuotation] = useState(false);
  const [quotationCompanyInDelModal, setQuotationCompanyInDelModal] = useState();
  useEffect(() => {
    getQuotationsList();
  }, [])
  const getQuotationsList = async () => {

    const result = await getQuotations();
    setQuotationList(result.data.data);
  }
  console.log(quotationList);

  const handleDeleteQuotation = async () => {

    const result = await auth.delete(
      `/deletequotation/${quotationId}`
      , {
        headers: {
          // 'Content-Type': 'application/json',
          // 'Content-Type': 'multipart/form-data',
          // 'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      }
    );
    console.log(result);
    console.log("Quotation Deleted");
    getQuotationsList();
  }
  const handleDeleteModal = (data) => {
    setDeleteQuotation(true);
    setQuotationId(data.id);
    setQuotationCompanyInDelModal(data.company);
  }
  return (
    <Container fluid className="quotation-top mt-100">
      <Row className="h-auto mt-2 mb-2">
        <Col xs={12} md={2} className="left-col-quote-left-side">
          <h5 className="h5-quotation">Quotation</h5>
        </Col>
        <Col xs={12} md={4}>

          <div className="input-group">
            <input
              type="text"
              className="form-control mw-400"
              placeholder="Search by Company, Quotation Number Description, Section Name "
              aria-label="Recipient's username with two button addons"
              aria-describedby="button-addon4"
            />
            <div className="input-group-append" id="button-addon4">
              <button className="btn btn-primary bg-dark-blue " type="button">
                <i className="fas fa-search"></i>
                &nbsp;&nbsp;Search
              </button>
              <button className="btn btn-outline-secondary " type="button">
                Advanced
              </button>
            </div>
          </div>

        </Col>

        <Col xs={6} md={1}>

          <button
            type="button"
            className="btn btn-sm  btn-light dropdown dropnow text-left"
            data-toggle="dropdown"
            aria-expanded="false"
          >
            All Records &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 448 512"><path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z" /></svg>
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

        </Col>

        <Col xs={6} md={1}>

          <div className="quotation-datepicker ">
            <input type="date" className="form-control" />
          </div>

        </Col>

        <Col md={1}>



        </Col>
        <Col xs={12} md={1}>

          <div className="btn-group">
            <button
              type="button"
              className="btn btn-sm btn-secondary dropdown bg-export p-2 br-10"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              <img src={external} alt="#" width={20} height={20} />
              &nbsp;&nbsp;&nbsp;&nbsp;<b>Export</b>&nbsp;&nbsp;&nbsp;&nbsp;
              <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} className="fill-white" viewBox="0 0 448 512"><path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z" /></svg>
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

        </Col>
        <Col xs={12} md={1}>

          <div className="btn-group">
            <button
              type="button"
              className="btn btn-sm btn-danger dropdown bg-pdf p-2 br-10"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              <img src={pdf} alt="#" width={20} height={20} />
              &nbsp;&nbsp;&nbsp;&nbsp;<b>Quick PDF</b>&nbsp;&nbsp;&nbsp;&nbsp;
              <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} className="fill-white" viewBox="0 0 448 512"><path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z" /></svg>
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

        </Col>
        <Col xs={12} md={1}>

          <button type="button" class="btn btn-sm btn-danger bg-red p-2 br-10 view">

            <img src={pdf} alt="#" width={20} height={20} />
            &nbsp;&nbsp;<b>View</b>&nbsp;&nbsp;
          </button>

        </Col>
      </Row>

      <div className="h-100 ">
        <Row className="h-100">
          <Col xs={12} md={2} className="left-col-quote-left-side b1">
            <div className="quote-left-side  border-rounded">
              <Link to="/quotation/1"> <button className="btn btn-sm btn-primary w-100 p-3 font-quote-button br-10" >
                {" "}
                <b>+ Add New Quote</b>
                <br />
              </button></Link>

              <div className="alert tab-dark-blue m-0 text-white p-2 w-100">
                <span>Draft</span>
                <input className="form-check-input mr-1 position-relative float-right check-white" type="checkbox" name="draft-check" id="check" />
              </div>

              {/* <button className=" btn btn-sm btn-primary p-2  quotation-left-button">
                <span>Draft</span>
                <img src={checkicon} alt="" className="quotation-check-icon" />
              </button> */}
              <button className=" btn btn-sm btn-primary p-2 quotation-left-button">
                <span>Sent</span>
                <img src={checkicon} alt="" className="quotation-check-icon" />
              </button>
              <button className=" btn btn-sm btn-primary p-2 quotation-left-button">
                <span>Accepted</span>
                <img src={checkicon} alt="" className="quotation-check-icon" />
              </button>
              <button className=" btn btn-sm btn-primary p-2 quotation-left-button">
                <span>Declined</span>
                <img src={checkicon} alt="" className="quotation-check-icon" />
              </button>
              <button className=" btn btn-sm btn-primary p-2 quotation-left-button">
                <span>Aged</span>
                <img src={checkicon} alt="" className="quotation-check-icon" />
              </button>
            </div>
          </Col>
          <Col md={10}>
            <div className="table-scroll">
              <Table striped bordered hover className="quotation-table">
                <thead className="quotation-table-head">
                  <tr>
                    <th>Status</th>
                    <th>Quote No.</th>
                    <th>Date</th>
                    <th>Company</th>
                    <th>Description</th>
                    <th>Contact</th>
                    <th>Linked job</th>
                    <th>Next</th>
                    <th>Tax</th>
                    <th>Total</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {quotationList.map((quotation) => (
                    <tr>
                      <td>
                        <div className="form-group">
                          <select className="form-control-sm form-select-sm tab-dark-blue text-light">
                            <option selected>{quotation.status}</option>
                            <option value={"Sent"}>Sent</option>
                            <option value={"Accepted"}>Accepted</option>
                            <option value={"Decline"}>Decline</option>
                            <option value={"Aged"}>Aged</option>
                          </select>
                        </div>
                      </td>
                      <td>{quotation.quote_no}</td>
                      <td>{quotation.date}</td>
                      <td>{quotation.company}</td>
                      <td>{quotation.description}</td>
                      <td>{quotation.contact}</td>
                      <td>{quotation.linkedjob}</td>
                      <td>&euro;{quotation.next}</td>
                      <td>&euro;222.45</td>
                      <td>&euro;222.45</td>

                      <td>
                        <input type="radio" class="bg-secondary" />
                        &nbsp;
                        <img
                          src={Delete_icon}
                          data-toggle={deleteQuotation ? "modal" : ""}
                          data-target="#Delete_modal"
                          alt="deleteicon"
                          onClick={() => handleDeleteModal(quotation)}
                        />
                      </td>
                    </tr>
                  ))}


                  <div
                    className="modal fade"
                    id="Delete_modal"
                    tabindex="-1"
                    role="dialog"
                    aria-labelledby="exampleModalCenterTitle"
                    aria-hidden="true"
                  >
                    <div
                      className="modal-dialog modal-dialog-centered"
                      role="document"
                    >
                      <div className="modal-content p-3">
                        <div className="delete__modal__text">
                          <div>Quotation Company: {quotationCompanyInDelModal}</div>
                          <div>Are you Sure you want to Delete ?</div>
                        </div>
                        <div className="delete__modal__button__div">
                          <div data-dismiss="modal">
                            <button className="delete__modal__button"
                              onClick={() => handleDeleteQuotation()}
                            >
                              <i class="far fa-trash-alt"></i>
                              <span>Delete</span>
                            </button>
                          </div>
                          <div data-dismiss="modal">
                            <button className="close__modal__button">
                              Close
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>


                  <tr class="bg-light border-bottom border-secondary">
                    <td colspan="11" class="pb-0" style={{ gap: "1rem" }}>
                      <div class="w-100 d-flex" style={{ gap: "1rem" }}>
                        <nav aria-label="Page navigation">
                          <ul class="pagination pagination-sm">
                            <li class="page-item">
                              <a
                                class="page-link link-quote"
                                href="/"
                                aria-label="Previous"
                              >
                                <span aria-hidden="true">&laquo;</span>
                              </a>
                            </li>
                            <li class="page-item">
                              <a class="page-link active-link-quote" href="/">
                                1
                              </a>
                            </li>
                            <li class="page-item">
                              <a class="page-link link-quote" href="/">
                                2
                              </a>
                            </li>
                            <li class="page-item">
                              <a class="page-link link-quote" href="/">
                                3
                              </a>
                            </li>
                            <li class="page-item">
                              <a class="page-link link-quote" href="/">
                                4
                              </a>
                            </li>
                            <li class="page-item">
                              <a class="page-link link-quote" href="/">
                                5
                              </a>
                            </li>
                            <li class="page-item">
                              <a class="page-link link-quote" href="/">
                                6
                              </a>
                            </li>
                            <li class="page-item">
                              <a class="page-link link-quote" href="/">
                                7
                              </a>
                            </li>
                            <li class="page-item">
                              <a class="page-link link-quote" href="/">
                                8
                              </a>
                            </li>
                            <li class="page-item">
                              <a class="page-link link-quote" href="/">
                                9
                              </a>
                            </li>
                            <li class="page-item">
                              <a class="page-link link-quote" href="/">
                                10
                              </a>
                            </li>
                            <li class="page-item">
                              <a class="page-link link-quote" href="/" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                              </a>
                            </li>
                          </ul>
                        </nav>
                        <div class="form-group row ml-3 align-items-center input-group-sm">
                          <select
                            class="form-control col"
                            id="inputGroupSelect03"
                            style={{ maxWidth: "65px" }}
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
                          <label class="form-control-label font-weight-light col mb-0  item-per-page-table">
                            Items per page
                          </label>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Quotation;
