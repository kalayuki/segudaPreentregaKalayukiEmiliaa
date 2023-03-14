import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = ({children}) => {
  return (
    <div className="navbar bg-base-100 bg-lime-600 ">
    <div className="flex-1">
      <a className="btn btn-ghost normal-case text-xl">Ne.mu</a>
      <div className='flex-initial w-64 flex flex-none  gap-3.5 self-center '>
        <Link to={'/'}>
        Home</Link>
        <Link to={'/category/DESAYUNOS_Y_MERIENDAS'}>
        Desayunos y meriendas</Link>
        <Link to={'/category/LECHES_VEGETALES'}>Leches vegetales</Link>
        <Link to={'/category/FRUTOS_SECOS'}>Frutos secos</Link>
        <Link to={'/category/LEGUMBRES_Y_SEMILLAS'}>LEGUMBRES Y SEMILLAS</Link>
        <Link to={'/category/MIX'}></Link>

      </div>
    </div>
    
    <div className="flex-none">
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle">
          <div className="indicator">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
            <span className="badge badge-sm indicator-item">11</span>
          </div>
        </label>
        <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
          <div className="card-body">
            <span className="font-bold text-lg">10 Items</span>
            <span className="text-info">Subtotal: $999</span>
            <div className="card-actions">
              <button className="btn btn-primary btn-block">View cart</button>
            </div>
          </div>
        </div>
      </div>
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img src=".../public/logo.png" />
          </div>
        </label>
        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
          <li>
            <a className="justify-between">
              Profile
              <span className="badge">New</span>
            </a>
          </li>
          <li><a>Settings</a></li>
          <li><a>Logout</a></li>
        </ul>
      </div>
    </div>
  </div>
  )
}

export default NavBar