'use client'
import Image from "next/image";
import { useEffect, useState} from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import Link from "next/link";


const Navigation = () => {
    const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        // Scrolling down
        setShowNavbar(false);
      } else {
        // Scrolling up
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);



    return (
        <nav className={`z-[500] bg-[#000] w-full fixed top-0 left-0 transition-transform duration-300 ${ showNavbar ? "translate-y-0" : "-translate-y-full"}`}>
            <div className="max-w-full md:max-w-[1300px] px-[10px] md:px-[20px] mx-auto h-[70px] md:h-[90px] flex items-center justify-between">
                    <Image
                        src="/vercel.svg"
                        width="50"
                        height={50}
                        alt="hitch and haul logo"
                    />

                    <div className="flex lg:hidden">
                <RxHamburgerMenu
                    onClick={() => setOpenMenu((prev) => !prev)}
                    className={` ${
                    openMenu ? "hidden" : "flex"
                    } text-3xl text-[#fff] self-start transform-3d ease-in-out duration-300 cursor-pointer`}
                />

                <IoCloseOutline
                    onClick={() => setOpenMenu((prev) => !prev)}
                    className={` ${
                    openMenu ? "flex" : "hidden"
                    } text-3xl text-[#fff] self-start transform-3d ease-in-out duration-300 cursor-pointer`}
                />
                </div>

                 <div className="hidden lg:flex flex-row items-center gap-x-[30px] font-[600] text-[16px] text-[#D1D5DB]">
                <Link href="#home" className="cursor-pointer hover:text-[#004AAD]">HOME</Link>
                <Link href="#service" className="cursor-pointer hover:text-[#004AAD]">SERVICE</Link>
                <Link href="#about-us" className="cursor-pointer hover:text-[#004AAD]">ABOUT US</Link>
                <Link href="#contact" className="cursor-pointer hover:text-[#004AAD]">CONTACT US</Link>
                 </div>
            </div>
            <div className={`${openMenu ? "flex" : "hidden"} flex-col gap-y-[50px] text-[#000] bg-[#000] mt-[90px] h-screen px-[10px] font-[600] text-[24px] text-[#fff]`}>
                <Link onClick={() => setOpenMenu((prev) => !prev)} href="#home" className="cursor-pointer">HOME</Link>
                <Link onClick={() => setOpenMenu((prev) => !prev)} href="#service" className="cursor-pointer">SERVICE</Link>
                <Link onClick={() => setOpenMenu((prev) => !prev)} href="#about-us" className="cursor-pointer">ABOUT US</Link>
                <Link onClick={() => setOpenMenu((prev) => !prev)} href="#contact" className="cursor-pointer">CONTACT US</Link>
            </div>
        </nav>
    )
}

export default Navigation;