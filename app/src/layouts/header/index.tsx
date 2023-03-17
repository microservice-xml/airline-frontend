import { useNavigate } from 'react-router-dom';
import './index.scss'

function Header() {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/')
    }

    const loginHandler = () => {
        navigate('/authenticate')
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
                <div className={'header-main__options-login hover'}>
                    <div className={'header-main__options-login__logo'}>

                    </div>
                    <div className={'header-main__options-login__text'} onClick={loginHandler}>
                        Log in
                    </div>
                </div>
            </div>
        </div>
    </div>)
}

export default Header;