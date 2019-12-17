import React, { useContext } from 'react';
import { AuthContext } from '../../utils/contexts/authContext';
import { GoogleSheetsContext } from '../../utils/contexts/googleSheetsContext';
import { SettingsContext } from '../../utils/contexts/settingsContext';
import { TabsContext } from '../../utils/contexts/tabsContext';
import { SandboxesContext } from '../../utils/contexts/sandboxesContext';

const LogAllContexts = () => {
    const [authState] = useContext(AuthContext);
    const [sheetsState] = useContext(GoogleSheetsContext);
    const [settingsState] = useContext(SettingsContext);
    const [tabsState] = useContext(TabsContext);
    const [sandboxesState] = useContext(SandboxesContext);

    const onClick = () => {
        console.log('Auth State: ');
        console.log(authState);
        console.log('Google Sheets State: ');
        console.log(sheetsState);
        console.log('Settings State: ');
        console.log(settingsState);
        console.log('Tabs State: ');
        console.log(tabsState);
        console.log('Sandboxes State: ');
        console.log(sandboxesState);
    }

    return (
        <div onClick={onClick} className='navbar-1-item' style={{color: '#ccc'}}>
            Log
        </div>
    )
}

export default LogAllContexts;