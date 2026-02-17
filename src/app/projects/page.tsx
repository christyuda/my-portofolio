// src/app/projects/page.tsx
export default function Projects() {
    const projects = [
      { title: "Website Portofolio", description: "Website pribadi menggunakan Next.js 14 & TypeScript." },
      { title: "Sistem Distribusi Farm", description: "Sistem manajemen farm berbasis web." },
      { title: "E-commerce Kue", description: "Toko online dengan backend Node.js & Next.js." },
    ];
  
  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <h1 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">Proyek Saya</h1>
      <ul className="space-y-4">
        {projects.map((project, index) => (
          <li key={index} className="border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/70 p-4 rounded-xl shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white">{project.title}</h2>
            <p className="text-slate-600 dark:text-slate-300 mt-1">{project.description}</p>
          </li>
        ))}
      </ul>
    </main>
  );
  }
  
