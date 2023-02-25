import React, { useContext } from "react";
import "../App.css";
import { PasswordContext } from "../context/PasswordContext";

const CustomizePassword = () => {
  const {
    inputValue,
    setInputValue,
    buyukHarfChecked,
    setBuyukHarfChecked,
    kucukHarfChecked,
    setKucukHarfChecked,
    sayiChecked,
    setSayiChecked,
    sembolChecked,
    setSembolChecked,
  } = useContext(PasswordContext);

  const BuyukHarfChange = () => {
    setBuyukHarfChecked(!buyukHarfChecked);
  };

  const KucukHarfChange = () => {
    setKucukHarfChecked(!kucukHarfChecked);
  };
  const SayiChange = () => {
    setSayiChecked(!sayiChecked);
  };

  const SembolChange = () => {
    setSembolChecked(!sembolChecked);
  };

  return (
    <div className="customize-card">
      <h1>Customize your password</h1>
      <hr />
      <div className="customize-area">
        <div className="password-length">
          <fieldset>
            <legend>Password Length</legend>
            <input
              type="number"
              min="1"
              max="50"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </fieldset>
        </div>
        <div className="password-features">
          <fieldset>
            <legend>Password Properties</legend>
            <label>
              <input
                type="checkbox"
                value="buyukharf"
                checked={buyukHarfChecked}
                onChange={BuyukHarfChange}
              />
              <span>Uppercase</span>
            </label>
            <label>
              <input
                type="checkbox"
                value="buyukharf"
                checked={kucukHarfChecked}
                onChange={KucukHarfChange}
              />
              <span>Lowercase</span>
            </label>
            <label>
              <input
                type="checkbox"
                value="buyukharf"
                checked={sayiChecked}
                onChange={SayiChange}
              />
              <span>Numbers</span>
            </label>
            <label>
              <input
                type="checkbox"
                value="buyukharf"
                checked={sembolChecked}
                onChange={SembolChange}
              />
              <span>Symbols</span>
            </label>
          </fieldset>
        </div>
      </div>
      <div className="length-range">
        <input
          type="range"
          min="1"
          max="50"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
    </div>
  );
};

export default CustomizePassword;
