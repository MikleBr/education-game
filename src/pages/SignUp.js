import SignUpForm from "../components/Auth/SignUpForm";
const SignUp = () => {
  const handleCreate = (data) => {
    console.log(data);
  };
  return <SignUpForm onSubmit={handleCreate} />;
};

export default SignUp;
