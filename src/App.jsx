import './App.scss';
import {AuthRouter , useAuth } from './contexts/AuthContext.jsx';
import Chat from './components/Chat/Chat.jsx' 
import Login from './components/Login/Login.jsx' 

function App() {
  

  return (
    <AuthRouter>
           <Chat />
    </AuthRouter>
  );
}

export default App;
