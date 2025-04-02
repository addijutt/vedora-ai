"use client";
import { NavLink } from "@/components/nav-link";

export const NavMenu = () => {

  const navItems = [
    {
      to: "#",
      label: "About",
    },
    {
      to: "#features",
      label: "Features",
    },
    {
      to: "#token",
      label: "Token",
    },
    {
      to: "#faq",
      label: "FAQ",
    },
    {
      to: "#usecase",
      label: "Use Cases",
      external: false
    },
    // {
    //   to: "https://docs.plutochain.io",
    //   label: "Docs",
    //   external: true
    // },
   
    // {
    //   to: "/claim",
    //   label: t.tokenClaim,
    //   tag: t.claimDate,
    //   disabled: true,
    // },
  ];



  return (
    <nav className="mx-auto md:pt-0 pt-12">
      <ul className="flex md:flex-row flex-col gap-4 w-full">
        {navItems.map(({ label, to ,external}, index) => (
          <li key={index}>
            
            {external ? (
              <a href={to} className="text-[14px] font-semibold hover:text-accent uppercase data-[active=true]:text-accent" target="_blank" rel="noopener noreferrer">
                {label}
              </a>
            ) : (
              <NavLink href={to} disabled={!!false}>{label}</NavLink>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};