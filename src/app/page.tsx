import Hero from "../../components/home/Hero";
import { Features } from "../../components/home/Features";
import { Templates } from "../../components/home/Templates";
import { Numbers } from "../../components/home/Numbers";

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <Templates />
      <Numbers />
    </div>
  );
}
