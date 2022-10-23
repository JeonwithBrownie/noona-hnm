import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";

const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState(null);
  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/<JeonwithBrownie>/<noona-hnm>/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    setProduct(data);
  };
  useEffect(() => {
    getProductDetail();
  }, []);
  return (
    <Container className="product-detail-box">
      <Row>
        <Col className="product-img">
          <img src={product?.img}></img>
        </Col>
        <Col className="product-detail">
          <div className="detail-description">
            <div>{product?.title}</div>
            <div>$ {product?.price}</div>
            <div>{product?.choice === true ? "Conscious choice" : ""}</div>
            <Dropdown>
              <Dropdown.Toggle variant="danger" id="dropdown-basic">
                사이즈 선택
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">S</Dropdown.Item>
                <Dropdown.Item href="#/action-2">M</Dropdown.Item>
                <Dropdown.Item href="#/action-3">L</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Button variant="dark">추가</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
