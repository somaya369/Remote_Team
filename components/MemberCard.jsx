export default function MemberCard({ member }) {
  return (
    <div className="card p-6">
      <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-300 flex items-center justify-center text-2xl font-bold mb-4">
        {member.name.charAt(0)}
      </div>

      <h3 className="text-xl font-bold text-slate-900 dark:text-white">
        {member.name}
      </h3>

      <p className="text-blue-600 dark:text-blue-400 font-medium">
        {member.role}
      </p>

      <p className="text-slate-600 dark:text-slate-300 mt-2">{member.bio}</p>

      <div className="flex flex-wrap gap-2 mt-4">
        {member.skills.map((skill) => (
          <span
            key={skill}
            className="bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-3 py-1 rounded-full text-sm text-slate-700 dark:text-slate-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}