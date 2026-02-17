import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineSparkles } from "react-icons/hi2";
import { Spotlight } from "./ui/Spotlight";
import { BackgroundBeamsWithCollision } from "./ui/BackgroundBeamsWithCollision";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <BackgroundBeamsWithCollision>
          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 dark:border-white/10 bg-white/85 dark:bg-slate-950/80 p-8 md:p-10">
            <Spotlight
              className="-top-44 -left-20 md:-left-24 md:-top-28"
              fill="#22d3ee"
            />
            <Spotlight
              className="-top-40 left-1/2 md:left-[65%]"
              fill="#60a5fa"
            />

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.1),transparent_45%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.1),transparent_45%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.12),transparent_45%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.12),transparent_45%)]" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
              <div className="lg:col-span-2">
                <p className="text-indigo-700 dark:text-cyan-300 text-xs tracking-[0.25em] uppercase">
                  Contact
                </p>
                <h2 className="text-slate-900 dark:text-white text-3xl md:text-4xl font-bold mt-3 leading-tight">
                  Let&apos;s Build Something Meaningful
                </h2>
                <p className="text-slate-600 dark:text-slate-300 mt-4">
                  Open for freelance and full-time opportunities. If you need a
                  product-minded engineer, let&apos;s connect.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="text-xs px-3 py-1 rounded-full bg-indigo-500/15 text-indigo-700 dark:text-cyan-200 border border-indigo-400/40 dark:border-cyan-300/30">
                    Fast Response
                  </span>
                  <span className="text-xs px-3 py-1 rounded-full bg-slate-400/15 text-slate-700 dark:text-blue-200 border border-slate-400/40 dark:border-blue-300/30">
                    Remote Friendly
                  </span>
                  <span className="text-xs px-3 py-1 rounded-full bg-indigo-500/15 text-indigo-700 dark:text-indigo-200 border border-indigo-400/40 dark:border-indigo-300/30">
                    Project Based
                  </span>
                </div>
              </div>

              <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-4">
                <a
                  href="https://www.instagram.com/christyuda_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden rounded-2xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/70 p-5 transition duration-300 hover:-translate-y-1 hover:border-indigo-400/60 dark:hover:border-cyan-300/50"
                >
                  <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-indigo-500/20 dark:bg-cyan-500/20 blur-2xl" />
                  <div className="relative z-10">
                    <FaInstagram className="text-indigo-600 dark:text-cyan-300 text-xl" />
                    <p className="text-indigo-700 dark:text-cyan-200 text-sm mt-4">Instagram</p>
                    <h3 className="text-slate-900 dark:text-white text-lg font-semibold mt-1">
                      @christyuda_
                    </h3>
                    <p className="text-indigo-700 dark:text-cyan-300 text-sm mt-4 group-hover:text-indigo-800 dark:group-hover:text-cyan-200">
                      Open Instagram -&gt;
                    </p>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/chrisyuda/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden rounded-2xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/70 p-5 transition duration-300 hover:-translate-y-1 hover:border-indigo-400/60 dark:hover:border-blue-300/50"
                >
                  <div className="absolute -left-8 -bottom-8 h-24 w-24 rounded-full bg-blue-500/20 blur-2xl" />
                  <div className="relative z-10">
                    <FaLinkedinIn className="text-indigo-600 dark:text-blue-300 text-xl" />
                    <p className="text-indigo-700 dark:text-blue-200 text-sm mt-4">LinkedIn</p>
                    <h3 className="text-slate-900 dark:text-white text-lg font-semibold mt-1">
                      linkedin.com/in/chrisyuda
                    </h3>
                    <p className="text-indigo-700 dark:text-blue-300 text-sm mt-4 group-hover:text-indigo-800 dark:group-hover:text-blue-200">
                      Open LinkedIn -&gt;
                    </p>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/chrisyuda/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden rounded-2xl border border-slate-200 dark:border-white/10 bg-gradient-to-r from-indigo-50 to-slate-100 dark:from-slate-900 dark:to-[#0d1736] p-5 md:col-span-2 transition duration-300 hover:-translate-y-1 hover:border-indigo-400/60 dark:hover:border-indigo-300/50"
                >
                  <div className="absolute right-6 top-6 opacity-30 dark:opacity-30 opacity-60">
                    <HiOutlineSparkles className="text-4xl text-indigo-500 dark:text-indigo-200" />
                  </div>
                  <div className="relative z-10">
                    <p className="text-indigo-700 dark:text-indigo-200 text-sm">Project Collaboration</p>
                    <h3 className="text-slate-900 dark:text-white text-lg md:text-xl font-semibold mt-1">
                      Ready to ship your next product?
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 mt-2 text-sm">
                      Let&apos;s discuss goals, timeline, and execution plan.
                    </p>
                    <p className="text-indigo-700 dark:text-indigo-300 text-sm mt-4 group-hover:text-indigo-800 dark:group-hover:text-indigo-200">
                      Let&apos;s Connect -&gt;
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </BackgroundBeamsWithCollision>
      </div>
    </section>
  );
};

export default ContactSection;
