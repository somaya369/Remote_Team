"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

const links = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Projects", href: "/projects" },
  { name: "Tasks", href: "/tasks" },
  { name: "Team", href: "/team" },
  { name: "Meetings", href: "/meetings" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-5 py-4 flex flex-col lg:flex-row justify-between lg:items-center gap-4">
        <Link
          href="/dashboard"
          className="text-2xl font-black tracking-tight dark:text-white"
        >
          <span className="text-blue-600">Remote</span>Team
        </Link>

        <div className="flex flex-wrap gap-2 items-center">
          {links.map((link) => {
            const active = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition ${
                  active
                    ? "bg-blue-600 text-white"
                    : "text-slate-600 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-slate-800"
                }`}
              >
                {link.name}
              </Link>
            );
          })}

          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}