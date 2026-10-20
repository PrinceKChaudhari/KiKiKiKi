import TopNav from "@/components/TopNav";
import Footer from "./footer";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return <><TopNav />{children}<Footer /></>;
}
