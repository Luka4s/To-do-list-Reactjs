import { useState } from "react";
import { Post } from "./Post";
import style from "./Header.module.css";
import rocket from "../assets/rocket.svg";

export function Header() {
  return (
    <div>
      <div className={style.containerHeader}>
        <img src={rocket} alt="Foguete rocketseat" />
        <span className={style.To}>To</span>
        <span className={style.Do}>Do</span>
      </div>
    </div>
  );
}
