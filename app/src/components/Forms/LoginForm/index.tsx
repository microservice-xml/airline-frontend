import React, {useState} from 'react';
import { Button } from '@mui/material';
import { FormProvider, useForm } from "react-hook-form";
import TextFieldControl from '../../FormComponents/TextFieldControl';
import { login } from '../../../services/auth/authService';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {

    const form = useForm();
    const navigate = useNavigate();

    const {
        setValue, 
        watch,
        register,
        control,
        handleSubmit,
        formState: {errors}
    } = form

    const handleClick = () => {
        navigate('/')
    }

    const onSubmit = async (dto : any) => {
        let response : any;
        console.log(dto)
        response = await login(dto);
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
            <div className='form-wrapper__button'>
                <Button onClick={handleSubmit(onSubmit)} className={'form-wrapper__button--button'}>Submit</Button>
            </div>
            <span className='form-wrapper__link' onClick={handleClick}>{'Still not our member? Make sure to join us!'}</span>
        </FormProvider>
    </div>)
}

export default LoginForm;