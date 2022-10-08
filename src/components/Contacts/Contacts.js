import React from "react";
import { useState } from 'react';
import { useEffect } from 'react';
import "./Contacts.css";
import { Col, Row, Container, Table } from "react-bootstrap";
import { getContacts } from "../../api/auth/Contacts";

import editicon from "../../images/edit-primary.svg";
import Delete_icon from "../../images/Delete_icon.svg";
// import { Link } from "react-router-dom";
import axios from "axios";

const auth = axios.create({
  baseURL: `${process.env.REACT_APP_BACKEND_URL}`,
});
const Contacts = () => {
  const [contactList, setContactList] = useState([1, 2, 3]);
  const [contactPosition, setContactPosition] = useState('');
  const [contactFirstName, setContactFirstName] = useState('');
  const [contactLastName, setContactLastName] = useState('');
  const [contactAddress, setContactAddress] = useState('');
  const [contactAddress2, setContactAddress2] = useState('');
  const [contactTags, setContactTags] = useState('');
  const [contactTitle, setContactTitle] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactTelephone, setContactTelephone] = useState('');
  const [contactMobile, setContactMobile] = useState('');
  const [contactTown, setContactTown] = useState('');
  const [contactCountry, setContactCountry] = useState('');
  const [contactPostcode, setContactPostcode] = useState('');
  const [contactCompany, setContactCompany] = useState('');
  const [contactAccountRef, setContactAccountRef] = useState('');
  const [updateContact, setUpdateContact] = useState(false);
  const [deleteContact, setDeleteContact] = useState(false);
  const [contactId, setContactId] = useState();
  const [contactNameInDelModal, setContactNameInDelModal] = useState('');


  useEffect(() => {
    getContactsList();
  }, [])
  const getContactsList = async () => {

    const result = await getContacts();
    setContactList(result.data.data);
  }
  console.log(contactList);

  const handleAddContact = async (e) => {
    e.preventDefault();
    const result = await auth.post(
      '/newcontact', {
      // newContact
      first_name: contactFirstName,
      last_name: contactLastName,
      title: contactTitle,
      company: contactCompany,
      address: contactAddress,
      tags: contactTags,
      email: contactEmail,
      mobile: contactMobile,
      telephone: contactTelephone,
      town: contactTown
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
    console.log("Contact Added");
    getContactsList();
    setContactFirstName('');
    setContactLastName('');
    setContactTitle('');
    setContactCompany('');
    setContactAddress('');
    setContactTags('');
    setContactEmail('');
    setContactMobile('');
    setContactTelephone('');
    setContactTown('');
  }

  const handleUpdateContact = async (e) => {
    e.preventDefault();

    const result = await auth.post(
      `/updatecontact/${contactId}`, {
      // newContact
      first_name: contactFirstName,
      last_name: contactLastName,
      title: contactTitle,
      company: contactCompany,
      address: contactAddress,
      tags: contactTags,
      email: contactEmail,
      mobile: contactMobile,
      telephone: contactTelephone,
      town: contactTown
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
    console.log("Contact Updated");
    getContactsList();
    setContactFirstName('');
    setContactLastName('');
    setContactTitle('');
    setContactCompany('');
    setContactAddress('');
    setContactTags('');
    setContactEmail('');
    setContactMobile('');
    setContactTelephone('');
    setContactTown('');
  }

  const handleDeleteContact = async () => {

    const result = await auth.delete(
      `/deletecontact/${contactId}`
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
    console.log("Contact Deleted");
    getContactsList();
  }

  const handleUpdateModal = (id) => {
    setUpdateContact(true);
    setContactId(id);
  }
  const handleDeleteModal = (data) => {
    setDeleteContact(true);
    setContactId(data.id);
    setContactNameInDelModal(data.first_name)
  }
  return (
    <Container fluid className="quotation-top  mt-100">

      <Row className='mt-3 mb-3'>
        <Col xs={12} md={2}>
          <h5 className="h5-quotation">Contacts</h5>
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
                data-target="#newcontact"
                onClick={() => setUpdateContact(false)}
              >
                {" "}
                + Add New Contacts
              </button>
              <div
                className="modal fade"
                id="newcontact"
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
                      <form onSubmit={updateContact ?
                        (e) => handleUpdateContact(e) :
                        (e) => handleAddContact(e)}>
                        <Container>
                          <Row>
                            <Col lg={4}>
                              <div className="form-group">
                                <label className="font-weight-bold">
                                  Position:
                                </label>
                                <input
                                  type="text"
                                  class="form-control bg-light"
                                  onChange={(e) => setContactPosition(e.target.value)}
                                  value={contactPosition}
                                />
                              </div>
                            </Col>
                            <Col lg={4}>
                              <div className="form-group">
                                <label className="font-weight-bold">
                                  First Name:
                                </label>
                                <input
                                  type="text"
                                  class="form-control bg-light"
                                  onChange={(e) => setContactFirstName(e.target.value)}
                                  value={contactFirstName}
                                  required
                                />
                              </div>
                            </Col>
                            <Col lg={4}>
                              <div className="form-group">
                                <label className="font-weight-bold">
                                  Last Name:
                                </label>
                                <input
                                  type="text"
                                  class="form-control bg-light"
                                  onChange={(e) => setContactLastName(e.target.value)}
                                  value={contactLastName}
                                  required
                                />
                              </div>
                            </Col>
                            <Col lg={4}>
                              <div className="form-group">
                                <label className="font-weight-bold">
                                  Address 1:
                                </label>
                                <input
                                  type="text"
                                  class="form-control bg-light"
                                  onChange={(e) => setContactAddress(e.target.value)}
                                  value={contactAddress}
                                  required
                                />
                              </div>
                            </Col>
                            <Col lg={4}>
                              <div className="form-group">
                                <label className="font-weight-bold">
                                  Address 2:
                                </label>
                                <input
                                  type="text"
                                  class="form-control bg-light"
                                  onChange={(e) => setContactAddress2(e.target.value)}
                                  value={contactAddress2}
                                />
                              </div>
                            </Col>
                            <Col lg={4}>
                              <div className="form-group">
                                <label className="font-weight-bold">
                                  Tags:
                                </label>
                                <input
                                  type="text"
                                  class="form-control bg-light"
                                  onChange={(e) => setContactTags(e.target.value)}
                                  value={contactTags}
                                  required
                                />
                              </div>
                            </Col>
                            <Col lg={4}>
                              <div className="form-group">
                                <label className="font-weight-bold ">
                                  Title:
                                </label>
                                <input
                                  type="text"
                                  class="form-control bg-light"
                                  onChange={(e) => setContactTitle(e.target.value)}
                                  value={contactTitle}
                                  required
                                />
                              </div>
                            </Col>
                            <Col lg={4}>
                              <div className="form-group">
                                <label className="font-weight-bold">
                                  Email:
                                </label>
                                <input
                                  type="text"
                                  class="form-control bg-light"
                                  onChange={(e) => setContactEmail(e.target.value)}
                                  value={contactEmail}
                                  required
                                />
                              </div>
                            </Col>
                            <Col lg={4}>
                              <div className="form-group">
                                <label className="font-weight-bold">
                                  Telephone:
                                </label>
                                <input
                                  type="text"
                                  class="form-control bg-light"
                                  onChange={(e) => setContactTelephone(e.target.value)}
                                  value={contactTelephone}
                                  required
                                />
                              </div>
                            </Col>
                            <Col lg={4}>
                              <div className="form-group">
                                <label className="font-weight-bold">
                                  Mobile:
                                </label>
                                <input
                                  type="text"
                                  class="form-control bg-light"
                                  onChange={(e) => setContactMobile(e.target.value)}
                                  value={contactMobile}
                                  required
                                />
                              </div>
                            </Col>
                            <Col lg={4}>
                              <div className="form-group">
                                <label className="font-weight-bold">Town</label>
                                <input
                                  type="text"
                                  class="form-control bg-light"
                                  onChange={(e) => setContactTown(e.target.value)}
                                  value={contactTown}
                                  required
                                />
                              </div>
                            </Col>
                            <Col lg={4}>
                              <div className="form-group">
                                <label className="font-weight-bold">
                                  Country:
                                </label>
                                <input
                                  type="text"
                                  class="form-control bg-light"
                                  onChange={(e) => setContactCountry(e.target.value)}
                                  value={contactCountry}
                                  required
                                />
                              </div>
                            </Col>
                            <Col lg={4}>
                              <div className="form-group">
                                <label className="font-weight-bold">
                                  Postcode/Zip:
                                </label>
                                <input
                                  type="text"
                                  class="form-control bg-light"
                                  onChange={(e) => setContactPostcode(e.target.value)}
                                  value={contactPostcode}
                                />
                              </div>
                            </Col>
                            <Col lg={4}>
                              <div className="form-group">
                                <label className="font-weight-bold">
                                  Company:
                                </label>
                                <input
                                  type="text"
                                  class="form-control bg-light"
                                  onChange={(e) => setContactCompany(e.target.value)}
                                  value={contactCompany}
                                  required
                                />
                              </div>
                            </Col>
                            <Col lg={4}>
                              <div className="form-group">
                                <label className="font-weight-bold">
                                  Account Reference:
                                </label>
                                <input
                                  type="text"
                                  class="form-control bg-light"
                                  onChange={(e) => setContactAccountRef(e.target.value)}
                                  value={contactAccountRef}
                                />
                              </div>
                            </Col>
                            <Col lg={4}>
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

                            <Col lg={8}>
                              <div className="form-group px-5">
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
                                // onClick={updateContact ?
                                //   () => handleUpdateContact() :
                                //   () => handleAddContact()}
                                // data-dismiss="modal"
                                >
                                  {updateContact ? "Update Contact" : "Add Contact"}
                                </button>
                              </Col>
                              <Col>
                                <div data-dismiss="modal" >
                                  <button
                                    type="button"
                                    className="btn btn-md font-weight-bold text-dark  AddCompany__modal__closebtn"

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
                  <h6 className="font-weight-bold">Contact Type:</h6>
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
                  <h6 className="font-weight-bold">Contact</h6>
                  <button
                    type="button"
                    className="btn  dropdown-toggle Company__dropdown__category"
                    data-toggle="dropdown"
                    data-display="static"
                    aria-expanded="false"
                  >
                    All Contacts
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
                    <th>Title</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Company</th>
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
                  {contactList.map((contact) => (
                    <tr>
                      <td>{contact.title}</td>
                      <td>{contact.first_name}</td>
                      <td>{contact.last_name}</td>

                      <td>{contact.company}</td>
                      <td>{contact.town}</td>
                      <td>{contact.address}</td>

                      <td>{contact.email}</td>
                      <td>{contact.telephone}</td>
                      <td>{contact.mobile}</td>
                      <td>{contact.tags}</td>

                      <td>
                        <div className="quotation__editdelete_icon">

                          <img
                            src={editicon}
                            alt="editicon"
                            data-toggle={updateContact ? "modal" : ""}
                            data-target="#newcontact"
                            onClick={() => handleUpdateModal(contact.id)}
                          />
                          <img
                            src={Delete_icon}
                            data-toggle={deleteContact ? "modal" : ""}
                            data-target="#Delete_modal"
                            alt="deleteicon"
                            onClick={() => handleDeleteModal(contact)}
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
                                  <div>Contact Name: {contactNameInDelModal}</div>
                                  <div>Are you Sure you want to Delete ?</div>
                                </div>
                                <div className="delete__modal__button__div">
                                  <div data-dismiss="modal">
                                    <button className="delete__modal__button"
                                      onClick={() => handleDeleteContact()}
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
                                class="page-link  text-purple"
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
                              <a class="page-link  text-purple" href="/">
                                2
                              </a>
                            </li>
                            <li class="page-item">
                              <a class="page-link  text-purple" href="/">
                                3
                              </a>
                            </li>
                            <li class="page-item">
                              <a class="page-link  text-purple" href="/">
                                4
                              </a>
                            </li>
                            <li class="page-item">
                              <a class="page-link  text-purple" href="/">
                                5
                              </a>
                            </li>
                            <li class="page-item">
                              <a class="page-link  text-purple" href="/">
                                6
                              </a>
                            </li>
                            <li class="page-item">
                              <a class="page-link  text-purple" href="/">
                                7
                              </a>
                            </li>
                            <li class="page-item">
                              <a class="page-link  text-purple" href="/">
                                8
                              </a>
                            </li>
                            <li class="page-item">
                              <a class="page-link  text-purple" href="/">
                                9
                              </a>
                            </li>
                            <li class="page-item">
                              <a class="page-link  text-purple" href="/">
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

export default Contacts;
