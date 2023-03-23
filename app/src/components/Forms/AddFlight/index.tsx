import { FormProvider, useForm } from "react-hook-form";
import TextFieldControl from "../../FormComponents/TextFieldControl";
import AutocompleteControl from "../../FormComponents/AutocompleteControl";
import DatePickerControl from "../../FormComponents/DatePickerControl";
import FormRules from "../Rules/FormRules";
import "./index.scss";
import cities from "../../../constants/Cities";
import FormButton from "../../Button";

const AddFlight = () => {
  const form = useForm();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = form;

  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <div className="wrapper">
      <div className="wrapper__header">Create new flight</div>
      <FormProvider {...form}>
        <div className="wrapper__row">
          <div className="wrapper__row__item">
            {/* <label className="wrapper__row__item--label">
              Number of seats:
            </label> */}
            <div className="wrapper__row__item--field">
              <TextFieldControl
                label={"Number of seats"}
                name={"numSeats"}
                control={control}
                defaultValue={""}
                rules={FormRules["required"]}
                error={Boolean(errors.required)}
                helperText={
                  errors.required && (errors.required.message as string)
                }
              />
            </div>
          </div>
          <div className="wrapper__row__item">
            {/* <label className="wrapper__row__item--label">Ticket price:</label> */}
            <div className="wrapper__row__item--field">
              <TextFieldControl
                label={"Ticket price"}
                name={"price"}
                control={control}
                defaultValue={""}
                rules={FormRules["required"]}
                error={Boolean(errors.required)}
                helperText={
                  errors.required && (errors.required.message as string)
                }
              />
            </div>
          </div>
        </div>
        <div className="wrapper__container">
          <div className="wrapper__container__elem">
            <div className="wrapper__container__elem--item">
              <AutocompleteControl
                name={"from"}
                control={control}
                options={cities}
                label={"From"}
                // customClass={"wrapper__container__elem--combo"}
                iconPath={require("../../../assets/images/icons/airport-location.png")}
                popperWidth={"30rem"}
                defaultValue={"Belgrade"}
              />
            </div>
            <DatePickerControl
              label={"Depart"}
              helperText={"DD/MM/YYYY"}
              control={control}
              name={"departure"}
              // customClass={"search__container-inputs--textbox grow"}
            />
          </div>
          <div className="wrapper__container--icon"></div>
          <div className="wrapper__container__elem">
            <div className="wrapper__container__elem--item">
              <AutocompleteControl
                name={"to"}
                control={control}
                options={cities}
                label={"To"}
                // customClass={"search__container-inputs--textbox grow"}
                iconPath={require("../../../assets/images/icons/airport-location.png")}
                popperWidth={"30rem"}
                defaultValue={"New York"}
              />
            </div>
            <DatePickerControl
              label={"Return"}
              helperText={"DD/MM/YYYY"}
              control={control}
              name={"arrival"}
              // customClass={"search__container-inputs--textbox grow"}
            />
          </div>
        </div>
        <div className="wrapper__row">
          <div className="wrapper__row--item">
            <TextFieldControl
              label={"Describe"}
              name={"describe"}
              control={control}
              defaultValue={""}
              rules={FormRules["required"]}
              error={Boolean(errors.required)}
              helperText={
                errors.required && (errors.required.message as string)
              }
            />
          </div>
        </div>
        <div className="wrapper__button">
          <FormButton submitHandler={handleSubmit(onSubmit)} text={"Submit"} />
        </div>
      </FormProvider>
    </div>
  );
};

export default AddFlight;
