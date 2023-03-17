import React, {useContext, useState} from 'react';
import { Button } from '@mui/material';
import { FormProvider, useForm } from "react-hook-form";
import TextFieldControl from '../../FormComponents/TextFieldControl';
import { login } from '../../../services/auth/authService';
import { useNavigate } from 'react-router-dom';
import FormRules from '../Rules/FormRules';
import AuthContext from '../../../store/login/AuthContext';
import { toast } from 'react-toastify';
import { ErrorMessage, SuccesMessage } from '../../../utils/toastService/toastService';

const LoginForm = () => {

    const form = useForm();
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState<string>('')
    const context = useContext(AuthContext);

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
        if (!response || !response.ok) {
            ErrorMessage('Invalid credentials');
            return;
        }

        context.login(response.data.token)
        SuccesMessage('Welcome back!');
        navigate('/');
    }

    return (<div className='form-wrapper'>
        <div className='form-wrapper__header'>Glad to have you back!</div>
        <FormProvider {...form}>
            <div className='form-wrapper__item'>
            <TextFieldControl
                label={'Email'}
                name={'email'}
                control={control}
                defaultValue={""}
                rules={FormRules['email']}
                error={Boolean(errors.email)}
                helperText={errors.email && errors.email.message as string}/>
            </div>
            <div className='form-wrapper__item'>
            <TextFieldControl
                label={'Password'}
                name={'password'}
                control={control}
                type={'password'}
                defaultValue={""}
                rules={FormRules['password']}
                error={Boolean(errors.password)}
                helperText={errors.password && errors.password.message as string}/>
            </div>
            <div className='form-wrapper__button'>
                <Button onClick={handleSubmit(onSubmit)} className={'form-wrapper__button--button'}>Submit</Button>
            </div>
            {errorMessage && <span className='form-wrapper__link'>{ errorMessage }</span>}
            <span className='form-wrapper__link' onClick={handleClick}>{'Still not our member? Make sure to join us!'}</span>
        </FormProvider>
    </div>)
}

export default LoginForm;