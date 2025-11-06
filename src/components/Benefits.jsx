import { Zap, FileCheck2, Handshake } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Lavoro flessibile e immediato",
    desc: "Opportunità on-demand, quando ti serve. Filtra per ruolo, orario e compenso.",
  },
  {
    icon: FileCheck2,
    title: "Contratti chiari e trasparenti",
    desc: "Niente sorprese: condizioni, paghe e tempi sono sempre sotto controllo.",
  },
  {
    icon: Handshake,
    title: "Nessun intermediario inutile",
    desc: "Connessione diretta tra lavoratori e datori di lavoro, senza burocrazia superflua.",
  },
];

export default function Benefits() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Benefici principali</h2>
          <p className="mt-3 text-gray-600">Per chi cerca e per chi offre lavoro: un'unica piattaforma per lavorare meglio.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {benefits.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/10 text-blue-700">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
