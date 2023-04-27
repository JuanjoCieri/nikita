import React from "react";

export default function Card({ imagen, nombre, precio }) {
  const priceInCuotes = precio / 3;

  return (
    <div className="w-[250px] h-[450px] bg-white rounded-lg shadow-xl">
      <div className="w-[250px] h-[300px]">
        <img
          src={imagen}
          alt={imagen}
          className="w-[250px] bg-contain rounded-t-lg"
        />
      </div>
      <div className="flex flex-col justify-center items-center gap-2 h-[150px] w-[250px]">
        <h2 className="font-poppins text-center text-lg ">
          {nombre}
        </h2>
        <div className="flex flex-col items-center gap-1">
          <p className="text-red-600 text-lg font-poppins">
            {precio.toLocaleString("es-AR", {
              style: "currency",
              currency: "ARS",
            })}
          </p>
          <p className="text-sm">
            <b>3</b> cuotas sin interés de{" "}
            <b>
              {priceInCuotes.toLocaleString("es-AR", {
                style: "currency",
                currency: "ARS",
              })}
            </b>
          </p>
        </div>
      </div>
    </div>
  );
}
