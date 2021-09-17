import {
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
} from "./App.module.css";
import { Fragment } from "react";
import Card from "./components/Card/Card";
import Label from "./components/Label/Label";
import { v4 as uuid } from "uuid";

function App() {
  const users = [
    {
      id: uuid(),
      name: "nathanf",
      numbers: 1986,
      type: "facebook",
      stats: "followers",
      state: 12,
      icon: "https://res.cloudinary.com/ux-ui-designer/image/upload/v1631905009/Assets/icon-facebook_x09bqx.svg",
    },
    {
      id: uuid(),
      name: "like_robinson",
      numbers: 1044,
      type: "twitter",
      stats: "followers",
      state: 99,
      icon: "https://res.cloudinary.com/ux-ui-designer/image/upload/v1631905009/Assets/icon-twitter_xaf0jr.svg",
    },
    {
      id: uuid(),
      name: "realsam",
      numbers: 11560,
      type: "instgram",
      stats: "followers",
      state: 1084,
      icon: "https://res.cloudinary.com/ux-ui-designer/image/upload/v1631905009/Assets/icon-instagram_ruofi3.svg",
    },
    {
      id: uuid(),
      name: "mark19",
      numbers: 8239,
      type: "youtube",
      stats: "subscribers",
      state: 144,
      icon: "https://res.cloudinary.com/ux-ui-designer/image/upload/v1631905009/Assets/icon-youtube_j93d63.svg",
    },
  ];

  return (
    <Fragment>
      <header className={header}>
        <div className={container}>
          <div className={left}>
            <h1 className={heading}>Social Media Dashboard</h1>
            <p className={paragraph}>
              Total Followers:&nbsp;
              {users.reduce((acc, usr) => acc + usr.numbers, 0)}
            </p>
          </div>
          <div className={right}>
            <span className={paragraph}>Dark Mode</span>
            <div className={switchDiv}>
              <input id="switch" className={switchInput} type="checkbox" />
              <label className={switchLabel} htmlFor="switch">
                Toggle
              </label>
            </div>
          </div>
        </div>
      </header>
      <main className={main}>
        <div className={top}>
          {users.map((card) => {
            return <Card key={card.id} data={card} />;
          })}
        </div>
        <div className={bottom}></div>
      </main>
    </Fragment>
  );
}

export default App;
