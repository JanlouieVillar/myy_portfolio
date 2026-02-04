export default function Contact() {
  return (
    <section className="min-h-[calc(100vh-80px)] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Get in Touch
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            Interested in working together or have a question?
            Feel free to reach out — I’m always open to new opportunities
            and conversations.
          </p>
        </div>

      
        <div className="grid md:grid-cols-2 gap-12 items-start">
          
          
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-lg">
            <h2 className="text-xl font-semibold mb-6">
              Contact Information
            </h2>

            <div className="space-y-5 text-gray-300">
              <div>
                <p className="text-sm text-gray-500 mb-1">Email</p>
                <p className="font-medium">
                  villarjanlouie@email.com
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500 mb-1">Viber</p>
                <p className="font-medium">
                  +63 928 225 4627
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500 mb-1">GitHub</p>
                <a
                  href="https://github.com/JanlouieVillar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition"
                >
                  github.com/JanlouieVillar →
                </a>
              </div>
            </div>
          </div>

          
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-lg">
            <h2 className="text-xl font-semibold mb-6">
              Send a Message
            </h2>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your name"
                className="w-full p-3 bg-slate-950 border border-slate-800 rounded-lg focus:outline-none focus:border-blue-500 transition"
              />

              <input
                type="email"
                placeholder="Your email"
                className="w-full p-3 bg-slate-950 border border-slate-800 rounded-lg focus:outline-none focus:border-blue-500 transition"
              />

              <textarea
                rows="5"
                placeholder="Your message"
                className="w-full p-3 bg-slate-950 border border-slate-800 rounded-lg focus:outline-none focus:border-blue-500 transition resize-none"
              />

              <button
                type="submit"
                className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-500 transition px-6 py-3 rounded-lg font-medium"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
