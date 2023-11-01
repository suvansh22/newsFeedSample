import Check from "../icon/check";
import "./index.css";

export default function Verified() {
  return (
    <span className="ms-2 rounded-circle bg-info checkWrapper position-relative overflow-hidden">
      <span>
        <Check />
      </span>
    </span>
  );
}
