import React from 'react'
import "./Product.css";
import { Col, Row, Container, Table } from "react-bootstrap";
import editicon from "../../images/edit-primary.svg";
import Delete_icon from "../../images/Delete_icon.svg";
import BottomBar from '../BottomBar/BottomBar';
import { getProducts } from "../../api/auth/Products";
import { useState } from 'react';
import { useEffect } from 'react';
import axios from "axios";


const auth = axios.create({
  baseURL: `${process.env.REACT_APP_BACKEND_URL}`,
});

const Product = () => {
  const [productList, setProductList] = useState([1, 2, 3]);
  const [productDescription, setProductDescription] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [productCompany, setProductCompany] = useState('');
  const [productItemCode, setProductItemCode] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productUnit, setProductUnit] = useState('');
  const [productCost, setProductCost] = useState('');
  const [productImage, setProductImage] = useState();
  const [updateProduct, setUpdateProduct] = useState(false);
  const [deleteProduct, setDeleteProduct] = useState(false);
  const [productId, setProductId] = useState();
  const [productItemCodeInDelModal, setProductItemCodeInDelModal] = useState();
  const [productAdded, setProductAdded] = useState(false);

  useEffect(() => {
    getProductsList();
  }, [])
  const getProductsList = async () => {

    const result = await getProducts();
    setProductList(result.data.data);
  }
  console.log(productList);

  const handleAddProduct = async (e) => {
    e.preventDefault();
    const result = await auth.post(
      '/newproduct', {
      // newProduct
      category: productCategory,
      cost: productCost,
      price: productPrice,
      description: productDescription,
      image: productImage,
      company: productCompany,
      item_code: productItemCode,
      unit: productUnit
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
    console.log(productCompany);
    console.log(result);
    console.log("Product Added");
    setProductAdded(true);
    getProductsList();
    setProductCategory('');
    setProductCost('');
    setProductPrice('');
    setProductDescription('');
    setProductImage('');
    setProductCompany('');
    setProductItemCode('');
    setProductUnit('');
    setProductImage('');
  }
  const handleUpdateProduct = async (e) => {
    e.preventDefault();
    const result = await auth.post(
      `/updateproduct/${productId}`, {
      category: productCategory,
      cost: productCost,
      price: productPrice,
      description: productDescription,
      image: productImage,
      company: productCompany,
      item_code: productItemCode,
      unit: productUnit
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
    console.log("Product Updated");
    getProductsList();
    getProductsList();
    setProductCategory('');
    setProductCost('');
    setProductPrice('');
    setProductDescription('');
    setProductImage('');
    setProductCompany('');
    setProductItemCode('');
    setProductUnit('');
    setProductImage('');
  }
  const handleDeleteProduct = async () => {

    const result = await auth.delete(
      `/deleteproduct/${productId}`
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
    console.log("Product Deleted");
    getProductsList();
  }

  const handleUpdateModal = (data) => {
    setProductId(data.id);
    setProductCategory(data.productCategory);
    setProductCost(data.productCost);
    setProductPrice(data.productPrice);
    setProductDescription(data.productDescription);
    setProductImage(data.productImage);
    setProductCompany(data.productCompany);
    setProductItemCode(data.productItemCode);
    setProductUnit(data.productUnit);
    check(true)
  }
  const check = (data) => {
    setUpdateProduct(data);

  }
  const handleDeleteModal = (data) => {
    setDeleteProduct(true);
    setProductId(data.id);
    setProductItemCodeInDelModal(data.item_code);
  }

  return (
    <>
      <Row className=' ml-1  mt-100'>
        <Col xs={12} md={2}>
          <h5 className="h5-quotation">Products</h5>
        </Col>
        <Col xs={12} md={4} className="ml-8">
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
      </Row>
      <Container fluid className="quotation-top">

        <div className="h-100">
          <Row className="h-100">
            <Col xs={12} md={2} className="left-col-quote-left-side">
              <div className="quote-left-side  border rouded">
                <button
                  className="btn  font-weight-bold btn-md Add__new__company__btn w-100"
                  data-toggle="modal"
                  data-target="#newcontact"
                  onClick={() => setUpdateProduct(false)}
                >
                  {" "}
                  + Add New Product
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
                        <form onSubmit={updateProduct ?
                          (e) => handleUpdateProduct(e) :
                          (e) => handleAddProduct(e)}>
                          <Container>
                            <Row>
                              <Col lg={12}>
                                <div className="form-group">
                                  <label className="font-weight-bold">
                                    Image:
                                  </label>
                                  <input
                                    type="file"
                                    class="form-control bg-light"
                                    name="productImage"
                                    onChange={(e) => setProductImage(e.target.files[0])}
                                  // onChange={(e) => console.log(e.target.files[0])}
                                  // value={productImage}
                                  required
                                  />
                                </div>
                              </Col>
                              <Col lg={6}>
                                <div className="form-group">
                                  <label className="font-weight-bold">
                                    Item Code:
                                  </label>
                                  <input
                                    type="text"
                                    class="form-control bg-light"
                                    onChange={(e) => setProductItemCode(e.target.value)}
                                    value={productItemCode}
                                    required
                                  />
                                </div>
                              </Col>
                              <Col lg={6}>
                                <div className="form-group">
                                  <label className="font-weight-bold">
                                    Category:
                                  </label>
                                  <input
                                    type="text"
                                    class="form-control bg-light"
                                    onChange={(e) => setProductCategory(e.target.value)}
                                    value={productCategory}
                                    required
                                  />
                                </div>
                              </Col>
                              <Col lg={2}>
                                <div className="form-group">
                                  <label className="font-weight-bold">
                                    Unit:
                                  </label>
                                  <input
                                    type="text"
                                    class="form-control bg-light"
                                    onChange={(e) => setProductUnit(e.target.value)}
                                    value={productUnit}
                                    required
                                  />
                                </div>
                              </Col>
                              <Col lg={2}>
                                <div className="form-group">
                                  <label className="font-weight-bold">
                                    Cost:
                                  </label>
                                  <input
                                    type="number"
                                    class="form-control bg-light"
                                    onChange={(e) => setProductCost(e.target.value)}
                                    value={productCost}
                                    required
                                  />
                                </div>
                              </Col>
                              <Col lg={2}>
                                <div className="form-group">
                                  <label className="font-weight-bold">
                                    Price:
                                  </label>
                                  <input
                                    type="number"
                                    class="form-control bg-light"
                                    onChange={(e) => setProductPrice(e.target.value)}
                                    value={productPrice}
                                    required
                                  />
                                </div>
                              </Col>
                              <Col lg={6}>
                                <div className="form-group">
                                  <label className="font-weight-bold ">
                                    Company:
                                  </label>
                                  <input
                                    type="text"
                                    class="form-control bg-light"
                                    onChange={(e) => setProductCompany(e.target.value)}
                                    value={productCompany}
                                    required
                                  />
                                </div>
                              </Col>

                              <Col lg={12}>
                                <div className="form-group">
                                  <label
                                    for="assignd-user-select"
                                    className="font-weight-bold"
                                  >
                                    Description
                                  </label>
                                  <textarea
                                    id="details"
                                    className="form-control bg-light"
                                    rows="4"
                                    onChange={(e) => setProductDescription(e.target.value)}
                                    value={productDescription}
                                    required
                                  ></textarea>
                                </div>
                              </Col>
                            </Row>
                            <hr />
                            <Container>
                              <Row className="mb-3 mt-3 d-flex justify-content-between">
                                <Col>
                                  <button
                                    type="submit"
                                    className="btn btn-md AddCompany__modal__btn  font-weight-bold text-white"
                                  // data-toggle="dropdown"
                                  // aria-expanded="false"
                                  // onClick={ updateProduct ?
                                  //    () => handleUpdateProduct() :
                                  //   () => handleAddProduct()}
                                    // data-dismiss={ productCost && productCategory && productCompany && productDescription && productImage && productUnit && productPrice && productItemCode ? "modal" : ""}
                                  >
                                    {updateProduct ? "Update Product" : "Add Product"}
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
                    <h6 className="font-weight-bold">All Categories:</h6>
                    <button
                      type="button"
                      className="btn  dropdown-toggle Company__dropdown__category"
                      data-toggle="dropdown"
                      data-display="static"
                      aria-expanded="false"
                    >
                      All Categories
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
                    <h6 className="font-weight-bold">Product Tags</h6>
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
                    <h6 className="font-weight-bold">Min Price (0)</h6>
                    <button
                      type="button"
                      className="btn  dropdown-toggle Company__dropdown__category"
                      data-toggle="dropdown"
                      data-display="static"
                      aria-expanded="false"
                    >
                      Min Price
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
                    <h6 className="font-weight-bold">Max Price (0)</h6>
                    <button
                      type="button"
                      className="btn  dropdown-toggle Company__dropdown__category"
                      data-toggle="dropdown"
                      data-display="static"
                      aria-expanded="false"
                    >
                      Max Price
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
                    <tr className='p-5'>
                      <th>Image</th>
                      <th>Item Code</th>
                      <th>Company</th>
                      <th>Description</th>
                      <th>Unit</th>
                      <th>Cost</th>
                      <th>Prices</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {productList.map((product) => (
                      <tr>
                        <td>
                          {/* <img src="http://syne.startupguider.com/public/uploaded/img_test.jpg" alt="" /> */}
                        </td>
                        <td>{product.item_code}</td>
                        <td>{product.companies}</td>

                        <td>{product.description}</td>
                        <td>{product.unit}</td>
                        <td>{product.cost}</td>

                        <td>{product.price}</td>

                        <td>
                          <div className="quotation__editdelete_icon">
                            <img
                              src={editicon}
                              alt="editicon"
                              data-toggle={updateProduct ? "modal" : ""}
                              data-target="#newcontact"
                              // onClick={() => setUpdateProduct(true)}
                              onClick={() => handleUpdateModal(product)}
                            />
                            <img
                              src={Delete_icon}
                              data-toggle={deleteProduct ? "modal" : ""}
                              data-target="#Delete_modal"
                              alt="deleteicon"
                              onClick={() => handleDeleteModal(product)}
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
                                    <div>Product Code: {productItemCodeInDelModal}</div>
                                    <div>Are you Sure you want to Delete ?</div>
                                  </div>
                                  <div className="delete__modal__button__div">
                                    <div data-dismiss="modal">
                                      <button className="delete__modal__button"
                                        onClick={() => handleDeleteProduct()}
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
                    )
                    )}



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
                              <li class="page-item ">
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
                                <a class="page-link" href="/">
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
      <div>
        <BottomBar />
      </div>
    </>
  )
}

export default Product