import React from "react";
import "./QuotationId.css";
import { Col, Row, Container, Table } from "react-bootstrap";
import quickpdf from "../../images/pdf-icon.svg";
// import checkicon from "../../images/check-square.svg";
import calender from "../../images/calendar-primary.svg";
import menuicon from "../../images/menu_icon.svg";
import editicon from "../../images/edit-primary.svg";
import Delete_icon from "../../images/Delete_icon.svg";
import { Link, useNavigate } from 'react-router-dom';
import image_vector from "../../images/image_vector.svg";
import { getQuotations } from "../../api/auth/Quotations";
import { useState } from 'react';
import { useEffect } from 'react';
import axios from "axios";


const auth = axios.create({
  baseURL: `${process.env.REACT_APP_BACKEND_URL}`,
});
const QuotationId = () => {
  const navigate = useNavigate();
  const [date, setDate] = useState("2022-8-15")
  const [company, setCompany] = useState('Ricoh (Merstham)')
  const [contact, setContact] = useState("Pawel Szulam")
  const [invoiceAddress, setInvoiceAddress] = useState("Ricoh (Merstham) , Ricoh House")
  const [siteAddress, setSiteAddress] = useState("Ricoh (Merstham) , Ricoh House , wells place , Merstham RH1, 3LG")
  const [assignedUser, setAssignedUser] = useState("Febian Porter")
  const [details, setDetails] = useState("")

  const handleAddQuotation = async () => {
    const result = await auth.post(
      '/addquotation', {
      // newQuotation
      assign_user: assignedUser,
      company: company,
      contact: contact,
      date: date,
      description: details ? details : "No description",
      invoice_address: invoiceAddress,
      linkedjob: "456789",
      next: "124",
      quote_no: "123",
      site_address: siteAddress,
      status: "Accepted"
    }
      , {
        headers: {
          // 'Content-Type': 'application/json',
          'Content-Type': 'multipart/form-data',
          // 'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      }
    );
    console.log(result);
    console.log("Quote Added");
    // getQuotationsList();
    // setCompanyName("");
    // setCompanyAddress("");
    // setCompanyEmail("");
    // setCompanyMobile("");
    // setParentCompany("");
    // setCompanyTags("");
    // setCompanyTelephone("");
    // setCompanyTown("");

    navigate('/quotation');
  }
  return (
    <Container className="quotation-top  mt-100">
      <Row className="quotation-top-row p-4">
        <Col lg={2}>
          <h4 className="text-blue w-800">
            <b>QUOTE:</b> <span>3744</span>{" "}
          </h4>
        </Col>
        <Col lg={10}>
          <div class="d-flex justify-content-end align-items-center flex-wrap gap-1">
            <div class="btn-group">
              <button
                type="button"
                class="btn btn-md font-weight-bold bg-red dropdown-toggle p-2"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                <img src={quickpdf} alt="" class="icon" />
                &nbsp;Quick PDF &nbsp;
              </button>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="/">
                  Job T1
                </a>
                <a class="dropdown-item" href="/">
                  Job T2
                </a>
                <a class="dropdown-item" href="/">
                  Job T3
                </a>
              </div>
            </div>
            <div class="btn-group">
              <button
                type="button"
                class="btn btn-md font-weight-bold btn-primary d-flex gap-0.5 duplicate-quote-btn p-2 bg-light-blue"
                data-toggle="dropdown"
                aria-expanded="false"
                onClick={() => handleAddQuotation()}
              >
                &nbsp;Duplicate Quote&nbsp;
              </button>
            </div>
            <div class="btn-group">
              <button
                type="button"
                class="btn btn-md font-weight-bold text-white btn-warning p-2 bg-dark-yellow"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                &nbsp;+ Create Job&nbsp;
              </button>
            </div>
            <div class="btn-group">
              <button
                type="button"
                class="btn btn-md font-weight-bold text-white btn-success p-2 bg-dark-green"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                &nbsp;+ Create Invoice&nbsp;
              </button>
            </div>
            <div className="btn-group">
              <div className="form-group mb-0 w-100">
                <select
                  value="Draft"
                  className="form-control form-control-md bg-blue  font-weight-bold status text-white bg-dark-gray"
                >
                  <option value="Draft" selected className="bg-primary">
                    Draft
                  </option>
                  <option value="Sent" className="bg-primary">
                    Sent
                  </option>
                  <option value="Accepted" className="bg-success">
                    Accepted
                  </option>
                  <option value="Declined" className="bg-violet">
                    Declined
                  </option>
                  <option value="Aged" className="bg-brown">
                    Aged
                  </option>
                </select>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <Container fluid>
        <div className="py-5 border rounded-lg mx-0">
          <Row>
            <Col xs={12} lg={4}>
              <form className="px-5">
                <div class="form-group ">
                  <label for="date-input" class="font-weight-bold">
                    Date Quoted
                  </label>
                  <div class="w-100 d-flex align-items-center gap-1">
                    <input
                      type="date"
                      class="form-control form-date-sm w-100 bg-light w-50"
                      style={{ minwidth: "100px" }}
                      id="date-input"
                      onChange={(e) => setDate(e.target.value)}
                      value={date}
                    />
                    {/* <img src={calender} alt="calendar" class="icon" /> */}
                  </div>
                </div>
                <div class="form-group">
                  <label for="company-select" class="font-weight-bold">
                    Company
                  </label>
                  <div class="w-100 d-flex align-items-center gap-1">
                    <select
                      class="form-control-lg form-select-sm w-100 bg-light"
                      id="company-select"
                      onChange={(e) => setCompany(e.target.value)}
                      value={company}
                      
                    >
                      <option value="Ricoh (Merstham)" selected>Ricoh (Merstham)</option>
                      <option value="Ricoh (Default">Ricoh (Default)</option>
                      <option value="Other Company (Default)">Other Company (Default)</option>
                    </select>
                    <img src={editicon} alt="calendar" class="icon" />
                  </div>
                </div>
                <div class="form-group">
                  <label for="company-select" class="font-weight-bold">
                    Contact
                  </label>
                  <div class="w-100 d-flex align-items-center gap-1">
                    <select
                      class="form-control-lg form-select-sm w-100 bg-light"
                      id="company-select"
                      onChange={(e) => setContact(e.target.value)}
                      value={contact}
                    >
                      <option value="Pawel Szulam" selected>Pawel Szulam</option>
                      <option value="Pawel Szulam 2">Pawel Szulam 2</option>
                    </select>
                    <img src={editicon} alt="calendar" class="icon" />
                  </div>
                </div>
              </form>
            </Col>
            <Col xs={12} lg={4}>
              <form>
                <div class="form-group">
                  <label for="invoice-address-select" class="font-weight-bold">
                    Invoice Address
                  </label>
                  <div class="w-100 d-flex align-items-center gap-1">
                    <select
                      class="form-control-lg form-select-sm w-100 bg-light"
                      id="invoice-address-select"
                      onChange={(e) => setInvoiceAddress(e.target.value)}
                      value={invoiceAddress}
                    >
                      <option value="Ricoh (Merstham) , Ricoh House" selected>Ricoh (Merstham) , Ricoh House ,</option>
                      <option value="Ricoh (Merstham) , Ricoh House 2">Ricoh (Merstham) , Ricoh House 2 ,</option>
                    </select>
                    <img src={editicon} alt="calendar" class="icon" />
                  </div>
                </div>
                <div class="form-group">
                  <label for="site-address-select" class="font-weight-bold">
                    Site Address
                  </label>
                  <div class="w-100 d-flex align-items-center gap-1">
                    <select
                      class="form-control-lg form-select-sm w-100 bg-light"
                      id="site-address-select"
                      onChange={(e) => setSiteAddress(e.target.value)}
                      value={siteAddress}
                    >
                      <option value="Ricoh (Merstham) , Ricoh House , wells place , Merstham RH1, 3LG" selected>
                        Ricoh (Merstham) , Ricoh House , wells place , Merstham
                        RH1, 3LG
                      </option>
                      <option value="Ricoh (Merstham) , Ricoh House , wells place ">
                        Ricoh (Merstham) , Ricoh House , wells place
                      </option>
                    </select>
                    <img src={editicon} alt="calendar" class="icon" />
                  </div>
                </div>
                <div class="form-group">
                  <label for="assignd-user-select" class="font-weight-bold">
                    Assigned User
                  </label>
                  <div class="w-100 d-flex align-items-center gap-1">
                    <select
                      onChange={(e) => setAssignedUser(e.target.value)}
                      value={assignedUser}
                      class="form-control-lg form-select-sm w-100 bg-light"
                      id="assignd-user-select"
                    >
                      <option value="Febian Porter">Febian Porter</option>
                      <option value="Febian Allen" >Febian Allen</option>
                    </select>
                    <img src={editicon} alt="calendar" class="icon" />
                  </div>
                </div>
              </form>
            </Col>
            <Col xs={12} lg={4}>
              <div class="form-group px-5">
                <label for="assignd-user-select" class="font-weight-bold">
                  Details
                </label>
                <textarea
                  placeholder="Planner (Marthin)"
                  id="details"
                  class="form-control bg-light"
                  rows="8"
                  onChange={(e) => setDetails(e.target.value)}
                  value={details}
                ></textarea>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      <Container className="mt-5">
        <Row>
          <Col xs={12} lg={2}>
            <div class="btn-group">
              <Link to="/quotation/addproduct">
                <button
                  type="button"
                  class="btn btn-lg font-weight-bold text-white btn-success bg-dark-green"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  + Add Products
                </button>
              </Link>
            </div>
          </Col>
          <Col xs={12} lg={6}>
            <div class="btn-group">
              <button
                type="button"
                class="btn btn-lg font-weight-bold text-white btn-warning bg-dark-yellow"
                data-toggle="modal"
                data-target="#bespokeadd"
              >
                + Add Bespoke
              </button>
            </div>

            <div
              className="modal fade "
              id="bespokeadd"
              tabindex="-1"
              role="dialog"
              aria-labelledby="exampleModalCenterTitle"
              aria-hidden="true"
            >
              <div
                className="modal-dialog modal-dialog-centered"
                role="document"
              >
                <div className="modal-content Bespole__modal">
                  <div className="modal-header">
                    <h5
                      className="modal-title Bespole__modal__heading p-2"
                      id="bespokeadd"
                    >
                      Add New Bespoke
                    </h5>
                  </div>
                  <Container>
                    <form>
                      <Row className="mt-3">
                        <Col lg={6}>
                          <div className="Bespole__modal__div">
                            <img
                              src={image_vector}
                              alt="vector_image"
                              className="Bespole__modal__pic"
                            />
                          </div>
                        </Col>
                        <Col lg={6}>
                          <div class="form-group ">
                            <label
                              for="assignd-user-select"
                              class="font-weight-bold"
                            >
                              Description
                            </label>
                            <textarea
                              placeholder="Lorem "
                              id="details"
                              class="form-control bg-light"
                              rows="4"
                            ></textarea>
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={6}>
                          <div class="form-group">
                            <label
                              for="formGroupExampleInput"
                              className="font-weight-bold"
                            >
                              item Code
                            </label>
                            <input
                              type="text"
                              className="form-control bg-light"
                              id="formGroupExampleInput"
                              placeholder="BAN440"
                            />
                          </div>
                        </Col>
                        <Col lg={6}>
                          <div class="form-group">
                            <label
                              for="formGroupExampleInput"
                              className="font-weight-bold"
                            >
                              Cateogory
                            </label>
                            <input
                              type="text"
                              className="form-control bg-light"
                              id="formGroupExampleInput"
                              placeholder="PVC Banner"
                            />
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={2}>
                          <div class="form-group">
                            <label
                              for="formGroupExampleInput"
                              className="font-weight-bold"
                            >
                              Quantity
                            </label>
                            <input
                              type="text"
                              className="form-control bg-light"
                              id="formGroupExampleInput"
                              placeholder="11.00"
                            />
                          </div>
                        </Col>
                        <Col lg={2}>
                          <div class="form-group">
                            <label
                              for="formGroupExampleInput"
                              className="font-weight-bold"
                            >
                              Sales Price
                            </label>
                            <input
                              type="text"
                              className="form-control bg-light"
                              id="formGroupExampleInput"
                              placeholder="11.00"
                            />
                          </div>
                        </Col>
                        <Col lg={2}>
                          <div class="form-group">
                            <label
                              for="formGroupExampleInput"
                              className="font-weight-bold"
                            >
                              Multiplier 1
                            </label>
                            <input
                              type="text"
                              className="form-control bg-light"
                              id="formGroupExampleInput"
                              placeholder="11.00"
                            />
                          </div>
                        </Col>
                        <Col lg={2}>
                          <div class="form-group">
                            <label
                              for="formGroupExampleInput"
                              className="font-weight-bold"
                            >
                              Multiplier 2
                            </label>
                            <input
                              type="text"
                              className="form-control bg-light"
                              id="formGroupExampleInput"
                              placeholder="11.00"
                            />
                          </div>
                        </Col>
                        <Col lg={2}>
                          <div class="form-group">
                            <label
                              for="formGroupExampleInput"
                              className="font-weight-bold"
                            >
                              Net Total
                            </label>
                            <input
                              type="text"
                              className="form-control bg-light"
                              id="formGroupExampleInput"
                              placeholder="11.00"
                            />
                          </div>
                        </Col>
                        <Col lg={2}>
                          <div class="form-group">
                            <label
                              for="formGroupExampleInput"
                              className="font-weight-bold"
                            >
                              Tax Code
                            </label>
                            <input
                              type="text"
                              className="form-control bg-light"
                              id="formGroupExampleInput"
                              placeholder="11.00"
                            />
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <div class="form-group">
                            <label
                              for="formGroupExampleInput"
                              className="font-weight-bold"
                            >
                              Comment Box
                            </label>
                            <input
                              type="text"
                              className="form-control bg-light"
                              id="formGroupExampleInput"
                              placeholder="11.00"
                            />
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <div class="form-group">
                            <label
                              for="formGroupExampleInput"
                              className="font-weight-bold"
                            >
                              Delivery to 1 local Address
                            </label>
                            <input
                              type="text"
                              className="form-control bg-light"
                              id="formGroupExampleInput"
                              placeholder="11.00"
                            />
                          </div>
                        </Col>
                      </Row>
                      <Container>
                        <Row className="mb-3 d-flex justify-content-end float-right">
                          <Col>
                            <button
                              type="button"
                              class="btn btn-md font-weight-bold text-white btn-success"
                              data-toggle="dropdown"
                              aria-expanded="false"
                            >
                              Updates
                            </button>
                          </Col>
                          <Col>
                            <button
                              type="button"
                              class="btn btn-md font-weight-bold text-dark btn-light"
                              data-toggle="dropdown"
                              aria-expanded="false"
                              data-dismiss="modal"
                            >
                              Close
                            </button>
                          </Col>
                        </Row>
                      </Container>
                    </form>
                  </Container>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={12} lg={2} className="saveChanges-btn">
            <div class="btn-group">
              <button
                type="button"
                class="btn btn-lg font-weight-bold text-white btn-success p-2 bg-dark-gray"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                SAVE CHANGES
              </button>
            </div>
          </Col>
          <Col xs={12} lg={2}>
            <div class="btn-group">
              <button
                type="button"
                class="btn btn-lg font-weight-bold text-black btn-light p-2"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                CLOSE
              </button>
            </div>
          </Col>
        </Row>
      </Container>

      <div className="h-100 mt-5">
        <Row className="h-100">
          <Col md={12}>
            <div className="table-scroll">
              <Table striped bordered hover className="quotation-table">
                <thead className="quotation-table-head text-center">
                  <tr>
                    <th colSpan={5}>Items Information</th>
                    <th colSpan={7}>Items Price</th>
                  </tr>
                  <tr>
                    <th>Status</th>
                    <th>Quote No.</th>
                    <th>Image</th>
                    <th>Item Code</th>
                    <th>Description</th>
                    <th>Quantity</th>
                    <th>Sales Price</th>
                    <th>Multiplier 1</th>
                    <th>Multiplier 2 </th>
                    <th>Net Total</th>
                    <th>Tax Code</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="quoation__id__sorticon">
                        <i class="fas fa-sort-up"></i>
                        <i class="fas fa-sort-down"></i>
                      </div>
                    </td>
                    <td>
                      <img src={menuicon} alt="menuicon" />
                    </td>
                    <td>
                      <img src={image_vector} alt="vector_image" />
                    </td>
                    <td>@GHM</td>
                    <td>Arts Forum Exhibition</td>
                    <td>Been Hartley</td>
                    <td>Job00345</td>
                    <td>&euro;222.45</td>
                    <td>&euro;222.45</td>
                    <td>&euro;222.45</td>

                    <td>20%</td>
                    <td>
                      <div className="quotation__editdelete_icon">
                        <img
                          src={editicon}
                          alt="editicon"
                          data-toggle="modal"
                          data-target="#bespokeadd"
                        />
                        <img
                          src={Delete_icon}
                          data-toggle="modal"
                          data-target="#Delete_modal"
                          alt="deleteicon"
                        />

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
                                <div>Items code: Q3766</div>
                                <div>Are you Sure you want to Delete ?</div>
                              </div>
                              <div className="delete__modal__button__div">
                                <div>
                                  <button className="delete__modal__button">
                                    <i class="far fa-trash-alt"></i>
                                    <span>Delete</span>
                                  </button>
                                </div>
                                <div>
                                  <button className="close__modal__button">
                                    Close
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="quoation__id__sorticon">
                        <i class="fas fa-sort-up"></i>
                        <i class="fas fa-sort-down"></i>
                      </div>
                    </td>
                    <td>
                      <img src={menuicon} alt="menuicon" />
                    </td>
                    <td>
                      <img src={image_vector} alt="vector_image" />
                    </td>
                    <td>@GHM</td>
                    <td>Arts Forum Exhibition</td>
                    <td>Been Hartley</td>
                    <td>Job00345</td>
                    <td>&euro;222.45</td>
                    <td>&euro;222.45</td>
                    <td>&euro;222.45</td>

                    <td>20%</td>
                    <td>
                      <div className="quotation__editdelete_icon">
                        <img src={editicon} alt="editicon" />
                        <img src={Delete_icon} alt="deleteicon" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="quoation__id__sorticon">
                        <i class="fas fa-sort-up"></i>
                        <i class="fas fa-sort-down"></i>
                      </div>
                    </td>
                    <td>
                      <img src={menuicon} alt="menuicon" />
                    </td>
                    <td>
                      <img src={image_vector} alt="vector_image" />
                    </td>
                    <td>@GHM</td>
                    <td>Arts Forum Exhibition</td>
                    <td>Been Hartley</td>
                    <td>Job00345</td>
                    <td>&euro;222.45</td>
                    <td>&euro;222.45</td>
                    <td>&euro;222.45</td>

                    <td>20%</td>
                    <td>
                      <div className="quotation__editdelete_icon">
                        <img src={editicon} alt="editicon" />
                        <img src={Delete_icon} alt="deleteicon" />
                      </div>
                    </td>
                  </tr>

                  <tr class="bg-light border-bottom border-secondary">
                    <td colspan="11" class="pb-0" style={{ gap: "1rem" }}>
                      <div class="w-100 d-flex" style={{ gap: "1rem" }}>
                        <nav aria-label="Page navigation">
                          <ul class="pagination pagination-sm">
                            <li class="page-item">
                              <a
                                class="page-link"
                                href="/"
                                aria-label="Previous"
                              >
                                <span aria-hidden="true">&laquo;</span>
                              </a>
                            </li>
                            <li class="page-item active">
                              <a class="page-link" href="/">
                                1
                              </a>
                            </li>
                            <li class="page-item">
                              <a class="page-link" href="/">
                                2
                              </a>
                            </li>
                            <li class="page-item">
                              <a class="page-link" href="/">
                                3
                              </a>
                            </li>
                            <li class="page-item">
                              <a class="page-link" href="/">
                                4
                              </a>
                            </li>
                            <li class="page-item">
                              <a class="page-link" href="/">
                                5
                              </a>
                            </li>
                            <li class="page-item">
                              <a class="page-link" href="/">
                                6
                              </a>
                            </li>
                            <li class="page-item">
                              <a class="page-link" href="/">
                                7
                              </a>
                            </li>
                            <li class="page-item">
                              <a class="page-link" href="/">
                                8
                              </a>
                            </li>
                            <li class="page-item">
                              <a class="page-link" href="/">
                                9
                              </a>
                            </li>
                            <li class="page-item">
                              <a class="page-link" href="/">
                                10
                              </a>
                            </li>
                            <li class="page-item">
                              <a class="page-link" href="/" aria-label="Next">
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

export default QuotationId;
