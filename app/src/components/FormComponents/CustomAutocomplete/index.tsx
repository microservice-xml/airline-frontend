import { Autocomplete, Box, TextField } from "@mui/material";
import { Controller } from "react-hook-form";
import cities from "../../../constants/Cities";
import CustomPopperStyled from "../CustomPopper";
import './index.scss';

const sxStyle = {
    height : '80%',
    width: '100%',
    border: 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}

const boxStyle = {
    fontSize: '2rem',
    fontWeight: '500',
}

const CustomAutocomplete : React.FC<{cities: any[], label : string, customClass : string}> = (props) => {

    const getClassName = () => {
        return "control " + props.customClass;
    }

    return (<div className={getClassName()}><div className="control-label">
        From</div><Autocomplete                       
                        options={props.cities}
                        renderInput={(params) => <TextField {...params} defaultValue={cities[1]} style={sxStyle}/>}
                        style={sxStyle}
                        freeSolo={true}
                        renderOption={(props, city) => (
                            <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                                <img
                                loading="lazy"
                                style={boxStyle}
                                width="20"
                                src={require(`../../../assets/images/icons/airport-location.png`)}
                                srcSet={require(`../../../assets/images/icons/airport-location.png`)}
                                alt=""
                                />
                                {city.label}
                            </Box>
                        )}
                        PopperComponent={CustomPopperStyled} /></div>)
}

export default CustomAutocomplete;