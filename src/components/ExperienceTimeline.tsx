import { timelineEvents } from "@/data";

const ExperienceTimeline = () => {
  return (
    <section id="timeline" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-10 text-center">
          <p className="text-indigo-700 dark:text-cyan-300 text-xs tracking-[0.25em] uppercase">
            Journey
          </p>
          <h2 className="text-slate-900 dark:text-white text-3xl md:text-4xl font-bold mt-3">
            Experience Timeline
          </h2>
        </div>

        <div className="relative pl-8">
          <div className="absolute left-2 top-0 h-full w-px bg-gradient-to-b from-indigo-500/60 dark:from-cyan-300/60 via-blue-500/30 dark:via-blue-400/40 to-transparent" />
          <div className="space-y-8">
            {timelineEvents.map((event) => (
              <article
                key={event.period + event.title}
                className="relative rounded-2xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 p-6"
              >
                <span className="absolute -left-[33px] top-7 h-4 w-4 rounded-full bg-indigo-500 dark:bg-cyan-300 shadow-[0_0_0_6px_rgba(99,102,241,0.18)] dark:shadow-[0_0_0_6px_rgba(56,189,248,0.15)]" />
                <p className="text-indigo-700 dark:text-cyan-200 text-sm font-medium">{event.period}</p>
                <h3 className="text-slate-900 dark:text-white text-xl font-semibold mt-1">
                  {event.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm mt-1">{event.subtitle}</p>
                <p className="text-slate-700 dark:text-slate-200 mt-4 leading-relaxed">
                  {event.detail}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
