import user from "../assets/user.png";
import { useEffect } from "react";
import Movimiento from "../components/Movimiento";

export default function Home() {
useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const bg = document.getElementById("parallax-bg");

      bg.style.backgroundPositionY = `${scrollY * 0.3}px`; 
      // 0.3 = velocidad más lenta que el scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  return (

<div className=" w-full h-full">

  {/* HEADER CON IMAGEN */}
  <div
  id="parallax-bg"
  className="absolute top-0 left-0 w-full h-[200vh] bg-cover bg-top "
  style={{ backgroundImage: `url(${user})` }}
></div>

  {/* CONTENIDO ENCIMA DEL HEADER */}
    <div className="relative z-30 w-full flex justify-center flex flex-col items-center">
      {/* CABECERA */}
      <div className="text-xl w-[80%] font-bold h-[40vh] relative">
        <div className="absolute bottom-0 left-0 p-2 text-5xl text-white">
          HOLA, <br/><span className="text-7xl">PEDRO</span>
        </div>
      </div>
        <div className="w-[80%] bg-white/10 backdrop-blur-md rounded-xl p-4">
         {/* SALDO DISPONIBLE */}
          <div class="w-full bg-[#9B7AE0] rounded-3xl px-6 py-6 flex items-center justify-between">
            <span class="text-black text-xl font-semibold">Saldo disponible</span>

            <div class="bg-white px-6 py-2 rounded-2xl text-[#9B7AE0] text-xl font-bold">
              s/95
            </div>
          </div>

          {/* MOVIMIENTOS */}
          <div class="mt-6">
            <h2 class="text-lg font-bold text-black">Movimientos</h2>
            <hr class="border-black mt-1" />
            <Movimiento label="Kronologic Amazon" monto={95} tipo="ingreso" />
            <Movimiento label="Prueba" monto={0} tipo="gasto" />
</div>




        </div>
        <div>
<a
  href="https://www.amazon.com/hz/wishlist/ls/2HCI47ORIZDJN?ref_=wl_share" 
  target="_blank"
  rel="noopener noreferrer"
  className="text-white text-center block underline hover:text-blue-300 transition my-4"
>
  recargar fondos
</a>


        </div>
      <div>

      </div>

  </div>

</div>


     
  );
}
