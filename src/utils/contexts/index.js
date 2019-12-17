import React from 'react';
import { AuthProvider } from './authContext';
import { GoogleSheetsProvider } from './googleSheetsContext';
import { SettingsProvider } from './settingsContext';
import { TabsProvider } from './tabsContext';
import { SandboxesProvider } from './sandboxesContext';

const RootProvider = props => {
    return (
        <SettingsProvider>
            <AuthProvider>
                <GoogleSheetsProvider>
                    <TabsProvider>
                        <SandboxesProvider>
                            {props.children}
                        </SandboxesProvider>
                    </TabsProvider>
                </GoogleSheetsProvider>
            </AuthProvider>
        </SettingsProvider>
    )
}

export default RootProvider;