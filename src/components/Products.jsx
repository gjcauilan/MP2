import { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Col, Container, Pagination, Row } from 'react-bootstrap';

function Prods() {
  const [products, setProds] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(3);
  const [isLoading, setIsLoading] = useState(true);

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
    </section>
  );
}

export default Prods;