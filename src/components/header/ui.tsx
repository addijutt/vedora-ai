"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { NavMenu } from "../nav-menu";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOutsideClick = (event:any) => {
      if (isOpen && !event.target.closest(".mobile-menu")) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [isOpen]);

  return (
    <header className="relative container py-4" id="home">
      <div className="flex items-center justify-between w-full gap-4 md:p-4">
        <button 
          className="h-[48px] w-[48px] rounded-full bg-gray-200 hover:bg-gray-300 transition md:hidden" 
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(!isOpen);
          }}
        >
          <img src="/menu.svg" alt="" />
        </button>
        <Link href={"#home"}>
          <img
            src="/vedora-logo.svg"
            className="vedora-ai-logo"
            alt="vedora-ai logo"
          />
        </Link>
        <div className="flex justify-end items-center gap-4 flex md:hidden">          
          <div className="flex gap-3 items-center">
            <button className="h-[48px] w-[48px] flex items-center justify-center border border-[#594CE9] rounded-full hover:bg-[#594CE9] hover:text-[#fff] transition-all">
            <img src="/file-lines.svg" alt="" />
            </button>
            <button className="h-[48px] w-[48px] flex items-center justify-center border border-[#594CE9] rounded-full bg-[#594CE9] hover:bg-[#fff] hover:text-[#594CE9] transition-all">
            <img src="/rocket-launch.svg" alt="" />
            </button>
            <button className="h-[48px] w-[48px] flex items-center justify-center text-[13px] border border-[#5C5C5C] rounded-full hover:bg-[#594CE9] hover:text-[#fff] transition-all">
              EN
            </button>
          </div>
        </div>
       <span className="hidden md:flex"><NavMenu  /></span> 
        <div className="flex justify-end items-center gap-4 hidden md:flex">          
          <div className="flex gap-3 items-center">
            <button className="text-[18px] text-[#594CE9] font-[400] px-6 py-3 border border-[#594CE9] rounded-full hover:bg-[#594CE9] hover:text-[#fff] transition-all">
              Read Docs
            </button>
            <button className="text-[18px] text-[#fff] font-[400] px-6 py-3 border border-[#594CE9] rounded-full bg-[#594CE9] hover:bg-[#fff] hover:text-[#594CE9] transition-all">
              Launch Testnet
            </button>
            <button className="text-[18px] text-[#5C5C5C] font-[400] px-4 py-3 border border-[#5C5C5C] rounded-full hover:bg-[#594CE9] hover:text-[#fff] transition-all">
              EN
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ x: "-100%" }} 
          animate={{ x: 0 }} 
          exit={{ x: "-100%" }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 w-64 h-full bg-white shadow-lg p-5 z-50 md:hidden mobile-menu"
        >
          <button 
            className="absolute top-5 right-5 p-2 text-xl" 
            onClick={() => setIsOpen(false)}
          >
            ✕
          </button>
          <NavMenu />
        </motion.div>
      )}
    </header>
  );
};


// "use client";

// import { NavMenu } from "@/components/nav-menu";
// import Link from "next/link";

// export const Header = () => {

//   return (
//     <header className="relative container py-4" id="home">
//       <div className="flex items-center justify-between w-full gap-4 p-4">
//         <Link href={"#home"}>
//           <img
//             src="/vedora-logo.svg"
//             width={160}
//             height={26}
//             className="vedora-ai-logo"
//             alt="vedora-ai logo"
//           />
//         </Link>
//         <NavMenu />
//         <div className="flex justify-end items-center gap-4">          
//                 <div className="flex gap-3 items-center">
//                 <button className="text-[18px] text-[#594CE9] font-[400] px-6 py-3 border border-[#594CE9] rounded-full hover:bg-[#594CE9] hover:text-[#fff]
//                 transition-all">
//                       Read Docs
//                     </button>
//                     <button className="text-[18px] text-[#fff] font-[400] px-6 py-3 border border-[#594CE9] rounded-full bg-[#594CE9] hover:bg-[#fff] hover:text-[#594CE9]
//                 transition-all">
//                       Launch Testnet
//                     </button>
//                     <button className="text-[18px] text-[#5C5C5C] font-[400] px-4 py-3 border border-[#5C5C5C] rounded-full hover:bg-[#594CE9] hover:text-[#fff]
//                 transition-all">
//                       EN
//                     </button>
//                 </div>
//         </div>
        
//       </div>
//     </header>
//   );
// };