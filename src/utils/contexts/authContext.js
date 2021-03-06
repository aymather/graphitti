import React, { useState } from 'react';

const AuthContext = React.createContext([{}, () => {}]);

const AuthProvider = props => {
    const [state, setState] = useState({
        isLoggedIn: false,
        email: '',
        id: '',
        google_api: {}
    });

    return (
        <AuthContext.Provider value={[state, setState]}>
            {props.children}
        </AuthContext.Provider>
    );
};

export { AuthProvider, AuthContext };