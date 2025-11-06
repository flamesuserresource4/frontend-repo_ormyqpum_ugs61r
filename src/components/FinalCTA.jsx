import { Mail } from "lucide-react";
import { useState } from "react";

export default function FinalCTA() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | success | error

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      return;
    }
    setStatus("success");
    setEmail("");
  };

  return (
    <section id="waitlist" className="py-20 bg-white">
      <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          Stiamo arrivando. Sii tra i primi a provarla.
        </h2>
        <p className="mt-3 text-slate-600">
          Iscriviti per ricevere un invito al lancio ufficiale di RunWork.
        </p>

        <form onSubmit={handleSubmit} className="mx-auto mt-8 flex flex-col sm:flex-row gap-3 max-w-xl">
          <div className="relative flex-1">
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (status !== "idle") setStatus("idle");
              }}
              placeholder="La tua email"
              className={`w-full rounded-xl border px-4 py-3 outline-none transition placeholder:text-slate-400 ${
                status === "error"
                  ? "border-red-400 focus:ring-2 focus:ring-red-200"
                  : "border-slate-300 focus:ring-2 focus:ring-sky-200"
              }`}
            />
            <Mail className="h-5 w-5 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2" />
          </div>
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-6 py-3 text-white font-semibold shadow-lg shadow-emerald-600/30 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 transition"
          >
            Iscriviti ora
          </button>
        </form>

        {status === "success" && (
          <p className="mt-4 text-sm text-emerald-700">
            Grazie! Ti avviseremo al momento del lancio.
          </p>
        )}
        {status === "error" && (
          <p className="mt-4 text-sm text-red-600">Inserisci un'email valida.</p>
        )}
      </div>
    </section>
  );
}
