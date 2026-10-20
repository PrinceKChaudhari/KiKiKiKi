import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Gift } from "lucide-react";

export const metadata: Metadata = {
  title: "Free Forever | KIKIKIKI",
  description: "Free components, open source code, and bold design. Start building without a checkout or subscription.",
};

const resources = [
  { title: "Components", description: "Build with bold, customizable React components.", href: "/docs/components", action: "Explore components" },
  { title: "Documentation", description: "Go from your first install to a finished interface with practical guides.", href: "/docs", action: "Start building" },
  { title: "Themes", description: "Find your colors. Make the design your own with ready-to-use themes.", href: "/themes", action: "Find your theme" },
];

export default function FreePage() {
  return (
    <main>
      <section className="border-b-2 bg-primary px-4 py-20 text-primary-foreground sm:py-28">
        <div className="container mx-auto max-w-5xl text-center">
          <span className="inline-flex items-center gap-2 border-2 border-current bg-background px-4 py-2 font-mono text-sm text-foreground shadow-md"><Gift aria-hidden="true" size={18} /> ZERO COST. FULL CREATIVE FREEDOM.</span>
          <h1 className="mt-8 font-head text-5xl uppercase leading-tight sm:text-7xl lg:text-8xl">Big ideas.<br />Zero price tag.</h1>
          <p className="mx-auto mt-6 max-w-xl text-lg">Meet KIKIKIKI. Bold components and public docs, ready for your next project. No subscription. No card. Just build.</p>
          <Link href="/docs/components" className="mt-8 inline-flex items-center gap-3 border-2 border-foreground bg-background px-6 py-4 font-bold text-foreground shadow-md transition-transform hover:-translate-y-1 focus-visible:outline-4 focus-visible:outline-offset-4">Get started for free <ArrowRight aria-hidden="true" size={20} /></Link>
        </div>
      </section>
      <section aria-labelledby="included-heading" className="container mx-auto max-w-6xl px-4 py-20">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div><p className="font-mono text-sm uppercase">One simple plan</p><h2 id="included-heading" className="mt-2 font-head text-3xl sm:text-4xl">Free to start. Free to keep.</h2></div>
          <p className="font-head text-6xl">$0<span className="ml-2 font-sans text-base font-normal">forever</span></p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {resources.map(resource => <article key={resource.href} className="flex flex-col border-2 bg-card p-6 shadow-md"><Check aria-hidden="true" className="mb-6" /><h3 className="font-head text-2xl">{resource.title}</h3><p className="mb-8 mt-3 text-muted-foreground">{resource.description}</p><Link href={resource.href} className="mt-auto inline-flex items-center gap-2 font-bold underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4">{resource.action}<ArrowRight aria-hidden="true" size={18} /></Link></article>)}
        </div>
        <div className="mt-14 grid gap-8 border-t-2 pt-10 md:grid-cols-2">
          <div><h3 className="font-head text-xl">Do I need an account?</h3><p className="mt-3 text-muted-foreground">No account or payment is needed to browse the public components, documentation, and themes.</p></div>
          <div><h3 className="font-head text-xl">What does this include?</h3><p className="mt-3 text-muted-foreground">The public resources included in this repository. Separately hosted premium downloads and services are not included in this free offering.</p></div>
        </div>
      </section>
    </main>
  );
}
