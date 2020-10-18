import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

const Menu = () => (
  <nav className="menu">
    <Link to="/" className="menu-link">
      Команды
    </Link>
    {/* <Link to="/phrases" className="menu-link">
      Рандомные ответы
    </Link> */}
  </nav>
);

export default Menu;
