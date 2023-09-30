import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'

import Rating from '../components/Rating'
import { useGetCarDetailsQuery } from '../slices/carsApiSlice'
import Loader from '../components/Loader'
import Message from '../components/Message'

function ProductScreen() {
  const { id: carId } = useParams()
  const { data: product, isLoading, error } = useGetCarDetailsQuery(carId)

  return (
    <>
      <Link className="btn btn-link my-3" to="/">
        Go Back
      </Link>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <Row>
          <Col md={5}>
            <Image src={product.image} alt={product.name} fluid />
          </Col>

          <Col md={4}>
            <ListGroup>
              <ListGroup.Item variant="info">
                <h3>{product.name}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating
                  value={product.rating}
                  text={`${product.numReviews} reviews`}
                />
              </ListGroup.Item>
              <ListGroup.Item>
                Description: {product.description}
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col md={6}>TypeCar: {product.typeCar}</Col>
                  <Col md={6}>Capacity: {product.capacity}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col md={6}>Steering: {product.steering}</Col>
                  <Col md={6}>Gasoline: {product.gasoline}</Col>
                </Row>
              </ListGroup.Item>
            </ListGroup>
          </Col>

          <Col md={3}>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>Price: </Col>
                    <Col>
                      {product.discountedPrice === 0 ? (
                        <div>
                          <strong>$ {product.price} / </strong> day
                        </div>
                      ) : (
                        <div>
                          <strong>$ {product.discountedPrice} / </strong> day
                          <div className="strike-price">$ {product.price}</div>
                        </div>
                      )}
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Button className="btn-block" type="button">
                    Rent Now
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      )}
    </>
  )
}

export default ProductScreen
