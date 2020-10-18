import React from "react";
import "./Page.css";

const Page: React.FC = ({ children }) => (
  <section className="page">{children}</section>
);

export default Page;
