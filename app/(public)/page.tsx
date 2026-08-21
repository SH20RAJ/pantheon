import FaultyTerminal from "@/components/ui/FaultyTerminal";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      <section className="relative h-screen w-full overflow-hidden">
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
    </main>
  );
}