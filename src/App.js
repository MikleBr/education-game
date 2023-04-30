import { useState } from "react";
import SignIn from "./components/Auth/SignIn";
import SignUp from "./components/Auth/SignUp";
import TaskText from "./components/Task/TaskText";
import "./App.scss";
function App() {
  return (
    <div className="App">
      {/* <SignUp login="Введите логин" password="Введите пароль" /> */}
      {/* <SignIn login="логин" password="пароль" /> */}
      <TaskText />
    </div>
  );
}

export default App;
