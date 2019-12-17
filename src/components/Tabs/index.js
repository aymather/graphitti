import React, { Fragment, useContext } from 'react';
import { TabsContext } from '../../utils/contexts/tabsContext';
import { Tab } from './partials';

const Index = () => {
    const [tabsState] = useContext(TabsContext);

    const get_tabs = () => {
        return tabsState.tabs.map(tab => {
            return (
                <Tab key={tab.id} id={tab.id}>{tab.name}</Tab>
            )
        })
    }

    const get_body = () => {
        if(tabsState.tabs.length > 0){
            return (
                <div className='tabs-wrap'>
                    {
                        get_tabs()
                    }
                </div>
            )
        }
    }

    return (
        <Fragment>
            {
                get_body()
            }
        </Fragment>
    )
}

export default Index;