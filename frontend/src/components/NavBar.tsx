import { Link } from "react-router-dom"
import { Avatar } from "./BlogCard"

const NavBar = ({name}:{name:string}) => {
  return (
    <div className="border-b flex justify-between px-12 py-1">
        <Link to={'/blogs'}>
          <div className="font-semibold pt-2 font-mono text-4xl">
              Verse
          </div>
        </Link>
        <div className="flex">
          <Link to={'/publish'}>
            <div className="flex flex-col justify-center pt-2 mr-2">
              <Button/>
            </div>
          </Link>
          <div className="flex flex-col justify-center">
            <Avatar name={name} size="big" /> 
          </div>
        </div>
    </div>
  )
}

function Button(){
  return( 
  <div>
    <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2  ">
      New Blog
    </button>

  </div>)
}

export default NavBar