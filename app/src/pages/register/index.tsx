import RegisterForm from "../../components/Forms/RegisterForm";
import "./index.scss";

const RegisterPage = () => {
  return (
    <div className="register-page">
      <div className="register-page__form-container">
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;
