import React, { Fragment } from 'react';
import NavItem from './NavItem';
import NavText from './NavText';
import NavItemTitle from './NavItemTitle';

const Chat = () => {
    return (
        <Fragment>
            <NavItemTitle>Friends</NavItemTitle>
            <NavItem>
                <NavText>Marlo Carreon</NavText>
            </NavItem>
            <NavItem>
                <NavText>Jess Chan</NavText>
            </NavItem>
            <NavItem>
                <NavText>Jen Park</NavText>
            </NavItem>
        </Fragment>
    )
}

export default Chat;