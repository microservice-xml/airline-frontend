import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../store/login/AuthContext';
import './index.scss'

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
        return (<div className={'header-main__options-login hover'} onClick={loginHandler}>
            <div className={'header-main__options-login__logo--login'}>

            </div>
            <div className={'header-main__options-login__text'} >
                Log in
            </div>
        </div>)
    }

    const getLogoutButton = () => {
        return (<div className={'header-main__options-login hover'} onClick={logoutHandler}>
            <div className={'header-main__options-login__logo--logout'}>

            </div>
            <div className={'header-main__options-login__text'} >
                Logout
            </div>
        </div>)
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
                <div className={'header-main__options-about hover'}>
                    About us
                </div>
                {context.isLoggedIn ? getLogoutButton() : getLoginButton()}
            </div>
        </div>
    </div>)
}

export default Header;