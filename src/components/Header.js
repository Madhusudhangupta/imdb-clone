import Link from "next/link";
import MenuItem from "./MenuItem";
import { RiHomeSmileFill } from 'react-icons/ri'
import { RiInformationFill } from 'react-icons/ri'
import DarkModeSwitch from "./DarkModeSwitch";

export default function Header() {
  return (
    <div className="flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-5">
        <div className="flex">
            <MenuItem title="HOME" address="/" Icon={RiHomeSmileFill} />
            <MenuItem title="ABOUT" address="/about" Icon={RiInformationFill} />
        </div>
        <div className="flex items-center space-x-5">
            <DarkModeSwitch />
            <Link href="/">
                <h2 className="text-2xl">
                    <span className="font-bold bg-amber-500 py-1 px-2 rounded-lg mr-1">IMDB</span>
                    <span className="text-xl hidden sm:inline">Clone</span>
                </h2>
            </Link>
        </div>
    </div>
  ) 
}
