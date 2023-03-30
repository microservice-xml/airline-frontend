import "./index.scss";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import FormRules from "../Rules/FormRules";
import TextFieldControl from "../../FormComponents/TextFieldControl";
import {
  ErrorMessage,
  SuccesMessage,
} from "../../../utils/toastService/toastService";
import { registerUser } from "../../../services/auth/authService";
import FormButton from "../../Button";

const RegisterForm = () => {
  const form = useForm();
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = form;

  const onSubmit = async (dto: any) => {
    dto.role = "REGISTERED";
    let response: any;
    response = await registerUser(dto);
    if (!response || !response.ok) {
      ErrorMessage("Email already used.");
      return;
    }

    SuccesMessage(
      "Congratulations! Your account has been successfully created. Please login."
    );
    navigate("/authenticate");
  };

  return (
    <div className="form-wrapper">
      <div className="form-wrapper__header">
        Register Now: Join Our Community Today!
      </div>
      <FormProvider {...form}>
        <div className="form-wrapper__row">
          <div className="form-wrapper__row--item">
            <TextFieldControl
              label={"First Name"}
              name={"firstName"}
              control={control}
              defaultValue={""}
              rules={FormRules["firstName"]}
              error={Boolean(errors.firstName)}
              helperText={
                errors.firstName && (errors.firstName.message as string)
              }
            />
          </div>
          <div className="form-wrapper__row--item">
            <TextFieldControl
              label={"Last Name"}
              name={"lastName"}
              control={control}
              defaultValue={""}
              rules={FormRules["lastName"]}
              error={Boolean(errors.lastName)}
              helperText={
                errors.lastName && (errors.lastName.message as string)
              }
            />
          </div>
        </div>
        <div className="form-wrapper__row">
          <div className="form-wrapper__row--item">
            <TextFieldControl
              label={"Email"}
              name={"email"}
              control={control}
              defaultValue={""}
              rules={FormRules["email"]}
              error={Boolean(errors.email)}
              helperText={errors.email && (errors.email.message as string)}
            />
          </div>
          <div className="form-wrapper__row--item">
            <TextFieldControl
              label={"Password"}
              name={"password"}
              control={control}
              defaultValue={""}
              type={"password"}
              rules={FormRules["password"]}
              error={Boolean(errors.password)}
              helperText={
                errors.password && (errors.password.message as string)
              }
            />
          </div>
        </div>
        <div className="form-wrapper__row">
          <div className="form-wrapper__row--item">
            <TextFieldControl
              label={"Phone Number"}
              name={"phoneNumber"}
              control={control}
              defaultValue={""}
              rules={FormRules["phoneNumber"]}
              error={Boolean(errors.phoneNumber)}
              helperText={
                errors.phoneNumber && (errors.phoneNumber.message as string)
              }
            />
          </div>
          <div className="form-wrapper__row--item">
            <TextFieldControl
              label={"Passport Number"}
              name={"passportNumber"}
              control={control}
              defaultValue={""}
              rules={FormRules["passportNumber"]}
              error={Boolean(errors.passportNumber)}
              helperText={
                errors.passportNumber &&
                (errors.passportNumber.message as string)
              }
            />
          </div>
        </div>
        <div className="form-wrapper__button">
          <FormButton
            submitHandler={handleSubmit(onSubmit)}
            text={"register"}
          />
        </div>
      </FormProvider>
    </div>
  );
};

export default RegisterForm;
