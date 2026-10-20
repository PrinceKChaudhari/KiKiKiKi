import Link from "next/link";
const links = [{ title: "Components", href: "/docs/components" }, { title: "Documentation", href: "/docs" }, { title: "Themes", href: "/themes" }, { title: "Free Forever", href: "/pricing" }];
export default function Footer() {
  return <footer className="mt-16 border-t-2 bg-card"><div className="container mx-auto flex flex-col justify-between gap-8 px-4 py-12 md:flex-row"><div><Link href="/" className="font-head text-3xl">KIKIKIKI</Link><p className="mt-3 max-w-sm text-muted-foreground">Bold interfaces. Playful components. Zero price tag.</p></div><nav aria-label="Footer" className="flex flex-wrap items-start gap-6">{links.map(link => <Link key={link.href} href={link.href} className="underline-offset-4 hover:underline">{link.title}</Link>)}</nav></div></footer>;
}
