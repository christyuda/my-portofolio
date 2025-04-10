import { HoverEffect } from "./ui/CardHoverEffect"; // ✅ ambil dari index.ts
import { projects } from "@/data"; // ✅ ambil dari index.ts

export function CardHoverEffectDemo() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-white text-3xl font-bold mb-10 text-center">
        This My Projects
        </h2>
        <HoverEffect items={projects} />
      </div>
    </section>
  );
}
