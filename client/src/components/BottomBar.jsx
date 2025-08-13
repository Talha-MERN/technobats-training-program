import React from "react";

const BottomBar = () => {
  return (
    <>
        <div className="text-center bg-[#253238] text-white text-sm py-5">
        © {new Date().getFullYear()} TechnoBats. All rights reserved.
      </div>
    </>
  );
};

export default BottomBar;