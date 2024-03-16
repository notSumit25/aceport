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

export default function Home() {
  return (
    <main className="bg-black">
        <Navbar className="top-2" />
        <GridBackgroundDemo />
        <TextGenerateEffectDemo />
        <HeroParallax products={products} />
    </main>
  );
}

const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cursor.png",
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/rogue.png",
  },

  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editorially.png",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editrix.png",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
  },

  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/algochurn.png",
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
  },

  {
    title: "Creme Digital",
    link: "https://cremedigital.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
  },
  {
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/invoker.png",
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
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
            <HoveredLink href="/web-dev">About me</HoveredLink>
            <HoveredLink href="/contact-me">Contact me</HoveredLink>
            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink>
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
