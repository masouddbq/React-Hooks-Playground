import React from "react";
import Navbar from "../components/Navbar";
import { Outlet, useMatches ,ScrollRestoration } from "react-router-dom";

const MainLayout = () => {
  const matches = useMatches();

  const hideNav = matches.some((match) => match.handle?.hideNav);

  return (
    <div>
      <ScrollRestoration />
      {!hideNav && <Navbar />}
      <Outlet />
    </div>
  );
};

export default MainLayout;
