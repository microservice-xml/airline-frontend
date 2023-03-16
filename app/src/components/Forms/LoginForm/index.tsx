import React, {useState} from 'react';
import { Button, TextField, Autocomplete } from '@mui/material';
import { FormProvider, useForm, Controller } from "react-hook-form";
import TextFieldControl from '../../FormComponents/CustomTextField';
import { login } from '../../../services/auth/authService';
import CustomAutocomplete from '../../FormComponents/CustomAutocomplete';
import cities from '../../../constants/Cities';


const LoginForm = () => {

    const form = useForm();
    const [token, setToken] = useState<string>("Nema tokena")

    const {
        setValue, 
        watch,
        register,
        control,
        handleSubmit,
        formState: {errors}
    } = form

    const onSubmit = async (dto : any) => {
        let response : any;
        console.log(dto)
        response = await login(dto);
        setToken(response.data.token)
    }

    return (<div className='form-wrapper'>
        <FormProvider {...form}>
            <div className='form-wrapper__item'>
            <TextFieldControl
                label={'Email'}
                name={'email'}
                control={control}
                defaultValue={""}
                helperText={"You have entered wrong email or password"}/>
            </div>
            <div className='form-wrapper__item'>
            <TextFieldControl
                label={'Password'}
                name={'password'}
                control={control}
                defaultValue={""}
                helperText={"You have entered wrong email or password"}/>
            </div>
            <Controller
                control={control}
                name="type"
                rules={{
                    required: 'Veuillez choisir une réponse',
                }}
                render={({ field: { onChange, value } }) => (
                    <Autocomplete
                        freeSolo
                        options={cities}
                        onChange={(event, values) => onChange(values)}
                        value={value}
                        renderInput={(params) => (
                        <TextField
                            {...params}
                            label="type"
                            variant="outlined"
                            onChange={onChange}
                        />
                        )}/>)}
            />
            <div className='form-wrapper__button'>
                <Button onClick={handleSubmit(onSubmit)}>Submit</Button>
            </div>
            {token}
        </FormProvider>
    </div>)
}

export default LoginForm;