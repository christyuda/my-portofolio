import { nowHighlights } from "@/data";

const NowSection = () => {
  return (
    <section id="now" className="py-20 px-6">
      <div className="max-w-6xl mx-auto rounded-3xl border border-slate-200 dark:border-white/10 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.16),_rgba(241,245,249,0.95)_45%)] dark:bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_rgba(10,12,26,0.95)_45%)] p-8 md:p-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          <div className="lg:col-span-2">
            <p className="text-indigo-700 dark:text-cyan-300 text-xs tracking-[0.25em] uppercase">
              Current Focus
            </p>
            <h2 className="text-slate-900 dark:text-white text-3xl font-bold mt-3">
              What I&apos;m Working On Right Now
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mt-4">
              I build practical products with measurable outcomes. If you have
              an idea, I can help from planning to deployment.
            </p>
            <a
              href="mailto:chrisyuda@ulbi.ac.id"
              className="inline-flex mt-6 rounded-full border border-indigo-400/50 dark:border-cyan-300/40 px-5 py-2 text-sm text-indigo-700 dark:text-cyan-200 hover:bg-indigo-300/10 dark:hover:bg-cyan-300/10"
            >
              Let&apos;s Talk
            </a>
          </div>

          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4">
            {nowHighlights.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white/70 dark:bg-slate-900/60 p-5"
              >
                <h3 className="text-slate-900 dark:text-white font-semibold">{item.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm mt-2">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NowSection;
