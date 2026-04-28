import Navbar from "./components/Navbar" 
import Hero from "./components/Hero"

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* <Navbar />  <-- Descomentarlo cuando este!! */}
      <Hero />
      
      {/* Sección de Beneficios ¿? */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold text-indigo-950">¿Por qué usar nuestra web?</h2>
        {/* iconos¡?*/}
      </section>
    </div>
  )
}

export default App