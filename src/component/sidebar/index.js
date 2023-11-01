import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import UserIcon from "../icon/user";
import "./index.css";
import Group from "../icon/group";
import Basket from "../icon/basket";
import Chat from "../icon/chat";
import Diamond from "../icon/diamond";
import Music from "../icon/music";
import Phone from "../icon/phone";
import Leaderboard from "../icon/leaderboard";
import Star from "../icon/star";
import Medal from "../icon/medal";
import Computer from "../icon/Computer";

const ICONS = [
  Computer,
  UserIcon,
  Group,
  Medal,
  Star,
  Leaderboard,
  Diamond,
  Phone,
  Chat,
  Basket,
  Music,
];

export default function Sidebar() {
  const [active, setActive] = useState(0);
  return (
    <Container className="pt-md-5 px-0 customSideBarContainer justify-content-between align-items-center d-flex flex-column">
      {ICONS.map((Item, index) => (
        <Row
          className={`iconWrapper p-md-2 p-1 rounded-2 mx-0 ${
            active === index ? "active" : ""
          }`}
        >
          <div className="p-0">
            <Item {...(active === index ? { fill: "#fff" } : {})} />
          </div>
        </Row>
      ))}
    </Container>
  );
}
