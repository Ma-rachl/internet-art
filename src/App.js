
import './App.css';
import {Navigate, Route, Routes} from "react-router";
import {HashRouter} from "react-router-dom";
import FullPageComponent from "./FullPageComponent";
import Signin from "./users/Signin";
import {useState} from "react";

function App() {
    const [credentials, setCredentials] = useState({ username: "", password: "" });

    const handleSignin = (newCredentials) => {
        setCredentials(newCredentials);
    };
    const getCredentials = () => {
        return credentials;
    };
  return (
    <HashRouter>

      <div>
        <Routes>
          <Route path="/" element={<Navigate to="/Signin" />} />
          <Route path="/signin" element={<Signin onSignin={handleSignin} />} />
          {/*<Route path="/signup" element={<Signup />} />*/}
          <Route path="/main" element={<FullPageComponent getCredentials={getCredentials}/>} />

        </Routes>
      </div>

      </HashRouter>

  );
}

export default App;
