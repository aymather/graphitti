import React, { useState } from 'react';
import useAuth from '../../utils/hooks/useAuth';
import { useHistory } from 'react-router-dom';
import {
    Nav1,
    Nav2
} from './partials';


const Index = () => {
    const [navState, setNavState] = useState('upload');

    const { logoutUser } = useAuth();
    const history = useHistory();

    const logout_user = () => {
        logoutUser();
        history.push('/logged-out');
    }

    const toggle_nav = name => {
        setNavState(name);
    }

    return (
        <div className='navbar-wrap'>
            <Nav1 toggle_nav={toggle_nav} />
            <Nav2 nav={navState} />
        </div>
    );
}

export default Index;