import {
  container,
  top,
  bottom,
  title,
  icon,
  number,
  trend,
  arrow,
  red,
  green,
  darkContainer,
  darkTitle,
  darkNumber,
} from "./Label.module.css";

const Label = ({ data, darkMode }) => {
  return (
    <div className={`${container} ${darkMode ? darkContainer : ""}`}>
      <div className={top}>
        <h3 className={`${title} ${darkMode ? darkTitle : ""}`}>
          {data.title}
        </h3>
        <img className={icon} src={data.icon} alt={`${data.title} icon`} />
      </div>
      <div className={bottom}>
        <p className={`${number} ${darkMode ? darkNumber : ""}`}>
          {data.numbers}
        </p>
        <div className={trend}>
          <img
            className={arrow}
            src={
              data.trend
                ? "https://res.cloudinary.com/ux-ui-designer/image/upload/v1631917861/Assets/icon-up_tgyqml.svg"
                : "https://res.cloudinary.com/ux-ui-designer/image/upload/v1631917861/Assets/icon-down_uudd5z.svg"
            }
            alt="trend"
          />
          <p className={data.trend ? green : red}>&nbsp;&nbsp;{data.stats}%</p>
        </div>
      </div>
    </div>
  );
};

export default Label;
