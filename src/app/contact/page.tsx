export default function Contact(){
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Hubungi Saya</h1>
      <p className="mt-4 text-slate-600 dark:text-slate-300">
        Anda bisa menghubungi saya melalui email di{" "}
        <a
          href="mailto:chrisyuda@ulbi.ac.id"
          className="text-indigo-700 dark:text-cyan-300 hover:underline"
        >
          chrisyuda@ulbi.ac.id
        </a>
      </p>
    </main>
  )
}
