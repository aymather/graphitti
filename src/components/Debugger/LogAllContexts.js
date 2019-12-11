import React, { useContext } from 'react';
import { AuthContext } from '../../utils/contexts/authContext';
import { GoogleSheetsContext } from '../../utils/contexts/googleSheetsContext';
import { SettingsContext } from '../../utils/contexts/settingsContext';

const LogAllContexts = () => {
    const [authState] = useContext(AuthContext);
    const [sheetsState] = useContext(GoogleSheetsContext);
    const [settingsState] = useContext(SettingsContext);

    const onClick = () => {
        console.log('Auth State: ');
        console.log(authState);
        console.log('Google Sheets State: ');
        console.log(sheetsState);
        console.log('Settings State: ');
        console.log(settingsState);
    }

    return (
        <p className='small' onClick={onClick}>Log Contexts</p>
    )
}

export default LogAllContexts;