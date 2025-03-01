import Link from 'next/link'
import { MapPinIcon } from "lucide-react";
import { socials } from '@/constants';

const TopBar = () => {
    return (
            <div className='flex justify-between p-4 border-b-[0.2px] border-[#715b969f]'>
                <div className='flex gap-2 items-center text-zinc-400'>
                    <MapPinIcon size={20} />
                    <p className='capitalize text-sm cursor-pointer'>find us</p>
                </div>
                <div className="flex flex-col gap-1 md:hidden  text-sm">
                    <p className="capitalize">hotline: <span className="font-bold">+27 69 837 9658</span>
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
    )
}

export default TopBar