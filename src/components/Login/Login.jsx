import React , {useEffect} from 'react'
import {useAuth} from '../../contexts/AuthContext.jsx'
import Chat from '../Chat/Chat.jsx'
import {Form , FormGroup , Label , Input , Button} from 'reactstrap'

export default function Login(){

	const [token , setToken] = useAuth()

	if(token){
		return <Chat />
	}

	return(
	    <section className="vh-100 d-flex align-items-center flex-column justify-content-center">
		 <h1>Login</h1>
		 <Form className="mt-4">
		  <FormGroup>
		    <Label for="username"></Label>
		    <Input bsSize="lg" type="username" name="username" id="username" autoComplete="off" placeholder="Username" />
		  </FormGroup>
		  <FormGroup>
		    <Label for="password"></Label>
		    <Input bsSize="lg" type="password" name="password" id="password" autoComplete="off" placeholder="Password" />
		  </FormGroup>
		  <Button className="mt-3 w-100" size="lg">Login</Button>
		 </Form>
		</section> 
		)

}