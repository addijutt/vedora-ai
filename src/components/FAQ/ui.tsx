"use client";

import { useState } from "react";

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index:any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="md:py-10">
      <div className="max-w-4xl">
        <h2 className="text-[40px] leading-[60px] md:text-[64px] lg:leading-[80px] font-[300] mb-6 md:mb-16">FAQ</h2>
        <div className="space-y-4 md:space-y-8">
          {faqData.map((item, index) => (
            <div key={index} className={`border-l-2 pl-6 ${openIndex === index ? 'border-[#594CE9]' : 'border-[#5C5C5C40]'}`}>
              <div
                className="flex justify-between items-center py-4 cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <div>
                  <div className="text-[#594CE9] font-[400] mb-2 mr-2">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  {item.question}
                </div>
                <div className="text-blue-600">
                  {openIndex === index ? <img src="/minus-large.svg" className="md:w-[48px] w-[40px]" alt="" /> : <img src="/plus-large.svg" className="md:w-[48px] w-[40px]" alt="" />}
                </div>
              </div>
              {openIndex === index && (
                <p className="font-[500] pb-4">{item.answer}</p>
              )}
              <hr className="border-[#5C5C5C40]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const faqData = [
  {
    question: "Is the testnet live?",
    answer:
      "Yes, the testnet is live and active. We've already published the block explorer so anyone can start interacting with it and tracking transactions.",
  },
  {
    question: "Can I deploy smart contracts on DeepNet already?",
    answer: "Currently, we are in the test phase, and mainnet deployment is coming soon.",
  },
  {
    question: "How big is the AI economy?",
    answer: "The AI economy is projected to grow exponentially over the next decade, influencing multiple industries.",
  },
  {
    question: "Why merge blockchain and AI?",
    answer: "Blockchain ensures security and transparency, while AI provides automation and intelligence, making them a powerful combination.",
  },
];


