import { projects } from "@/data/projects";
import Link from "next/link";

export default function ProjectDetailsPage({ params }) {
  const project = projects.find((item) => item.id === params.id);

  if (!project) {
    return (
      <section className="container">
        <h1 className="text-3xl font-bold">Project not found</h1>
        <Link href="/projects" className="text-blue-600 mt-4 inline-block">
          Back to Projects
        </Link>
      </section>
    );
  }

  return (
    <section className="container">
      <Link href="/projects" className="text-blue-600 font-semibold">
        ← Back to Projects
      </Link>

      <div className="bg-white p-8 rounded-3xl shadow-sm mt-6">
        <h1 className="text-4xl font-bold">{project.title}</h1>
        <p className="text-gray-600 mt-4 text-lg">{project.fullDescription}</p>

        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div>
            <h3 className="font-bold">Status</h3>
            <p className="text-gray-600">{project.status}</p>
          </div>

          <div>
            <h3 className="font-bold">Deadline</h3>
            <p className="text-gray-600">{project.deadline}</p>
          </div>

          <div>
            <h3 className="font-bold">Assigned Team</h3>
            <p className="text-gray-600">{project.team.join(", ")}</p>
          </div>

          <div>
            <h3 className="font-bold">Technologies</h3>
            <p className="text-gray-600">{project.technologies.join(", ")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}