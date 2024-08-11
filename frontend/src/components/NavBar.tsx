import { Link, useNavigate } from "react-router-dom"
import { Avatar } from "./BlogCard"
import { useState } from "react"

const NavBar = ({name}:{name:string}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate('/signup');
  }

  return (
    <nav className="border-b px-4 sm:px-6 lg:px-12 py-2">
      <div className="flex justify-between items-center">
        <Link to={'/blogs'}>
          <div className="font-semibold font-mono text-2xl sm:text-4xl">
            Verse
          </div>
        </Link>
        <div className="hidden sm:flex items-center space-x-4">
          <Link to={'/publish'}>
            <Button />
          </Link>
          <Avatar name={name} size="big" />
          <button
            onClick={handleLogout}
            className="text-gray-600 hover:text-gray-800"
            title="Logout"
          >
            <LogoutIcon />
          </button>
        </div>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="sm:hidden text-gray-500 hover:text-gray-700"
        >
          <MenuIcon />
        </button>
      </div>
      {isMenuOpen && (
        <div className="sm:hidden mt-4 space-y-2 pb-2">
          <Link to={'/publish'} className="block">
            <Button />
          </Link>
          <div className="flex items-center justify-between mt-2">
            <div className="flex items-center">
              <Avatar name={name} size="big" />
              <span className="ml-2 text-gray-700">{name}</span>
            </div>
            <button
              onClick={handleLogout}
              className="text-gray-600 hover:text-gray-800 p-2"
              title="Logout"
            >
              <LogoutIcon />
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

function Button(){
  return (
    <button type="button" className="w-full sm:w-auto text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center">
      New Blog
    </button>
  )
}

function LogoutIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
    </svg>
  )
}

function MenuIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  )
}

export default NavBar