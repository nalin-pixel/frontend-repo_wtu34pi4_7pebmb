import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import AuthModal from './components/AuthModal'
import Footer from './components/Footer'

function App() {
  const [authOpen, setAuthOpen] = useState(false)
  const [authMode, setAuthMode] = useState('login')

  const openAuth = (mode) => { setAuthMode(mode); setAuthOpen(true) }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_10%_10%,rgba(56,189,248,0.15),transparent),radial-gradient(50%_60%_at_90%_10%,rgba(129,140,248,0.12),transparent),radial-gradient(40%_50%_at_50%_100%,rgba(59,130,246,0.1),transparent)] pointer-events-none" />

      <Navbar onOpenAuth={openAuth} />
      <main className="relative">
        <Hero />
        <Features />
        <Pricing onSelectPlan={(plan) => openAuth('signup')} />
      </main>
      <Footer />

      <AuthModal open={authOpen} mode={authMode} onClose={() => setAuthOpen(false)} />
    </div>
  )
}

export default App
