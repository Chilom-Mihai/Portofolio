import Approach from "./components/approach";
import Experience from "./components/experience";
import Footer from "./components/footer";
import Grid from "./components/grid";
import Hero from "./components/hero";
import Hobbies from "./components/hobbies";
import Projects from "./components/projects";
import { FloatingNav } from "./components/ui/floating-navbar";
import { navItems } from "./data";

export default function Home() {
  return (
    <main className="relative bg-black-100 text-white flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems}></FloatingNav>
        <Hero />
        <Grid />
        <Projects />
        <Hobbies />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
