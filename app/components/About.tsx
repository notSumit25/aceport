"use client";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const words = `I'm a Python and web Developer, I also Love Competitive Programming and solving questions. I started my Coding journey in 2022 with Java but switched to CPP in December, I started web development in January 2023 and Never looked back. Completed my Full stack and DSA in June 2023 with Projects. Then I started Learning Next.JS and Have been using it ever since. As for my Hobbies I'm a Gamer by heart, I play CSGO, Apex Legends and many other Online Games. If you want to know more about me, Feel free to connect with me on my socials.`;

export function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words} />;
}
