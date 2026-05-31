import Link from "next/link";

export default function ProjectCard({ project }) {
  return (
    <div className="card p-6">
      <div className="flex justify-between items-start gap-4">
        <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
          {project.title}
        </h3>

        <span className="badge">{project.status}</span>
      </div>

      <p className="text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
        {project.shortDescription}
      </p>

      <div className="flex flex-wrap gap-2 mt-5">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-3 py-1 rounded-full text-sm text-slate-700 dark:text-slate-300"
          >
            {tech}
          </span>
        ))}
      </div>

      <Link
        href={`/projects/${project.id}`}
        className="inline-block mt-6 text-blue-600 dark:text-blue-400 font-bold hover:underline"
      >
        View Details →
      </Link>
    </div>
  );
}