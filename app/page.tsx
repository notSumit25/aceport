'use client'
import Image from "next/image";
import { GridBackgroundDemo } from "./components/GridBg";
import { TracingBeam } from "./components/ui/tracing-beam";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./components/ui/navbar-menu";
import { useState } from "react";
import { cn } from "@/utils/cn";
import { HeroParallaxDemo } from "./components/Projects";
import { HeroParallax } from "./components/ui/hero-parallax";
import { TextGenerateEffectDemo } from "./components/About";
import Skills from "./components/Skills";
import TimeLine from "./components/TimeLine";

export default function Home() {
  return (
    <main className="bg-black">
        <Navbar className="top-2" />
        <GridBackgroundDemo />
        <TextGenerateEffectDemo />
        <HeroParallax products={products} />
        <TimeLine />
        <Skills />
    </main>
  );
}

const products = [
  {
    title: "Blisscord",
    link: "https://blisscord-two.vercel.app/",
    thumbnail:
      "/discord1.jpg",
  },
  {
    title: "LuneBlaze",
    link: "https://www.luneblaze.com/",
    thumbnail:
      "/luneblaze1.png",
  },

  {
    title: "Geniushub",
    link: "https://www.geniushub.in/",
    thumbnail:
      "/geniushub1.png",
  },
  {
    title: "IMD-Blite",
    link: "https://imd-blite.vercel.app/",
    thumbnail:
      "/imdb.webp",
  },
  {
    title: "DashView",
    link: "https://github.com/notSumit25/EcomDashBoard",
    thumbnail:
      "/dashboard.jpg",
  },
  {
    title: "WhyBother",
    link: "https://why-bother-gpt.vercel.app/",
    thumbnail:
      "/whybother.png",
  },
  
];


function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="About">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="#about">About me</HoveredLink>
            <HoveredLink href="/contact-me">Contact me</HoveredLink>
            <HoveredLink href="resume.pdf" download>Resume</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Projects">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Blisscord"
              href="https://blisscord-two.vercel.app/"
              src='/discord.png'
              description="A discord clone with a twist made with Next.js, Tailwind CSS, sockets and much more."
            />
            <ProductItem
              title="Geniushub"
              href="https://geniushub.in"
              src='/geniushub.png'
              description="A platform for students to learn and grow with the help of mentors."
            />
            <ProductItem
              title="LuneBlaze"
              href="https://LuneBlaze.com"
              src="/luneblaze.png"
              description="Luneblaze provides Tech-based solutions to help institutions."
            />
            <ProductItem
              title="IMDB Clone"
              href="https://imd-blite.vercel.app/"
              src='/imdb.png'
              description="A clone of the IMDB website made with Next.js, Tailwind CSS, and much more."
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Socials">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="https://www.instagram.com/sumit___garg/">Instagram</HoveredLink>
            <HoveredLink href="https://www.linkedin.com/in/sumit-garg-056b8b23a/">Linkedin</HoveredLink>
            <HoveredLink href="https://github.com/notSumit25">Github</HoveredLink>
            {/* <HoveredLink href="/enterprise"></HoveredLink> */}
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
