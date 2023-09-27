import { useState } from "react";
import { Header } from "./components/Header";
import { List } from "./components/List";
import { Post } from "./components/Post";

import style from "./Global.module.css";

function visible() {}

export function App() {
  const [founder, setfounder] = useState(0);

  return (
    <div className={style.body}>
      <Header />
      <List />
    </div>
  );
}
