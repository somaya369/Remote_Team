import MeetingCard from "@/components/MeetingCard";
import { meetings } from "@/data/meetings";

export default function MeetingsPage() {
  return (
    <section className="container">
      <h1 className="text-4xl font-bold mb-3">Meetings</h1>
      <p className="text-gray-600 mb-8">
        View upcoming meetings and online collaboration sessions.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {meetings.map((meeting) => (
          <MeetingCard key={meeting.title} meeting={meeting} />
        ))}
      </div>
    </section>
  );
}