import { Container, Row, Col } from 'react-bootstrap'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer>
      <Container>
        <Row>
          <hr />
          <Col className="text-center py-3">
            <h5>&copy; {currentYear} CarRental. All rights reserved</h5>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
