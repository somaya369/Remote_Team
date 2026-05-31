import MemberCard from "@/components/MemberCard";
import { members } from "@/data/members";

export default function TeamPage() {
  return (
    <section className="container">
      <h1 className="text-4xl font-bold mb-3">Team Members</h1>
      <p className="text-gray-600 mb-8">
        Meet the people working inside the remote workspace.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {members.map((member) => (
          <MemberCard key={member.name} member={member} />
        ))}
      </div>
    </section>
  );
}