import AppHeader from "./components/AppHeader";
import 'bootstrap/dist/css/bootstrap.min.css';
import AppTable from "./components/AppTable";
import {Col, Container, Row} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchItemsThunk} from "./slices/items.slice";

function App() {

  const dispatch = useDispatch()
  const items = useSelector((state) => state.global.items)

  useEffect(() => {
    dispatch(fetchItemsThunk());
  }, [dispatch])

  return (
      <>
        <AppHeader/>
        <Container fluid className={'py-3'}>
          <Row>
            <Col className={'px-5'}>
              <AppTable items={items}/>
            </Col>
          </Row>
        </Container>
      </>
  );
}

export default App;
