import React from "react";
import "./Header.css";

const Header = props => (
    <div className="Header">
        <div className="jumbotron ">
        <h1 className="title">{props.children}</h1>
        <div className="scores">
        Score: {props.score} Highscore:{props.highscore}
        </div>
        </div>
    </div>
);

export default Header;
// export { default } from "./Header";