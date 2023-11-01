import { Col, Container, Row } from "react-bootstrap";
import "./index.css";
import Select from "../select";
import PostBlock from "../postBlock";
import { POST_DATA } from "../../mock/postData";

const PLACEHOLDER = "Show";
const options = [
  ["Everything", "everything"],
  ["Friends", "friends"],
  ["Yours", "yours"],
];

export default function Post() {
  return (
    <Container fluid="true">
      <Row className="position-relative bg-white rounded-3 align-items-center fullWidth mx-0 p-0">
        <Col
          className="position-absolute pt-2 ms-4 d-flex align-items-center m-0 p-0 fw-bold bottomBorder"
          xs="auto"
        >
          All Updates
        </Col>
        <Col className="py-3 pe-4 ms-auto" xs="auto">
          <Select placeholder={PLACEHOLDER} options={options} />
        </Col>
      </Row>
      {POST_DATA.map((item) => (
        <Row
          key={item.id}
          className="position-relative bg-white rounded-3 mt-2 fullWidth mx-0 p-0"
        >
          <PostBlock {...item} />
        </Row>
      ))}
    </Container>
  );
}
