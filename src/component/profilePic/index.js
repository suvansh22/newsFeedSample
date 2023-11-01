import "./index.css";

export default function ProfilePic({
  imgurl = "",
  userName = "",
  level = null,
  size = "large",
}) {
  return (
    <div className="position-relative">
      <div
        className={`hexagonContainer ${size === "large" ? "large" : "small"}`}
      >
        {imgurl && <img alt={`${userName} profile pic`} src={imgurl} />}
      </div>
      {level && (
        <div
          className={`badgeContainerBorder d-flex justify-content-center align-items-center text-white fw-bold ${
            size === "large" ? "largeBadgeBorder" : "smallBadgeBorder"
          }`}
        >
          <div
            className={`badgeContainer d-flex justify-content-center align-items-center ${
              size === "large" ? "largeBadge" : "smallBadge"
            }`}
          >
            {level}
          </div>
        </div>
      )}
    </div>
  );
}
