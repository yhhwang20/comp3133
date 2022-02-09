import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { auth } from '../actions/userActions';

export default function (SpecificComponent,option,adminRoute = null){
    function AuthenticationCheck(props){
        const dispatch = useDispatch();
         useEffect(() => {
            dispatch(auth()).then(response => {
                console.log(response)
                if(!response.payload.isAuth){
                    if(option){
                        props.history.push('/login')
                    }
                }else {
                    if(adminRoute && !response.payload.isAdmin){
                        props.history.push('/dashboard')
                    }else{
                        if(option === false)
                        props.history.push('/dashboard')
                    }
                }
            })
         },[])
         return (
             <SpecificComponent />
         )
    }
    return AuthenticationCheck
}