import React, {useState, useEffect, useCallback} from 'react';
import jwt from 'jwt-decode';
import User from '../../model/auth/User';

let logoutTimer : any;

const AuthContext = React.createContext({
    token: "",
    isLoggedIn: false,
    user: { email: "", id: "", role: ""},
    login: (token : string) => {},
    logout: () => {}
})

const retrieveStoredToken = () => {
    const storedToken = localStorage.getItem('token');
    const expiresIn = localStorage.getItem('expires');

    const remainingTime = calculateRemainingTime(expiresIn);
    if (remainingTime <= 0) {
        localStorage.removeItem('token');
        localStorage.removeItem('expires');
        return null;
    }

    return { token: storedToken, duration: remainingTime }
}

const calculateRemainingTime = (expiresIn : any) => {

    const currentTime = new Date().getTime();
    const expireTime = new Date().getTime() + +expiresIn;

    const remainingTime = expireTime - currentTime;

    return remainingTime;
}

const retrieveUserFromToken = (token : string) => {
    const decodedToken = jwt(token);

    let user : User;
    user = {
        email : (decodedToken as any).sub,
        id : (decodedToken as any).id,
        role : (decodedToken as any).authorities[0].authority
    }

    return user;
}

export const AuthContextProvider = (props : any) => {

    const tokenData = retrieveStoredToken();
    let initialToken : string = "";
    let initialUser : User = { email: "", id: "", role: ""};

    if (tokenData !== null) {
        initialToken = tokenData.token as string;
        initialUser = retrieveUserFromToken(initialToken)
    }

    const [token, setToken] = useState<string>(initialToken);
    const [user, setUser] = useState<User>(initialUser)
    const userIsLoggedIn = !!token;

    const loginHandler = (token : string) => {
        setToken(token)
        let decodedToken = jwt(token)
        let expiresIn = +(decodedToken as any).exp;

        const remainingTime = calculateRemainingTime(expiresIn)

        localStorage.setItem("token", token);
        localStorage.setItem('expires', expiresIn.toString())
        logoutTimer = setTimeout(logoutHandler, remainingTime)
    }

    const logoutHandler = useCallback(() => {
        setToken('');
        setUser({ email: "", id: "", role: ""})
        localStorage.removeItem('token');
        localStorage.removeItem('expires');

        if (logoutTimer) {
            clearTimeout(logoutTimer);
        }
    }, [])

    useEffect(() => {
        if (tokenData) {
            if ((tokenData as any).token){
                logoutTimer = setTimeout(logoutHandler, (tokenData as any).duration)
            }
        }
    }, [tokenData, logoutHandler])

    const contextValue = {
        token : token,
        isLoggedIn : userIsLoggedIn,
        user: user,
        login: loginHandler,
        logout: logoutHandler
    }

    return (
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext;