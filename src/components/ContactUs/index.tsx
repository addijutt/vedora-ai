"use client";

import { useState } from "react";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [checked, setChecked] = useState(false);

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (email && checked) {
      alert(`Subscribed with: ${email}`);
    } else {
      alert("Please enter an email and accept the terms.");
    }
  };

  return (
    <div className="bg-[#594CE926] p-6 md:p-12 rounded-[36px] ">
      <h2 className="text-[40px] text-[#594CE9] leading-[60px] md:text-[64px] lg:leading-[80px] font-[300] mb-6 md:mb-10">Stay in the loop</h2>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4 md:space-y-8 max-w-3xl">
        <div className="flex items-center w-full  overflow-hidden">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 p-4 text-gray-700 focus:outline-none bg-white rounded-[12px]"
            required
          />
          <button
            type="submit"
            className="flex items-center justify-center bg-transparent border border-[#594CE9] rounded-[12px] h-[56px] w-[56px] hover:bg-gray-100"
          >
            <img src="/chevron-right.svg" className="h-[29px]" alt="" />
          </button>
        </div>

        <label className="custom-checkbox-container max-w-md">
      <input type="checkbox" checked={checked}
            onChange={() => setChecked(!checked)} defaultChecked />
      <span className="checkmark"></span>
      <span className="checkbox-text">
      I agree to the terms and conditions as set out by the user agreement.
      </span>
    </label>
        
      </form>
    </div>
  );
};

export default Contact;
