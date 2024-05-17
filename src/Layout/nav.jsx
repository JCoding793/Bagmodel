import LogoImg from "../assets/newlogo.png";
import Search from "../assets/search.svg";
import Store from "../assets/store.svg";
import { NavLink, Link } from "react-router-dom";
import React from "react";
const menuItem = [
  { itemName: "About", itemLink: "/about" },
  { itemName: "Product", itemLink: "/product" },
  { itemName: "Blog", itemLink: "/blog"},
  { itemName: "Contact", itemLink: "/contact"},
];
export default function NavBar() {
  return (
    <div className="nav-container logo relative  block w-full bg-white z-20 py-2 border-b border-[#AC8156]">
      <nav className="flex justify-between items-center max-w-[1440px] m-auto px-[4%] lg:px-0">
        <div className="imgContainer">
        <NavLink 
                    to={""}
                  >  <img className="h-[60px]" src={LogoImg} alt="" /> </NavLink>
        </div>

        <ul className=" gap-x-16 hidden lg:flex">
          {menuItem.map((item , index) => {
            return (
              <li key={index} className="text-xl text-black">
                  <NavLink
                    to={item.itemLink}
                  >
                    {item.itemName}
                  </NavLink>
              </li>
            );
          })}
        </ul>
        <div className="flex gap-3">
          <img className="h-20 w-20 cursor-pointer" src={Search} alt="" />
          <img className="h-20 w-20 cursor-pointer" src={Store} alt="" />
        </div>
      </nav>
    </div>
  );
}
