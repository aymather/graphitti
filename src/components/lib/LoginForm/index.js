import React, { useState } from "react";
import { Container, Form } from 'react-bootstrap';
import useAuth from '../../../utils/hooks/useAuth';
import { useHistory } from 'react-router-dom';

const Index = props => {

	const [state, setState] = useState({
		email: "",
		password: ""
	});

	const { loginUser } = useAuth();
	const history = useHistory();

	const handleLogin = (e) => {
		e.preventDefault();
		loginUser({
			email: state.email,
			password: state.password
		})
		.then(() => {
			history.push('/dashboard');
		})
		.catch(() => {
			history.push('/logged-out', { msg: "Invalid credentials" });
		})
	}

	const handleChange = (e) => {
		setState({
			...state,
			[e.target.name]: e.target.value
		});
	}

    return (
        <Container className="login-form-wrap d-flex flex-column w-50 mt-5 min-width-350">
			<Form onSubmit={handleLogin}>
				<Form.Group className='my-3'>
					<Form.Control placeholder='username' 
								  type="email" 
								  name="email" 
								  onChange={handleChange}
								  className='form-input fade-in'
								/>
				</Form.Group>
				<Form.Group className='my-3'>
					<Form.Control placeholder='password' 
								  type="password" 
								  name="password" 
								  onChange={handleChange}
								  className='form-input fade-in'
								/>
				</Form.Group>
				<button className='submit-btn my-3 fade-in' type="submit">Login</button>
			</Form>
			<div className='mt-3'>
				<p onClick={props.toggle} className='d-inline-block mx-auto pointer highlight highlight-hover'>Sign Up</p>
			</div>
        </Container>
    );
};

export default Index;
