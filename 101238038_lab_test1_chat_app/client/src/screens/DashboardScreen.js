import React from 'react'
import { withRouter } from 'react-router-dom';
import Header from '../components/Header';
import './style.css';

const DashboardScreen = () => {
    
    return (
        <div class="join-container">
			<Header/>
			<a href="http://localhost:5000">
				<h1 style={{
            		display: 'flex', justifyContent: 'center', alignItems: 'center'
            		, width: '100%', height: '50vh'
            	}}>
				Click to Join Chat room
				</h1>
			</a>
		</div>
    )
}

export default withRouter(DashboardScreen)
