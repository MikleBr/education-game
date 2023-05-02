import SignInForm from "../components/Auth/SignInForm";

const SignIn = () => {
  const handleCreate = (data) => {
    // const userData = { login: data.login, password: data.password };
    console.log(data);
  };
  return <SignInForm onSubmit={handleCreate} />;
};

export default SignIn;
