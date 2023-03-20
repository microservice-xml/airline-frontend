import { MouseEventHandler, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../store/login/AuthContext';
import './index.scss'
import NavButton from './navbutton';

function Header() {

    const navigate = useNavigate();
    const context = useContext(AuthContext);

    const handleClick = () => {
        navigate('/')
    }

    const loginHandler = () => {
        navigate('/authenticate')
    }

    const logoutHandler = () => {
        context.logout();
    }

    const getLoginButton = () => {
        return (<NavButton text='Log in' iconPath={require('../../assets/images/icons/user-large1.png')} handlerFunction={loginHandler} />)
    }

    const getLogoutButton = () => {
        return (<NavButton text='Logout' iconPath={require('../../assets/images/icons/logout.png')} handlerFunction={logoutHandler} />)
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
                <NavButton text='About us' />
                {context.isLoggedIn ? getLogoutButton() : getLoginButton()}
            </div>
        </div>
    </div>)
}

export default Header;