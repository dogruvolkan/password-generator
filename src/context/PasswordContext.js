import { createContext, useState } from "react";

export const PasswordContext = createContext();

export const PasswordProvider = ({ children }) => {
  const [inputValue, setInputValue] = useState();
  const [buyukHarfChecked, setBuyukHarfChecked] = useState(false);
  const [kucukHarfChecked, setKucukHarfChecked] = useState(false);
  const [sayiChecked, setSayiChecked] = useState(false);
  const [sembolChecked, setSembolChecked] = useState(false);
  const [password, setPassword] = useState("");

  return (
    <PasswordContext.Provider
      value={{
        inputValue,
        setInputValue,
        buyukHarfChecked,
        setBuyukHarfChecked,
        password,
        setPassword,
        kucukHarfChecked,
        setKucukHarfChecked,
        sayiChecked,
        setSayiChecked,
        sembolChecked,
        setSembolChecked,
      }}
    >
      {children}
    </PasswordContext.Provider>
  );
};
