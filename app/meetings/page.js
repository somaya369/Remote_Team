import MeetingCard from "@/components/MeetingCard";
import { meetings } from "@/data/meetings";

export default function MeetingsPage() {
  return (
    <section className="container">
      <div className="mb-10">
        <p className="uppercase tracking-widest text-blue-600 dark:text-blue-400 text-sm font-bold">
          Team Schedule
        </p>

        <h1 className="text-5xl font-black mt-2 text-slate-900 dark:text-white">
          Meetings
        </h1>

        <p className="text-slate-600 dark:text-slate-300 mt-3 max-w-2xl">
          View upcoming meetings, online collaboration sessions, and team
          discussions in one organized place.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-5 mb-8">
        <div className="card p-6">
          <p className="text-slate-500 dark:text-slate-400 font-medium">
            Total Meetings
          </p>
          <h2 className="text-4xl font-black mt-2 text-slate-900 dark:text-white">
            {meetings.length}
          </h2>
        </div>

        <div className="card p-6">
          <p className="text-slate-500 dark:text-slate-400 font-medium">
            Online Sessions
          </p>
          <h2 className="text-4xl font-black mt-2 text-slate-900 dark:text-white">
            3
          </h2>
        </div>

        <div className="card p-6">
          <p className="text-slate-500 dark:text-slate-400 font-medium">
            This Week
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
              Upcoming Schedule
            </h2>
            <p className="text-slate-500 dark:text-slate-400 mt-1">
              Keep track of team meetings and project discussions.
            </p>
          </div>

          <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-3 rounded-xl font-bold hover:scale-105 transition">
            + New Meeting
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {meetings.map((meeting) => (
          <MeetingCard key={meeting.title} meeting={meeting} />
        ))}
      </div>
    </section>
  );
}