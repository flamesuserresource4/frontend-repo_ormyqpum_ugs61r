import { useState } from "react";

export default function FooterCTA({ onSignup }) {
  const [email, setEmail] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!email) return;
    onSignup?.(email);
    setEmail("");
  };

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600 opacity-95" />
      <div className="relative">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-3xl font-bold text-white sm:text-4xl">
                Stiamo arrivando. Sii tra i primi a provarla.
              </h3>
              <p className="mt-3 text-indigo-100">
                Iscriviti alla lista d'attesa per ricevere l'invito al lancio ufficiale.
              </p>
            </div>
            <form onSubmit={submit} className="flex w-full max-w-md items-center gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="La tua email"
                className="w-full rounded-xl border border-white/30 bg-white/10 px-4 py-3 text-white placeholder-indigo-100/80 backdrop-blur focus:border-white focus:outline-none focus:ring-2 focus:ring-white/40"
              />
              <button
                type="submit"
                className="inline-flex shrink-0 items-center justify-center rounded-xl bg-white px-5 py-3 font-semibold text-blue-700 shadow-sm transition hover:bg-blue-50"
              >
                Iscriviti ora
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
