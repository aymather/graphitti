import React, { useContext } from 'react';
import { TabsContext } from '../../../utils/contexts/tabsContext';

const NavItem = props => {
    const [tabsState, setTabsState] = useContext(TabsContext);

    return (
        <div onClick={props.onClick} className='nav-2-item'>
            {props.children}
        </div>
    )
}

export default NavItem;