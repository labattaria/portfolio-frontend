import Image from "next/image";
import Link from "next/link";
import { Briefcase, TrendingUp, Target, Check } from "lucide-react";

export default function About() {
  return (
    <section id="about">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl uppercase font-bold text-heading text-center">
          About Me
        </h2>

        <hr className="border-2 border-gray-300 w-32 mx-auto my-6" />

        {/* Intro */}
        <p className="text-[20px] text-center font-normal text-ink mb-12 max-w-3xl mx-auto leading-relaxed">
          I’m a Frontend Developer with 2.5+ years of hands-on experience
          building and shipping React and Next.js applications. I focus on
          writing clean, scalable code and creating fast, user-friendly
          interfaces.
          <br />
          <br />I enjoy going beyond just implementation — understanding how
          things work under the hood, making thoughtful architectural decisions,
          and improving performance where it actually matters.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Experience */}
          <div
            className="group flex flex-col items-center text-center p-6 rounded-2xl
            border border-white/40 hover:border-white/70
            bg-[rgba(237,241,255,0.7)] 
            backdrop-blur-md
            shadow-sm
            hover:shadow-[0_8px_25px_rgba(99,102,241,0.15)]
            hover:-translate-y-1
            hover:bg-[rgba(255,255,255,0.6)]
            transition-all duration-300"
          >
            <Briefcase className="w-6 h-6 mb-3 text-accent transition-all duration-300 group-hover:scale-110 group-hover:text-accent2" />

            <h3 className="text-xl font-semibold mb-4 text-heading">
              Experience
            </h3>

            <p className="text-base text-ink mb-4 leading-relaxed">
              Over the past 2.5 years, I’ve built and shipped multiple frontend
              projects using React and Next.js — from small applications to more
              structured, scalable solutions.
            </p>

            <ul className="text-base text-ink space-y-2 text-left">
              {[
                "Designing application architecture",
                "Managing complex state (Redux Toolkit)",
                "Working with APIs and async data",
                "Optimizing performance and bundle size",
                "Deploying applications (Vercel)",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <Check className="w-4 h-4 mt-1 text-green-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <p className="text-base text-ink mt-4 leading-relaxed">
              I pay attention to code quality, maintainability, and real-world
              usability — not just making things work.
            </p>
          </div>

          {/* Growth */}
          <div
            className="group flex flex-col items-center text-center p-6 rounded-2xl
            border border-white/40 hover:border-white/70
            bg-[rgba(237,241,255,0.7)] 
            backdrop-blur-md
            shadow-sm
            hover:shadow-[0_8px_25px_rgba(99,102,241,0.15)]
            hover:-translate-y-1
            hover:bg-[rgba(255,255,255,0.6)]
            transition-all duration-300"
          >
            <TrendingUp className="w-6 h-6 mb-3 text-accent transition-all duration-300 group-hover:scale-110 group-hover:text-accent2" />

            <h3 className="text-xl font-semibold mb-4 text-heading">Growth</h3>

            <p className="text-base text-ink leading-relaxed">
              I learn best by building and iterating. I regularly explore
              documentation, analyze real-world solutions, and refactor my own
              code to improve structure and performance.
            </p>

            <ul className="text-base text-ink space-y-2 mt-4 text-left">
              {[
                "Writing scalable and maintainable code",
                "Improving UX through small details",
                "Understanding technical trade-offs",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <Check className="w-4 h-4 mt-1 text-green-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <p className="text-base text-ink mt-4">
              I value feedback, code reviews, and continuous improvement.
            </p>
          </div>

          {/* Goals */}
          <div
            className="group flex flex-col items-center text-center p-6 rounded-2xl
            border border-white/40 hover:border-white/70
            bg-[rgba(237,241,255,0.7)] 
            backdrop-blur-md
            shadow-sm
            hover:shadow-[0_8px_25px_rgba(99,102,241,0.15)]
            hover:-translate-y-1
            hover:bg-[rgba(255,255,255,0.6)]
            transition-all duration-300"
          >
            <Target className="w-6 h-6 mb-3 text-accent transition-all duration-300 group-hover:scale-110 group-hover:text-accent2" />

            <h3 className="text-xl font-semibold mb-4 text-heading">Goals</h3>

            <p className="text-base text-ink leading-relaxed">
              I’m looking to join a professional team where I can contribute to
              real products, learn from experienced developers, and take on more
              responsibility over time.
            </p>

            <p className="text-base text-ink mt-4 leading-relaxed">
              I want to grow not just as a developer, but as someone who can
              contribute to product decisions, collaborate effectively, and
              deliver reliable production code.
            </p>
          </div>
        </div>

        {/* CTA */}
        <p className="text-center text-lg text-ink font-normal">
          Feel free to{" "}
          <Link href="#contact">
            <span className="text-[#0f172a] font-medium underline hover:opacity-80 transition">
              reach out
            </span>
          </Link>{" "}
          — I’m always open to interesting projects and opportunities.
        </p>

        {/* Image */}
        <div className="flex justify-center mt-12">
          <Image
            src="/images/devices.svg"
            alt="Devices illustration"
            width={800}
            height={600}
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
