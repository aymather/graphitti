import React from 'react';
import axios from 'axios';

const { ipcRenderer } = window.electron;

// This function is the callback when we get auth-success event
ipcRenderer.on('auth-success', (event, tokens) => {
    var options = {
        headers: {
            ['x-auth-token']: window.localStorage.getItem('token')
        },
        data: {
            access_token: tokens
        },
        method: 'POST',
        url: 'http://lazerbubbles-api.herokuapp.com/google/redirect_uri'
    }

    axios(options)
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        })
})

const Index = () => {

    const auth_start = () => {
        ipcRenderer.send('auth-start');
    }

    return ( <p className='small' onClick={auth_start} >Connect Google</p> )
}

export default Index;