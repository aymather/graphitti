import React from 'react';
import { AuthProvider } from './authContext';
import { GoogleSheetsProvider } from './googleSheetsContext';
import { SettingsProvider } from './settingsContext';

const RootProvider = props => {
    return (
        <SettingsProvider>
            <AuthProvider>
                <GoogleSheetsProvider>
                    {props.children}
                </GoogleSheetsProvider>
            </AuthProvider>
        </SettingsProvider>
    )
}

export default RootProvider;