import { Rocket } from "lucide-react";
import { useState } from "react";

export default function Hero({ onJoinClick }) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    onJoinClick?.(email);
    setEmail("");
  };

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-sky-50 to-cyan-50" />
      <div className="relative">
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-12 sm:pt-20 sm:pb-16 md:pt-24 md:pb-24">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/60 px-3 py-1 text-sm text-blue-700 backdrop-blur">
                <Rocket className="h-4 w-4" />
                <span>RunWork</span>
              </div>
              <h1 className="font-extrabold tracking-tight text-gray-900 text-4xl sm:text-5xl md:text-6xl">
                Il lavoro, quando vuoi tu.
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-gray-600">
                Trova o offri lavoro in modo veloce, sicuro e trasparente. La piattaforma
                che collega lavoratori e datori di lavoro per incarichi a chiamata o con Partita IVA.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 flex w-full max-w-md items-center gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Inserisci la tua email"
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
                />
                <button
                  type="submit"
                  className="inline-flex shrink-0 items-center justify-center rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
                >
                  Unisciti alla lista d’attesa
                </button>
              </form>

              <p className="mt-3 text-sm text-gray-500">
                Camerieri • Elettricisti • Baby-sitter • Giardinieri • Freelance di ogni tipo
              </p>
            </div>

            <div className="relative mx-auto w-full max-w-md md:max-w-none">
              <div className="relative mx-auto h-[520px] w-[260px] rounded-[3rem] border-8 border-gray-900 bg-gray-900 shadow-2xl">
                <div className="absolute inset-0 rounded-[2.4rem] bg-gradient-to-b from-sky-400 via-blue-500 to-indigo-600" />
                <div className="absolute left-1/2 top-2 h-6 w-32 -translate-x-1/2 rounded-full bg-gray-800/90" />
                <div className="absolute inset-x-3 bottom-3 h-8 rounded-2xl bg-gray-800/40" />
                <div className="absolute inset-3 rounded-[2rem] bg-white/5 backdrop-blur-sm" />
                <div className="absolute inset-6 rounded-3xl bg-white p-4">
                  <div className="rounded-2xl bg-gray-50 p-3 shadow-inner">
                    <div className="mb-3 flex items-center justify-between">
                      <div className="h-2 w-16 rounded bg-gray-200" />
                      <div className="h-2 w-24 rounded bg-gray-200" />
                    </div>
                    <div className="h-28 rounded-xl bg-gradient-to-br from-blue-100 to-indigo-100" />
                  </div>
                  <div className="mt-4 space-y-3">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex items-center justify-between rounded-xl border border-gray-200 p-3">
                        <div className="space-y-1">
                          <div className="h-2 w-36 rounded bg-gray-200" />
                          <div className="h-2 w-24 rounded bg-gray-100" />
                        </div>
                        <div className="h-8 w-8 rounded-lg bg-blue-600/10" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
