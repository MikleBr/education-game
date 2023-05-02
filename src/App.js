import "./App.scss";
import Main from "./pages/Main";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Task from "./pages/Task";

function App() {
  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<SignIn login="логин" password="пароль" />}
          />
        </Routes>
      </BrowserRouter> */}
      <div className="App">
        {/* <SignIn /> */}
        {/* <SignUp /> */}
        {/* {<Task />} */}
        <Main />
      </div>
    </>
  );
}

export default App;
