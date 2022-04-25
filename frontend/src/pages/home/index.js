import React, { useState, useRef } from "react";
import Header from "../../components/header";
import LeftHome from "../../components/home/left";
import useClickOutside from "../../helpers/clickOutside";
import { useSelector } from "react-redux";
import RightHome from "../../components/home/right";
import Stories from "../../components/home/stories";
import "./styles.css";
const Home = () => {
  const { user } = useSelector((user) => ({ ...user }));

  const [visible, setVisible] = useState(true);
  const el = useRef(null);
  useClickOutside(el, () => {
    setVisible(false);
  });

  console.table(user);
  return (
    <div className="home">
      <Header />
      <LeftHome user={user} />
      <div className="home_middle">
        <Stories />
      </div>
      <RightHome user={user} />
    </div>
  );
};

export default Home;
