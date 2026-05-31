import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Remote Team Workspace",
  description: "Modern workspace for remote teams",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}