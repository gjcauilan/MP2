import { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Button,
  Card,
  Col,
  Container,
  Pagination,
  Row,
  Modal,
} from 'react-bootstrap';

function Prods() {
  const [products, setProds] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(3);
  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    async function getProds() {
      const res = await axios.get('https://fakestoreapi.com/products');
      const data = await res.data;
      setProds(data);
      setIsLoading(false);
    }

    getProds();
    return;
  }, []);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(products.length / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = pageNumbers.map((number) => {
    return (
      <Pagination.Item
        key={number}
        active={number === currentPage}
        onClick={() => setCurrentPage(number)}
      >
        {number}
      </Pagination.Item>
    );
  });

  const handleCloseModal = () => setShowModal(false);

  const handleOpenModal = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  return (
    <section className="products py-5">
      <h3 className="text-center pb-2">Featured Products</h3>
      <Container>
        <Row>
          {isLoading ? (
            // Show loading placeholders
            <>
              <Col xs={12} md={6} lg={4}>
                <Card placeholder style={{ height: '500px' }} />
              </Col>
              <Col xs={12} md={6} lg={4}>
                <Card placeholder style={{ height: '500px' }} />
              </Col>
              <Col xs={12} md={6} lg={4}>
                <Card placeholder style={{ height: '500px' }} />
              </Col>
            </>
          ) : (
            // Show products
            currentProducts.map((product, index) => {
              return (
                <Col key={index} xs={12} md={6} lg={4}>
                  <Card>
                    <Card.Img
                      variant="top"
                      src={product.image}
                      style={{ maxHeight: '70vh' }}
                    />
                    <Card.Body>
                      <Card.Title>{product.title}</Card.Title>
                      <Card.Text>USD {product.price}</Card.Text>
                      <Button
                        variant="outline-dark"
                        onClick={() => handleOpenModal(product)}
                      >
                        Learn More
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })
          )}
        </Row>
        <Row>
          <Col>
            <Pagination className="mt-1 justify-content-center">
              {renderPageNumbers}
            </Pagination>
          </Col>
        </Row>
      </Container>
      <Modal show={showModal} onHide={handleCloseModal} size="xl">
        <Modal.Header closeButton>
          <Modal.Title>Product Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col xs={12} md={6} lg={6}>
                <img src={selectedProduct?.image} alt={selectedProduct?.title} style={{ maxHeight: '70vh' }} />
              </Col>
              <Col xs={12} md={6} lg={6}>
                <h4>{selectedProduct?.title}</h4>
                <p>USD {selectedProduct?.price}</p>
                <p>{selectedProduct?.description}</p>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </section>
  );
}

export default Prods;