import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-10 sm:pt-16 lg:pt-20">
      <div className="absolute inset-0 opacity-70">
        <div className="absolute inset-0 bg-gradient-to-b from-sky-500/10 via-transparent to-transparent pointer-events-none" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Payments reinvented for builders
            </div>

            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white">
              Modern fintech rails with a glassmorphic edge
            </h1>
            <p className="mt-4 text-lg text-white/70 max-w-xl">
              Accept cards globally, automate billing and grow revenue with a developer-first platform. Beautiful APIs. Clear pricing. No surprises.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#pricing" className="inline-flex justify-center items-center rounded-xl bg-white text-slate-900 font-semibold px-5 py-3 shadow hover:bg-blue-50 transition">
                See pricing
              </a>
              <a href="#" className="inline-flex justify-center items-center rounded-xl bg-white/10 text-white px-5 py-3 border border-white/15 hover:bg-white/15 transition">
                View docs
              </a>
            </div>

            <div className="mt-6 flex items-center gap-6 text-white/60">
              <div className="text-sm"><span className="text-white font-semibold">3 min</span> setup</div>
              <div className="text-sm"><span className="text-white font-semibold">99.99%</span> uptime</div>
              <div className="text-sm"><span className="text-white font-semibold">500ms</span> avg. latency</div>
            </div>
          </div>

          <div className="relative h-[420px] sm:h-[520px] lg:h-[600px] rounded-3xl border border-white/10 bg-white/5 backdrop-blur overflow-hidden">
            <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
        </div>
      </div>
    </section>
  )
}
