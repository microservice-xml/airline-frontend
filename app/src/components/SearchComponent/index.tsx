import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import cities from "../../constants/Cities";
import "./index.scss"
import AutocompleteControl from "../FormComponents/AutocompleteControl";
import DatePickerControl from "../FormComponents/DatePickerControl";
import { useForm, FormProvider } from 'react-hook-form';
import passengers from "../../constants/Passengers";
import { getSearchValues } from "../../services/news/newsService";

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
        //console.log(dto);
        let obj = {
            departureCity: dto.from,
            arrivalCity: dto.to,
            departure: dto.departure.toISOString().replace("23:00", "13:30").slice(0, 19),
            arrival: dto.arrival.toISOString().replace("23:00", "15:30").slice(0, 19),
            desiredSeats: dto.desiredSeats,
        }
        let response = await getSearchValues(obj)
        //console.log(response.data);
        navigate('/choose-flight', {
            state: {
                data: response.data,
                dataSeats: dto.desiredSeats,
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
                            <AutocompleteControl name={'from'} control={control} options={cities} label={'From'} customClass={"search__container-inputs--textbox input-rounded-left grow"} iconPath={require('../../assets/images/icons/airport-location.png')} popperWidth={'30rem'} defaultValue={{ label: 'Belgrade' }} />
                            <AutocompleteControl name={'to'} control={control} options={cities} label={'To'} customClass={"search__container-inputs--textbox grow"} iconPath={require('../../assets/images/icons/airport-location.png')} popperWidth={'30rem'} defaultValue={{ label: 'New York' }} />
                            <DatePickerControl label={'Depart'} helperText={'DD/MM/YYYY'} control={control} name={'departure'} />
                            <DatePickerControl label={'Return'} helperText={'DD/MM/YYYY'} control={control} name={'arrival'} />
                            <AutocompleteControl name={'desiredSeats'} control={control} options={passengers} label={'Passengers'} customClass={"search__container-inputs--textbox input-rounded-right"} iconPath={require('../../assets/images/icons/people1.png')} popperWidth={'15rem'} defaultValue={{ label: '2 Adult' }} />
                        </div>
                        <button className="search__container-button" onClick={handleSubmit(onSubmit)}>Search</button>
                    </div>
                </FormProvider>
            </div>
        </div>
    );
}

export default SearchComponent;