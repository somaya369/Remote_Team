import MemberCard from "@/components/MemberCard";
import { members } from "@/data/members";

export default function TeamPage() {
  return (
    <section className="container">
      <div className="mb-10">
        <p className="uppercase tracking-widest text-blue-600 dark:text-blue-400 text-sm font-bold">
          Our Team
        </p>

        <h1 className="text-5xl font-black mt-2 text-slate-900 dark:text-white">
          Team Members
        </h1>

        <p className="text-slate-600 dark:text-slate-300 mt-3 max-w-2xl">
          Meet the talented professionals working together to deliver projects,
          manage tasks, and build innovative solutions.
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-5 mb-8">
        <div className="card p-6">
          <p className="text-slate-500 dark:text-slate-400">
            Total Members
          </p>
          <h2 className="text-4xl font-black mt-2 text-slate-900 dark:text-white">
            {members.length}
          </h2>
        </div>

        <div className="card p-6">
          <p className="text-slate-500 dark:text-slate-400">
            Developers
          </p>
          <h2 className="text-4xl font-black mt-2 text-slate-900 dark:text-white">
            4
          </h2>
        </div>

        <div className="card p-6">
          <p className="text-slate-500 dark:text-slate-400">
            Designers
          </p>
          <h2 className="text-4xl font-black mt-2 text-slate-900 dark:text-white">
            2
          </h2>
        </div>

        <div className="card p-6">
          <p className="text-slate-500 dark:text-slate-400">
            Project Managers
          </p>
          <h2 className="text-4xl font-black mt-2 text-slate-900 dark:text-white">
            2
          </h2>
        </div>
      </div>

      <div className="card p-6 mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h2 className="text-2xl font-black text-slate-900 dark:text-white">
              Team Directory
            </h2>

            <p className="text-slate-500 dark:text-slate-400 mt-1">
              Browse team members and their skills.
            </p>
          </div>

          <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-3 rounded-xl font-bold hover:scale-105 transition">
            + Add Member
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {members.map((member) => (
          <MemberCard key={member.name} member={member} />
        ))}
      </div>
    </section>
  );
}