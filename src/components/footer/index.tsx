import Link from "next/link";

const Footer= () => {
  return (
    <footer className="bg-[#5C5C5C0D] py-6 md:py-10 md:pt-20">
      <div className="container">
      <div className="flex flex-col md:flex-row justify-between items-end">
        {/* Left Section */}
        <div className="w-full md:w-3/12 md:mb-0 mb-2">
        <div className="flex flex-col space-y-3">
        <Link href={"/"}>
          <img
            src="/vedora-logo.svg"
            className="vedora-ai-logo"
            alt="vedora-ai logo"
          />
        </Link>
          <p className="text-xs">© 2025 Vendor.ai. All Rights Reserved.</p>
        </div>
        </div>
        <div className="w-full md:w-2/12 md:mb-0 mb-2">
        <div className="flex flex-wrap md:items-start md:flex-col space-x-4 md:gap-4 mt-4 md:mt-0">
          <a href="#" className="relative text-[16px] md:text-[18px] hover:text-[#594CE9] after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-[#594CE9] after:transition-all after:duration-300 hover:after:w-full"> About </a>
          <a href="#" className="relative text-[16px] md:text-[18px] hover:text-[#594CE9] after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-[#594CE9] after:transition-all after:duration-300 hover:after:w-full"> Features </a>
          <a href="#" className="relative text-[16px] md:text-[18px] hover:text-[#594CE9] after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-[#594CE9] after:transition-all after:duration-300 hover:after:w-full"> Token </a>
          <a href="#" className="relative text-[16px] md:text-[18px] hover:text-[#594CE9] after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-[#594CE9] after:transition-all after:duration-300 hover:after:w-full"> FAQ </a>
          <a href="#" className="relative text-[16px] md:text-[18px] hover:text-[#594CE9] after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-[#594CE9] after:transition-all after:duration-300 hover:after:w-full"> Use Cases </a>
        </div>
        </div>
        <div className="w-full md:w-2/12">
        <div className="flex flex-col space-x-6 mt-4 md:mt-0">
        <div className="flex space-x-6 text-gray-500 text-lg">
            <a href="#" className="cursor-pointer transition-transform duration-300 ease-in-out hover:-translate-y-1.5"><img src="/social/discord.svg" alt="" /></a>
            <a href="#" className="cursor-pointer transition-transform duration-300 ease-in-out hover:-translate-y-1.5"><img src="/social/x.svg" alt="" /></a>
            <a href="#" className="cursor-pointer transition-transform duration-300 ease-in-out hover:-translate-y-1.5"><img src="/social/git.svg" alt="" /></a>
          </div>
        </div>
        </div>
       
        

        <div className="w-full md:w-5/12">
          <p className="text-[12px] text-[#5C5C5C80] leading-[14px] mt-6 md:mt-0">
            This content is for informational purposes only and is not legal, tax, investment, 
            financial, or other advice. You should not take, or refrain from taking, any action 
            based on any information contained herein, or any other information that we make 
            available at any time, including blog posts, data, articles, links to third-party 
            content, discord content, news feeds, tutorials, tweets, and videos. Before you make 
            any financial, legal, technical, or other decisions, you should seek independent 
            professional advice from a licensed and qualified individual in the area for which 
            such advice would be appropriate. This information is not intended to be comprehensive 
            or address all aspects of DeepNet.ai or its products. You shall not purchase or otherwise 
            acquire any of our token products if you are: a citizen, resident (tax or otherwise), 
            green card holder, incorporated in, owned or controlled by a person or entity in, 
            located in, or have a registered office or principal place of business in the U.S. 
            (a "U.S. Person"), or if you are a person in any jurisdiction in which such offer, 
            sale, and/or purchase of any of our token products is unlawful, prohibited, or 
            unauthorized (together with U.S. Person, a "Restricted Person"). The term "Restricted Person" 
            includes, but is not limited to, any natural person residing in, or any firm, company, partnership, 
            trust, corporation, entity, government, state or agency of a state, or any other incorporated or 
            unincorporated body or association, association or partnership (whether or not having separate 
            legal personality) that is established and/or lawfully existing under the laws of, a jurisdiction 
            in which such offer, sale, and/or purchase of any of our token products is unlawful, prohibited, 
            or unauthorized). You shall not resell or otherwise transfer any of our token products to any 
            Restricted Person. The transfer or resale of any of our token products to any Restricted Person 
            is not permitted. You shall read the Terms of Service and use our Website in compliance with the Terms of Service.
          </p>
        </div>
        
      </div>
      </div>
    </footer>
  );
}
export default Footer;
