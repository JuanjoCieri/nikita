import React from "react";
import nikitamain from "../images/nikitamain.png";
// import nikitamain2 from "../images/nikitamain2.png";
// import nikitamain3 from "../images/nikitamain3.png";
// import nikitamain4 from "../images/nikitamain4.png";
// import pantuflamain from "../images/pantuflamainn.png";
import nikitapijamamain from "../images/nikitapijamamain.jpeg";
// import nikitapijamamain2 from "../images/nikitapijamamain2.png";
import nikitapijamamain3 from "../images/nikitapijamamain3.png";
// import nikitapijamamain4 from "../images/nikitapijamamain4.png";
// import nikitapantuflamain from "../images/nikitapantuflamain.jpeg";
import nikitapantuflamain2 from "../images/nikitapantuflamain2.png";
import pantuflas from "../mocks/pantuflas.js";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";

export default function Home() {

  return (
    <main className="flex flex-col justify-center items-center">
      <NavBar />
      <section className="h-[682px] w-screen flex max-w-screen-2xl ">
        <div className="w-1/2 bg-gradient-to-l from-white to-red-200">
          <div className="w-full flex flex-col justify-center items-center">
            <div className="flex flex-col gap-5 pt-32">
              <h1 class="font-poppins font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-rose-400 to-red-200">
                NIKITA
              </h1>
              <h3 className="text-6xl font-poppins">2023.</h3>
              <p className="font-poppins">
                Bienvenido a la comodidad de tu hogar 🌈.
              </p>
            </div>
            {/* <img
              src={pantuflamain}
              alt="pantuflamain"
              className="w-56 opacity-80"
            /> */}
            <svg
              className="w-8 pt-24 animate-bounce"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 25 25"
            >
              <path d="m18.294 16.793-5.293 5.293V1h-1v21.086l-5.295-5.294-.707.707L12.501 24l6.5-6.5-.707-.707z" />
            </svg>
          </div>
        </div>
        <div className="w-1/2 flex">
          <div className="w-1/2 h-auto bg-gradient-to-t from-rose-100 to-[#FC7477] rounded-br-lg"></div>

          <img
            src={nikitamain}
            alt="nikitamain"
            className="w-[32rem] absolute"
          ></img>
          {/* <img
            src={nikitamain2}
            alt="nikitamain"
            className="w-[28rem] absolute rotate-180 top-0"
          ></img> */}
          {/* <img
            src={nikitamain3}
            alt="nikitamain"
            className="w-[30rem] absolute"
          ></img> */}
          {/* <img
            src={nikitamain4}
            alt="nikitamain"
            className="w-[30rem] absolute"
          ></img> */}
          <div className="w-1/2 h-full ">
            <div className="h-1/2 flex items-center">
              <h3 className="-rotate-90 w-min text-4xl font-poppins ml-5 opacity-70">
                NIKITA
              </h3>
            </div>
            <div className="h-1/2 flex justify-center items-center "></div>
          </div>
        </div>
      </section>
      <section className="w-screen flex max-w-screen-2xl bg-gradient-to-r from-white to-fuchsia-50 p-10 ">
        <div className="w-1/2 flex justify-center items-center gap-12">
          <div className="flex flex-col justify-start gap-7">
            <p className="text-xl text-[#FE94F0] font-semibold font-poppins">
              LO MÁS NUEVO EN
            </p>
            <h2 className="text-5xl font-poppins font-bold">PIJAMAS</h2>
            <button
              type="button"
              class="py-2 px-4  bg-gradient-to-r from-rose-200 to-[#FC7477] text-white font-poppins  w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 "
            >
              VER TODO
            </button>
          </div>
          <img
            src={nikitapijamamain}
            alt="nikitapijamamain"
            className="w-72 rounded-lg"
          />
        </div>
        <div className="w-1/2 flex justify-center items-end">
          <div className="w-full h-52 Pastel bg-gradient-to-tr from-violet-500 to-orange-300 rounded-lg">
            <div class="relative flex overflow-x-hidden">
              <div class="py-12 animate-marquee whitespace-nowrap">
                <span class="text-4xl mx-4 font-poppins text-orange-950 opacity-40">
                  PIJAMAS
                </span>
                <span class="text-4xl mx-4 font-poppins text-orange-950 opacity-40">
                  PIJAMAS
                </span>
                <span class="text-4xl mx-4 font-poppins text-orange-950 opacity-40">
                  PIJAMAS
                </span>
                <span class="text-4xl mx-4 font-poppins text-orange-950 opacity-40">
                  PIJAMAS
                </span>
                <span class="text-4xl mx-4 font-poppins text-orange-950 opacity-40">
                  PIJAMAS
                </span>
              </div>

              <div class="absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
                <span class="text-4xl mx-4 font-poppins text-orange-950 opacity-40">
                  PIJAMAS
                </span>
                <span class="text-4xl mx-4 font-poppins text-orange-950 opacity-40">
                  PIJAMAS
                </span>
                <span class="text-4xl mx-4 font-poppins text-orange-950 opacity-40">
                  PIJAMAS
                </span>
                <span class="text-4xl mx-4 font-poppins text-orange-950 opacity-40">
                  PIJAMAS
                </span>
                <span class="text-4xl mx-4 font-poppins text-orange-950 opacity-40">
                  PIJAMAS
                </span>
              </div>
            </div>
          </div>
          {/* <img
            src={nikitapijamamain2}
            alt="nikitapijamamain2"
            className="w-[18rem] absolute"
          ></img> */}
          <img
            src={nikitapijamamain3}
            alt="nikitapijamamain3"
            className="w-[18rem] absolute"
          ></img>
          {/* <img
            src={nikitapijamamain4}
            alt="nikitapijamamain4"
            className="w-[18rem] absolute"
          ></img> */}
        </div>
      </section>
      <section className="w-screen flex max-w-screen-2xl bg-gradient-to-r from-white to-fuchsia-50 p-10 ">
        <div className="w-1/2 flex">
          {/* <img
            src={nikitapantuflamain2}
            alt="nikitapantuflamain2"
            className="w-72 rounded-b-lg absolute opacity-20"
          />
          <img
            src={nikitapantuflamain2}
            alt="nikitapantuflamain2"
            className="w-72 rounded-b-lg absolute ml-[50px] opacity-40"
          />
          <img
            src={nikitapantuflamain2}
            alt="nikitapantuflamain2"
            className="w-72 rounded-b-lg absolute ml-[100px] opacity-60"
          />
          <img
            src={nikitapantuflamain2}
            alt="nikitapantuflamain2"
            className="w-72 rounded-b-lg absolute ml-[150px] opacity-80"
          />
          <img
            src={nikitapantuflamain2}
            alt="nikitapantuflamain2"
            className="w-72 rounded-b-lg absolute ml-[200px] z-50"
          /> */}
        </div>
        {/* <div>
          <p className="text-2xl font-poppins text-rose-400">pantuflas</p>
          <p className="text-2xl font-poppins text-rose-400">pantuflas</p>
          <p className="text-2xl font-poppins text-rose-400">pantuflas</p>
          <p className="text-2xl font-poppins text-rose-400">pantuflas</p>
          <p className="text-2xl font-poppins text-rose-400">pantuflas</p>
        </div> */}
        <div className="w-1/2 grid grid-cols-2 ">
          {pantuflas?.map((d) => (
            <Link to={`/productdetail/${d.id}`}>
              <div className="flex flex-col justify-center items-center">
                <img
                  src={d.imagen}
                  alt={d.nombre}
                  className="w-52 rounded-lg"
                />
                <p className="  font-poppins">{d.nombre}</p>
                {/* <div>
              </div> */}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
