import { Shield, CreditCard, Globe, Zap } from 'lucide-react'

export default function Features() {
  const items = [
    {
      icon: <Shield className="h-5 w-5" />, 
      title: 'Bank-grade security', 
      desc: 'PCI-DSS compliant tokenization, real-time risk engine and anomaly detection.'
    },
    {
      icon: <CreditCard className="h-5 w-5" />, 
      title: 'Global card acceptance', 
      desc: 'Visa, MasterCard, AMEX and local methods with smart retries and network tokens.'
    },
    {
      icon: <Globe className="h-5 w-5" />, 
      title: 'International ready', 
      desc: '135+ currencies, multi-language receipts and automatic tax handling.'
    },
    {
      icon: <Zap className="h-5 w-5" />, 
      title: 'Lightning fast', 
      desc: 'Sub-500ms API response times with edge-cached webhooks.'
    }
  ]

  return (
    <section id="features" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((f, i) => (
            <div key={i} className="rounded-2xl bg-white/5 border border-white/10 p-6 text-white/80 hover:bg-white/7.5 transition">
              <div className="h-10 w-10 rounded-xl bg-white/10 border border-white/10 text-white flex items-center justify-center mb-4">
                {f.icon}
              </div>
              <h3 className="text-white font-semibold">{f.title}</h3>
              <p className="text-sm mt-1 text-white/70">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
