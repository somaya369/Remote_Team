const tasks = [
  { title: "Design dashboard UI", status: "Completed", priority: "High" },
  { title: "Create project cards", status: "In Progress", priority: "Medium" },
  { title: "Build meeting page", status: "Pending", priority: "Low" },
  { title: "Test responsive layout", status: "Pending", priority: "High" },
];

export default function TasksPage() {
  return (
    <section className="container">
      <h1 className="text-4xl font-bold mb-3">Tasks</h1>
      <p className="text-gray-600 mb-8">
        Track important tasks for your remote team.
      </p>

      <div className="bg-black text-white rounded-2xl shadow-sm overflow-hidden">
        {tasks.map((task) => (
          <div
            key={task.title}
            className="p-5 border-b flex flex-col md:flex-row md:items-center md:justify-between gap-3"
          >
            <h3 className="font-semibold">{task.title}</h3>

            <div className="flex gap-3">
              <span className="bg-blue-100 text_black text-blue-700  px-3 py-1 rounded-full text-sm">
                {task.status}
              </span>
              <span className="bg-slate-100 text-black px-3 py-1 rounded-full text-sm">
                {task.priority}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}