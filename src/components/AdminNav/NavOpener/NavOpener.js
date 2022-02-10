import React from "react";

import { openAdminNav } from "Utils/adminNavToggleHandler";

function NavOpener() {
  return (
    <div className="w-px-40 bgSpecialblue pos-fix flex flex--jc--center flex--ai--center height-vh-full navOpener">
      <div
        className="w-px-30 height-px-30 br-rad-per-50 bgSilver flex flex--jc--center flex--ai--center mouse-hand"
        onClick={openAdminNav}
      >
        {">"}
      </div>
    </div>
  );
}

export default NavOpener;
