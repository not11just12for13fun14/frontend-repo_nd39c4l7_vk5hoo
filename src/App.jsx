import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ParallaxSection from './components/ParallaxSection'
import Gallery from './components/Gallery'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <main>
        <Hero />
        <ParallaxSection />
        <Gallery />

        {/* Footer */}
        <footer id="contact" className="relative border-t border-white/10 bg-slate-950/80">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <p className="text-white/70 text-sm">© {new Date().getFullYear()} AeroTrips. All rights reserved.</p>
              <div className="flex items-center gap-4 text-sm text-white/70">
                <a href="#home" className="hover:text-white">Home</a>
                <a href="#destinations" className="hover:text-white">Destinations</a>
                <a href="#gallery" className="hover:text-white">Gallery</a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
