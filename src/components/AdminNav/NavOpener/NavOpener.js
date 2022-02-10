import React from "react";

import RightArrow from "Images/js-images/icons/svg/rightArrow.svg";

import { openAdminNav } from "Utils/adminNavToggleHandler";

function NavOpener() {
  return (
    <div className="w-px-40 bgSpecialblue pos-fix flex flex--jc--center flex--ai--center height-vh-full navOpener">
      <div
        className="w-px-30 height-px-30 br-rad-per-50 bgSilver flex flex--jc--center flex--ai--center mouse-hand"
        onClick={openAdminNav}
      >
        <RightArrow style={{ transform: "scale(1.25)" }} />
      </div>
    </div>
  );
}

export default NavOpener;
