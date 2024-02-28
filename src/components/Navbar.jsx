import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className="w-[100%] h-[60px] fixed top-0 left-0 flex flex-row text-center items-center justify-evenly bg-zinc-400">
        <div>
          <h1>logo</h1>
        </div>
        <ul className=" w-[200px] flex flex-row  text-center items-center justify-evenly">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Navbar
