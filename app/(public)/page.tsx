import FaultyTerminal from "@/components/ui/FaultyTerminal";
import Image from "next/image";
import PantheonGallery from '@/components/ui/PantheonGallery';
import DotGrid from '@/components/ui/Dotgrid';
import ScrollTakeover from "@/components/ui/ScrollTakeover";
import Dayhighlight from "@/components/ui/Dayhighlight";
import AboutPantheon from "@/components/ui/AboutPantheon";
import Sponsors from "@/components/ui/Sponsors";

const galleryImages = [
  "/globe_1.jpeg",
  "/globe_2.jpeg",
  "/globe_3.jpeg",
  "/globe_4.jpeg",
  "/globe_5.jpeg",
  "/globe_1.jpeg",
  "/globe_2.jpeg",
  "/globe_3.jpeg",
  "/globe_4.jpeg",
  "/globe_5.jpeg",
];

export default function Home() {
  const heroContent = (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <FaultyTerminal
          scale={1.5}
          gridMul={[2, 1]}
          digitSize={1.2}
          timeScale={0.5}
          pause={false}
          scanlineIntensity={0.5}
          glitchAmount={1}
          flickerAmount={1}
          noiseAmp={1}
          chromaticAberration={0}
          dither={0}
          curvature={0.1}
          tint="#7C3AED"
          mouseReact
          mouseStrength={0.5}
          pageLoadAnimation
          brightness={0.6}
        />
      </div>

      <div className="relative z-10 flex h-full items-center justify-center pointer-events-none">
        <Image
          src="/old_pantheon.svg"
          alt="Pantheon"
          width={600}
          height={600}
          className="h-auto w-[500px] md:w-[650px]"
          priority
        />
      </div>
    </section>
  );

  return (
    <main className="min-h-screen bg-black text-white">
      {/* 1. Normal Hero Section */}
      {heroContent}

      {/* 2. About Pantheon Section */}
      <AboutPantheon />

      {/* 3. Day 1 Highlights Section (Normal Scroll) */}
      <Dayhighlight />

      {/* 4. ScrollTakeover: Pins Sponsors, PantheonGallery slides over it */}
      <ScrollTakeover hero={<Sponsors />}>  
        {/* Gallery Section */}
        <section className="relative w-full min-h-screen bg-[#050505] flex items-center justify-center">
          <PantheonGallery images={galleryImages} />
        </section>
      </ScrollTakeover>
    </main>
  );
}