import React from "react";
import { useNavigate  } from 'react-router-dom';
function Dashboard({ setLoggedIn }) {
    const navigate = useNavigate();
    const logouthandle = () => {
        setLoggedIn(false)
        navigate('/')
    }
    return (
        <div id="dashboardPage">
            <h1 id="dashboard-tag"> Welcome to Dashboard</h1>
            <button id="dashboard-logout" onClick={logouthandle}>Log out </button>
        </div>
    )

}
export default Dashboard;