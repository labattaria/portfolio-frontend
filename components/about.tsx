import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section id="about">
      <div className="max-w-7xl mx-auto px-0">
        <h2 className="text-4xl uppercase font-bold text-heading text-center">
          About Me
        </h2>

        <hr className="border-2 border-gray-300 w-32 mx-auto my-6" />

        <p className="text-[20px] text-center font-normal text-ink mb-12 max-w-3xl mx-auto">
          I’m a Junior Frontend Developer passionate about creating modern,
          user-friendly web applications. Curious by nature, I constantly learn,
          experiment, and improve my skills to become a stronger developer.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center px-6">
            <h3 className="text-xl font-semibold mb-3 text-heading">
              Experience
            </h3>
            <p className="text-base font-normal text-ink">
              Over the past 2 years of studying and building projects, I’ve
              worked with modern frameworks like React and Next.js, along with
              tools such as TypeScript, Git, and Tailwind CSS, creating scalable
              and high-performance web apps.
            </p>
          </div>

          <div className="flex flex-col items-center px-6">
            <h3 className="text-xl font-semibold mb-3 text-heading">Growth</h3>
            <p className="text-base font-normal text-ink">
              I’m naturally curious and always looking for new challenges. I
              enjoy exploring new tools, trying out fresh ideas, and finding
              better ways to build and improve with every project I take on.
            </p>
          </div>

          <div className="flex flex-col items-center px-6">
            <h3 className="text-xl font-semibold mb-3 text-heading">Goals</h3>
            <p className="text-base font-normal text-ink">
              I’m looking for a full-time job where I can put my knowledge into
              practice, collaborate with a team, contribute to real projects,
              and continue growing as a Frontend Developer.
            </p>
          </div>
        </div>

        <p className="text-center px-6 mt-8 text-lg text-ink font-normal">
          Feel free to{" "}
          <Link href="#contact">
            <span className="text-lg text-[#0f172a] font-medium underline">
              drop me a line
            </span>
          </Link>{" "}
          to say hi, or with any interesting ideas to work on!
        </p>

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
