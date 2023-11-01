import { Col, Container, Row } from "react-bootstrap";
import { USER_DATA } from "../../mock/userData";
import "./index.css";
import ProfilePic from "../profilePic";

export default function NewestMemberBlock() {
  return (
    <Container
      className="bg-white newestMemberWrapper p-0 p-2 p-xl-4 m-0 rounded-3"
      fluid="true"
    >
      <Row className="p-0 m-0 fw-bold">Newest Member</Row>
      <Row className="p-0 m-0 mt-4">
        {USER_DATA.map((item) => (
          <Row className="p-0 m-0 mt-2">
            <Col xs="auto" className="p-0 m-0">
              <ProfilePic
                key={item.id}
                imgurl={item.imageUrl}
                level={item.level}
                userName={item.userName}
              />
            </Col>
            <Col className="p-0 m-0 ms-2 d-flex flex-column">
              <span className="fw-bold">{item.userName}</span>
              <span className="fw-light userHandle">@{item.userHandle}</span>
            </Col>
          </Row>
        ))}
      </Row>
    </Container>
  );
}
