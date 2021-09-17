import {
  container,
  facebookBorder,
  twitterBorder,
  instagramBorder,
  youtubeBorder,
  section,
  icon,
  name,
  number,
  stats,
  state,
  row,
  green,
  red,
  arrow,
} from "./Card.module.css";

const Card = ({ data }) => {
  return (
    <div
      className={`${container} ${
        data.type === "facebook" ? facebookBorder : ""
      } ${data.type === "twitter" ? twitterBorder : ""} ${
        data.type === "insatgram" ? instagramBorder : ""
      } ${data.type === "youtube" ? youtubeBorder : ""}`}
    >
      <div className={section}>
        <img className={icon} src={data.icon} alt={`${data.type} icon`} />
        <span className={name}>{data.name}</span>
      </div>

      <p className={number}>{data.numbers}</p>
      <p className={stats}>{data.stats}</p>
      <div className={row}>
        <img
          className={arrow}
          src={
            data.trend
              ? "https://res.cloudinary.com/ux-ui-designer/image/upload/v1631917861/Assets/icon-up_tgyqml.svg"
              : "https://res.cloudinary.com/ux-ui-designer/image/upload/v1631917861/Assets/icon-down_uudd5z.svg"
          }
          alt={`${data.type} trend`}
        />
        <p className={`${state} ${data.trend ? green : red}`}>
          &nbsp; {data.state} &nbsp; Today
        </p>
      </div>
    </div>
  );
};

export default Card;
