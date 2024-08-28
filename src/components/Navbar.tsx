import React from "react";
import ThemeSwitch from "./ThemeSwitcher";

const Navbar = () => {
  return (
    <div className="w-[100%] max-w-[40rem] flex justify-between items-center">
      <h1 className="font-bold">jungle.ui</h1>
      <ThemeSwitch />
    </div>
  );
};

export default Navbar;
