import { useState } from "react";
import "./App.css";
import Mint from "./Mint"
import NavBar from "./navbar"

function App(){
  const [accounts, setAccounts] = useState([]);

  return (
    <div className="overlay">
      <div className="App">
        <NavBar accounts={accounts} setAccounts={setAccounts}/>
        <Mint accounts={accounts} setAccounts={setAccounts}/>
      </div>
      <div className="moving-background"></div>
    </div>
  );
}

export default App;