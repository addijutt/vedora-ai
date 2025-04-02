/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const socials = [
  {
    link: "http://twitter.com/pulsemateai",
    image: "/social/xcom.svg",
    alt: "x.com logo",
  },
  // {
  //   link: "https://discord.gg/pulsemateai",
  //   image: "/social/discord.svg",
  //   alt: "discord logo",
  // },
  {
    link: "https://t.me/PulsemateAIAnnouncements",
    image: "/social/telegram.svg",
    alt: "telegram logo",
  },
];

export const SocialLinks = () => (
  <ul className="flex gap-4 items-center justify-end">
    {socials.map(({ link, image, alt }, index) => (
      <li key={index}>
        <Link
          href={link}
          className="hover:opacity-80 transition-opacity"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img src={image} alt={alt} />
        </Link>
      </li>
    ))}
  </ul>
);