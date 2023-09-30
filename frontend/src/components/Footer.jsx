import { Container, Row, Col } from 'react-bootstrap'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col className="text-center py-3">
            <h6>&copy; {currentYear} CarRental. All rights reserved</h6>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
