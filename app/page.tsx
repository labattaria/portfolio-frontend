import About from "@/components/about";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Technologies from "@/components/technologies";

export default function Home() {
  return (
    <main className="pt-[76px]">
      <Hero />

      <About />

      <Technologies />

      <Projects />

      <Footer />
    </main>
  );
}
