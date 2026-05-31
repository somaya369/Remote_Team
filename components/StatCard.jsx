export default function StatCard({ title, value, icon }) {
  return (
    <div className="card p-6">
      <div className="w-12 h-12 rounded-2xl bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-300 flex items-center justify-center text-2xl mb-4">
        {icon}
      </div>

      <p className="text-slate-500 dark:text-slate-400 font-medium">{title}</p>

      <h3 className="text-4xl font-black mt-2 text-slate-900 dark:text-white">
        {value}
      </h3>
    </div>
  );
}