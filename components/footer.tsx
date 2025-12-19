import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Download } from "lucide-react";
import { FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa";
import { RiTelegram2Fill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";

const socialLinks = [
  {
    icon: FaGithub,
    url: "https://github.com/labattaria",
    label: "GitHub",
  },
  {
    icon: FaLinkedin,
    url: "https://www.linkedin.com/in/nikolaykoreshkov/",
    label: "LinkedIn",
  },
  {
    icon: FaXTwitter,
    url: "https://x.com/labattaria",
    label: "Twitter/X",
  },
  {
    icon: RiTelegram2Fill,
    url: "https://t.me/magna_carta",
    abel: "Telegram",
  },
  {
    icon: FaDiscord,
    url: "https://discord.com/users/labattaria",
    label: "Discord",
  },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-header-footer py-16 text-surface">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* LEFT: brand + hook */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <Link
            href="/"
            className="mb-3 text-lg font-bold font-montserrat cursor-pointer"
          >
            [<span>NK</span>]
          </Link>
          <p className="mb-4 text-accent-2 text-sm font-medium">
            Living, learning, & leveling up every single day.
          </p>
          <p className="text-sm text-surface max-w-xs font-normal">
            I’m always open and excited to discuss new opportunities and
            interesting projects.
          </p>
        </div>

        {/* CENTER: contact info + CTA */}
        <div className="flex flex-col items-center text-center">
          <h4 className="font-montserrat font-semibold text-surface mb-4">
            Get in Touch
          </h4>

          <a
            href="mailto:labattarix@gmail.com"
            className="underline font-normal hover:text-accent duration-300 mb-2"
          >
            labattarix@gmail.com
          </a>

          <a
            href="tel:+380953207299"
            className="underline font-normal hover:text-accent duration-300 mb-2"
          >
            +380953207299
          </a>

          <p className="text-sm font-normal mb-4">
            Location: Kropyvnytskyi, Ukraine{" "}
            <span className="italic">(ready to relocate at own expense)</span>
          </p>

          <div className="flex gap-3">
            <a
              href="https://drive.google.com/file/d/1P7Yv4sPfYTf3ExdPFRQz5B4ed7R9_Ytr/view?usp=sharing"
              download
              className="flex items-center gap-2 rounded-md bg-accent px-4 py-2 text-sm font-medium text-white hover:bg-accent/70 duration-300"
            >
              Download CV <Download className="w-4 h-4" />
            </a>
            <Link
              href="#home"
              scroll={true}
              className="flex items-center gap-2 rounded-md border border-surface/30 px-4 py-2 text-sm font-medium hover:border-accent/90 hover:text-accent/90 duration-300"
            >
              Back to Top <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* RIGHT: socials + microcopy */}
        <div className="flex flex-col items-center md:items-end text-center md:text-right">
          <p className="mb-3 text-base text-accent-2 font-medium">
            Connect with me online:
          </p>

          <div className="flex gap-3 mb-6">
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-surface/40 
                      hover:bg-accent hover:text-surface hover:border-accent duration-300 focus:outline-none focus:ring-2 focus:ring-accent"
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>

          <p className="mb-2 font-normal text-sm text-surface/70">
            Handcrafted by me © labattaria {new Date().getFullYear()}
          </p>
          <div className="flex items-center text-xs font-normal text-surface/60">
            <span className="mr-2">Made with</span>
            <Image
              src="/technologies/NextJS-Dark.svg"
              alt="NextJS tech icon"
              width={20}
              height={20}
            />
            <span className="ml-1">NextJS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
