import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import cities from "../../constants/Cities";
import "./index.scss"
import Flight from "../../model/Flight";
import CustomAutocomplete from "../FormComponents/CustomAutocomplete";
import CustomDateRangePicker from "../FormComponents/CustomDateRangePicker";
import { searchFlights } from "../../services/search/searchService";
import { Button, TextField, Autocomplete } from '@mui/material';
import { FormProvider, useForm, Controller } from "react-hook-form";
import TextFieldControl from '../FormComponents/CustomTextField';




const SearchComponent = () => {

    const [flight, setFlight] = useState<Flight>();
    const form = useForm();


    let navigate = useNavigate();

    const handleClick = () => {
        navigate("/choose-flight");
    }

    const {
        setValue,
        watch,
        register,
        control,
        handleSubmit,
        formState: { errors }
    } = form

    const onSubmit = async (dto: any) => {
        let response: any;
        console.log(dto)
        response = await searchFlights(dto);
        console.log(response);
    }



    return (
        <div className="search-container">
            <div className="search">
                <div className="search__title">
                    <h1> Quickly scan all your favourite travel sites </h1>
                </div>
                <div className="search__container">
                    <div className="search__container-inputs">
                        <FormProvider {...form}>
                            <Controller
                                control={control}
                                name="From"
                                rules={{
                                    required: 'Veuillez choisir une réponse',
                                }}
                                render={({ field: { onChange, value } }) => (
                                    <Autocomplete
                                        className="search__container-inputs--textbox grow"
                                        freeSolo
                                        options={cities}
                                        onChange={(event, values) => onChange(values)}
                                        value={value}
                                        renderInput={(params) => (
                                            <TextField
                                                {...params}
                                                label="From"
                                                variant="outlined"
                                                onChange={onChange}
                                            />
                                        )} />)}


                            />

                            <Controller
                                control={control}
                                name="To"
                                rules={{
                                    required: 'Veuillez choisir une réponse',
                                }}
                                render={({ field: { onChange, value } }) => (
                                    <Autocomplete
                                        className="search__container-inputs--textbox grow"
                                        freeSolo
                                        options={cities}
                                        onChange={(event, values) => onChange(values)}
                                        value={value}
                                        renderInput={(params) => (
                                            <TextField
                                                {...params}
                                                label="To"
                                                variant="outlined"
                                                onChange={onChange}
                                            />
                                        )} />)}


                            />

                            <Controller
                                control={control}
                                name="To"
                                rules={{
                                    required: 'Veuillez choisir une réponse',
                                }}
                                render={({ field }) => (
                                    <CustomDateRangePicker
                                        {...field}
                                        label="Arrival"
                                        helperText={'DD/MM/YYYY'}
                                    />

                                )}
                            />

                            <Controller
                                control={control}
                                name="To"
                                rules={{
                                    required: 'Veuillez choisir une réponse',
                                }}
                                render={({ field }) => (
                                    <CustomDateRangePicker
                                        {...field}
                                        label="Depart"
                                        helperText={'DD/MM/YYYY'}
                                    />

                                )}
                            />


                            <div className="search__container-inputs--textbox input-rounded-right">
                                <TextFieldControl
                                    label={'Travellers'}
                                    name={'desiredSeats'}
                                    control={control}
                                    defaultValue={""}
                                />
                            </div>



                        </FormProvider>
                        {/* <input type="text" className="search__container-inputs--textbox input-rounded-right"></input> */}
                    </div>
                    <button className="search__container-button" onClick={handleSubmit(onSubmit)}>Search</button>
                </div>
            </div>
        </div>
    );
}

export default SearchComponent;