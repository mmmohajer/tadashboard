import React from "react";

function TreeView({ parentNode }) {
  return (
    <div className="p2 textWhite">
      <div>2022</div>
      <ul>
        <li>
          <div>Area</div>
          <ul>
            <li>
              <div>plant</div>
              <ul>
                <li>location</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default TreeView;
