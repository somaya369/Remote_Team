import Link from "next/link";

export default function Home() {
  return (
    <section className="container text-center">
      <h1 className="text-5xl font-bold mb-4">Remote Team Workspace</h1>
      <p className="text-gray-600 text-lg max-w-2xl mx-auto">
        Manage projects, tasks, meetings, and team collaboration in one modern
        workspace.
      </p>

      <Link
        href="/dashboard"
        className="inline-block mt-8 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
      >
        Go to Dashboard
      </Link>
    </section>
  );
}