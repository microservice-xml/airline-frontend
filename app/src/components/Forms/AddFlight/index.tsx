import { FormProvider, useForm } from "react-hook-form";
import TextFieldControl from "../../FormComponents/TextFieldControl";
import AutocompleteControl from "../../FormComponents/AutocompleteControl";
import DatePickerControl from "../../FormComponents/DatePickerControl";
import FormRules from "../Rules/FormRules";
import "./index.scss";
import FormButton from "../../Button";
import { useEffect, useState } from "react";
import { getAll } from "./../../../services/city/cityService";
import {
  ErrorMessage,
  SuccesMessage,
} from "../../../utils/toastService/toastService";
import TimePickerControl from "../../FormComponents/TimePickerControl";
import { useNavigate } from "react-router-dom";
import { createFlight } from "../../../services/flight/flightService";

const AddFlight = () => {
  const form = useForm();
  const [cities, setData] = useState([]);

  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = form;

  useEffect(() => {
    async function fetchData() {
      const response = await getAll();
      if (!response || !response.ok) {
        ErrorMessage("Oops! Something went wrong. Please try again later.");
        return;
      }

      let tmp = [];
      for (let i of response.data) {
        tmp.push({ label: i.name + " (" + i.iata_code + ")" });
      }
      setData(tmp as any);
    }
    fetchData();
  }, []);

  const onSubmit = async (dto: any) => {
    let obj = {
      departureCity: dto.from.label,
      arrivalCity: dto.to.label,
      departure:
        dto.departure.toISOString().slice(0, 10) +
        dto.departTime.toISOString().slice(10, 19),
      arrival:
        dto.arrival.toISOString().slice(0, 10) +
        dto.arrivalTime.toISOString().slice(10, 19),
      numSeats: Number(dto.numSeats),
      price: Number(dto.price),
      desc: dto.describe,
    };

    let response: any;
    response = await createFlight(obj);
    if (!response || !response.ok) {
      ErrorMessage("Ooops.Something went wrong. Please try again later.");
      return;
    }

    SuccesMessage("Congratulations! Flight has been successfully created.");
    navigate("/");
  };

  return (
    <div className="wrapper">
      <div className="wrapper__header">Create new flight</div>
      <FormProvider {...form}>
        <div className="wrapper__row">
          <div className="wrapper__row__item">
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
                iconPath={require("../../../assets/images/icons/airport-location.png")}
                popperWidth={"30rem"}
                defaultValue={"Belgrade"}
              />
            </div>
            <DatePickerControl
              label={"Depart"}
              rules={FormRules["required"]}
              error={Boolean(errors.required)}
              helperText={
                errors.required && (errors.required.message as string)
              }
              control={control}
              name={"departure"}
            />
            <div className="wrapper__row_item-field">
              <TimePickerControl
                label="Time"
                control={control}
                name={"departTime"}
                rules={FormRules["required"]}
                error={Boolean(errors.required)}
                helperText={
                  errors.required && (errors.required.message as string)
                }
              />
            </div>
          </div>
          <div className="wrapper__container--icon"></div>
          <div className="wrapper__container__elem">
            <div className="wrapper__container__elem--item">
              <AutocompleteControl
                name={"to"}
                control={control}
                options={cities}
                label={"To"}
                iconPath={require("../../../assets/images/icons/airport-location.png")}
                popperWidth={"30rem"}
                defaultValue={"New York"}
                rules={FormRules["required"]}
                error={Boolean(errors.required)}
                helperText={
                  errors.required && (errors.required.message as string)
                }
              />
            </div>
            <DatePickerControl
              label={"Return"}
              control={control}
              name={"arrival"}
              rules={FormRules["required"]}
              error={Boolean(errors.required)}
              helperText={
                errors.required && (errors.required.message as string)
              }
            />
            <div className="wrapper__row_item-field">
              <TimePickerControl
                label="Time"
                control={control}
                name={"arrivalTime"}
                rules={FormRules["required"]}
                error={Boolean(errors.required)}
                helperText={
                  errors.required && (errors.required.message as string)
                }
              />
            </div>
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
