import React from 'react';
import { ImportGoogle } from '../lib';
import LogAllContexts from '../Debugger/LogAllContexts';
import useAuth from '../../utils/hooks/useAuth';
import useGoogleSheets from '../../utils/hooks/useGoogleSheets';
import { ConnectGoogleBtn } from '../lib';
import { useHistory } from 'react-router-dom';
import { LogoLight } from '../svg';
import {
    NavItem
} from './partials';


const Index = () => {
    const { logoutUser } = useAuth();
    const history = useHistory();

    const logout_user = () => {
        logoutUser();
        history.push('/logged-out');
    }

    return (
        <div className='sidebar'>
            <div className='mx-auto d-inline-block my-4'><LogoLight /></div>
            <NavItem>
                <p className='small'>Upload Sheet</p>
                <ImportGoogle />
            </NavItem>
            <NavItem>
                <ConnectGoogleBtn />
            </NavItem>
            <NavItem>
                <LogAllContexts />
            </NavItem>
            <NavItem>
                <p className='small' onClick={logout_user}>Logout</p>
            </NavItem>
        </div>
    );
}

export default Index;