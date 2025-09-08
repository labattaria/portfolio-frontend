import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter, FaDiscord } from "react-icons/fa";
import { MailCheck, NotebookText } from "lucide-react";
import { RiTelegram2Fill } from "react-icons/ri";

const socialLinks = [
  {
    icon: FaGithub,
    url: "https://github.com/labattaria",
    label: "GitHub",
  },
  {
    icon: FaLinkedin,
    url: "https://linkedin.com/in/yourusername",
    label: "LinkedIn",
  },
  {
    icon: FaTwitter,
    url: "https://twitter.com/yourusername",
    label: "Twitter",
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

export default function Hero() {
  return (
    <section id="home" className="py-20">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-montserrat font-semibold text-heading text-center mb-4">
          Koreshkov Nikolay
        </h1>
        <h2 className="text-4xl font-montserrat font-semibold text-heading text-center">
          Frontend Developer & Building Modern Web Apps
        </h2>

        <hr className="border-2 border-gray-300 w-32 mx-auto my-6" />

        <p className="text-lg text-ink font-normal text-center mb-8 italic">
          I turn ideas into responsive, interactive web applications that are
          fast, smooth, and built with clean, scalable code.
        </p>

        <div className="flex justify-center gap-3 mb-9">
          <Link
            href="#contact"
            scroll={true}
            className="flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium bg-accent/10 text-accent hover:bg-accent/70 hover:text-[#ffffff] duration-300"
          >
            <MailCheck className="w-4 h-4" /> Contact Me
          </Link>
          <Link
            href="#projects"
            scroll={true}
            className="flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium bg-accent/10 text-accent hover:bg-accent/70 hover:text-[#ffffff] duration-300"
          >
            <NotebookText className="w-4 h-4" />
            View Projects
          </Link>
        </div>

        <div className="flex gap-4 items-center justify-center">
          {socialLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="w-10 h-10 flex items-center justify-center rounded-full border border-heading
                    hover:bg-heading hover:text-[#edf1ff] duration-300"
              >
                <Icon className="w-5 h-5" />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
