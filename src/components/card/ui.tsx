import s from "./card.module.css";

import type { FC, ReactNode } from "react";

type CardProps = {
  title: ReactNode;
  subtitle: ReactNode;
  icon: ReactNode;
};

export const Card: FC<Readonly<CardProps>> = ({ title, subtitle, icon }) => {
  return (
    <div className={s.root}>
      <div className="flex flex-col gap-4 h-full w-full py-12 px-4 bg-[#000000] rounded-[inherit]">
        <div className="mb-2">{icon}</div>
        <div className="text-3xl font-semibold uppercase max-md:text-xl">
          {title}
        </div>
        <div className="text-lg font-normal opacity-80 max-md:text-base">
          {subtitle}
        </div>
      </div>
    </div>
  );
};