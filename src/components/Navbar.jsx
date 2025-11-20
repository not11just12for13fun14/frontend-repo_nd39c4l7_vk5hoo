import { Plane, Menu, MapPin } from 'lucide-react'

function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-3 sm:p-4 shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
          <a href="#home" className="flex items-center gap-2 text-white/90">
            <div className="grid place-items-center h-10 w-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 text-white shadow-lg shadow-blue-500/30">
              <Plane className="h-5 w-5" />
            </div>
            <div className="text-left">
              <div className="text-sm leading-4 text-white/60">Explore</div>
              <div className="text-lg font-semibold tracking-tight">AeroTrips</div>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-1 text-white/80">
            {[
              { label: 'Destinations', href: '#destinations' },
              { label: 'Highlights', href: '#highlights' },
              { label: 'Gallery', href: '#gallery' },
              { label: 'Contact', href: '#contact' },
            ].map((item) => (
              <a key={item.label} href={item.href} className="px-3 py-2 rounded-lg hover:bg-white/10 transition-colors">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a href="#destinations" className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-400 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 hover:opacity-95 transition">
              <MapPin className="h-4 w-4" /> Explore
            </a>
            <button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white/90">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
