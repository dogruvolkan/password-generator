import React from "react";
import "../App.css";
import { MdOutlineContentCopy, MdSync } from "react-icons/md";

const PasswordInput = () => {
  return (
    <div>
      <form>
        <div className="card-input">
          <input />
          <div>
            <MdOutlineContentCopy className="password-copy" />
          </div>
          <div>
            <button className="password-create-btn">
              <MdSync className="password-create" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PasswordInput;
