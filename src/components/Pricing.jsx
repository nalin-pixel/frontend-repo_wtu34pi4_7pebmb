import { Check } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function Pricing({ onSelectPlan }) {
  const [plans, setPlans] = useState([])
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  useEffect(() => {
    fetch(`${baseUrl}/pricing`).then(r => r.json()).then(data => setPlans(data.plans || []))
  }, [])

  return (
    <section id="pricing" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white">Simple, transparent pricing</h2>
          <p className="mt-2 text-white/70">Start free. Upgrade when you grow.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {plans.map((plan, idx) => (
            <div key={idx} className={`rounded-2xl p-6 border ${plan.popular ? 'bg-white text-slate-900 border-white shadow-xl' : 'bg-white/5 border-white/10 text-white'} transition`}>
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold">{plan.name}</h3>
                {plan.popular && <span className="text-xs px-2 py-1 rounded-full bg-slate-900 text-white">Popular</span>}
              </div>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-black">{plan.price === 0 ? 'Free' : `$${plan.price}`}</span>
                {plan.price !== 0 && <span className="text-sm opacity-60">/{plan.period}</span>}
              </div>
              <ul className="mt-6 space-y-2 text-sm">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className={`h-5 w-5 rounded-full flex items-center justify-center ${plan.popular ? 'bg-slate-900 text-white' : 'bg-white/10 text-white'}`}>
                      <Check size={14} />
                    </span>
                    <span className="opacity-80">{f}</span>
                  </li>
                ))}
              </ul>
              <button onClick={() => onSelectPlan(plan.name)} className={`mt-6 w-full rounded-xl px-4 py-3 font-semibold ${plan.popular ? 'bg-slate-900 text-white hover:bg-slate-800' : 'bg-white text-slate-900 hover:bg-blue-50'}`}>
                {plan.price === 0 ? 'Get started' : 'Choose ' + plan.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
