import Header from "./component/header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MainComponent from "./component/main";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "./component/sidebar";

function App() {
  return (
    <Container
      fluid="true"
      className="customContainer p-0 m-0 d-flex flex-column"
    >
      <Row className="m-0 p-0">
        <Header />
      </Row>
      <Row className="flex-md-row flex-column m-0 p-0 bodyContainer">
        <Col className="sideBarCol shadow py-md-0 p-1" xs="100%" md="auto">
          <Sidebar />
        </Col>
        <Col className="mainBodyCol mx-md-auto p-0 mt-md-0 mt-2">
          <MainComponent />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
