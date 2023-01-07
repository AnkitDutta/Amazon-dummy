import React from 'react';
import Image from 'next/image';
import {
    MenuIcon,
    SearchIcon,
    ShoppingCartIcon,
} from "@heroicons/react/outline";
import { signIn, signOut, useSession } from "next-auth/react";
import {useRouter} from "next/router"
import { useSelector } from 'react-redux';
import { selectItems } from '../slices/basketSlice';


function Header() {
    const {data:session} = useSession();
    const router = useRouter();
    const items = useSelector(selectItems);

  return (
    <header>
        {/* Top */}
        <div className='flex items-center bg-amazon_blue p-1 flex-grow py-2'>
            <div className='mt-2 flex items-center flex-grow sm:flex-grow-0'>
                <Image 
                    onClick={()=> router.push('/')}
                    src='https://links.papareact.com/f90'
                    width={100}
                    height={40}
                    objectFit="contain"
                    className='cursor-pointer ml-2' 
                    
                    />

            </div>
            {/* Search */}
            <div className='hidden sm:flex items-center ml-4 h-9 rounded-md bg-yellow-400 hover:bg-yellow-500 flex-grow cursor-pointer'>
                <input 
                    className='p-2 h-full w-4 flex-grow flex-shrink rounded-l-md focus:outline-none px-4 ' 
                    type="text" 
                />
                <SearchIcon  className="h-12 p-4 " />
            </div>


            {/* Right */}
            <div className='text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap'>
                <div onClick={!session ? signIn : signOut } className='link'>
                    <p> 
                        {session ? `Hello, ${session.user.name}` : "Sign In"}
                    </p>
                    <p className='font-extrabold md:text-sm'>Account & Lists</p>
                </div>

                <div className=' link' onClick={() => session && router.push('/orders')}>
                    <p>Returns</p>
                    <p className='font-extrabold md:text-sm'>& Orders</p>
                </div>

                <div onClick={()=>router.push('/checkout')} className='relative link flex items-center'>
                    <span className='absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold'>{items.length}</span>
                    <ShoppingCartIcon className='h-8 md:h-10' />
                    <p className='hidden md:inline font-extrabold md:text-sm mt-2'>Basket</p>
                </div>
            </div>
        </div>
    {/* Bottom */}
        <div className='flex items-center space-x-4 p-2 pl-6 bg-amazon_blue-light text-white text-small'>
            <p className='link flex items-center'> 
                <MenuIcon className='h-6 mr-1'/>
                All
            </p>
            <p className='link'>Fashion</p>
            <p className='link'>Computers</p>
            <p className='link'>Personal Care</p>
            <p className='link'>Subscribe & Save</p>
            <p className='link hidden lg:inline-flex'>Gift Ideas</p>
            <p className='link hidden lg:inline-flex'>Buy Again</p>
            <p className='link hidden lg:inline-flex'>Today's Deals</p>
            <p className='link hidden lg:inline-flex'>Baby</p>
            <p className='link hidden lg:inline-flex'>Sports, Fitness & Outdoors</p>
        </div>
    </header>
  )
}

export default Header