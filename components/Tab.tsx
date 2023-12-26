"use client";
import React, { useState } from "react";

const Tabs = ({ items }) => {
  if (!items) return null;
  const [currentTabItem, setCurrentTabItem] = useState(items[0].name);

  return (
    <div>
      <ul className="flex gap-x-8">
        {items.map((item, idx) => (
          <li key={idx}>
            <div
              className={
                currentTabItem === item.name
                  ? `border-b-4 font-semibold border-[#4263EB] hover:cursor-pointer`
                  : "text-gray-600 hover:cursor-pointer"
              }
              onClick={() => {
                setCurrentTabItem(item.name);
              }}
            >
              <p className="pb-2 text-base"> {item.name} </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tabs;
