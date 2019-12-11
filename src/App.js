import React, { useEffect, useContext } from "react";
import "./App.scss";
import Navbar from './components/Navbar';
import { useHistory } from 'react-router-dom';
import useAuth from './utils/hooks/useAuth';
import { AuthContext } from './utils/contexts/authContext';

const App = props => {
    const { loadUser } = useAuth();
    const history = useHistory();
    const [authState] = useContext(AuthContext);

    useEffect(() => {
        loadUser()
            .then(() => {
                history.push('/dashboard');
            })
            .catch(() => {
                history.push('/logged-out');
            })
    }, [])

    return (
        <div className="App">
            {/* Place here things that should exist in all screens that are logged in */}
            {
                authState.isLoggedIn &&
                <Navbar />
            }
            {props.children}
        </div>
    );
};

export default App;