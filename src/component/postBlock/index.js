import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./index.css";
import ProfilePic from "../profilePic";
import { getUser } from "../../mock/userData";
import { timeAgo } from "../../utility/timeAgo";

const HEADER_GENERATOR = ({ type = "", value = {} }) => {
  if (!type) return "";
  const availableTemplate = {
    reply: `replied to the topic <span class="fw-bold">${value?.topicName}</span> in the forum <span class="fw-bold">${value?.forumName}</span>`,
    image: `posted an update`,
  };
  return availableTemplate[type];
};

const BODY_GENERATOR = ({ type = "", value = "" }) => {
  const availableTemplate = {
    reply: <div className="mx-2">{value}</div>,
    image: <img className="m-0 p-0" alt="SS" src={value} />,
  };
  return availableTemplate[type];
};

export default function PostBlock({
  activityDate,
  activityAction,
  activityValue,
  activityHeader,
  commentCount,
  shareCount,
  reactionCount,
  userId,
}) {
  const userInfo = getUser({ userId });
  return (
    <>
      <Container
        fluid="true"
        className="p-0 m-0 parentBlock d-flex flex-column"
      >
        <Row className="m-4 p-0 postHeaderBlock">
          <Col xs="auto" className="m-0 p-0">
            <ProfilePic
              userName={userInfo.userName}
              imgurl={userInfo.imageUrl}
              level={userInfo.level}
            />
          </Col>
          <Col className="m-0 p-0 d-flex flex-column">
            <div>
              <span className="fw-bolder">{userInfo.userName} </span>
              <span className="px-2 pb-1 fw-semibold text-light rounded-pill memberTypeBlock">
                Pro Member
              </span>{" "}
              <span
                className="fw-light"
                dangerouslySetInnerHTML={{
                  __html: HEADER_GENERATOR({
                    type: activityAction,
                    value: {
                      topicName: activityHeader?.topic,
                      forumName: activityHeader?.forum,
                    },
                  }),
                }}
              />
            </div>
            <div className="dateStampBlock">
              {timeAgo(new Date(), new Date(activityDate))}
            </div>
          </Col>
        </Row>
        <Row className="m-0 mt-3 p-0 postValueBlock fw-light">
          {BODY_GENERATOR({ type: activityAction, value: activityValue })}
        </Row>
        <Row className="m-4 p-0 pt-2 justify-content-between postFooterBlock">
          <Col xs="auto" className="m-0 p-0">
            emoticons value
          </Col>
          <Col xs="auto" className="m-0 p-0">
            <span className="me-1 fw-semibold">{commentCount} Comments</span>
            <span className="fw-semibold">{shareCount} Shares</span>
          </Col>
        </Row>
      </Container>
    </>
  );
}
