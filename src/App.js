import {
  darkSection,
  header,
  main,
  top,
  bottom,
  container,
  left,
  right,
  heading,
  paragraph,
  switchDiv,
  switchInput,
  switchLabel,
  subheading,
  darkHeader,
  darkHeading,
  darkMain,
  darkSubheading,
  seperator,
} from "./App.module.css";
import Card from "./components/Card/Card";
import Label from "./components/Label/Label";
import { v4 as uuid } from "uuid";
import { useState } from "react";

function App() {
  const [dark, setDark] = useState(false);
  const handleClick = () => {
    setDark(!dark);
  };

  const users = [
    {
      id: uuid(),
      name: "nathanf",
      numbers: 1986,
      type: "facebook",
      stats: "followers",
      state: 12,
      icon: "https://res.cloudinary.com/ux-ui-designer/image/upload/v1631905009/Assets/icon-facebook_x09bqx.svg",
      trend: true,
    },
    {
      id: uuid(),
      name: "like_robinson",
      numbers: 1044,
      type: "twitter",
      stats: "followers",
      state: 99,
      icon: "https://res.cloudinary.com/ux-ui-designer/image/upload/v1631905009/Assets/icon-twitter_xaf0jr.svg",
      trend: true,
    },
    {
      id: uuid(),
      name: "realsam",
      numbers: 11560,
      type: "insatgram",
      stats: "followers",
      state: 1084,
      icon: "https://res.cloudinary.com/ux-ui-designer/image/upload/v1631905009/Assets/icon-instagram_ruofi3.svg",
      trend: true,
    },
    {
      id: uuid(),
      name: "mark19",
      numbers: 8239,
      type: "youtube",
      stats: "subscribers",
      state: 144,
      icon: "https://res.cloudinary.com/ux-ui-designer/image/upload/v1631905009/Assets/icon-youtube_j93d63.svg",
      trend: false,
    },
  ];

  const overview = [
    {
      id: uuid(),
      title: "Page Views",
      icon: "https://res.cloudinary.com/ux-ui-designer/image/upload/v1631905009/Assets/icon-facebook_x09bqx.svg",
      numbers: 87,
      stats: 3,
      trend: true,
    },
    {
      id: uuid(),
      title: "Likes",
      icon: "https://res.cloudinary.com/ux-ui-designer/image/upload/v1631905009/Assets/icon-facebook_x09bqx.svg",
      numbers: 52,
      stats: 2,
      trend: false,
    },
    {
      id: uuid(),
      title: "Likes",
      icon: "https://res.cloudinary.com/ux-ui-designer/image/upload/v1631905009/Assets/icon-instagram_ruofi3.svg",
      numbers: 5462,
      stats: 2257,
      trend: true,
    },
    {
      id: uuid(),
      title: "Profile Views",
      icon: "https://res.cloudinary.com/ux-ui-designer/image/upload/v1631905009/Assets/icon-instagram_ruofi3.svg",
      numbers: 25123,
      stats: 137,
      trend: true,
    },
    {
      id: uuid(),
      title: "Retweets",
      icon: "https://res.cloudinary.com/ux-ui-designer/image/upload/v1631905009/Assets/icon-twitter_xaf0jr.svg",
      numbers: 117,
      stats: 303,
      trend: true,
    },
    {
      id: uuid(),
      title: "Likes",
      icon: "https://res.cloudinary.com/ux-ui-designer/image/upload/v1631905009/Assets/icon-twitter_xaf0jr.svg",
      numbers: 507,
      stats: 553,
      trend: true,
    },
    {
      id: uuid(),
      title: "Likes",
      icon: "https://res.cloudinary.com/ux-ui-designer/image/upload/v1631905009/Assets/icon-youtube_j93d63.svg",
      numbers: 92,
      stats: 19,
      trend: false,
    },
    {
      id: uuid(),
      title: "Total Views",
      icon: "https://res.cloudinary.com/ux-ui-designer/image/upload/v1631905009/Assets/icon-youtube_j93d63.svg",
      numbers: 1407,
      stats: 12,
      trend: false,
    },
  ];

  return (
    <div className={`${dark ? darkSection : ""}`}>
      <header className={`${header} ${dark ? darkHeader : ""}`}>
        <div className={container}>
          <div className={left}>
            <h1 className={`${heading} ${dark ? darkHeading : ""}`}>
              Social Media Dashboard
            </h1>
            <p className={paragraph}>
              Total Followers:&nbsp;
              {users.reduce((acc, usr) => acc + usr.numbers, 0)}
            </p>
          </div>
          <hr className={seperator} />
          <div className={right}>
            <span className={paragraph}>Dark Mode</span>
            <div className={switchDiv}>
              <input id="switch" className={switchInput} type="checkbox" />
              <label
                className={switchLabel}
                htmlFor="switch"
                onClick={handleClick}
              >
                Toggle
              </label>
            </div>
          </div>
        </div>
      </header>
      <main className={`${main} ${dark ? darkMain : ""}`}>
        <div className={top}>
          {users.map((card) => (
            <Card key={card.id} data={card} darkMode={dark} />
          ))}
        </div>

        <h2 className={`${subheading} ${dark ? darkSubheading : ""}`}>
          Overview - Today
        </h2>

        <div className={bottom}>
          {overview.map((label) => (
            <Label key={label.id} data={label} darkMode={dark} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
