import React from 'react'
import { withRouter } from 'react-router-dom';
import Headerr from '../components/Headerr';
 
function LandingScreen() {
    
    return (
        <div >
            <Headerr/>
            <h1 style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center'
            , width: '100%', height: '50vh'
            }}>Chatting APP Landing Page</h1>
        </div>
        
    )
}
export default withRouter(LandingScreen)
