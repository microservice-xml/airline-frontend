import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../store/login/AuthContext';

type Props = {
    role : string;
}

function useRouteProtector(props : Props) {
  
    const context = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!context.isLoggedIn) {
            navigate('/401');
        } else if (context.isLoggedIn && context.user.role !== props.role){
            navigate('/403');
        } 
    }, [context.isLoggedIn, context.user.role])
}

export default useRouteProtector;