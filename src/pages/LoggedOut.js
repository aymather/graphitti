import React, { useContext, useState } from 'react';
import { Logo } from '../components/svg';
import { AuthContext } from '../utils/contexts/authContext';
import {
    LoginForm,
    SignupForm
} from '../components/lib';

const LoggedOut = () => {
    const [state, setState] = useState(true);

    const [authState] = useContext(AuthContext);

    const toggle = () => {
        setState(!state);
    }

    return (
        <div className='d-flex justify-content-center flex-column w-50 h-100 my-auto mx-auto text-center'>
            <div className='d-flex justify-content-center'>
                <Logo />
                <h1 className='highlight logo-title'>Graphitti</h1>
            </div>
            
            {
                state ?
                <LoginForm toggle={toggle} /> :
                <SignupForm toggle={toggle} />
            }
        </div>
    )
}

export default LoggedOut;