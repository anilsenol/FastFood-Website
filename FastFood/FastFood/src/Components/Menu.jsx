import React from "react";
import { Data } from "../helpers/Data";
import MenuItem from "./MenuItem";
import "../stysles/menu.css";

export const Menu = () => {
  return (
    <div className="menu">
      <h1 className="menuTitle">Menü</h1>
      <div className="menuList">
        {Data.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              content={menuItem.content}
              price={menuItem.price}
            />
          );
        })}
      </div>
    </div>
  );
};
