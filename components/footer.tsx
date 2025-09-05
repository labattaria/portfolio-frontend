import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter, FaDiscord } from "react-icons/fa";
import { SiTelegram } from "react-icons/si";

const socialLinks = [
  { icon: FaGithub, url: "https://github.com/labattaria" },
  { icon: FaLinkedin, url: "https://linkedin.com/in/yourusername" },
  { icon: FaTwitter, url: "https://twitter.com/yourusername" },
  { icon: SiTelegram, url: "https://t.me/magna_carta" },
  { icon: FaDiscord, url: "https://discord.com/users/labattaria" },
];

export default function Footer() {
  return (
    <section id="contact" className="bg-header-footer py-20">
      <div className="max-w-7xl mx-auto px-0 text-center">
        <Link
          href="/"
          className="text-surface text-lg font-bold font-montserrat cursor-pointer"
        >
          [<span>NK</span>]
        </Link>

        <p className="mt-5 text-xl text-[#38BDF8] font-medium">
          Living, learning, & leveling up every single day.
        </p>

        <hr className="border-2 border-gray-600 w-32 mx-auto my-6" />

        <p className="text-lg font-normal text-surface mb-5 max-w-2xl mx-auto">
          I’m always open and excited to discuss new opportunities and
          interesting projects. Feel free to reach out!
        </p>

        <div className="flex flex-col gap-2 items-center mb-6 text-surface">
          <p>
            Email:{" "}
            <a
              href="mailto:labattarix@gmail.com"
              className="underline hover:text-accent"
            >
              labattarix@gmail.com
            </a>
          </p>
          <p>
            Phone:{" "}
            <a href="tel:+1234567890" className="underline hover:text-accent">
              +380953207299
            </a>
          </p>
          <p>Location: Ukraine, Kyiv (ready to relocate at own expense)</p>
        </div>

        <p className="mb-3 text-base text-[#38BDF8]">Connect with me online:</p>

        <div className="flex gap-4 justify-center mb-8">
          {socialLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full border border-surface text-surface 
                           transition-colors duration-300
                           hover:bg-surface hover:text-heading hover:border-surface"
              >
                <Icon className="w-6 h-6" />
              </a>
            );
          })}
        </div>

        <p className="text-base text-surface">
          Handcrafted by me © labattaria {new Date().getFullYear()}.
        </p>

        <div className="flex items-center justify-center mt-2">
          <span className="mr-3 text-sm text-surface">Made with</span>
          <Image
            src="/technologies/NextJS-Dark.svg"
            alt="NextJS tech icon"
            width={24}
            height={24}
          />
          <span className="ml-1 text-sm text-surface">NextJS</span>
        </div>
      </div>
    </section>
  );
}
