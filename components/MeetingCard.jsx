export default function MeetingCard({ meeting }) {
  return (
    <div className="card p-6">
      <div className="w-12 h-12 rounded-2xl bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-300 flex items-center justify-center text-2xl mb-4">
        📅
      </div>

      <h3 className="text-xl font-bold text-slate-900 dark:text-white">
        {meeting.title}
      </h3>

      <div className="mt-4 space-y-3">
        <p className="text-slate-600 dark:text-slate-300">
          <span className="font-semibold text-slate-900 dark:text-white">
            Date:
          </span>{" "}
          {meeting.date}
        </p>

        <p className="text-slate-600 dark:text-slate-300">
          <span className="font-semibold text-slate-900 dark:text-white">
            Type:
          </span>{" "}
          {meeting.type}
        </p>

        <div>
          <p className="font-semibold text-slate-900 dark:text-white">
            Participants
          </p>

          <div className="flex flex-wrap gap-2 mt-2">
            {meeting.participants.map((person) => (
              <span
                key={person}
                className="bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-3 py-1 rounded-full text-sm text-slate-700 dark:text-slate-300"
              >
                {person}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}