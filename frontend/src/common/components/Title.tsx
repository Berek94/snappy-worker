import React from "react";
import "./Title.css";

type Props = {
  tag: "h1" | "h2" | "h3";
  className?: string;
};

const Title: React.FC<Props> = ({ children, tag, className = "" }) =>
  React.createElement(
    tag,
    { className: `title-${tag} ${className}` },
    children
  );

export default Title;
