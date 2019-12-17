import React, { useEffect } from 'react';
import Tabs from '../components/Tabs';
import useSandboxes from '../utils/hooks/useSandboxes';

const Dashboard = () => {
    const { getSandboxes } = useSandboxes();

    useEffect(() => {

        getSandboxes()

    }, [])

    return (
        <div className='dashboard-wrap'>
            <Tabs />
            <p>Welcome to the dashboard!</p>
        </div>
    )
}

export default Dashboard;