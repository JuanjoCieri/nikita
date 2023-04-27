import React, { useState } from "react";
import pantuflas from "../../mocks/pantuflas.js";
import NavBar from "../NavBar.jsx";
import Card from "./Card/Card.jsx";
import { Link } from "react-router-dom";
import Paginated from "./Paginated/Paginated.jsx";

export default function Pijamas() {
  const talles = ["XS", "S", "M", "L", "XL"];

  const [CurrentPag, setCurrentPage] = useState(1);
  const [ProductsPerPage, setProductsPerPage] = useState(6);
  const TotalPages = Math.ceil(pantuflas.length / ProductsPerPage);

  const nextPag = () => {
    setCurrentPage(CurrentPag + 1);
  };

  const prevPag = () => {
    if (CurrentPag !== 1) setCurrentPage(CurrentPag - 1);
  };

  const firstPag = () => {
    setCurrentPage(1);
  };

  const lastPage = () => {
    setCurrentPage(TotalPages);
  };

  const IndexLastProduct = CurrentPag * ProductsPerPage;

  const IndexFirstProduct = IndexLastProduct - ProductsPerPage;

  const CurrentProducts = pantuflas.slice(IndexFirstProduct, IndexLastProduct);

  return (
    <main className="flex flex-col justify-center items-center">
      <NavBar />
      <section className="h-full  w-screen flex max-w-screen-2xl">
        <div className="w-full h-full flex justify-center items-center mt-16 ">
          <div className="w-full h-full mt-24 bg-gradient-to-r from-red-100 via-red-200 to-yellow-100 flex flex-col justify-center items-center rounded-t-[60px] ">
            <p className="absolute text-6xl font-poppins font-extrabold top-[120px]">
              pijamas
            </p>
            {/* <img
              src={pantufla1}
              alt="pantufla1"
              className="w-52 absolute top-[30px] mr-[1100px]"
            />
            <img
              src={pantufla2}
              alt="pantufla1"
              className="w-52 absolute top-[40px] mr-[450px] -rotate-45"
            /> */}
            <div className="w-full h-full flex justify-start items-start my-[150px]">
              <div className="w-1/4 flex flex-col justify-center items-start gap-10">
                <div className="w-full flex justify-center items-center">
                  <p className="text-xl font-semibold">Filtrar por</p>
                </div>
                <div className="w-full flex flex-col justify-center items-center gap-2">
                  <p className="text-lg font-semibold">Precio</p>
                  <div className="flex flex-col justify-center items-center gap-3">
                    <button className="bg-fuchsia-300 py-2 px-5 text-white font-poppins text-sm border rounded-full">
                      De menor a mayor
                    </button>
                    <button className="bg-fuchsia-300 py-2 px-5 text-white font-poppins text-sm border rounded-full">
                      De mayor a menor
                    </button>
                  </div>
                </div>
                <div className="w-full flex flex-col justify-center items-center gap-2">
                  <p className="text-lg font-semibold">Tamaño</p>
                  <div className="grid grid-cols-3 gap-2">
                    {talles.map((t) => (
                      <button className="border text-sm font-poppins font-semibold border-gray-400 py-1 px-4 rounded-xl hover:bg-gray-400">
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="w-full flex flex-col justify-center items-center gap-4">
                  <p className="text-lg font-semibold">Varios</p>
                  <button className="border text-sm font-poppins font-semibold border-gray-400 py-1 px-4 rounded-xl hover:bg-gray-400">
                    Mas vendido
                  </button>
                  <button className="border text-sm font-poppins font-semibold border-gray-400 py-1 px-4 rounded-xl hover:bg-gray-400">
                    Mas nuevo
                  </button>
                  <button className="border text-sm font-poppins font-semibold border-gray-400 py-1 px-4 rounded-xl hover:bg-gray-400">
                    Mas viejo
                  </button>
                  <button className="border text-sm font-poppins font-semibold border-gray-400 py-1 px-4 rounded-xl hover:bg-gray-400">
                    A - Z
                  </button>
                  <button className="border text-sm font-poppins font-semibold border-gray-400 py-1 px-4 rounded-xl hover:bg-gray-400">
                    Z - A
                  </button>
                </div>
                <div className="flex w-full flex-col justify-center items-center gap-3">
                  <button className="bg-fuchsia-300 py-2 px-5 text-white font-poppins text-sm border rounded-full">
                    Borrar filtros
                  </button>
                </div>
              </div>
              <div className="w-3/4 flex flex-col justify-center items-center gap-10">
                <div className="w-full grid grid-cols-3 gap-10">
                  {CurrentProducts.map((p) => (
                    <Link to={`/productdetail/${p.id}`}>
                      <Card
                        imagen={p.imagen[0]}
                        nombre={p.nombre}
                        precio={p.precio}
                      />
                    </Link>
                  ))}
                </div>
                <div className="w-full flex justify-center items-center">
                  <Paginated
                    ProductsPerPage={ProductsPerPage}
                    productState={pantuflas.length}
                    CurrentPag={CurrentPag}
                    setCurrentPage={setCurrentPage}
                    firstPag={firstPag}
                    prevPag={prevPag}
                    nextPag={nextPag}
                    lastPag={lastPage}
                  ></Paginated>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
