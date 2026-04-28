export default function Navbar() {
  return (
    <nav className="bg-indigo-950 text-white p-5 flex justify-between items-center px-10 shadow-md">
      <h1 className="text-2xl font-black text-amber-500 uppercase">
        Estacionamiento
      </h1>
      <button className="bg-amber-500 text-indigo-950 px-5 py-2 rounded-lg font-bold">
        Ingresar
      </button>
    </nav>
  );
}