import React from 'react'
const AuthContext = React.createContext()

function AuthRouter ({children}){

  const [token , setToken] = React.useState(window.localStorage.getItem('token'))

	return (
      <AuthContext.Provider value={{token , setToken}}>
      	<AuthContext.Consumer>
      		{()=>{ children }}
      	</AuthContext.Consumer>
      </AuthContext.Provider>
		)
}


function useAuth(){
	const {token , setToken} = React.useContext(AuthContext)
	return [token , setToken]
}

export default = {
	AuthContext , AuthRouter , useAuth
}