import { useState, useContext } from 'react';
import axios from 'axios';
import api_routes from '../../config/api';
import { SandboxesContext } from '../contexts/sandboxesContext';


const useSandboxes = () => {
    const [sandboxesState, setSandboxesState] = useContext(SandboxesContext);

    const [options] = useState({
		headers: {
			['x-auth-token']: window.localStorage.getItem('token')
		}
	})

    const getSandboxes = () => {
        setSandboxesState({
            ...sandboxesState,
            isLoading: true
        })

        var reqOptions = {
            ...options,
            method: 'GET',
            url: api_routes.sandboxes
        }

        axios(reqOptions)
            .then(res => {
                setSandboxesState({
                    ...sandboxesState,
                    isLoading: false,
                    error: null,
                    sandboxes: res.data
                })
            })
            .catch(err => {
                setSandboxesState({
                    ...sandboxesState,
                    error: err,
                    sandboxes: [],
                    isLoading: false
                })
            })
    }

    return {
        getSandboxes
    }
}

export default useSandboxes;