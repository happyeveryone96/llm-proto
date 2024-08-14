import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/solve">문제 풀이</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
