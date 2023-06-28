import React from 'react'
import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext';

function Navbar() {
    const { logout } = useLogout();
    const { user } = useAuthContext()

    function handleClick() {
        logout();
    }

    return (
        <nav>
            <Link to={'/'}>Secret</Link>
            {user && (
                <div>
                    <span>{user.email}</span>
                    <button onClick={handleClick}>Log Out</button>
                </div>
            )}
            {!user && (
                <div>
                    <Link to={'/login'}>Login</Link>
                    <Link to={'/signup'}>Signup</Link>
                </div>
            )}
        </nav>
    )
}

export default Navbar