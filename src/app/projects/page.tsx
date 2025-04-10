// src/app/projects/page.tsx
export default function Projects() {
    const projects = [
      { title: "Website Portofolio", description: "Website pribadi menggunakan Next.js 14 & TypeScript." },
      { title: "Sistem Distribusi Farm", description: "Sistem manajemen farm berbasis web." },
      { title: "E-commerce Kue", description: "Toko online dengan backend Node.js & Next.js." },
    ];
  
    return (
      <main className="p-6">
        <h1 className="text-3xl font-bold mb-4">Proyek Saya</h1>
        <ul className="space-y-4">
          {projects.map((project, index) => (
            <li key={index} className="border p-4 rounded-md shadow-md">
              <h2 className="text-xl font-semibold">{project.title}</h2>
              <p className="text-gray-600">{project.description}</p>
            </li>
          ))}
        </ul>
      </main>
    );
  }
  