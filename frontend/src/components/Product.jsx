import { Card, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaHeart, FaCar, Fa } from 'react-icons/fa'

import Rating from './Rating'

function Product({ product }) {
  return (
    <Card className="my-3 p-3 rounded">
      <Row>
        <Col md={9}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </Col>
        <Col md={3}>
          <FaHeart style={{ color: 'red' }} />
        </Col>
      </Row>
      <Row>
        <p>{product.typeCar}</p>
      </Row>

      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Img src={product.image} variant="top" />
        </Link>

        <Card.Text as="div">
          <Row className="mt-2">
            <Col md={4}>{`${product.gasoline} L`}</Col>
            <Col md={8}>{`${product.steering}`}</Col>
          </Row>
          <Row className="mt-2">
            <Col>{`${product.capacity} People`}</Col>
          </Row>
        </Card.Text>

        <Card.Text as="div">
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>

        <Card.Text as="div">
          {product.discountedPrice === 0 ? (
            <div>
              <strong>$ {product.price}</strong> / day
            </div>
          ) : (
            <div>
              <strong>$ {product.discountedPrice}</strong> / day
              <div className="strike-price">$ {product.price}</div>
            </div>
          )}
        </Card.Text>

        <Link to={`/product/${product._id}`}>
          <Button variant="primary">See Details</Button>
        </Link>
      </Card.Body>
    </Card>
  )
}

export default Product
