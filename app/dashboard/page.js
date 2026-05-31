import StatCard from "@/components/StatCard";
import { projects } from "@/data/projects";
import { meetings } from "@/data/meetings";

export default function DashboardPage() {
  return (
    <section className="container">
      <div className="rounded-[32px] p-8 md:p-10 bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-xl shadow-blue-200 mb-8">
        <p className="uppercase tracking-widest text-blue-100 text-sm font-bold">
          Remote Team Workspace
        </p>
        <h1 className="text-4xl md:text-5xl font-black mt-3">
          Welcome back, Somaya👋
        </h1>
        <p className="mt-4 text-blue-100 max-w-2xl">
          Manage your projects, tasks, meetings, and team collaboration from one
          clean workspace.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <StatCard title="Active Projects" value="3" icon="📁" />
        <StatCard title="Pending Tasks" value="12" icon="✅" />
        <StatCard title="Team Members" value="8" icon="👥" />
        <StatCard title="Meetings" value="3" icon="📅" />
      </div>

      <div className="grid lg:grid-cols-2 gap-6 mt-8">
        <div className="card p-6">
          <h2 className="text-2xl font-black mb-4">Project Overview</h2>
          {projects.map((project) => (
            <div key={project.id} className="border-b border-slate-200 py-4">
              <h3 className="font-bold">{project.title}</h3>
              <p className="text-slate-500">{project.status}</p>
            </div>
          ))}
        </div>

        <div className="card p-6">
          <h2 className="text-2xl font-black mb-4">Upcoming Meetings</h2>
          {meetings.map((meeting) => (
            <div key={meeting.title} className="border-b border-slate-200 py-4">
              <h3 className="font-bold">{meeting.title}</h3>
              <p className="text-slate-500">{meeting.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}