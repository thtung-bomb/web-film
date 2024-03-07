import React, { useState } from 'react'
import logo from '../assets/Images/logo.png';
import { HiHome, HiStar } from "react-icons/hi";
import { HiDotsVertical } from "react-icons/hi";
import { HiMiniPhone, HiMagnifyingGlass, HiPlayCircle, HiTv } from "react-icons/hi2";
import { HiUserCircle } from "react-icons/hi";
import HeaderItem from './HeaderItem';
import { Link } from "react-router-dom";
function Header() {

    const [toggle, setToggle] = useState(false);

    const toggleMenu = () => {
        setToggle(!toggle);
    };

    const menu = [
        {
            name: 'HOME',
            icon: HiHome
        },
        {
            name: 'ORIGINALS',
            icon: HiStar
        },
        {
            name: 'MOVIES',
            icon: HiPlayCircle
        },
        {
            name: 'CONTACT',
            icon: HiMiniPhone
        }
    ]

    return (
        <div className={`flex justify-between p-5`}>
            <div className='flex gap-8'>
                <img src={logo} className='w-[80px] md:w-[115px] object-cover' />
                <div className='hidden md:flex gap-8 text-center'>
                    {menu.map((item, index) => (
                        <HeaderItem key={index} name={item.name} Icon={item.icon} />
                    ))}
                </div>
            </div>
            <div>
                <div className='flex md:hidden gap-5'>
                    {menu.map((item, index) => index < 3 && (
                        <HeaderItem key={index} name={''} Icon={item.icon} />
                    ))}
                    <div className='md:hidden' onClick={() => toggleMenu()}>
                        <HeaderItem name={''} Icon={HiDotsVertical} />
                        {toggle && (
                            <div className='absolute mt-3 bg-[#121212] border-[1px] p-3 px-5 py-4'>
                                {menu.map((item, index) => index > 2 && (
                                    <HeaderItem key={index} name={item.name} Icon={item.icon} />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className='text-white flex gap-3 text-[15px] font-semibold cursor-pointer 
            hover:underline underline-offset-8 mb-2'>
                <HiMagnifyingGlass className='h-6 w-6' />
                <input
                    type='text'
                    name='search'
                    placeholder='Search Films'
                    className='border-[1px] rounded-full text-white text-left px-3 py-1'
                />
            </div>
            <Link to='/login' className='text-white flex gap-3 text-[15px] font-semibold cursor-pointer 
            hover:underline underline-offset-8 mb-2'>
                <HiUserCircle className="h-6 w-6" />
                <h2 className='uppercase'>login</h2>
            </Link>

        </div>
    )
}

export default Header