'use client';

import Masonry from "@/components/gallery/GalleryMasonry";

const items = [
  {
    id: "2",
    img: "/gallery/pantheon-25-25.webp",
    height: 800,
  },
  {
    id: "3",
    img: "/gallery/pantheon-25-15.webp",
    height: 500,
  },
  {
    id: "4",
    img: "/gallery/pantheon-25-30.webp",
    height: 300,
  },
  {
    id: "5",
    img: "/gallery/pantheon-25-4.webp",
    height: 400,
  },
  {
    id: "6",
    img: "/gallery/pantheon-25-27.webp",
    height: 300,
  },
  // {
  //   id: "7",
  //   img: "/gallery/pantheon-25-28.webp",
  //   height: 500,
  // },
  {
    id: "8",
    img: "/gallery/pantheon-25-26.webp",
    height: 300,
  },
  {
    id: "9",
    img: "/gallery/pantheon-25-19.webp",
    height: 300,
  },
  {
    id: "10",
    img: "/gallery/pantheon-25-17.webp",
    height: 300,
  },
  {
    id: "11",
    img: "/gallery/pantheon-25-21.webp",
    height: 300,
  },
  {
    id: "1",
    img: "/gallery/pantheon-25-29.webp",
    height: 600,
  },
  {
    id: "12",
    img: "/gallery/pantheon-25-11.webp",
    height: 300,
  },
  {
    id: "13",
    img: "/gallery/pantheon-25-31.webp",
    height: 300,
  },
  {
    id: "14",
    img: "/gallery/pantheon-25-3.webp",
    height: 400,
  },
  {
    id: "15",
    img: "/gallery/pantheon-25-9.webp",
    height: 300,
  },
  {
    id: "16",
    img: "/gallery/pantheon-25-5.webp",
    height: 400,
  },
  {
    id: "17",
    img: "/gallery/pantheon-25-1.webp",
    height: 500,
  },
  {
    id: "18",
    img: "/gallery/pantheon-25-10.webp",
    height: 600,
  },
  {
    id: "19",
    img: "/gallery/pantheon-25-14.webp",
    height: 400,
  },
  {
    id: "20",
    img: "/gallery/pantheon-25-23.webp",
    height: 400,
  },
  {
    id: "21",
    img: "/gallery/pantheon-25-13.webp",
    height: 300,
  },
  {
    id: "22",
    img: "/gallery/pantheon-25-6.webp",
    height: 300,
  },
  {
    id: "23",
    img: "/gallery/pantheon-25-2.webp",
    height: 400,
  },
  {
    id: "24",
    img: "/gallery/pantheon-25-18.webp",
    height: 300,
  },
  {
    id: "25",
    img: "/gallery/pantheon-25-24.webp",
    height: 400,
  },
  {
    id: "26",
    img: "/gallery/pantheon-25-8.webp",
    height: 400,
  },
  {
    id: "27",
    img: "/gallery/pantheon-25-22.webp",
    height: 300,
  },
  {
    id: "28",
    img: "/gallery/pantheon-25-16.webp",
    height: 300,
  },
  {
    id: "29",
    img: "/gallery/pantheon-25-12.webp",
    height: 500,
  },
  {
    id: "30",
    img: "/gallery/pantheon-25-7.webp",
    height: 300,
  },
  {
    id: "31",
    img: "/gallery/pantheon-25-20.webp",
    height: 300,
  },
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-slate-950 pt-32 px-6 pb-6 md:pt-28 md:px-12 md:pb-12">
      <div className="max-w-7xl mx-auto">

        {/* Gallery Heading */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            <span className="h-2 w-2 rounded-full bg-cyan-400" />

            <span className="font-mono text-xs tracking-[0.25em] text-cyan-400">
              PANTHEON / ARCHIVE
            </span>
          </div>

          <div className="flex items-end justify-between">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
              GALLERY
            </h1>

            <span className="hidden md:block font-mono text-xs tracking-widest text-slate-500">
              2025
            </span>
          </div>

          <div className="mt-5 h-px w-full bg-white/10" />
        </div>

        {/* Your existing gallery — untouched */}
        <Masonry
          items={items}
          ease="power3.out"
          duration={0.6}
          stagger={0.05}
          animateFrom="bottom"
          blurToFocus
        />
      </div>
    </main>
  );
}
