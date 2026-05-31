export default function MeetingCard({ meeting }) {
  return (
    <div className="card p-6">
      <h3 className="text-xl font-bold text-slate-900 dark:text-white">
        {meeting.title}
      </h3>

      <p className="text-slate-600 dark:text-slate-300 mt-2">
        Date: {meeting.date}
      </p>

      <p className="text-slate-600 dark:text-slate-300">
        Type: {meeting.type}
      </p>

      <div className="mt-3">
        <p className="font-semibold text-slate-900 dark:text-white">
          Participants:
        </p>

        <p className="text-slate-600 dark:text-slate-300">
          {meeting.participants.join(", ")}
        </p>
      </div>
    </div>
  );
}