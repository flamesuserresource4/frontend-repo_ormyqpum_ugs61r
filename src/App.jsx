import { useState } from 'react'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Benefits from './components/Benefits'
import FooterCTA from './components/FooterCTA'

function App() {
  const [signups, setSignups] = useState([])

  const handleJoin = (email) => {
    setSignups((prev) => [...prev, email])
    // For now, we simply store emails locally and show a lightweight confirmation.
    alert('Grazie! Ti abbiamo aggiunto alla lista d’attesa: ' + email)
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Simple navbar with logo */}
      <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600" />
            <span className="font-semibold">RunWork</span>
          </div>
          <button onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })} className="rounded-lg px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">Unisciti</button>
        </div>
      </header>

      <main>
        <Hero onJoinClick={handleJoin} />
        <HowItWorks />
        <Benefits />
        <FooterCTA onSignup={handleJoin} />
      </main>

      <footer className="py-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} RunWork — Tutti i diritti riservati.
      </footer>
    </div>
  )
}

export default App
