import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";

export default function Header() {
  const {userInfo, setUserInfo} = useContext(UserContext);

  useEffect(() => {
    fetch('http://localhost:3005/profile', {
      credentials: 'include',
    }).then(response => {
      if (response.ok) {
        response.json().then(userInfo => {
          setUserInfo(userInfo)
        });
      } else {
        
      }
    });
  }, []);

  function logout() {
    fetch('http://localhost:3005/logout', {
      credentials: 'include',
      method: 'POST',
    });
    setUserInfo(null)
  }

  const username = userInfo?.username;

  return (
    <header>
      <Link to="/" className="logo">My Blog</Link>
      <nav>
        {username ? (
          <>
            <Link to="/create">Create new post</Link>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="logo">Login</Link>
            <Link to="/register" className="logo">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
}
