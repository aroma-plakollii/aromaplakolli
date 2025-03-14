import {Header} from "@/components/Header";
import {About} from "@/components/About";
import {Skills} from "@/components/Skills";
import {Projects} from "@/components/Projects";
import {Links} from "@/components/Links";

export default function Home() {
  return (
    <div>
      <div className={'w-11/12 xl:w-8/12 mx-auto mt-14 mb-28'}>
        <Header />
        <About />
        <Skills />
        <Projects />
        <Links />
      </div>
    </div>
  );
}
