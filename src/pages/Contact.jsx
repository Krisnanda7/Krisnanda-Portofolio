import React, { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSend = () => {
    const body = `Hi Bagus,\n\n${message}\n\n---\nFrom: ${name}${email ? "\nEmail: " + email : ""}`;
    const mailto = `mailto:baguskrisna424@gmail.com?subject=${encodeURIComponent(subject || "General Inquiry")}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  };

  return (
    <div className="kontak py-20 sm:px-10 px-4" id="kontak">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center sm:items-start mb-12">
          <div className="flex items-center gap-2 bg-violet-500/10 border border-violet-500/30 rounded-full px-4 py-1.5 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
            <span className="text-xs text-violet-400 uppercase tracking-widest">
              Available for work
            </span>
          </div>
          <h1
            className="text-4xl sm:text-5xl font-bold text-zinc-100 leading-tight mb-3 text-center sm:text-left"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Let's <span className="text-violet-500">build</span> something
            <br className="hidden sm:block" /> together
          </h1>
          <p
            className="text-zinc-500 text-base max-w-md text-center sm:text-left"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            Have a project in mind? Fill out the form and I'll get back to you
            within 24 hours.
          </p>
        </div>

        {/* Grid */}
        <div
          className="grid sm:grid-cols-[1fr_1.4fr] grid-cols-1 gap-8"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="400"
        >
          {/* Left — Info Cards */}
          <div className="hidden sm:flex flex-col gap-4">
            {[
              { icon: "✉️", label: "Email", value: "baguskrisna424@gmail.com" },
              { icon: "📍", label: "Location", value: "Bali, Indonesia" },
              { icon: "⏱️", label: "Response time", value: "Within 24 hours" },
            ].map(({ icon, label, value }) => (
              <div
                key={label}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4 flex items-start gap-4 hover:border-violet-500/40 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center text-lg flex-shrink-0">
                  {icon}
                </div>
                <div>
                  <p className="text-xs text-zinc-600 uppercase tracking-wider mb-1">
                    {label}
                  </p>
                  <p className="text-sm text-zinc-300 font-medium">{value}</p>
                </div>
              </div>
            ))}

            <div className="flex items-center gap-2 bg-green-500/10 border border-green-500/25 rounded-full px-4 py-2 w-fit mt-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm text-green-400">
                Open to opportunities
              </span>
            </div>
          </div>

          {/* Right — Form */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
            <div className="grid grid-cols-2 gap-4 mb-5">
              <div className="flex flex-col gap-2">
                <label className="text-xs text-zinc-500 uppercase tracking-wider">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-zinc-950 border border-zinc-700 rounded-xl px-4 py-3 text-sm text-zinc-200 placeholder:text-zinc-600 outline-none focus:border-violet-500/60 focus:ring-1 focus:ring-violet-500/20 transition"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs text-zinc-500 uppercase tracking-wider">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-zinc-950 border border-zinc-700 rounded-xl px-4 py-3 text-sm text-zinc-200 placeholder:text-zinc-600 outline-none focus:border-violet-500/60 focus:ring-1 focus:ring-violet-500/20 transition"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2 mb-5">
              <label className="text-xs text-zinc-500 uppercase tracking-wider">
                Subject
              </label>
              <select
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="bg-zinc-950 border border-zinc-700 rounded-xl px-4 py-3 text-sm text-zinc-400 outline-none focus:border-violet-500/60 transition appearance-none cursor-pointer"
              >
                <option value="" disabled>
                  Select a topic...
                </option>
                <option value="Project Collaboration">
                  Project Collaboration
                </option>
                <option value="Freelance Work">Freelance Work</option>
                <option value="Job Opportunity">Job Opportunity</option>
                <option value="General Inquiry">General Inquiry</option>
              </select>
            </div>

            <div className="flex flex-col gap-2 mb-6">
              <label className="text-xs text-zinc-500 uppercase tracking-wider">
                Message
              </label>
              <textarea
                placeholder="Tell me about your project, goals, or ideas..."
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="bg-zinc-950 border border-zinc-700 rounded-xl px-4 py-3 text-sm text-zinc-200 placeholder:text-zinc-600 outline-none focus:border-violet-500/60 focus:ring-1 focus:ring-violet-500/20 transition resize-none"
              />
            </div>

            <button
              onClick={handleSend}
              className="w-full bg-violet-700 hover:bg-violet-600 text-white font-semibold rounded-xl py-3.5 flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              Send Message →
            </button>
            <p className="text-center text-xs text-zinc-600 mt-3">
              Opens Gmail — no data stored anywhere.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
