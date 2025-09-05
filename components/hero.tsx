import { FaGithub, FaLinkedin, FaTwitter, FaDiscord } from "react-icons/fa";
import { SiTelegram } from "react-icons/si";

const socialLinks = [
  { icon: FaGithub, url: "https://github.com/labattaria" },
  { icon: FaLinkedin, url: "https://linkedin.com/in/yourusername" },
  { icon: FaTwitter, url: "https://twitter.com/yourusername" },
  { icon: SiTelegram, url: "https://t.me/magna_carta" },
  { icon: FaDiscord, url: "https://discord.com/users/labattaria" },
];

export default function Hero() {
  return (
    <section id="hero" className="py-20">
      <div className="max-w-7xl mx-auto px-0">
        <h1 className="text-4xl font-montserrat font-semibold text-heading text-center mb-4">
          Koreshkov Nikolay
        </h1>
        <h2 className="text-4xl font-montserrat font-semibold text-heading text-center">
          Frontend Developer & Building Modern Web Apps
        </h2>

        <hr className="border-2 border-gray-300 w-32 mx-auto my-6" />

        <p className="text-lg text-ink font-normal text-center mb-8 italic">
          I turn ideas into responsive, interactive websites that are fast,
          smooth, and built with clean, scalable code.
        </p>

        <div className="flex gap-4 items-center justify-center">
          {socialLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full border-1 border-[#1e293b] text-[#1e293b] 
                        transition-colors duration-300
                       hover:bg-[#1e293b] hover:border-[#edf1ff] hover:text-[#edf1ff]"
              >
                <Icon className="w-6 h-6" />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
