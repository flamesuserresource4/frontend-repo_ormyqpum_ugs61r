import { User, MousePointerClick, ShieldCheck } from "lucide-react";

const steps = [
  {
    icon: User,
    title: "Crea il tuo profilo",
    desc: "Presentati con competenze, esperienza e disponibilità. Bastano pochi minuti.",
  },
  {
    icon: MousePointerClick,
    title: "Pubblica o accetta lavori in pochi clic",
    desc: "Scopri opportunità vicine a te o pubblica richieste con dettagli e compenso.",
  },
  {
    icon: ShieldCheck,
    title: "Ricevi pagamenti in modo sicuro",
    desc: "Gestione contratti, fatture e tutele: tutto in un unico posto.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Come funziona
          </h2>
          <p className="mt-3 text-gray-600">
            Dalla registrazione al pagamento finale, tutto è semplice e trasparente.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {steps.map(({ icon: Icon, title, desc }) => (
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
