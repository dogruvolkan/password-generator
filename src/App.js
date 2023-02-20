import "./App.css";
import CustomizePassword from "./component/CustomizePassword";
import PasswordInput from "./component/PasswordInput";
import { PasswordProvider } from "./context/PasswordContext";

function App() {
  return (
    <div className="App">
      <PasswordProvider>
        <PasswordInput />
        <CustomizePassword />
      </PasswordProvider>
    </div>
  );
}

export default App;
