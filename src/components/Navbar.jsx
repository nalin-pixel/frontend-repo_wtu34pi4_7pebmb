import { useState } from 'react'
import { Menu, X, LogIn, UserPlus } from 'lucide-react'

export default function Navbar({ onOpenAuth }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="relative z-20">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg shadow-blue-500/30 flex items-center justify-center">
            <span className="text-white font-black">F</span>
          </div>
          <span className="text-white/90 font-semibold tracking-tight">FlamesPay</span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm">
          <a href="#features" className="text-white/70 hover:text-white transition">Features</a>
          <a href="#pricing" className="text-white/70 hover:text-white transition">Pricing</a>
          <a href="#faq" className="text-white/70 hover:text-white transition">FAQ</a>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button onClick={() => onOpenAuth('login')} className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-white/90 hover:text-white transition">
            <LogIn size={18} />
            <span>Log in</span>
          </button>
          <button onClick={() => onOpenAuth('signup')} className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-slate-900 font-semibold hover:bg-blue-50 transition shadow">
            <UserPlus size={18} />
            <span>Get started</span>
          </button>
        </div>

        <button className="md:hidden text-white/80" onClick={() => setOpen(v => !v)}>
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden mx-4 rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-4 space-y-3">
          <a href="#features" className="block text-white/80">Features</a>
          <a href="#pricing" className="block text-white/80">Pricing</a>
          <a href="#faq" className="block text-white/80">FAQ</a>
          <div className="flex items-center gap-3 pt-2">
            <button onClick={() => onOpenAuth('login')} className="flex-1 px-4 py-2 rounded-lg text-white/90 bg-white/10">Log in</button>
            <button onClick={() => onOpenAuth('signup')} className="flex-1 px-4 py-2 rounded-lg bg-white text-slate-900 font-semibold">Get started</button>
          </div>
        </div>
      )}
    </header>
  )
}
