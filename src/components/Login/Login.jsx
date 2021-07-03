import React , {useEffect} from 'react'
import {useAuth} from '../../contexts/AuthContext.jsx'
import Chat from '../Chat/Chat.jsx'

export default function Login(){

    const [token , setToken] = useAuth()

    if(token){
    	return <Chat />
    }

	return( <h1 onClick={ e=> setToken("abc")}>Login</h1> )

}