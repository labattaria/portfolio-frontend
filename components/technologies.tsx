import Image from "next/image";
import { technologies } from "@/data/technologies";

export default function Technologies() {
  return (
    <section id="technologies" className="py-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-montserrat uppercase font-bold text-heading text-center">
          Technologies
        </h2>

        <hr className="border-2 border-gray-300 w-32 mx-auto my-6" />

        <p className="text-lg text-center font-normal text-ink mb-8">
          Technologies and tools I love working with to build efficient,
          high-performance, modern applications.
        </p>

        <ul className="grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] gap-6 justify-items-center">
          {technologies.map((tech) => (
            <li
              key={tech.name}
              className="flex flex-col items-center text-center w-auto"
            >
              <Image
                src={tech.src}
                alt={tech.name}
                width={60}
                height={60}
                className="mb-2"
              />
              <span className="text-ink text-sm font-normal">{tech.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
