import React, { useState } from 'react';

const SandboxesContext = React.createContext([{}, () => {}]);

const SandboxesProvider = props => {
    const [state, setState] = useState({
        sandboxes: [],
        error: null,
        isLoading: false
    });

    return (
        <SandboxesContext.Provider value={[state, setState]}>
            {props.children}
        </SandboxesContext.Provider>
    );
};

export { SandboxesContext, SandboxesProvider };