"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import type { FC, ReactNode } from "react";

type NavLinkProps = {
  href: string;
  disabled: boolean;
  children: ReactNode;
  tag?: ReactNode;
};

export const NavLink: FC<NavLinkProps> = ({
  href,
  children,
  disabled,
  tag,
}) => {
  const path = usePathname();

  if (disabled) {
    return (
      <span className="relative text-[16px] leading-6 text-neutral cursor-not-allowed">
        {tag && (
          <span className="text-[12px] text-accent absolute -bottom-5 text-center w-full inline-block">
            {tag}
          </span>
        )}
        {children}
      </span>
    );
  }

  return (
    <Link
      data-active={path === href}
      href={href}
      className="md:text-[16px] lg:text-[18px] font-[400] hover:text-[#594CE9] data-[active=true]:text-[#594CE9]"
    >
      {children}
    </Link>
  );
};