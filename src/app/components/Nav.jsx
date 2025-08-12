import Image from "next/image";

const Navigation = () => {
    return (
        <nav className="fixed top-0 left-0 w-full">
            <div className="max-w-[1300px] px-[20px] bg-transparent mx-auto h-[90px] flex items-center justify-between">
            <Image
                src="/vercel.svg"
                width="50"
                height={50}
                alt="hitch and haul logo"
            />

            <div className="flex flex-row items-center gap-x-[30px] font-[600] text-[16px] text-[#D1D5DB]">
                <span className="cursor-pointer hover:text-[#004AAD]">HOME</span>
                <span className="cursor-pointer hover:text-[#004AAD]">SERVICE</span>
                <span className="cursor-pointer hover:text-[#004AAD]">ABOUT US</span>
                <span className="cursor-pointer hover:text-[#004AAD]">CONTACT US</span>
            </div>
            </div>
        </nav>
    )
}

export default Navigation;