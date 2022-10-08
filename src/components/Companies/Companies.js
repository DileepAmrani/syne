import React from "react";
import "./Companies.css";
import { useState } from 'react';
import { useEffect } from 'react';
import { Col, Row, Container, Table } from "react-bootstrap";
import { getCompanies } from "../../api/auth/Companies";
import editicon from "../../images/edit-primary.svg";
import Delete_icon from "../../images/Delete_icon.svg";
// import { Link } from "react-router-dom";
import axios from "axios";

const auth = axios.create({
  baseURL: `${process.env.REACT_APP_BACKEND_URL}`,
});
const Companies = () => {
  const [companiesList, setCompaniesList] = useState([1, 2, 3]);
  const [companyName, setCompanyName] = useState('');
  const [companyAddress, setCompanyAddress] = useState('');
  const [companyAddress2, setCompanyAddress2] = useState('');
  const [companyTown, setCompanyTown] = useState('');
  const [companyMobile, setCompanyMobile] = useState('');
  const [companyTelephone, setCompanyTelephone] = useState('');
  const [companyTags, setCompanyTags] = useState('');
  const [companyEmail, setCompanyEmail] = useState('');
  const [parentCompany, setParentCompany] = useState('');
  const [companyCountry, setCompanyCountry] = useState('');
  const [updateCompany, setUpdateCompany] = useState(false);
  const [deleteCompany, setDeleteCompany] = useState(false);
  const [companyId, setCompanyId] = useState();
  const [companyInDelModal, setCompanyInDelModal] = useState();


  useEffect(() => {
    getCompaniesList();
  }, [])
  const getCompaniesList = async () => {

    const result = await getCompanies();
    setCompaniesList(result.data.data);
  }
  console.log(companiesList);

  const handleAddCompany = async (e) => {
    e.preventDefault();
    const result = await auth.post(
      '/newcompany', {
      // newCompany
      company: companyName,
      address: companyAddress,
      email: companyEmail,
      mobile: companyMobile,
      parent_company: parentCompany,
      tags: companyTags,
      telephone: companyTelephone,
      town: companyTown
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
    console.log("Company Added");
    getCompaniesList();
    setCompanyName("");
    setCompanyAddress("");
    setCompanyEmail("");
    setCompanyMobile("");
    setParentCompany("");
    setCompanyTags("");
    setCompanyTelephone("");
    setCompanyTown("");
  }
  const handleUpdateCompany = async (e) => {
    e.preventDefault();
    const result = await auth.post(
      `/updatecompany/${companyId}`, {
      // newCompany
      company: companyName,
      address: companyAddress,
      email: companyEmail,
      mobile: companyMobile,
      parent_company: parentCompany,
      tags: companyTags,
      telephone: companyTelephone,
      town: companyTown
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
    console.log("Company Updated");
    getCompaniesList();
    setCompanyName("");
    setCompanyAddress("");
    setCompanyEmail("");
    setCompanyMobile("");
    setParentCompany("");
    setCompanyTags("");
    setCompanyTelephone("");
    setCompanyTown("");
  }

  const handleDeleteCompany = async () => {

    const result = await auth.delete(
      `/deletecompany/${companyId}`
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
    console.log("Company Deleted");
    getCompaniesList();
  }

  const handleUpdateModal = (data) => {
    setUpdateCompany(true);
    setCompanyId(data.id);
    setCompanyName(data.company);
    setCompanyAddress(data.address);
    setCompanyEmail(data.email);
    setCompanyMobile(data.mobile);
    setParentCompany(data.parent_company);
    setCompanyTags(data.tags);
    setCompanyTelephone(data.telephone);
    setCompanyTown(data.town);
  }
  const handleDeleteModal = (data) => {
    setDeleteCompany(true);
    setCompanyId(data.id);
    setCompanyInDelModal(data.company)
    
  }
  const handleCloseButton = () => {
    setCompanyName("");
    setCompanyAddress("");
    setCompanyEmail("");
    setCompanyMobile("");
    setParentCompany("");
    setCompanyTags("");
    setCompanyTelephone("");
    setCompanyTown("");
  }
  return (

    <Container fluid className="quotation-top  mt-100">

      <Row className='mt-3 mb-3'>
        <Col xs={12} md={2}>
          <h5 className="h5-quotation">Companies</h5>
        </Col>
        <Col xs={12} md={4}>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Recipient's username"
              aria-label="Recipient's username with two button addons"
              aria-describedby="button-addon4"
            />
            <div className="input-group-append" id="button-addon4">
              <button
                className="btn text-white  company__search__btn br-0"
                type="button"
              >
                <i className="fas fa-search"></i>
                Search
              </button>
              <button className="btn btn-outline-secondary br-2" type="button">
                Advanced
              </button>
            </div>
          </div>
        </Col>
        <Col xs={12} md={4}>

        </Col>

        <Col xs={12} md={1}>
          <div className="btn-group">
            <button
              type="button"
              className="btn btn-sm Export__btn dropdown-toggle"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="fas fa-external-link-alt"></i>
              Export
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
      </Row>


      <div className="h-100">
        <Row className="h-100">
          <Col xs={12} md={2} className="left-col-quote-left-side">
            <div className="quote-left-side  border rouded">
              <button
                className="btn  font-weight-bold btn-md Add__new__company__btn w-100"
                data-toggle="modal"
                data-target="#companymodal"
                onClick={() => setUpdateCompany(false)}
              >
                {" "}
                + Add New Company
              </button>
              <div
                className="modal fade"
                id="companymodal"
                tabindex="-1"
                role="dialog"
                aria-labelledby="exampleModalCenterTitle"
                aria-hidden="true"
              >
                <div
                  className="modal-dialog modal-dialog-centered"
                  role="document"
                >
                  <div className="modal-content p-3 AddCompany__modal">
                    <div className="">
                      <form onSubmit={updateCompany ?
                        (e) => handleUpdateCompany(e) :
                        (e) => handleAddCompany(e)}>
                        <Container>
                          <Row>
                            <Col xs={6} lg={4}>
                              <div className="form-group">
                                <label className="font-weight-bold">
                                  Name:
                                </label>
                                <input
                                  type="text"
                                  class="form-control bg-light"
                                  onChange={(e) => setCompanyName(e.target.value)}
                                  value={companyName}
                                  required
                                />
                              </div>
                            </Col>
                            <Col xs={6} lg={4}>
                              <div className="form-group">
                                <label className="font-weight-bold">
                                  Town:
                                </label>
                                <input
                                  type="text"
                                  class="form-control bg-light"
                                  onChange={(e) => setCompanyTown(e.target.value)}
                                  value={companyTown}
                                  required
                                />
                              </div>
                            </Col>
                            <Col xs={6} lg={4}>
                              <div className="form-group">
                                <label className="font-weight-bold">
                                  Country:
                                </label>
                                <input
                                  type="text"
                                  class="form-control bg-light"
                                  onChange={(e) => setCompanyCountry(e.target.value)}
                                  value={companyCountry}
                                  required
                                />
                              </div>
                            </Col>
                            <Col xs={6} lg={4}>
                              <div className="form-group">
                                <label className="font-weight-bold">
                                  Address 1:
                                </label>
                                <input
                                  type="text"
                                  class="form-control bg-light"
                                  onChange={(e) => setCompanyAddress(e.target.value)}
                                  value={companyAddress}
                                  required
                                />
                              </div>
                            </Col>
                            <Col xs={6} lg={4}>
                              <div className="form-group">
                                <label className="font-weight-bold">
                                  Address 2:
                                </label>
                                <input
                                  type="text"
                                  class="form-control bg-light"
                                  onChange={(e) => setCompanyAddress2(e.target.value)}
                                  value={companyAddress2}
                                />
                              </div>
                            </Col>
                            <Col xs={6} lg={4}>
                              <div className="form-group">
                                <label className="font-weight-bold">
                                  Address 3:
                                </label>
                                <input
                                  type="text"
                                  class="form-control bg-light"
                                />
                              </div>
                            </Col>
                            <Col xs={6} lg={4}>
                              <div className="form-group">
                                <label className="font-weight-bold ">
                                  Postcode/zip:
                                </label>
                                <input
                                  type="text"
                                  class="form-control bg-light"
                                />
                              </div>
                            </Col>
                            <Col xs={6} lg={4}>
                              <div className="form-group">
                                <label className="font-weight-bold">
                                  Email:
                                </label>
                                <input
                                  type="text"
                                  class="form-control bg-light"
                                  onChange={(e) => setCompanyEmail(e.target.value)}
                                  value={companyEmail}
                                  required
                                />
                              </div>
                            </Col>
                            <Col xs={6} lg={4}>
                              <div className="form-group">
                                <label className="font-weight-bold">
                                  Telephone:
                                </label>
                                <input
                                  type="text"
                                  class="form-control bg-light"
                                  onChange={(e) => setCompanyTelephone(e.target.value)}
                                  value={companyTelephone}
                                  required
                                />
                              </div>
                            </Col>
                            <Col xs={6} lg={4}>
                              <div className="form-group">
                                <label className="font-weight-bold">
                                  Mobile:
                                </label>
                                <input
                                  type="text"
                                  class="form-control bg-light"
                                  onChange={(e) => setCompanyMobile(e.target.value)}
                                  value={companyMobile}
                                  required
                                />
                              </div>
                            </Col>
                            <Col xs={6} lg={4}>
                              <div className="form-group">
                                <label className="font-weight-bold">Fax:</label>
                                <input
                                  type="text"
                                  class="form-control bg-light"
                                />
                              </div>
                            </Col>
                            <Col xs={6} lg={4}>
                              <div className="form-group">
                                <label className="font-weight-bold">
                                  Parent Company:
                                </label>
                                <input
                                  type="text"
                                  class="form-control bg-light"
                                  onChange={(e) => setParentCompany(e.target.value)}
                                  value={parentCompany}
                                  required
                                />
                              </div>
                            </Col>
                            <Col xs={6} lg={4}>
                              <div className="form-group">
                                <label className="font-weight-bold">
                                  Default price list:
                                </label>
                                <input
                                  type="text"
                                  class="form-control bg-light"
                                  onChange={(e) => setCompanyTags(e.target.value)}
                                  value={companyTags}
                                  required
                                />
                              </div>
                            </Col>
                            <Col xs={6} lg={4}>
                              <div className="form-group">
                                <label className="font-weight-bold">
                                  Type:
                                </label>
                                <input
                                  type="text"
                                  class="form-control bg-light"
                                />
                              </div>
                            </Col>
                            <Col xs={6} lg={4}>
                              <div className="form-group">
                                <label className="font-weight-bold">
                                  Account Reference:
                                </label>
                                <input
                                  type="text"
                                  class="form-control bg-light"
                                />
                              </div>
                            </Col>
                            <Col xs={6} lg={4}>
                              <div className="form-group">
                                <label className="font-weight-bold">
                                  Payment Terms:
                                </label>
                                <input
                                  type="text"
                                  class="form-control bg-light"
                                />
                              </div>
                            </Col>
                            <Col xs={6} lg={4}>
                              <div className="form-group">
                                <label className="font-weight-bold">
                                  Account Manager:
                                </label>
                                <input
                                  type="text"
                                  class="form-control bg-light"
                                />
                              </div>
                            </Col>
                            <Col xs={6} lg={10}>
                              <div className="form-group">
                                <label
                                  for="assignd-user-select"
                                  className="font-weight-bold"
                                >
                                  Notes
                                </label>
                                <textarea
                                  id="details"
                                  className="form-control bg-light"
                                  rows="2"
                                ></textarea>
                              </div>
                            </Col>
                          </Row>
                          <Container>
                            <Row className="mb-3 mt-3 d-flex justify-content-between">
                              <Col>
                                <button
                                  type="submit"
                                  className="btn btn-md AddCompany__modal__btn  font-weight-bold text-white"
                                // onClick={updateCompany ?
                                //   () => handleUpdateCompany() :
                                //   () => handleAddCompany()}
                                // data-dismiss="modal"
                                >
                                  {updateCompany ? "Update Company" : "Add Company"}
                                </button>
                              </Col>
                              <Col>
                                <div data-dismiss="modal" >
                                  <button
                                    type="button"
                                    className="btn btn-md font-weight-bold text-dark  AddCompany__modal__closebtn"
                                    onClick={() => handleCloseButton()}

                                  >
                                    Close
                                  </button>
                                </div>
                              </Col>
                            </Row>
                          </Container>
                        </Container>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="btn-group mt-3">
                <div className="d-flex flex-column">
                  <h6 className="font-weight-bold">Company Type:</h6>
                  <button
                    type="button"
                    className="btn  dropdown-toggle Company__dropdown__category"
                    data-toggle="dropdown"
                    data-display="static"
                    aria-expanded="false"
                  >
                    All Types
                  </button>
                  <div className="dropdown-menu dropdown-menu-right dropdown-menu-lg-left">
                    <button className="dropdown-item" type="button">
                      Action
                    </button>
                    <button className="dropdown-item" type="button">
                      Another action
                    </button>
                    <button className="dropdown-item" type="button">
                      Something else here
                    </button>
                  </div>
                </div>
              </div>
              <div className="btn-group mt-3">
                <div className="d-flex flex-column">
                  <h6 className="font-weight-bold">Company</h6>
                  <button
                    type="button"
                    className="btn  dropdown-toggle Company__dropdown__category"
                    data-toggle="dropdown"
                    data-display="static"
                    aria-expanded="false"
                  >
                    All Companies
                  </button>
                  <div className="dropdown-menu dropdown-menu-right dropdown-menu-lg-left">
                    <button className="dropdown-item" type="button">
                      Action
                    </button>
                    <button className="dropdown-item" type="button">
                      Another action
                    </button>
                    <button className="dropdown-item" type="button">
                      Something else here
                    </button>
                  </div>
                </div>
              </div>
              <div className="btn-group mt-3">
                <div className="d-flex flex-column">
                  <h6 className="font-weight-bold">Company Tags (Must have)</h6>
                  <button
                    type="button"
                    className="btn  dropdown-toggle Company__dropdown__category"
                    data-toggle="dropdown"
                    data-display="static"
                    aria-expanded="false"
                  >
                    All Tags
                  </button>
                  <div className="dropdown-menu dropdown-menu-right dropdown-menu-lg-left">
                    <button className="dropdown-item" type="button">
                      Action
                    </button>
                    <button className="dropdown-item" type="button">
                      Another action
                    </button>
                    <button className="dropdown-item" type="button">
                      Something else here
                    </button>
                  </div>
                </div>
              </div>
              <div className="btn-group mt-3">
                <div className="d-flex flex-column">
                  <h6 className="font-weight-bold">Contact Tags (Must have)</h6>
                  <button
                    type="button"
                    className="btn  dropdown-toggle Company__dropdown__category"
                    data-toggle="dropdown"
                    data-display="static"
                    aria-expanded="false"
                  >
                    Add Category
                  </button>
                  <div className="dropdown-menu dropdown-menu-right dropdown-menu-lg-left">
                    <button className="dropdown-item" type="button">
                      Action
                    </button>
                    <button className="dropdown-item" type="button">
                      Another action
                    </button>
                    <button className="dropdown-item" type="button">
                      Something else here
                    </button>
                  </div>
                </div>
              </div>
              <div className="btn-group mt-3">
                <div className="d-flex flex-column">
                  <h6 className="font-weight-bold">Account Managers:</h6>
                  <button
                    type="button"
                    className="btn  dropdown-toggle Company__dropdown__category"
                    data-toggle="dropdown"
                    data-display="static"
                    aria-expanded="false"
                  >
                    All Acc Managers
                  </button>
                  <div className="dropdown-menu dropdown-menu-right dropdown-menu-lg-left">
                    <button className="dropdown-item" type="button">
                      Action
                    </button>
                    <button className="dropdown-item" type="button">
                      Another action
                    </button>
                    <button className="dropdown-item" type="button">
                      Something else here
                    </button>
                  </div>
                </div>
              </div>
              <button className="btn font-weight-bold btn-md Add__new__company__btn w-100 bg-blue">
                {" "}
                Clear Filters
              </button>
            </div>
          </Col>
          <Col md={10}>
            <div className="table-scroll">
              <Table striped bordered hover className="quotation-table">
                <thead className="companies-table-head">
                  <tr>
                    <th>Company Name</th>
                    <th>Parent Company</th>
                    <th>Town</th>
                    <th>Address</th>
                    <th>Email</th>

                    <th>Telephone</th>
                    <th>Mobile</th>
                    <th>Tags</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {companiesList.map((company) => (
                    <tr>
                      <td>{company.company}</td>
                      <td>{company.parent_company}</td>
                      <td>{company.town}</td>

                      <td>{company.address}</td>
                      <td>{company.email}</td>
                      <td>{company.telephone}</td>
                      <td>{company.mobile}</td>

                      <td>{company.tags}</td>

                      <td>
                        <div className="quotation__editdelete_icon">
                          <img
                            src={editicon}
                            alt="editicon"
                            data-toggle={updateCompany ? "modal" : ""}
                            data-target="#companymodal"
                            onClick={() => handleUpdateModal(company)}
                          />
                          <img
                            src={Delete_icon}
                            data-toggle={deleteCompany ? "modal" : ""}
                            data-target="#Delete_modal"
                            alt="deleteicon"
                            onClick={() => handleDeleteModal(company)}
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
                                  <div>Comany Name: {companyInDelModal}</div>
                                  <div>Are you Sure you want to Delete ?</div>
                                </div>
                                <div className="delete__modal__button__div">
                                  <div data-dismiss="modal">
                                    <button className="delete__modal__button"
                                      onClick={() => handleDeleteCompany()}
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
                        </div>
                      </td>
                    </tr>
                  ))}




                  <tr class="bg-light border-bottom border-secondary">
                    <td colspan="11" class="pb-0" style={{ gap: "1rem" }}>
                      <div class="w-100 d-flex" style={{ gap: "1rem" }}>
                        <nav aria-label="Page navigation">
                          <ul class="pagination pagination-sm">
                            <li class="page-item">
                              <a
                                class="page-link text-purple"
                                href="/"
                                aria-label="Previous"

                              >
                                <span aria-hidden="true">&laquo;</span>
                              </a>
                            </li>
                            <li class="page-item active">
                              <a class="page-link background-active text-white" href="/">
                                1
                              </a>
                            </li>
                            <li class="page-item">
                              <a class="page-link text-purple" href="/">
                                2
                              </a>
                            </li>
                            <li class="page-item">
                              <a class="page-link text-purple" href="/">
                                3
                              </a>
                            </li>
                            <li class="page-item">
                              <a class="page-link text-purple" href="/">
                                4
                              </a>
                            </li>
                            <li class="page-item">
                              <a class="page-link text-purple" href="/">
                                5
                              </a>
                            </li>
                            <li class="page-item">
                              <a class="page-link text-purple" href="/">
                                6
                              </a>
                            </li>
                            <li class="page-item">
                              <a class="page-link text-purple" href="/">
                                7
                              </a>
                            </li>
                            <li class="page-item">
                              <a class="page-link text-purple" href="/">
                                8
                              </a>
                            </li>
                            <li class="page-item">
                              <a class="page-link text-purple" href="/">
                                9
                              </a>
                            </li>
                            <li class="page-item">
                              <a class="page-link text-purple" href="/">
                                10
                              </a>
                            </li>
                            <li class="page-item">
                              <a class="page-link text-purple" href="/" aria-label="Next">
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

export default Companies;
