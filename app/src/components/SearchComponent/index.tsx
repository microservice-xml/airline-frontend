import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.scss";
import AutocompleteControl from "../FormComponents/AutocompleteControl";
import DatePickerControl from "../FormComponents/DatePickerControl";
import { useForm, FormProvider } from "react-hook-form";
import passengers from "../../constants/Passengers";
import { ErrorMessage } from "../../utils/toastService/toastService";
import { getAll } from "../../services/city/cityService";
import { getDate } from "../../utils/timeConverter/timeConverter";

const SearchComponent = () => {
  const form = useForm();
  const navigate = useNavigate();
  const [cities, setData] = useState([]);

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
  const {
    setValue,
    watch,
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = form;

  const onSubmit = async (dto: any) => {
    let obj = {
      departureCity: dto.from.label.split(" ")[0],
      arrivalCity: dto.to.label.split(" ")[0],
      departure: getDate(dto.departure),
      arrival: getDate(dto.arrival),
      desiredSeats: dto.desiredSeats.value,
    };

    navigate("/choose-flight", {
      state: {
        data: obj,
      },
    });
  };

  return (
    <div className="search-container">
      <div className="search">
        <div className="search__title">
          <h1> Quickly scan all your favourite travel sites </h1>
        </div>
        <FormProvider {...form}>
          <div className="search__container">
            <div className="search__container-inputs">
              <AutocompleteControl
                name={"from"}
                control={control}
                options={cities}
                label={"From"}
                customClass={
                  "search__container-inputs--textbox input-rounded-left grow"
                }
                iconPath={require("../../assets/images/icons/airport-location.png")}
                popperWidth={"30rem"}
                defaultValue={"Belgrade"}
              />
              <AutocompleteControl
                name={"to"}
                control={control}
                options={cities}
                label={"To"}
                customClass={"search__container-inputs--textbox grow"}
                iconPath={require("../../assets/images/icons/airport-location.png")}
                popperWidth={"30rem"}
                defaultValue={"New York"}
              />
              <DatePickerControl
                label={"Depart"}
                helperText={"DD/MM/YYYY"}
                control={control}
                name={"departure"}
                customClass={"search__container-inputs--textbox grow"}
              />
              <DatePickerControl
                label={"Return"}
                helperText={"DD/MM/YYYY"}
                control={control}
                name={"arrival"}
                customClass={"search__container-inputs--textbox grow"}
              />
              <AutocompleteControl
                name={"desiredSeats"}
                control={control}
                options={passengers}
                label={"Passengers"}
                customClass={
                  "search__container-inputs--textbox input-rounded-right"
                }
                iconPath={require("../../assets/images/icons/people1.png")}
                popperWidth={"15rem"}
              />
            </div>
            <button
              className="search__container-button"
              onClick={handleSubmit(onSubmit)}
            >
              Search
            </button>
          </div>
        </FormProvider>
      </div>
    </div>
  );
};

export default SearchComponent;
