import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'


function Header() {
  return (
    <header className= 'header'>
        <div className= 'logo'>
            <Link to = '/'>CarCollection</Link>
        </div>
        <ul>
            <li>
                <link to = '/login'>
                    <FaSignInAlt /> Login
                </link>
            </li>
            <li>
                <link to = '/register'>
                    <FaUser /> Register
                </link>
            </li>
        </ul>
    </header>
  )
}

export default Header