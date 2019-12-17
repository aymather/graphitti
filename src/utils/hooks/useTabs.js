import { useState, useContext } from 'react';
import { TabsContext } from '../contexts/tabsContext';
import axios from 'axios';
import api_routes from '../../config/api';

const useTabs = () => {
    const [tabsState, setTabsState] = useContext(TabsContext);
    const [options] = useState({
		headers: {
			['x-auth-token']: window.localStorage.getItem('token')
		}
	})

    const addTab = data => {
        // Check if the tab already exists
        var exists = false;
        for(let tab of tabsState.tabs){
            if(tab.id == data.id){
                exists = true;
                break;
            }
        }

        // If it doesn't exist, add it to the tabs and set it to active
        var newTabsState = [data, ...tabsState.tabs];
        if(!exists){
            setTabsState({
                ...tabsState,
                tabs: newTabsState,
                active: data.id
            })

            // Now get the data associated with this id
            var reqOptions = {
                ...options,
                method: 'GET',
                params: {
                    id: data.id
                },
                url: api_routes.sandbox_data
            }

            axios(reqOptions)
                .then(res => {
                    // Find index of the tab with that id and place data into state
                    for(let i = 0; i < newTabsState.length; i++){
                        if(newTabsState[i].id === data.id){
                            newTabsState[i]['data'] = res.data;
                            setTabsState({
                                ...tabsState,
                                tabs: newTabsState,
                                active: newTabsState[i].id
                            })
                            break;
                        }
                    }
                })
                .catch(err => {
                    console.log(err);
                })
        } else {
            // If it does exist, then just set the active tab
            setTabsState({
                ...tabsState,
                active: data.id
            })
        }
    }

    const removeTab = id => {
        // If the tab we're removing is the active tab, we need to set a new active tab
        var { active } = tabsState;

        // Remove the tab from state
        var tabs = tabsState.tabs.filter(tab => tab.id !== id);

        // Just set a new active tab if we removed the active one
        if(tabs.length > 0 && active === id){
            active = tabs[0].id;
        }

        // Set state
        setTabsState({
            ...tabsState,
            active,
            tabs
        })
    }

    const selectTab = id => {
        setTabsState({
            ...tabsState,
            active: id
        })
    }

    return {
        addTab,
        removeTab,
        selectTab
    }

}

export default useTabs;