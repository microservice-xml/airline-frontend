import * as React from 'react';
import { DatePicker, DatePickerProps } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import TextField from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import GenericProps from '../Generic/GenericProps';
import { Controller } from 'react-hook-form';
import { StyledTextField } from '../TextFieldControl';
import { styled } from '@mui/material/styles';

const StyledDatePicker = styled(DatePicker)({
    '& .css-1jy569b-MuiFormLabel-root-MuiInputLabel-root': {
        left: '10px',
        top: '26px',
    },

    '& .css-o9k5xi-MuiInputBase-root-MuiOutlinedInput-root': {
        borderBottom: '1px solid #fff',
        '&:hover': {
            borderBottom: '1px solid #fff',
            backgroundColor: '#444444'
        }
    },

    '& .MuiOutlinedInput-notchedOutline': {
        border: 'none'
    }
})

const DatePickerControl : React.FC<GenericProps> = (props) => {

    return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Controller 
            control={props.control}
            name={props.name}
            render={({field}) => (
                <DatePicker
                    {...field}
                    inputRef={field.ref}
                    className='search__container-inputs--textbox'
                    label={props.label}
                />
            )} />
        
    </LocalizationProvider>
  );
}


export default DatePickerControl;