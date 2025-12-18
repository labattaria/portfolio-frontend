import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section id="about">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl uppercase font-bold text-heading text-center">
          About Me
        </h2>

        <hr className="border-2 border-gray-300 w-32 mx-auto my-6" />

        <p className="text-[20px] text-center font-normal text-ink mb-12 max-w-3xl mx-auto">
          I’m a Junior Frontend Developer focused on building modern,
          high-performance, and user-friendly web applications. I already have
          hands-on experience creating real projects and enjoy understanding how
          applications work under the hood — from component structure and state
          management to data flow and performance considerations.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-center">
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-semibold mb-3 text-heading">
              Experience
            </h3>
            <p className="text-base font-normal text-ink">
              Over the past 2.5 years, I’ve built and shipped multiple frontend
              projects using React and Next.js. I work with TypeScript, Redux
              Toolkit, Tailwind CSS, Git, and modern tooling, and I have
              practical experience designing application structure, managing
              state, working with data, and deploying projects with attention to
              scalability, performance, and code quality.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="text-xl font-semibold mb-3 text-heading">Growth</h3>
            <p className="text-base font-normal text-ink">
              I’m naturally curious and approach learning through hands-on
              experimentation. I regularly explore documentation, analyze other
              developers’ solutions, refactor my own code, and look for better
              architectural and UX decisions with each new project. I value
              feedback, code reviews, and clear reasoning behind technical
              choices.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="text-xl font-semibold mb-3 text-heading">Goals</h3>
            <p className="text-base font-normal text-ink">
              At this stage, I want to move from independent project work into a
              professional team environment. I want to contribute to real
              products, collaborate closely with other developers, and continue
              growing through practical challenges, mentorship, and shared
              responsibility for production code.
            </p>
          </div>
        </div>

        <p className="text-center text-lg text-ink font-normal">
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
