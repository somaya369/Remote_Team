export default function MemberCard({ member }) {
  return (
    <div className="card p-6">
      <div className="flex items-center gap-4 mb-5">
        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white flex items-center justify-center text-2xl font-bold">
          {member.name.charAt(0)}
        </div>

        <div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
            {member.name}
          </h3>

          <p className="text-blue-600 dark:text-blue-400 font-medium">
            {member.role}
          </p>
        </div>
      </div>

      <p className="text-slate-600 dark:text-slate-300 mb-5">
        {member.bio}
      </p>

      <h4 className="font-semibold text-slate-900 dark:text-white mb-3">
        Skills
      </h4>

      <div className="flex flex-wrap gap-2">
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