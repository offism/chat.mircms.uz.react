import React , {useEffect , useState} from 'react'
import {useAuth} from '../../contexts/AuthContext.jsx'
import Chat from '../Chat/Chat.jsx'
import {Form , FormGroup , Label , Input , Button , FormText} from 'reactstrap'

export default function Login(){

	const [token , setToken] = useAuth()
    const [validUsername , setValidUsername] = useState(true)
    const [validPassword , setValidPassword] = useState(true)
    const [username , setUsername] = useState("")
    const [password , setPassword] = useState("")

    useEffect(()=>{
    	if(username.length != 0 && username.match(/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/)){
            setValidUsername(true) 
    	} else{
            setValidUsername(false) 
    	}
    } , [username])

    useEffect(()=>{
    	if(password.length != 0 && password.match(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)){
            setValidPassword(true) 
    	} else{
            setValidPassword(false) 
    	}
    } , [password])

	if(token){
		return <Chat />
	}

	return(
	    <section className="vh-100 d-flex align-items-center flex-column justify-content-center">
	    <div className="container">
		 <h1 className="text-center">Login</h1>
		 <Form className="mt-4 w-100">
		  <FormGroup>
		    <Label for="username"></Label>
		    <Input bsSize="lg" type="username" name="username" id="username" autoComplete="off" placeholder="Username" onChange={ e =>setUsername(e.target.value) } onKeyUp={ e =>setUsername(e.target.value) } invalid={!validUsername} />
		     { !validUsername && <FormText color="muted">
		    Username is 8-20 characters long
          </FormText>}
		  </FormGroup>
		  <FormGroup>
		    <Label for="password"></Label>
		    <Input bsSize="lg" type="password" name="password" id="password" autoComplete="off" placeholder="Password" onChange={ e =>setPassword(e.target.value) } onKeyUp={ e =>setPassword(e.target.value) } invalid={!validPassword} />
		    { !validPassword && <FormText color="muted">
            At least,one upper case English letter,one lower case English letter,one digit,one special character,Minimum eight in length
          </FormText>}
		  </FormGroup>
		  <Button className="mt-3 w-100" size="lg">Login</Button>
		 </Form>
		 </div>
		</section> 
		)

}