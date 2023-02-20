import React from "react";
import { IoMdInformationCircleOutline } from "react-icons/io";
import "../App.css";

const CustomizePassword = () => {
  return (
    <div>
      <div className="customize-card">
        <h1>Customize your password</h1>
        <hr />
        <div className="customize-area">
          <div className="password-length">
            <div>
              <p>password length</p>
            </div>
            <div className="password-length-inputs">
              <input type="number" />
              <input type="range" />
            </div>
          </div>
          <div className="password-features">
            <div className="radio-btns">
              <label>
                <input type="radio" />
                <span>Easy to say</span>
                <IoMdInformationCircleOutline  className="radio-info"/>
              </label>
              <label>
                <input type="radio" />
                <span>Easy to read</span>
                <IoMdInformationCircleOutline className="radio-info"/>
              </label>
              <label>
                <input type="radio" />
                <span>All characters</span>
                <IoMdInformationCircleOutline className="radio-info"/>
              </label>
            </div>
            <div className="checkbox-btns">
              <label>
                <input type="checkbox" />
                <span>Uppercase</span>
              </label>
              <label>
                <input type="checkbox" />
                <span>Lowercase</span>
              </label>
              <label>
                <input type="checkbox" />
                <span>Numbers</span>
              </label>
              <label>
                <input type="checkbox" />
                <span>Symbols</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomizePassword;
