import { Navbar } from "@/components/public/Navbar";
import { Footer } from "@/components/public/Footer";

export function PublicShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col vb-bg">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

