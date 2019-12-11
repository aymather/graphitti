import React, { useState } from "react";
import { Container, Form } from 'react-bootstrap';
import useAuth from '../../../utils/hooks/useAuth';

const Index = props => {

	const [state, setState] = useState({
		email: "",
		password: "",
		password1: ""
	})

	const { signupUser } = useAuth();

	const handleSignup = (e) => {
		e.preventDefault();
		signupUser({
			email: state.email,
			password: state.password,
			password1: state.password1
		});
	}

	const handleChange = (e) => {
		setState({
			...state,
			[e.target.name]: e.target.value
		});
	}

    return (
		<Container className="login-form-wrap fade-in d-flex flex-column w-50 mt-5 min-width-350">
			<Form onSubmit={handleSignup}>
				<Form.Group>
					<Form.Control type="email" 
								  name="email" 
								  onChange={handleChange}
								  className='form-input'
								  placeholder='username'
								/>
				</Form.Group>
				<Form.Group>
					<Form.Control type="password" 
								  name="password" 
								  onChange={handleChange}
								  className='form-input'
								  placeholder='password'
								/>
				</Form.Group>
				<Form.Group>
					<Form.Control type="password" 
								  name="password1" 
								  onChange={handleChange}
								  className='form-input'
								  placeholder='confirm password'
								/>
				</Form.Group>
				<button className='submit-btn my-3' type="submit">Sign Up</button>
			</Form>
			<div>
				<p onClick={props.toggle} className='d-inline-block mx-auto pointer highlight highlight-hover'>Log In</p>
			</div>
		</Container>
    );
};

export default Index;
