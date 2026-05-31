export default function ContactPage() {
  return (
    <section className="container">
      <h1 className="text-4xl font-bold mb-3 text-slate-900 dark:text-white">
        Contact Support
      </h1>

      <p className="text-slate-600 dark:text-slate-300 mb-8">
        Need help? Send a message to our support team.
      </p>

      <form className="card p-8 max-w-2xl">
        <div className="mb-5">
          <label className="block font-semibold mb-2 text-slate-900 dark:text-white">
            Full Name
          </label>

          <input
            type="text"
            placeholder="Enter your name"
            className="w-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder:text-slate-400 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-5">
          <label className="block font-semibold mb-2 text-slate-900 dark:text-white">
            Email
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder:text-slate-400 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-5">
          <label className="block font-semibold mb-2 text-slate-900 dark:text-white">
            Message
          </label>

          <textarea
            rows="5"
            placeholder="Write your message"
            className="w-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder:text-slate-400 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition">
          Send Message
        </button>
      </form>
    </section>
  );
}