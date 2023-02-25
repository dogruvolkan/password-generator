import React, { useContext, useEffect } from "react";
import "../App.css";
import { MdOutlineContentCopy, MdSync } from "react-icons/md";
import { PasswordContext } from "../context/PasswordContext";

const PasswordInput = () => {
  const {
    inputValue,
    buyukHarfChecked,
    kucukHarfChecked,
    password,
    setPassword,
    sayiChecked,
    sembolChecked,
  } = useContext(PasswordContext);

  const CreatePassword = () => {
    let password = "";
    for (let i = 0; i < inputValue; i++) {
      let choice = random(0, 3);
      if (kucukHarfChecked && choice === 0) {
        password += randomLower();
      } else if (buyukHarfChecked && choice === 1) {
        password += randomUpper();
      } else if (sembolChecked && choice === 2) {
        password += randomSymbol();
      } else if (sayiChecked && choice === 3) {
        password += random(0, 9);
      } else {
        i--;
      }
    }
    setPassword(password);
  };

  const random = (min, max) => {
    return Math.floor(Math.random() * (max + 1 - min) + min);
  };

  const randomLower = () => {
    return String.fromCharCode(random(97, 122));
  };

  const randomUpper = () => {
    return String.fromCharCode(random(65, 90));
  };

  const randomSymbol = () => {
    const symbols = "~*$%@#^&!?*'-=/.{}()[]<>";
    return symbols[random(0, symbols.length - 1)];
  };

  useEffect(() => {
    CreatePassword();
  }, []);

  return (
    <div className="card-input">
      <input value={password} readOnly />
      <div>
        <MdOutlineContentCopy className="password-copy" />
      </div>
      <div>
        <button onClick={CreatePassword} className="password-create-btn">
          <MdSync />
        </button>
      </div>
    </div>
  );
};

export default PasswordInput;
