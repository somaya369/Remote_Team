import StatCard from "@/components/StatCard";
import { projects } from "@/data/projects";
import { meetings } from "@/data/meetings";

const activities = [
  "Somaya updated the Remote Team Workspace dashboard.",
  "New project meeting scheduled for Monday.",
  "Design team uploaded the latest UI improvements.",
];

export default function DashboardPage() {
  return (
    <section className="container">
      <div className="relative overflow-hidden rounded-[36px] p-8 md:p-12 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-2xl shadow-blue-200 dark:shadow-none mb-8">
        <div className="absolute -top-16 -right-16 w-48 h-48 bg-white/20 rounded-full blur-2xl"></div>
        <div className="absolute -bottom-20 -left-20 w-56 h-56 bg-blue-300/20 rounded-full blur-2xl"></div>

        <div className="relative z-10">
          <p className="uppercase tracking-widest text-blue-100 text-sm font-bold">
            Remote Team Workspace
          </p>

          <h1 className="text-4xl md:text-6xl font-black mt-3 leading-tight">
            Welcome back,Somaya 👋
          </h1>

          <p className="mt-4 text-blue-100 max-w-2xl text-lg">
            Manage your projects, tasks, meetings, and team collaboration from
            one clean and powerful workspace.
          </p>

          <div className="flex flex-wrap gap-3 mt-7">
            <button className="bg-white text-blue-700 px-5 py-3 rounded-xl font-bold hover:scale-105 transition">
              View Projects
            </button>

            <button className="bg-white/15 border border-white/30 text-white px-5 py-3 rounded-xl font-bold hover:bg-white/25 transition">
              Schedule Meeting
            </button>
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <StatCard title="Active Projects" value="3" icon="📁" />
        <StatCard title="Pending Tasks" value="12" icon="✅" />
        <StatCard title="Team Members" value="8" icon="👥" />
        <StatCard title="Upcoming Meetings" value="3" icon="📅" />
      </div>

      <div className="grid lg:grid-cols-3 gap-6 mt-8">
        <div className="card p-6 lg:col-span-2">
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-2xl font-black text-slate-900 dark:text-white">
              Project Overview
            </h2>

            <span className="text-sm text-blue-600 dark:text-blue-400 font-bold">
              View all
            </span>
          </div>

          <div className="space-y-4">
            {projects.map((project) => (
              <div
                key={project.id}
                className="p-4 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/60"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white">
                      {project.title}
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">
                      Deadline: {project.deadline}
                    </p>
                  </div>

                  <span className="badge w-fit">{project.status}</span>
                </div>

                <div className="mt-4 h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"
                    style={{
                      width:
                        project.status === "Completed"
                          ? "100%"
                          : project.status === "In Progress"
                          ? "65%"
                          : "30%",
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card p-6">
          <h2 className="text-2xl font-black mb-5 text-slate-900 dark:text-white">
            Upcoming Meetings
          </h2>

          <div className="space-y-4">
            {meetings.map((meeting) => (
              <div
                key={meeting.title}
                className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700"
              >
                <h3 className="font-bold text-slate-900 dark:text-white">
                  {meeting.title}
                </h3>

                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
                  {meeting.date}
                </p>

                <p className="text-blue-600 dark:text-blue-400 text-sm font-semibold mt-2">
                  {meeting.type}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6 mt-8">
        <div className="card p-6 lg:col-span-2">
          <h2 className="text-2xl font-black mb-5 text-slate-900 dark:text-white">
            Recent Activity
          </h2>

          <div className="space-y-4">
            {activities.map((activity, index) => (
              <div
                key={activity}
                className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700"
              >
                <div className="w-9 h-9 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-300 flex items-center justify-center font-bold">
                  {index + 1}
                </div>

                <p className="text-slate-600 dark:text-slate-300">
                  {activity}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="card p-6">
          <h2 className="text-2xl font-black mb-4 text-slate-900 dark:text-white">
            Team Productivity
          </h2>

          <p className="text-slate-500 dark:text-slate-400 mb-5">
            Weekly collaboration score
          </p>

          <div className="text-5xl font-black text-blue-600 dark:text-blue-400">
            87%
          </div>

          <div className="mt-5 h-3 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
            <div className="h-full w-[87%] bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}