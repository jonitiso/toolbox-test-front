import {Col, Container, Row} from "react-bootstrap";
import './styles.css';

function Index() {
  return (
      <div>
        <Container fluid>
          <Row>
            <Col className='bg-red'>
              <h3 className={'text-white py-1'}>React Test App</h3>
            </Col>
          </Row>
        </Container>
      </div>
  );
}

export default Index;
