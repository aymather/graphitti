import React, { useContext } from 'react';
import { TabsContext } from '../../../utils/contexts/tabsContext';
import useTabs from '../../../utils/hooks/useTabs';
import { IoIosClose } from 'react-icons/io';
import classnames from 'classnames';


const Tab = props => {
    const [tabsState] = useContext(TabsContext);

    const { removeTab, selectTab } = useTabs();

    return (
        <div className={classnames('tab-wrap', {['tab-wrap-active']: tabsState.active === props.id})}>
            <div className='tab-text' onClick={() => { selectTab(props.id) }}>
                {props.children}
            </div>
            <IoIosClose className='tab-close-icon' 
                        size='1.3em' 
                        onClick={() => { removeTab(props.id) }} 
                    />
        </div>
    )
}

export default Tab;