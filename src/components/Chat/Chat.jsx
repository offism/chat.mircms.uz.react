import React , {useEffect} from 'react'
import {useAuth} from '../../contexts/AuthContext.jsx'
import Login from '../Login/Login.jsx'
import {Container , ListGroup , ListGroupItem ,Row,Col , Card , CardText , CardTitle , CardBody , CardHeader , Form , Input , Button } from 'reactstrap'

export default function Chat(){

	const [token , setToken] = useAuth()

	if(!token){
		return <Login />
	}

	return ( 
		<Container className="text-center my-3">
		   <h1 className="mx-auto">Welcome Our Chat</h1> 
		   <Row>
		    <Col md={3}>
		     <h3>Members</h3>
		      <ListGroup>
		        <ListGroupItem className="my-2">Mirjalol</ListGroupItem>
		      </ListGroup>
		    </Col>
		    <Col md={9}>
		      <Form className="mb-2">
		      	<Input type="textarea" name="text" id="exampleText">
		      	</Input>
		      	<Button className="w-100 my-2">Send</Button>
		      </Form>
		      <ListGroup>
		       <ListGroupItem>
		        <Card className="text-start">
		         <Row>
		          <Col md={3}>
		            <CardHeader className="CardHeader h-100 border-bottom-0 d-flex align-items-center justify-content-center border-right">
		              <CardTitle className="m-0">Mirjalol</CardTitle>
		            </CardHeader>
		          </Col>
		          <Col md={9}>
		            <CardBody>
		              <CardText>Hello world</CardText> 	
		            </CardBody>
		          </Col>
		         </Row>
		        </Card>
		       </ListGroupItem>
		      </ListGroup>
		    </Col>
		  </Row>
		</Container> 
		)

}