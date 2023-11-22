import React, { memo } from "react";

const Header = () => {
  console.log("HEADER rendered");

  return <div>Header</div>;
};

export default memo(Header);
