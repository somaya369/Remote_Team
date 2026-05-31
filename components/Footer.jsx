import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-5 py-8 grid md:grid-cols-3 gap-6">
        <div>
          <h2 className="text-xl font-bold">RemoteTeam</h2>
          <p className="text-slate-300 mt-2">
            A modern workspace for productive remote teams.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Links</h3>
          <div className="flex flex-col gap-1 text-slate-300">
            <Link href="/projects">Projects</Link>
            <Link href="/tasks">Tasks</Link>
            <Link href="/team">Team</Link>
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Support</h3>
          <p className="text-slate-300">Email: support@remoteteam.com</p>
          <p className="text-slate-300">Social: LinkedIn | GitHub</p>
        </div>
      </div>

      <p className="text-center text-slate-400 pb-5">
        © 2026 Remote Team Workspace. All rights reserved.
      </p>
    </footer>
  );
}