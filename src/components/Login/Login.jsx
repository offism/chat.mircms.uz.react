import React , {useEffect , useState} from 'react'
import {useAuth} from '../../contexts/AuthContext.jsx'
import Chat from '../Chat/Chat.jsx'
import {Form , FormGroup , Label, Alert , Input , Button , FormText} from 'reactstrap'
import Data from '../../services/data.js'

export default function Login(){

	const [token , setToken] = useAuth()
	const [alert , setAlert] = useAuth(false)
    const [validUsername , setValidUsername] = useState(true)
    const [validPassword , setValidPassword] = useState(true)
    const [username , setUsername] = useState("")
    const [password , setPassword] = useState("")
    const [page , setPage] = useState("login")

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

    async function handleSubmit(e){
     e.preventDefault()
     if(page == "sign_up"){
     	let res = await Data.SignUpFetch(username , password)
     	console.log(res)
        if(res.ok){
        	setToken(res.token)
        	setAlert(false)
        } else{
        	setAlert("Username Already Exists or Password is incorrect")
        	}
        }
     }

	return(
	    <section className="vh-100 d-flex align-items-center flex-column justify-content-center">
	    <div className="container">
		 <h1 className="text-center">
		    { page == "login" ? "Login" : "Sign Up"}
		 </h1>
		 <Form onSubmit={ e=> handleSubmit(e)} className="mt-4 w-100">
		   {alert && <Alert className="danger">{alert}</Alert>}
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
		  <Button
		   className="mt-3 w-100"
		    size="lg"
		    disabled={!(validPassword && validUsername)}
		    >
		    { page == "login" ? "Login" : "Sign Up"}
		   </Button>
		    <Button
		   className="mt-3 w-100"
		    size="lg"
		    type="button" 
		    onClick= { (e) => setPage(page == "login" ? 'sign_up' : "login") }
		    >
		    { page != "login" ? "Login" : "Sign Up"}
		    </Button>
		 </Form>
		 </div>
		</section> 
		)

}