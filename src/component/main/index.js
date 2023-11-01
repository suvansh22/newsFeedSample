import { Col, Container, Image, Row } from "react-bootstrap";
import Post from "../post";
import NewestMemberBlock from "../newestMemberBlock";
import "./index.css";
import PopularGroupsBlock from "../popularGroupsBlock";
import BadgesBlock from "../badgesBlock";
import QuestBlock from "../questBlock";

export default function MainComponent() {
  return (
    <Container
      fluid="true"
      className="mx-3 p-0 d-flex flex-column mainParentWrapper"
    >
      <Row className="p-0 m-0">
        <Image className="p-0 m-0" width={"100%"} src="/heroImage.png" />
      </Row>
      <Row className="p-0 mx-0 mt-4 d-flex mainBodyWrapper">
        <Col className="p-0 m-0 d-none flex-column bodySubRow d-xl-flex me-2">
          <NewestMemberBlock />
          <QuestBlock />
        </Col>
        <Col className="p-0 m-0 flex-grow-1 bodyPostRow overflow-auto">
          <Post />
        </Col>
        <Col className="p-0 m-0 d-none d-md-flex flex-column bodySubRow ms-2">
          <div className="d-flex d-xl-none flex-column bodySubSubRow">
            <NewestMemberBlock />
            <QuestBlock />
          </div>
          <PopularGroupsBlock />
          <BadgesBlock />
        </Col>
      </Row>
    </Container>
  );
}
