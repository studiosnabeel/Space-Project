import React from 'react'
import { NavLink } from 'react-router-dom'
import PlanetLogo from '../Assets/planet.png'


const Header = () => {
	return (
		
			<header className=' flex justify-between items-center p-2 px-6 md:px-12 m-auto'>
			
				<div className='flex justify-between items-center m-auto md:m-0'>
					 <img className='w-14 h-14' src={PlanetLogo} alt="Planet Logo" /> 
					 <h2 className='font-bold text-xl md:text-2xl pl-4 '>Space Travelers' Hub</h2> </div>
				
				<nav className='hidden md:flex justify-between text-lg items-center text-sky-600 w-[400px]'>
					<NavLink className={({isActive})=> isActive ? "underline underline-offset-2" : undefined} to='/rockets'>Rockets</NavLink>
					<NavLink className={({isActive})=> isActive ? "underline underline-offset-2" : undefined} to='/dragons'>Dragons</NavLink>
					<NavLink className={({isActive})=> isActive ? "underline underline-offset-2" : undefined} to='/missions'>Missions</NavLink>
					<div className='w-0.5 h-4 bg-black'></div>
					<NavLink className={({isActive})=> isActive ? "underline underline-offset-2" : undefined} to='/profile'>My Profile</NavLink> 
				</nav>
			
			</header>	
	
	)
}

export default Header
