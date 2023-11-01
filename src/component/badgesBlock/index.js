import { Col, Container, Row } from "react-bootstrap";
import "./index.css";
import ProfilePic from "../profilePic";
import { BABGES_DATA } from "../../mock/badgesData";

export default function BadgesBlock() {
  return (
    <Container
      className="bg-white newestMemberWrapper p-0 p-2 p-xl-4 m-0 rounded-3"
      fluid="true"
    >
      <Row className="p-0 m-0 fw-bold">Badges</Row>
      <Row className="p-0 m-0 mt-4">
        {BABGES_DATA.map((item) => (
          <Row className="p-0 m-0 mt-2 footerBorder pb-3">
            <Col xs="auto" className="p-0 m-0">
              <ProfilePic
                key={item.id}
                imgurl={item.thumbnail}
                userName={item.name}
              />
            </Col>
            <Col className="p-0 m-0 ms-2 d-flex flex-column">
              <span className="fw-bold">{item.title}</span>
              <span className="fw-light userHandle">{item.description}</span>
            </Col>
          </Row>
        ))}
      </Row>
    </Container>
  );
}
