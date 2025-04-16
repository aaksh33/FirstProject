import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet'

const navlinks = [
    { name: 'Home', link: '#home' },
    { name: 'About', link: '#about' },
    { name: 'Features', link: '#features' },
    { name: 'Getting Started', link: '#getting-started' }
];

const Navbar = () => {


    return (
        <>
            <nav className='flex justify-between items-center py-2 px-5 sm:px-8 md:px-12 lg:px-18 w-full'>
                <div className='flex items-center gap-3'>
                    <Image height={200} width={200} alt='logo' className='' src="/logo-ltr-dark.png" />
                    {/* <h1 className='text-2xl text-green-800'>Mentor Mind</h1> */}
                </div>
                <div className='hidden lg:flex gap-10 mr-20'>
                    <Link href={"#home"}>Home</Link>
                    <Link href="#about">About</Link>
                    <Link href="#features">Features</Link>
                    <Link href="#getting-started">Getting Started</Link>
                </div>
                <div className='hidden lg:flex space-x-2'>
                    <Button className="bg-pink-100 text-black border-1  border-pink-400 hover:bg-pink-500">Login</Button>
                    <Button className="bg-pink-50 text-black border-1 border-pink-400 hover:bg-pink-500">SignUp</Button>
                </div>
                <div className='lg:hidden'>
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="outline" className="flex flex-col justify-center items-end w-9 h-9 gap-1 p-2">
                                <span className="block w-4 h-0.5 bg-black"></span>
                                <span className="block w-2 h-0.5 bg-black"></span>
                                <span className="block w-3 h-0.5 bg-black"></span>
                            </Button>
                        </SheetTrigger>

                        <SheetContent>
                            <SheetHeader>
                                <SheetTitle>Responsive Nav</SheetTitle>
                            </SheetHeader>
                            {navlinks.map((item, index) => {
                                return (
                                    <div key={index} className='flex flex-col px-4 gap-2'>
                                        <Link href={item.link} className='border px-2 py-1 rounded-sm'>{item.name}</Link>
                                    </div>
                                )
                            })}
                            <SheetFooter>
                                <Button className="bg-pink-100 text-black border-1  border-pink-400 hover:bg-pink-500">Login</Button>
                                <Button className="bg-pink-50 text-black border-1 border-pink-400 hover:bg-pink-500">SignUp</Button>
                            </SheetFooter>
                        </SheetContent>
                    </Sheet>
                </div>


            </nav>
        </>
    )
}

export default Navbar
