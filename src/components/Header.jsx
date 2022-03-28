import React from 'react';
import Logo from '../assets/logo.png';
import Avatar from "../assets/avatar.png"

import {MdShoppingBasket} from "react-icons/md"


const Header = () => {
	return (
		<header className="fixed z-50 w-screen p-6 px-16">
			{/* desktop && Tablet */}
			<div className="hidden md:flex w-full h-full items-center justify-between">
				<div className="flex items-center gap-2">
					<img src={Logo} alt="logo" className="w-10 object-cover" />
					<p className="text-headingColor text-xl font-bold">FoodAct</p>
				</div>

				<div className='flex items-center gap-8'>
					<ul className="flex items-center gap-8">
						<li className="text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out">
							Home
						</li>
						<li className="text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out">
							Menu
						</li>
						<li className="text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out">
							About Us
						</li>
						<li className="text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out">
							Service
						</li>
					</ul>

          {/* cart div */}
					<div className="relative flex items-center justify-center ml-8">
						<MdShoppingBasket className="text-textColor text-3xl cursor-pointer" />
						<div className=" absolute w-5 h-5 bg-cartNumBg rounded-full flex items-center justify-center top-0 -right-2">
							<p className="text-xs text-white font-semibold">6</p>
						</div>
					</div>

          {/* avatar */}
          <img src={Avatar} alt="user profile" className='w-10 min-w-[40px] min-h-[40px] drop-shadow-xl'/>

				</div>
			</div>

			{/* mobile */}
			<div className="flex md:hidden w-full h-full"></div>
		</header>
	);
};

export default Header;
