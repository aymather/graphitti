import React, { Fragment, useContext } from 'react';
import { SandboxesContext } from '../../../utils/contexts/sandboxesContext';
import useTabs from '../../../utils/hooks/useTabs';
import NavItem from './NavItem';
import NavText from './NavText';
import NavItemTitle from './NavItemTitle';

const Sandbox = () => {
    const [sandboxesState] = useContext(SandboxesContext);

    const { addTab } = useTabs();

    const get_body = () => {
        if(sandboxesState.isLoading){
            return (
                <NavItem>
                    <NavText>Loading...</NavText>
                </NavItem>
            )
        } else if (sandboxesState.error){
            return (
                <NavItem>
                    <NavText>Error!</NavText>
                </NavItem>
            )
        } else if (sandboxesState.sandboxes.length === 0){
            return (
                <NavItem>
                    <NavText>None</NavText>
                </NavItem>
            )
        } else {
            return sandboxesState.sandboxes.map(sandbox => {
                return (
                    <NavItem key={sandbox.id}
                             onClick={() => {addTab(sandbox)}}>
                        <NavText>{sandbox.name}</NavText>
                    </NavItem>
                )
            })
        }
    }

    return (
        <Fragment>
            <NavItemTitle>Sandboxes</NavItemTitle>
            {
                get_body()
            }
        </Fragment>
    )
}

export default Sandbox;