export default function ContactPage() {
  return (
    <section className="container">
      <div className="mb-10">
        <h1 className="text-5xl font-black text-slate-900 dark:text-white">
          Contact Support
        </h1>

        <p className="mt-3 text-slate-600 dark:text-slate-300">
          Need help? Our support team is ready to assist you.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Contact Info */}

        <div className="card p-8">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
            Contact Information
          </h2>

          <div className="space-y-6">
            <div>
              <p className="font-semibold text-blue-600">📧 Email</p>
              <p className="text-slate-600 dark:text-slate-300">
                support@remoteteam.com
              </p>
            </div>

            <div>
              <p className="font-semibold text-blue-600">📞 Phone</p>
              <p className="text-slate-600 dark:text-slate-300">
                +1 (555) 123-4567
              </p>
            </div>

            <div>
              <p className="font-semibold text-blue-600">📍 Address</p>
              <p className="text-slate-600 dark:text-slate-300">
                Remote Team Workspace HQ
              </p>
            </div>

            <div>
              <p className="font-semibold text-blue-600">🕒 Working Hours</p>
              <p className="text-slate-600 dark:text-slate-300">
                Monday - Friday
                <br />
                9:00 AM - 6:00 PM
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}

        <form className="card p-8 lg:col-span-2">
          <div className="grid md:grid-cols-2 gap-5 mb-5">
            <div>
              <label className="block font-semibold mb-2 text-slate-900 dark:text-white">
                Full Name
              </label>

              <input
                type="text"
                placeholder="John Doe"
                className="w-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white rounded-xl px-4 py-3"
              />
            </div>

            <div>
              <label className="block font-semibold mb-2 text-slate-900 dark:text-white">
                Email
              </label>

              <input
                type="email"
                placeholder="john@example.com"
                className="w-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white rounded-xl px-4 py-3"
              />
            </div>
          </div>

          <div className="mb-5">
            <label className="block font-semibold mb-2 text-slate-900 dark:text-white">
              Subject
            </label>

            <input
              type="text"
              placeholder="How can we help?"
              className="w-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white rounded-xl px-4 py-3"
            />
          </div>

          <div className="mb-6">
            <label className="block font-semibold mb-2 text-slate-900 dark:text-white">
              Message
            </label>

            <textarea
              rows="6"
              placeholder="Write your message..."
              className="w-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white rounded-xl px-4 py-3"
            />
          </div>

          <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-xl font-semibold hover:scale-105 transition">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}