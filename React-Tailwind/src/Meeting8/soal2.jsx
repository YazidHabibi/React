import { useState } from 'react';

function LoginStatus() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
  
    const handleLogin = () => {
      setIsLoggedIn(true);
    };
  
    const handleLogout = () => {
      setIsLoggedIn(false);
    };
  
    return (
      <div>
        <h1>Status: {isLoggedIn ? 'Logged In' : 'Logged Out'}</h1>

        {isLoggedIn ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <button onClick={handleLogin}>Login</button>
        )}
      </div>
    );
  }

export default LoginStatus;

