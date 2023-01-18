import React from "react";
import type { NextPage } from "next";
import { ChatBox } from "../components/ChatBox";
import Image from "next/image";
import logo from "../../public/logo.png";

const Home: NextPage = () => {
  return (
    <div>
      <ChatBox />
    </div>
  );
};

export default Home;
