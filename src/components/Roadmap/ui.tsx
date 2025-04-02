"use client";

export const Roadmap = () => {

    const roadmapData = [
        {
          phase: "Phase 01",
          title: "Protocol on Testnet",
          steps: [
            "Payment smart contract (incl. dispute resolution)",
            "Output logging of agent outputs",
            "Agent registry",
          ],
          extra: "Private and public agent networks\nVendor wallet v1",
        },
        {
          phase: "Phase 02",
          title: "Protocol on Mainnet",
          steps: [
            "Payment smart contract (incl. dispute resolution)",
            "Output logging of agent outputs",
            "Agent registry",
            "Support for custom tokens & stablecoins",
            "Trust Rating v1",
          ],
          extra: "Private and public agent networks\nVendor wallet v1\nAdmin interface",
        },
        {
          phase: "Phase 03",
          title: "Trust Rating v1",
          steps: [
            "Governance",
            "Trust rating v2",
            "Payment / fees",
            "Node operations",
          ],
        },
      ];
  return (
    <div className="md:py-16 py-10">
      <div className="">
      <h2 className="text-[40px] leading-[60px] md:text-[64px] lg:leading-[80px] font-[300] mb-6 md:mb-16">Our Roadmap</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {roadmapData.map((phase, index) => (
            <div
              key={index}
              className="border-l-1 border-[#594CE9] px-6  md:pr-16  pb-6 relative md:mb-[0] mb-[60px]"
            >
              <h4 className="text-[#594CE9] font-[400] mb-2">{phase.phase}</h4>
              <h3 className="md:text-[48px] md:leading-[60px] text-[32px] leading-[50px] font-[300] mb-4">
                {phase.title}
              </h3>
              {phase.steps.map((step, i) => (
                <div key={i} className="my-4">
                  <div className="text-[#594CE9] font-[400] mb-3">
                    {String(i + 1).padStart(2, "0")} 
                  </div>
                <p className="border-b border-[#5C5C5C40] pb-3">
                  {step}
                    </p>       
                    </div>
              ))}
              {phase.extra && (
                <p className="text-[18px] mt-4 md:mt-14">{phase.extra}</p>
              )}
              {index < roadmapData.length - 1 && (
                <div className="absolute left-0 md:left-auto md:right-0 md:top-[30px] bottom-[-60px]">
                  <img src="/arrow-right.svg" alt="" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};



