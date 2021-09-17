import {
  container,
  facebookBorder,
  twitterBorder,
  instgramBorder,
  youtubeBorder,
} from "./Card.module.css";

const Card = ({ data }) => {
  return (
    <div
      className={`${container} ${
        data.type === "facebook" ? facebookBorder : ""
      } ${data.type === "twitter" ? twitterBorder : ""} ${
        data.type === "instgram" ? instgramBorder : ""
      } ${data.type === "youtube" ? youtubeBorder : ""}`}
    ></div>
  );
};

export default Card;
