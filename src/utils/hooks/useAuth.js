import { useContext } from 'react';
import { AuthContext } from '../contexts/authContext';
import api_routes from '../../config/api';
import axios from 'axios';

const useAuth = () => {
	const [authState, setAuthState] = useContext(AuthContext);

	const loadUser = () => {
		return new Promise((resolve, reject) => {
			const userToken = window.localStorage.getItem('token');
			axios.get(api_routes.load_user, {
				headers: {
					['x-auth-token']: userToken
				}
			})
			.then(res => {
				const { email, id, google_api } = res.data;
				setAuthState({
					...authState,
					email,
					id,
					google_api,
					isLoggedIn: true
				})
				resolve();
			})
			.catch(err => {
				window.localStorage.removeItem('token');
				console.log(err);
				reject(err);
			})
		})
	}

    const loginUser = user => {
        return new Promise((resolve, reject) => {
			axios.post(api_routes.login, {
				email: user.email,
				password: user.password
			})
			.then(res => {
				window.localStorage.setItem('token', res.data.token);
				setAuthState({
					...authState,
					email: res.data.user.email,
					id: res.data.user.id,
					isLoggedIn: true
				})
				resolve();
			})
			.catch(err => {
				console.error(err);
				reject(err);
			});
		})
    }

    const signupUser = user => {
        axios.post("https://lazerbubbles-api.herokuapp.com/create-account", {
			email: user.email,
			password: user.password,
			password1: user.password1
		})
		.then(res => {
			loginUser(user);
		})
		.catch(err => {
			console.error(err);
		})
    }

    const logoutUser = () => {
		window.localStorage.removeItem('token');
		setAuthState({
			...authState,
			email: '',
			id: '',
			isLoggedIn: false
		})
    }

    return {
        signupUser,
        logoutUser, 
		loginUser,
		loadUser,
        isLoggedIn: authState.isLoggedIn,
    };
};

export default useAuth;