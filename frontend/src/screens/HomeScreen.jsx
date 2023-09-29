import { Row, Col } from 'react-bootstrap'

import Product from '../components/Product'
import { useGetCarsQuery } from '../slices/carsApiSlice'
import Loader from '../components/Loader'
import Message from '../components/Message'
import FilterSidebar from '../components/FilterSidebar'

function HomeScreen() {
  const { data: products, isLoading, error } = useGetCarsQuery()

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <>
          <h1 className="mb-3">Latest Cars</h1>
          <Row>
            <Col md={2}>
              <FilterSidebar />
            </Col>
            <Col md={10}>
              <Row>
                {products.map((product) => (
                  <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                    <Product product={product} />
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </>
      )}
    </>
  )
}

export default HomeScreen
