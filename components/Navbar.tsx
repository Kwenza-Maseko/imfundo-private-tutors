'use client'
import Image from "next/image"
import Link from "next/link"
import { navlinks, socials } from "@/constants"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { MapPinIcon } from "lucide-react";
import FindUs from "./FindUs"

const Navbar = () => {
    const [dropdown, setDropdown] = useState(false);
    const [showMap, setShowMap] = useState(false);
    const [showTopBar, setShowTopBar] = useState(true);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setShowTopBar(false);
            } else {
                setShowTopBar(true);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div>

            <div className="fixed w-full top-0 bg-[#150233] z-40 text-white">
                {showTopBar &&
                    <>
                        <div className='flex justify-between p-4 border-b-[0.2px] border-[#715b969f]'>
                            <div className='flex gap-2 items-center text-zinc-400' onClick={() => setShowMap(true)}>
                                <MapPinIcon size={20} />
                                <p className='capitalize text-sm cursor-pointer'>find us</p>
                            </div>
                            <div className="flex flex-col gap-1 md:hidden text-sm">
                                <p className="capitalize">
                                    Click:
                                    <Link href="tel:+27698379658" className="font-bold pl-2">
                                        +27 69 837 9658
                                    </Link>
                                </p>
                            </div>

                            <div className="hidden md:flex gap-8 items-center text-zinc-400">
                                {socials.map((social) => (
                                    <Link
                                        key={social.id}
                                        href={`${social.link}`}
                                        className='font-bold capitalize'
                                    >
                                        {social.name}
                                    </Link>
                                ))}

                            </div>

                        </div>
                        <nav className='flex justify-between item-center p-4'>
                            <Link href={"/"}>
                                <Image
                                    src={"/assets/imfundoLogo.png"}
                                    width={70}
                                    height={70}
                                    alt="logo"
                                    className="invert w-[50px] md:w-[70px]"
                                />
                            </Link>
                            <div className="text-center flex items-center flex-col md:block">
                                <p className="pacifico-regular md:text-2xl text-md md:tracking-[2px]">Imfundo Private Tutors</p>
                                <p className="text-xs capitalize text-zinc-300">combination of intelligence</p>
                            </div>
                            <div className="hidden md:flex flex-col gap-1">
                                <p className="capitalize">
                                    <Link href="tel:+27698379658" className="font-bold text-lg">+27 69 837 9658</Link>
                                </p>
                                <p className="capitalize text-xs">get in touch with us</p>
                            </div>
                        </nav>
                    </>
                }

                <div>
                    <div className="gap-8 px-4 items-center md:flex hidden">
                        {navlinks.map((links) => (
                            <Link
                                key={links.id}
                                href={`${links.link}`}
                                className={`capitalize font-bold text-[11pt] hover:border-b-2 border-purple-600 p-4 ${pathname === links.link && "text-purple-600 border-b-2 "}`}
                            >
                                {links.name}
                            </Link>
                        ))}

                    </div>

                    <div className="md:hidden">
                        <div className="flex flex-col gap-1 p-2 rounded border border-zinc-400 w-fit m-4 cursor-pointer"
                            onClick={() => setDropdown((prev) => !prev)}
                        >
                            <div className="h-[2px] w-[20px] rounded bg-zinc-400" />
                            <div className="h-[2px] w-[10px] rounded bg-zinc-400" />
                            <div className="h-[2px] w-[20px] rounded bg-zinc-400" />
                        </div>

                        {dropdown && (
                            <div className=" gap-4 my-4 flex flex-col">
                                {navlinks.map((links) => (
                                    <Link
                                        key={links.id}
                                        href={`${links.link}`}
                                        className={`capitalize px-4 font-bold text-[11pt] hover:text-purple-600 ${pathname === links.link && "text-purple-600"}`}
                                    >
                                        {links.name}
                                    </Link>
                                ))}
                            </div>
                        )}

                    </div>

                </div>

            </div>
            {showMap && (
                <div className='fixed w-full left-0 top-0 bottom-0 bg-[#eeeeee] z-[1000]'>
                    <div className='flex justify-between p-4'>
                        <div className="text-center flex items-center flex-col md:block">
                            <p className="pacifico-regular md:text-2xl text-md md:tracking-[2px]">Imfundo Private Tutors</p>
                            <p className="text-xs capitalize text-zinc-600">combination of intelligence</p>
                        </div>
                        <div className='py-2 px-4 bg-black text-white text-sm font-bold rounded-md cursor-pointer flex items-center' onClick={() => setShowMap(false)}>Close Map

                        </div>
                    </div>
                    <FindUs />
                </div>)
            }

        </div>
    )
}

export default Navbar