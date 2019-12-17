import React from 'react';
import Upload from './Upload';
import Chat from './Chat';
import Dialogue from './Dialogue';
import Sandbox from './Sandbox';

const Nav2 = props => {

    const get_body = () => {
        switch(props.nav){
            case 'upload':
                return <Upload />
            case 'chat':
                return <Chat />
            case 'dialogue':
                return <Dialogue />
            case 'sandbox':
                return <Sandbox />
            default:
                return null;
        }
    }

    return (
        <div className='navbar-2-wrap'>
            {
                get_body()
            }
        </div>
    )
}

export default Nav2;