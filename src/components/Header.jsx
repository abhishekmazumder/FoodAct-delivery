import React from 'react';
import Logo from '../assets/logo.png';
import Avatar from '../assets/avatar.png';

import { MdShoppingBasket } from 'react-icons/md';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { app } from '../firebase.config';

const Header = () => {
	const firebaseAuth = getAuth(app);
	const provider = new GoogleAuthProvider();
	const login = async () => {
		const response = await signInWithPopup(firebaseAuth, provider);
		console.log(response);
	};

	return (
		<header className="fixed z-50 w-screen p-6 px-16">
			{/* desktop && Tablet */}
			<div className="hidden md:flex w-full h-full items-center justify-between">
				<Link to={'/'} className="flex items-center gap-2">
					<img src={Logo} alt="logo" className="w-10 object-cover" />
					<p className="text-headingColor text-xl font-bold">FoodAct</p>
				</Link>

				<div className="flex items-center gap-8">
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
					<div className="relative">
						<motion.img
							whileTap={{ scale: 0.6 }}
							src={Avatar}
							alt="user profile"
							className="w-10 min-w-[40px] min-h-[40px] drop-shadow-xl cursor-pointer"
							onClick={login}
						/>
					</div>
				</div>
			</div>

			{/* mobile */}
			<div className="flex md:hidden w-full h-full"></div>
		</header>
	);
};

export default Header;
