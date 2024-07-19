import Image from "next/image";
import { FeatureCard } from "./components/FeatureCard";

export default function Home() {
  return (
    <main>
     <section className="hero">
      <div className="hero-content flex-col md:flex-row">
        <Image className="w-full md:w-1/2 p-5" src="/backie.jpg" alt="logo" width="1920" height="1080" />
        <div>
        <h1 className="text-5xl font-bold py-3">
          Have fun
        </h1>
        <h2 className="text-xl font-bold pb-3">
          Have fun with me
        </h2>
        <span className="btn btn-primary">Learn more</span></div>
      </div>
     </section>

     <section className="text-center mt-4">
      <h3 className="text-3xl font-bold pb-3">
        Our features
      </h3>
      <div className="flex w-full md:justify-around flex-col md:flex-row">
        <FeatureCard className="w-full md:w-1/4" title="Arg1" description="Arg2" image="/backie.jpg" />
        <FeatureCard className="w-full md:w-1/4" title="Arg2" description="Arg2" image="/backie.jpg" />
        <FeatureCard className="w-full md:w-1/4" title="Arg3" description="Arg2" image="/backie.jpg" />
      </div>

     </section>
    </main>
  );
}
