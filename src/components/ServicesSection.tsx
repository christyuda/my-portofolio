import {
  FaGlobe,
  FaMobileAlt,
  FaServer,
  FaCogs,
  FaChartLine,
  FaRocket,
} from "react-icons/fa";

const services = [
  {
    title: "Landing Pages",
    description:
      "High-converting landing pages for campaigns, product launches, and business showcases.",
    icon: FaGlobe,
  },
  {
    title: "CRM / ERP Systems",
    description:
      "Custom dashboards and operational modules tailored for team workflows and reporting.",
    icon: FaChartLine,
  },
  {
    title: "Custom Web Apps",
    description:
      "End-to-end web applications from architecture design to production-ready delivery.",
    icon: FaServer,
  },
  {
    title: "Mobile Applications",
    description:
      "Cross-platform mobile apps with clean UX, stable performance, and scalable codebase.",
    icon: FaMobileAlt,
  },
  {
    title: "API Integration & Automation",
    description:
      "Integrate third-party services and automate repetitive business processes reliably.",
    icon: FaCogs,
  },
  {
    title: "Deployment & Optimization",
    description:
      "Dockerized deployment, environment setup, and performance optimization for production.",
    icon: FaRocket,
  },
];

const reasons = [
  {
    title: "Product Mindset",
    detail:
      "I focus on user value and business impact, not just technical implementation.",
  },
  {
    title: "Clear Communication",
    detail:
      "You get structured updates, realistic timelines, and transparent delivery process.",
  },
  {
    title: "End-to-End Execution",
    detail:
      "From planning, design handoff, development, testing, to deployment and iteration.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-indigo-700 dark:text-cyan-300 text-xs tracking-[0.25em] uppercase">
            Services
          </p>
          <h2 className="text-slate-900 dark:text-white text-3xl md:text-4xl font-bold mt-3">
            What I Can Build For You
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mt-4 max-w-2xl mx-auto">
            I deliver practical digital solutions for product teams, startups,
            and businesses that want to ship faster.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.title}
                className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/70 p-6 transition duration-300 hover:-translate-y-1 hover:border-indigo-400/55 dark:hover:border-cyan-300/40"
              >
                <Icon className="text-indigo-600 dark:text-cyan-300 text-xl" />
                <h3 className="text-slate-900 dark:text-white text-lg font-semibold mt-4">
                  {service.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm mt-2 leading-relaxed">
                  {service.description}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mt-10 rounded-2xl border border-slate-200 dark:border-white/10 bg-gradient-to-r from-indigo-50 to-slate-100 dark:from-slate-900/90 dark:to-[#0c1535] p-6 md:p-8">
          <p className="text-indigo-700 dark:text-cyan-200 text-xs tracking-[0.2em] uppercase">
            Why Work With Me
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-4">
            {reasons.map((reason) => (
              <article key={reason.title} className="rounded-xl bg-white/70 dark:bg-black/20 p-4 border border-slate-200 dark:border-white/5">
                <h3 className="text-slate-900 dark:text-white font-semibold">{reason.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm mt-2 leading-relaxed">
                  {reason.detail}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
