import React , {useEffect} from 'react'
import {useAuth} from '../../contexts/AuthContext.jsx'
import Login from '../Login/Login.jsx'

export default function Chat(){

    const [token , setToken] = useAuth()

    if(!token){
    	return <Login />
    }

	return ( 
		     <h1 onClick={ e => setToken() }>Chat</h1> 
		)

}