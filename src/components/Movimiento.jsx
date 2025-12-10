export default function Movimiento({ label, monto, tipo = "ingreso" }) {
  return (
    <div className="flex justify-between items-center w-full px-2 my-4">
      
      {/* Texto izquierda */}
      <span className="text-black text-lg">
        {label}
      </span>

      {/* Pill monto */}
      <span
        className={`px-4 py-2 rounded-2xl text-white font-bold text-lg
          ${tipo === "ingreso" ? "bg-[#5DA8FF]" : "bg-[#E64878]"}
        `}
      >
        s/{monto}
      </span>
    </div>
  );
}
