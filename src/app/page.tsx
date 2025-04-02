"use client";
import { Suspense, useEffect, useState } from "react";
import Carousel from "@/components/Carousel/carousel-bonus-tiers";
import Marquee from 'react-fast-marquee';
import TextTransition, { presets } from 'react-text-transition';
import { Roadmap } from "@/components/Roadmap/ui";
import { FAQ } from "@/components/FAQ/ui";
import Contact from "@/components/ContactUs";
import Footer from "@/components/footer";


export default function Home() {
  
  const [index, setIndex] = useState(0);
  const words = ['AI Agents','AI Agents','AI Agents','AI Agents'];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 5000); // Change text every 2 seconds

    return () => clearInterval(intervalId);
  }, []);
  return (
    <>

    <section className="">
      <div className="container">
          <div className="flex flex-wrap pt-6">
          <div className="w-full lg:w-6/12 md:pt-8">
              <h1 className="md:text-[70px] text-[60px] font-[300] md:flex gap-2 md:leading-[90px] leading-[70px] md-mb-0 mb-6">Build <TextTransition className=""
               springConfig={presets.gentle}>   <span className="text-[#594CE9]">{words[index]}</span>  </TextTransition></h1>
               <h1 className="md:text-[70px] text-[60px] font-[300] inline-block lg:leading-[20px] leading-[70px]"> on Vedora.ai</h1>
              <p className="text-[20px] md:text-[22px] mt-8 mb-12">Vedora.ai is a Layer 2 blockchain that serves as the infrastructure layer for 
                AI-enabled applications.   </p>              
            <div className="flex flex-wrap gap-6">
            <a href="javascript:void(0)" className="inline-block max-w-[260px] w-full transition-transform duration-300 ease-in-out hover:-translate-y-1.5"><img src="/uniswap.png" className="" alt="" /></a>
            <a href="javascript:void(0)" className="inline-block max-w-[300px] w-full transition-transform duration-300 ease-in-out hover:-translate-y-1.5"><img src="/CM.png" className="" alt="" /></a>
            </div>
            </div>

            <div className="w-full lg:w-6/12" id="presale">
              <img src="/banner.png" className="w-full" alt="" />

            </div>
          </div>
        </div>

    </section>


    <section className="pt-6">
      <div className="container">
        <div className="my-6 lg:pb-5">
          <h2 className="text-[40px] leading-[56px] md:text-[64px] lg:leading-[74px] font-[300]">Featured in</h2>
        </div>
        <Marquee>
                <img src="/partners/p1.png" className="md:mx-12 mx-4 max-w-[160px]" alt="" />
                <img src="/partners/p2.png" className="md:mx-12 mx-4 max-w-[190px]" alt="" />
                <img src="/partners/p3.png" className="md:mx-12 mx-4 max-w-[150px]" alt="" />
                <img src="/partners/p4.png" className="md:mx-12 mx-4 max-w-[100px]" alt="" />
                <img src="/partners/p5.png" className="md:mx-12 mx-4 max-w-[136px]" alt="" />
              </Marquee>
      </div>
    </section>


    <section className="py-10 md:mt-16">
      <div className="container">
      <div className="my-6">
          <h2 className="text-[40px] leading-[56px] md:text-[64px] lg:leading-[74px] font-[300] mb-3">What is Vedora.AI</h2>
          <p className="max-w-[970px]">Vedora.AI is the infrastructure layer enabling the future of decentralized AI — combining smart contracts, agent economies, and machine learning at scale.</p>
        </div>
      <div className="mask md:mt-16">
        <Carousel />
      </div>
      </div>
    </section>

    <section className="md:py-10">
      <div className="container">
      <div className="my-6">
          <h2 className="text-[40px] leading-[56px] md:text-[64px] lg:leading-[74px] font-[300] mb-3">Testnet Stats</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-2 md:mt-16">
  {/* Left Column - 7/12 on large screens */}
  <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-2">
    {/* First Row */}
    <div className="bg-[#5C5C5C0D] rounded-[36px] p-6 flex flex-col gap-10 justify-between">
      <div className="flex items-center space-x-2">
        <img src="/icons/tn1.svg" alt="Transaction Icon" />
        <span className="text-[22px] font-[400]">Total transaction</span>
      </div>
      <h2 className="text-[30px] md:text-[40px] font-[600] text-right">2,294,029</h2>
    </div>

    <div className="bg-[#5C5C5C0D] rounded-[36px] p-6 flex flex-col gap-10 justify-between">
      <div className="flex items-center space-x-2">
        <img src="/icons/tn2.svg" alt="Blocks Icon" />
        <span className="text-[22px] font-[400]">Total blocks</span>
      </div>
      <h2 className="text-[30px] md:text-[40px] font-[600] text-right">2,295,594</h2>
    </div>

    {/* Second Row */}
    <div className="bg-[#5C5C5C0D] rounded-[36px] p-6 flex flex-col gap-10 justify-between">
      <div className="flex items-center space-x-2">
        <img src="/icons/tn3.svg" alt="Wallet Icon" />
        <span className="text-[22px] font-[400]">Wallet addresses</span>
      </div>
      <h2 className="text-[30px] md:text-[40px] font-[600] text-right">2,552</h2>
    </div>

    <div className="bg-[#5C5C5C0D] rounded-[36px] p-6 flex flex-col gap-10 justify-between">
      <div className="flex items-center space-x-2">
        <img src="/icons/tn4.svg" alt="Gas Icon" />
        <span className="text-[22px] font-[400]">Gas tracker</span>
      </div>
      <h2 className="text-[30px] md:text-[40px] font-[600] text-right">43,200</h2>
    </div>
  </div>

  {/* Right Column - 5/12 on large screens */}
  <div className="md:col-span-5 bg-[#5C5C5C0D] rounded-[36px] p-6 flex flex-col gap-10 justify-between">
    <h2 className="text-[50px] font-[600] self-end">2s</h2>
    <div className="flex items-center space-x-2">
      <img src="/icons/tn4.svg" alt="Time Icon" />
      <span className="text-[22px] font-[400]">Average block time</span>
    </div>
  </div>
</div>



      </div>
    </section>

    <section className="py-10">
      <div className="container">
      <div className="flex flex-col lg:flex-row items-center justify-between md:py-10">
      {/* Left Content */}
      <div className="w-full lg:w-5/12">
        <h2 className="text-[40px] leading-[56px] md:text-[64px] lg:leading-[74px] font-[300] mb-3">Tokenomics</h2>
        <p className="text-[16px md:text-[18px] mb-6 md:mb-8">
          Explore DeepNet's tokenomics — simple and effective.
          Our smart contracts are fully audited, enhancing safety
          and transparency. Dive into our whitepaper to discover
          more about how DeepNet.ai works.
        </p>

        {/* Buttons */}
        <div className="flex gap-4">
          <button className="bg-[#594CE9] text-white px-6 md:px-8 py-3 rounded-full text-[18px] font-[400] transition-all hover:bg-indigo-700">
            Buy now
          </button>
          <button className="border border-[#594CE9] text-[#594CE9] px-6 md:px-8 py-3 rounded-full text-[18px] font-[400] transition-all hover:bg-indigo-100">
            Whitepaper
          </button>
        </div>
      </div>

      {/* Right Chart */}
      <div className="w-full lg:w-7/12 flex justify-center mt-12 lg:mt-0 md:px-14 ">
          <img src="/tokenomics.png" alt="Tokenomics Chart" className="w-full" />
      </div>
    </div>


      </div>
    </section>


   <section className="py-10">
    <div className="container p-sm-0">
      <div className="base-protocol">
        <div className="scroller">
          <img src="/protocol.png" className="w-full" alt="" />
        </div>
      </div>
      </div>
      </section>

    <section className="py-10">
      <div className="container">
      <div className="my-6">
          <h2 className="text-[40px] leading-[56px] md:text-[64px] lg:leading-[74px] font-[300] mb-6"><span className="text-[#594CE9]">Vedora AI</span> powering the future of AI on blockchain with
            scalable, smart, and seamless infrastructure</h2>
        </div>

      <div className="grid grid-cols-1 md:grid-cols-2 border border-[#5C5C5C40] rounded-[36px] overflow-hidden md:mt-16">
        
        {/* Left Section - Image */}
        <div className="flex justify-center items-center px-6 pt-6 bg-pro">
          <div className="max-w-[300px] md:max-w-[402] h-full">
          <img 
            src="/iPhone-16-Pro.png" 
            alt="Phone Mockup"
            className="w-full h-full object-contain object-bottom hidden md:block"
          />
          <img 
            src="/iPhone.png" 
            alt="Phone Mockup"
            className="w-full h-full object-contain object-bottom md:hidden"
          /> 
          </div>
          
        </div>

        {/* Right Section - Text Content */}
        <div className="p-6 flex flex-col justify-center space-y-4">
          
          {/* Features List */}
          {[
            { number: "01", text: "Layer 2 blockchain built specifically for AI-powered decentralized applications" },
            { number: "02", text: "Scalable, low-cost infrastructure optimized for AI agents and machine learning systems" },
            { number: "03", text: "EVM-compatible, enabling seamless porting of AI-Enabled dApps to the Layer 2 Blockchain" },
            { number: "04", text: "Tap into the trillion-dollar AI economy with smart contracts and fast execution" }
          ].map((item, index) => (
            <div key={index}>
              <div className="text-[#594CE9] font-[400] mb-2">{item.number}</div>
              <p className="text-[18px] font-[400] border-b border-[#5C5C5C40] pb-3">{item.text}</p>
            </div>
          ))}

          {/* Button */}
          <button className="bg-[#594CE9] text-white px-6 md:px-8 py-3 w-max rounded-full text-[18px] font-[400] transition-all hover:bg-indigo-700 mt-8">
            Buy Token Now
          </button>

        </div>
        
      </div>



      </div>
    </section>


    <section className="md:py-10">
      <div className="container">
      <div className="my-6">
          <h2 className="text-[40px] leading-[60px] md:text-[64px] lg:leading-[80px] font-[300] mb-6">More Use Cases and Agent Examples</h2>
        </div>
        
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:mt-16">
        {/* Card Component */}
        {[
          {
            id: "01",
            title: "Competitive Analysis",
            subtitle: "Discover industry trends faster with multi-agent intelligence.",
          },
          {
            id: "02",
            title: "Design Detective",
            subtitle: "Ensure consistent CI across multiple platforms and asset classes.",
          },
          {
            id: "03",
            title: "Website Sustainalizer",
            subtitle: "Minimize energy usage across websites & apps with smart optimizations.",
          },
          {
            id: "04",
            title: "E-Bill Converter",
            subtitle: "Automate regular bills into law-compliant e-invoices.",
          },
          {
            id: "05",
            title: "AI Customer Support",
            subtitle: "Smart help and FAQ support for your clients.",
          },
          {
            id: "06",
            title: "News Center",
            subtitle: "Scrape and compile the news you really need.",
          },
        ].map((card, index) => (
          <div key={index} className="bg-[#5C5C5C0D] rounded-[36px] p-6 md:p-8 flex flex-col gap-6">
            <div>
            <div className="text-[#594CE9] font-[400]">{card.id}</div>
            <p className="text-[18px]">{card.title}</p>
            </div>
            <h3 className="text-[30px] font-[300] text-[#594CE9]">{card.title}</h3>
            <p className="text-[18px]">{card.subtitle}</p>
            <button className="border border-[#5C5C5C] px-6 py-2 w-max rounded-full text-gray-700 hover:bg-gray-100 transition">
              #multiagent
            </button>
          </div>
        ))}
      </div>




      </div>
    </section>

    <div className="roadmap-bg">
    <section className="py-10">
      <div className="container">
      <div className="flex flex-col lg:flex-row items-center justify-between md:py-10">
      {/* Left Content */}
      <div className="w-full lg:w-5/12">
      <button className="bg-[#5C5C5C15] px-6 md:px-4 py-2 rounded-full text-[14px] font-[400] mb-4">
            Whitepaper
          </button>
        <h2 className="text-[40px] leading-[56px] md:text-[64px] lg:leading-[74px] font-[300] mb-3">Unlocking the AI Agent Economy</h2>
        <p className="text-[16px md:text-[18px] mb-6 md:mt-8">
        Advances in AI are embedding billions of autonomous agents into daily life. 
        Today, these agents are not just tools—they're independent entities shaping the future.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 md:mt-14 mt-8">
          <button className="bg-[#594CE9] text-white px-6 md:px-8 py-3 rounded-full text-[18px] font-[400] transition-all hover:bg-indigo-700">
          Read the paper
          </button>
          
        </div>
      </div>

      {/* Right Chart */}
      <div className="w-full lg:w-6/12 flex justify-center mt-12 lg:mt-0 md:px-20 ">
          <img src="/AE.png" alt="Tokenomics Chart" className="w-full" />
      </div>
    </div>


      </div>
    </section>
   
    <section className="md:py-10">
    <div className="container">
      <Roadmap />
      </div>
      </section>
      </div>
    
      <section className="">
    <div className="container">
      <Contact />
      </div>
      </section>

      <section className="py-10">
    <div className="container">
      <FAQ />
      </div>
      </section>
      
      


      <Suspense fallback={<div>Loading footer...</div>}>
        <Footer />
      </Suspense>
    </>
  );
}