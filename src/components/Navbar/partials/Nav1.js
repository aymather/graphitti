import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud, faCommentDots, faCodeBranch, faChartArea } from '@fortawesome/free-solid-svg-icons';
import { CloudUpload } from '../../svg';
import LogAllContexts from '../../Debugger/LogAllContexts';

const Nav1 = ({ toggle_nav }) => {
    return (
        <div className='navbar-1-wrap'>
            <div onClick={() => toggle_nav('upload')} className='navbar-1-item'>
                <CloudUpload icon={faCloud} color='#ccc' />
            </div>
            <div onClick={() => toggle_nav('chat')} className='navbar-1-item'>
                <FontAwesomeIcon icon={faCommentDots} color='#ccc' />
            </div>
            <div onClick={() => toggle_nav('dialogue')} className='navbar-1-item'>
                <FontAwesomeIcon icon={faCodeBranch} color='#ccc' />
            </div>
            <div onClick={() => toggle_nav('sandbox')} className='navbar-1-item'>
                <FontAwesomeIcon icon={faChartArea} color='#ccc' />
            </div>
            <LogAllContexts />
        </div>
    )
}

export default Nav1;