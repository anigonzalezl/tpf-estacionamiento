export default function Hero() {
  return (
    <section className="bg-indigo-950 text-white min-h-[80vh] flex items-center px-8 lg:px-24">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight">
            Tu <span className="text-amber-500">estacionamiento</span> <br />
            en la palma de tu mano.
          </h1>
          <p className="mt-6 text-indigo-100 text-lg lg:text-xl">
            Dejá de dar vueltas. Encontrá, reservá y pagá tu lugar en segundos. 
            Rápido, seguro y sin estrés.
          </p>
          <div className="mt-10 flex gap-4">
            <button data-testid="btn-buscar" className="bg-amber-500 hover:bg-amber-600 text-indigo-950 font-bold py-4 px-8 rounded-xl shadow-lg transition-transform hover:scale-105">
              Encontrar lugar
            </button>
            <button data-testid="btn-proponer" className="border-2 border-white/20 hover:bg-white/10 font-bold py-4 px-8 rounded-xl transition">
              Sumar mi playa
            </button>
          </div>
        </div>

        <div className="hidden lg:block">
          <div className="bg-indigo-900/50 h-[450px] rounded-[3rem] border-2 border-indigo-700 flex items-center justify-center backdrop-blur-sm">
            <p className="text-indigo-400 font-mono text-sm"> [ Mapa Interactivo ] </p>
          </div>
        </div>
      </div>
    </section>
  );
}