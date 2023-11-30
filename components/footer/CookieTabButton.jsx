import React, { useState } from "react";

export default function CookieTabItem({ tabName, tabText, setSelectedTab }) {

  return (
    <button className="text-left p-5 hover:bg-gray-200 focus:bg-gray-300" onClick={() => setSelectedTab(tabName)}>{tabText}</button>
  );
}
