import './App.scss';
import {AuthRouter } from './contexts/AuthContext.jsx';

function App() {
  return (
    <AuthRouter>
         {
          token ? <Chat /> : <Login />
         }
    </AuthRouter>
  );
}

export default App;
