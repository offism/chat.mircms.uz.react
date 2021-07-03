import React , {useEffect} from 'react'
const AuthContext = React.createContext()

function AuthRouter ({children}){

  const [token , setToken] = React.useState(window.localStorage.getItem('token'))


  useEffect(()=>{
  	if(token) {
  		window.localStorage.setItem('token' , token)
  	} else {
  		window.localStorage.removeItem('token')
  	}
  }, [token])

	return (
      <AuthContext.Provider value={{token , setToken}}>
      	<AuthContext.Consumer>
      		{ () => children }
      	</AuthContext.Consumer>
      </AuthContext.Provider>
		)
}


function useAuth(){
	const {token , setToken} = React.useContext(AuthContext)
	return [token , setToken]
}

export   {
	AuthContext , AuthRouter , useAuth
}