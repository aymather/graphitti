import React, { useState } from 'react';

const TabsContext = React.createContext([{}, () => {}]);

const TabsProvider = (props) => {
    const [state, setState] = useState({
        tabs: [],
        active: null
    });

    return (
        <TabsContext.Provider value={[state, setState]}>
            {props.children}
        </TabsContext.Provider>
    );
};

export { TabsProvider, TabsContext };