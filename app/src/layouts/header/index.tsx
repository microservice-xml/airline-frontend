import React, { MouseEventHandler, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormButton from '../../components/Button';
import AuthContext from '../../store/login/AuthContext';
import './index.scss'
import NavButton from './navbutton';

function Header() {

    const navigate = useNavigate();
    const context = useContext(AuthContext);
    let role = context.user.role;
    let isLoggedIn = context.isLoggedIn;

    const handleClick = () => {
        navigate('/')
    }

    const loginHandler = () => {
        navigate('/authenticate')
    }

    const logoutHandler = () => {
        context.logout();
        navigate('/');
    }

    const registerHandler = () => {
        navigate('/register');
    }

    const getUserNavbar = () => {
        return (<React.Fragment>
            <NavButton text={'My Tickets'}/>
        </React.Fragment>)
    }

    const getAdminNavbar = () => {
        return (<React.Fragment>
            <NavButton text={'Flights'}/>
        </React.Fragment>)
    }

    const getLoggedButtons = () => {
        return (<React.Fragment>
            {!isLoggedIn ? <NavButton text='About us' /> : <NavButton text={'My Profile'} />}
            {isLoggedIn ? getLogoutButton() : getLoginButton()}
            {!isLoggedIn && getRegisterButton()}
            </React.Fragment>)
    }

    const getLoginButton = () => {
        return (<NavButton text='Log in' iconPath={require('../../assets/images/icons/user-large1.png')} handlerFunction={loginHandler} />)
    }

    const getLogoutButton = () => {
        return (<NavButton text='Logout' iconPath={require('../../assets/images/icons/logout.png')} handlerFunction={logoutHandler} />)
    }

    const getRegisterButton = () => {
        return (<FormButton text='Join us' submitHandler={registerHandler} styling={'button-dims'}/>)
    }

    return (<div className={'header'}>
        <div className={'header-main'}>
            <div className={'header-main__logo'} onClick={handleClick}>
                <div className={'header-main__logo-logo'}>

                </div>
                <div className={'header-main__logo-text'}>
                    Airdealer
                </div>
            </div>
            <div className={'header-main__options'}>
                {role === 'REGISTERED' && getUserNavbar()}
                {role === 'ADMIN' && getAdminNavbar()}
                {getLoggedButtons()}
            </div>
        </div>
    </div>)
}

export default Header;