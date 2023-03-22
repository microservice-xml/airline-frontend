import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import cities from "../../constants/Cities";
import "./index.scss"
import AutocompleteControl from "../FormComponents/AutocompleteControl";
import DatePickerControl from "../FormComponents/DatePickerControl";
import { useForm, FormProvider } from 'react-hook-form';
import passengers from "../../constants/Passengers";


const SearchComponent = () => {

    const form = useForm();
    const navigate = useNavigate();

    const {
        setValue,
        watch,
        register,
        control,
        handleSubmit,
        formState: { errors }
    } = form

    const onSubmit = async (dto: any) => {
        // console.log(dto);
        let obj = {
            departureCity: dto.from.label,
            arrivalCity: dto.to.label,
            departure: dto.departure.toISOString().slice(0, 10),
            arrival: dto.arrival.toISOString().slice(0, 10),
            desiredSeats: dto.desiredSeats.value,
        }
        // console.log(obj);

        navigate('/choose-flight', {
            state: {
                data: obj,
            }
        });
    }

    return (
        <div className="search-container">
            <div className="search">
                <div className="search__title">
                    <h1> Quickly scan all your favourite travel sites </h1>
                </div>
                <FormProvider {...form}>
                    <div className="search__container">
                        <div className="search__container-inputs">
                            <AutocompleteControl name={'from'} control={control} options={cities} label={'From'} customClass={"search__container-inputs--textbox input-rounded-left grow"} iconPath={require('../../assets/images/icons/airport-location.png')} popperWidth={'30rem'} defaultValue={'Belgrade'} />
                            <AutocompleteControl name={'to'} control={control} options={cities} label={'To'} customClass={"search__container-inputs--textbox grow"} iconPath={require('../../assets/images/icons/airport-location.png')} popperWidth={'30rem'} defaultValue={'New York'} />
                            <DatePickerControl label={'Depart'} helperText={'DD/MM/YYYY'} control={control} name={'departure'} customClass={"search__container-inputs--textbox grow"} />
                            <DatePickerControl label={'Return'} helperText={'DD/MM/YYYY'} control={control} name={'arrival'} customClass={"search__container-inputs--textbox grow"} />
                            <AutocompleteControl name={'desiredSeats'} control={control} options={passengers} label={'Passengers'} customClass={"search__container-inputs--textbox input-rounded-right"} iconPath={require('../../assets/images/icons/people1.png')} popperWidth={'15rem'} />
                        </div>
                        <button className="search__container-button" onClick={handleSubmit(onSubmit)}>Search</button>
                    </div>
                </FormProvider>
            </div>
        </div>
    );
}

export default SearchComponent;