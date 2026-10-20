import "./global.css";
import { Archivo_Black, Space_Mono, Space_Grotesk } from "next/font/google";
import { Metadata } from "next";
import { Toaster } from "@/components/retroui";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";


const head = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-head",
  display: "swap",
});

const space = Space_Grotesk({ subsets: ['latin'], variable: '--font-sans' });

const mono = Space_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NeoBrutalism Styled React Components | KIKIKIKI",
  description:
    "KIKIKIKI - NeoBrutalism styled component library built with React and TailwindCSS for modern web apps.",
  openGraph: {

    title: "NeoBrutalism Styled React Components | KIKIKIKI",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en" className={cn("font-sans", space.variable)}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const darkMode = localStorage.getItem('darkMode');
                  if (darkMode === 'dark') {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {
                  console.error('Error applying theme:', e);
                }
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${head.variable} ${space.variable} ${mono.variable} bg-background text-foreground`}
      >
        <ThemeProvider>
          {children}
          <Toaster />
        </ThemeProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
