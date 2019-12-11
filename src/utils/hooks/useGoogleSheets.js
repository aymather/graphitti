import { useContext, useState } from 'react';
import { GoogleSheetsContext } from '../contexts/googleSheetsContext';
import axios from 'axios';

const useGoogleSheets = () => {
	const [sheetsState, setSheetsState] = useContext(GoogleSheetsContext);
	const [options, setOptions] = useState({
		headers: {
			['x-auth-token']: window.localStorage.getItem('token')
		}
	})

	const getSheets = () => {
		axios.get('https://lazerbubbles-api.herokuapp.com/google/sheets', options)
			.then(res => {
				setSheetsState({
					...sheetsState,
					sheets: res.data.files,
					isLoading: false,
					isConnected: true
				})
			})
			.catch(err => {
				console.log(err);
				setSheetsState({
					...sheetsState,
					isLoading: false
				})
			})
	}

	const getSheet = inputs => {
		console.log('Loading sheet with name: ' + inputs.sheet_name);
		return new Promise((resolve, reject) => {
			const reqOptions = {
				...options,
				params: {
					...inputs
				}
			}
			axios.get('https://lazerbubbles-api.herokuapp.com/google/sheet', reqOptions)
				.then(res => {
					resolve(res.data);
				})
				.catch(err => {
					console.log(err);
					reject(err);
				})
		})
	}

	const getSheetDetails = id => {
		return new Promise((resolve, reject) => {
			console.log(`Getting sheet (${id}) details...`);
			const reqOptions = {
				...options,
				params: { id }
			}

			axios.get('https://lazerbubbles-api.herokuapp.com/google/sheet-details', reqOptions)
				.then(res => {
					resolve(res.data.data.sheets);
				})
				.catch(err => {
					console.log(err);
					reject(err);
				})
		})
	}

    return {
		getSheets,
		getSheet,
		getSheetDetails
    };
};

export default useGoogleSheets;