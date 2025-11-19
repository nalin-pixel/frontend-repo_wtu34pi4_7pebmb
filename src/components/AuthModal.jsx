import { useEffect, useState } from 'react'
import { X } from 'lucide-react'

export default function AuthModal({ open, mode = 'login', onClose }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  useEffect(() => {
    if (!open) {
      setEmail(''); setPassword(''); setName(''); setMessage('')
    }
  }, [open, mode])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')
    try {
      const endpoint = mode === 'signup' ? '/auth/signup' : '/auth/login'
      const payload = mode === 'signup' ? { name, email, password } : { email, password }
      const res = await fetch(`${baseUrl}${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Request failed')
      setMessage(data.message + (data.plan ? ` • Plan: ${data.plan}` : ''))
    } catch (err) {
      setMessage(err.message)
    } finally {
      setLoading(false)
    }
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-30 grid place-items-center p-4">
      <div className="absolute inset-0 bg-slate-900/70 backdrop-blur" onClick={onClose} />
      <div className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
        <button className="absolute right-3 top-3 text-slate-500 hover:text-slate-700" onClick={onClose}>
          <X />
        </button>
        <h3 className="text-2xl font-bold">{mode === 'signup' ? 'Create your account' : 'Welcome back'}</h3>
        <p className="text-slate-600 text-sm mt-1">Authenticate to start using the platform.</p>

        <form onSubmit={handleSubmit} className="mt-4 space-y-3">
          {mode === 'signup' && (
            <div>
              <label className="text-sm font-medium">Name</label>
              <input value={name} onChange={e => setName(e.target.value)} required className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-900" placeholder="Jane Doe" />
            </div>
          )}
          <div>
            <label className="text-sm font-medium">Email</label>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} required className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-900" placeholder="you@example.com" />
          </div>
          <div>
            <label className="text-sm font-medium">Password</label>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} required className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-900" placeholder="••••••••" />
          </div>
          <button disabled={loading} className="w-full rounded-xl bg-slate-900 text-white font-semibold px-4 py-2 hover:bg-slate-800 disabled:opacity-70">
            {loading ? 'Please wait…' : (mode === 'signup' ? 'Create account' : 'Log in')}
          </button>
        </form>

        {message && <p className="mt-3 text-sm text-slate-700">{message}</p>}
      </div>
    </div>
  )
}
