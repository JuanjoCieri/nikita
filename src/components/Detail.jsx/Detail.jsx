import React, { useState } from "react";
import { useParams } from "react-router-dom";
import pantuflas from "../../mocks/pantuflas";
import NavBar from "../NavBar";

export default function Detail() {
  const [currentImage, setCurrentImage] = useState(0);

  const [amount, setAmount] = useState(1);

  let { id } = useParams();

  const product = pantuflas.filter((d) => d.id === Number(id));

  const numInCuotes = product[0].precio / 3;

  return (
    <main className="flex flex-col justify-center items-center">
      <NavBar />
      <section className="h-[682px]  w-screen flex max-w-screen-2xl">
        <div className="w-full h-full flex justify-center items-center mt-16">
          <div className="w-1/2 flex">
            <div className="w-1/4 flex flex-col  items-center gap-3 max-h-[520px] h-[520px] overflow-y-auto">
              {product[0]?.imagen.map((i) => (
                <div className="w-36 h-36 border border-gray-200 flex justify-center items-center">
                  <button
                    onClick={() => {
                      const index = product[0]?.imagen.findIndex(
                        (img) => img === i
                      );
                      if (index !== -1) {
                        setCurrentImage(index);
                      }
                    }}
                  >
                    <img
                      src={i}
                      alt="asd"
                      className="opacity-60 object-contain h-36"
                    />
                  </button>
                </div>
              ))}
            </div>
            <div className="w-3/4 flex justify-center items-center">
              <img
                src={product[0]?.imagen[currentImage]}
                alt={product[0]?.imagen[currentImage]}
                className="w-[400px]"
              />
            </div>
          </div>
          <div className="w-1/2 flex flex-col justify-center items-start p-10 gap-8">
            <div className="flex flex-col gap-3">
              <h3 className="text-gray-400 font-poppins">
                {product[0]?.categoria}
              </h3>
              <p className="text-3xl font-poppins font-extabold">
                {product[0]?.nombre}
              </p>
            </div>
            <div>
              <p className="text-2xl font-poppins font-extrabold text-red-400">
                {product[0]?.precio.toLocaleString("es-AR", {
                  style: "currency",
                  currency: "ARS",
                })}
              </p>
            </div>
            <div className="flex flex-col items-start justify-start gap-2">
              <div className="flex justify-center items-center gap-1">
                <svg
                  class="svg-inline--fa fa-lg mr-2 svg-icon-accent float-left w-4 svg-color-red"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path d="M528 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM48 64h480c8.8 0 16 7.2 16 16v48H32V80c0-8.8 7.2-16 16-16zm480 384H48c-8.8 0-16-7.2-16-16V224h512v208c0 8.8-7.2 16-16 16zm-336-84v8c0 6.6-5.4 12-12 12h-72c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12zm192 0v8c0 6.6-5.4 12-12 12H236c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12zm160-166H32v-41h512v41z"></path>
                </svg>
                <p className="font-poppins">3 cuotas sin interés de </p>
                <p className="text-red-400 font-poppins">
                  {numInCuotes.toLocaleString("es-AR", {
                    style: "currency",
                    currency: "ARS",
                  })}
                </p>
              </div>
              <div className="flex justify-center items-center gap-1">
                <svg
                  aria-hidden="true"
                  data-prefix="fal"
                  data-icon="money-bill-wave"
                  class="svg-inline--fa fa-money-bill-wave fa-w-20 fa-lg mr-2 svg-icon-accent w-4 float-left"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                >
                  <path
                    fill="currentColor"
                    d="M320 144c-53.02 0-96 50.14-96 112 0 61.85 42.98 112 96 112 53 0 96-50.13 96-112 0-61.86-42.98-112-96-112zm0 192c-35.29 0-64-35.89-64-80s28.71-80 64-80 64 35.89 64 80-28.71 80-64 80zM621.16 54.46C582.37 38.19 543.55 32 504.75 32c-123.17-.01-246.33 62.34-369.5 62.34C70.34 94.34 46.9 79 32.25 79 15.04 79 0 92.32 0 110.81v317.26c0 12.63 7.23 24.6 18.84 29.46C57.63 473.81 96.45 480 135.25 480c123.17 0 246.33-62.35 369.5-62.35 64.91 0 88.34 15.35 103 15.35 17.21 0 32.25-13.32 32.25-31.81V83.93c0-12.64-7.23-24.6-18.84-29.47zm-588.21 56.8c20.22 6.42 41.03 10.53 62.67 12.89-1.97 33.41-29.23 60.04-62.89 60.43l.22-73.32zM32 428.07l.13-42.54c33.58.07 60.88 26.31 63.38 59.43-22.45-3.04-43.63-8.45-63.51-16.89zm575.05-27.33c-20.16-6.4-40.9-10.51-62.47-12.87 2.89-32.5 29.69-58.14 62.69-58.52l-.22 71.39zm.31-103.54c-50 .34-90.59 39.32-94.58 88.6-70.73-1.43-137.18 15.82-200.6 31.87-75.07 19-126.54 31.21-184.41 29.87-1.23-52.02-43.48-94.01-95.55-94.13l.41-136.67c50.65-.34 91.72-40.32 94.78-90.52 70.53 1.41 137.02-15.83 200.4-31.87C402.6 75.41 454.3 63.13 512.03 64.46c.18 52.93 43.01 95.94 95.74 96.07l-.41 136.67zm.51-168.8c-34.24-.07-62.04-27.34-63.58-61.38 22.53 3.03 43.78 8.45 63.71 16.91l-.13 44.47z"
                  ></path>
                </svg>
                <p className="font-poppins">10% de descuento pagando con Efectivo retirando por NKT (PALERMO, CABA)</p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-poppins">Talle</p>
              <div className="flex items-center gap-3">
                {product[0]?.talle.map((t) => (
                  <button className="border text-sm font-poppins font-semibold border-gray-400 py-1 px-6 rounded-xl hover:bg-gray-400">
                    {t}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-poppins">Cantidad</p>
              <div className="w-38 h-12 flex justify-between items-center border rounded-full p-2">
                <button
                  disabled={amount === 1}
                  onClick={() => setAmount(amount - 1)}
                  className="w-8 rounded-full p-2 text-xl  "
                >
                  -
                </button>
                <p className="text-lg">{amount}</p>
                <button
                  onClick={() => setAmount(amount + 1)}
                  className="w-8 rounded-full p-2 text-xl  "
                >
                  +
                </button>
              </div>
            </div>
            <div>
              <button className="bg-fuchsia-600 rounded-full py-2 px-24 text-white text-xl font-poppins font-extrabold">
                Agregar al carrito
              </button>
            </div>
            <div>
              {/* <svg class="svg-inline--fa fa-lg mr-2 svg-icon-accent float-left " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M528 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM48 64h480c8.8 0 16 7.2 16 16v48H32V80c0-8.8 7.2-16 16-16zm480 384H48c-8.8 0-16-7.2-16-16V224h512v208c0 8.8-7.2 16-16 16zm-336-84v8c0 6.6-5.4 12-12 12h-72c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12zm192 0v8c0 6.6-5.4 12-12 12H236c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12zm160-166H32v-41h512v41z"></path></svg> */}
              <p>{product[0]?.detalle}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
