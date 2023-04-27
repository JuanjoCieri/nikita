import React, { useState } from "react";

export default function NavBar() {
  const [color, setColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <nav
      className={
        color === false
          ? "h-16 flex justify-around items-center w-full fixed top-0 max-w-screen-2xl"
          : "transition ease-in-out duration-1000 h-16 bg-fuchsia-300 flex justify-around items-center w-full fixed top-0 max-w-screen-2xl"
      }
    >
      <div className="w-2/4 flex justify-around items-center">
        <div class="text-sm font-medium text-center text-gray-500 w-full ">
          <ul class="flex justify-around items-center -mb-px">
            <li class="">
              <a
                href="http://localhost:3000/"
                class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 "
              >
                INICIO
              </a>
            </li>
            <li class="">
              <a
                href="http://localhost:3000/products/pantuflas"
                class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 "
                aria-current="page"
              >
                PANTUFLAS
              </a>
            </li>
            <li class="">
              <a
                href="http://localhost:3000/products/pijamas"
                class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 "
              >
                PIJAMAS
              </a>
            </li>
            <li class="">
              <a
                href="http://localhost:3000/products/alfombras"
                class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 "
              >
                ALFOMBRAS
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-1/4 flex justify-around items-center"></div>
      <div className="w-1/4 flex justify-around items-center">
        <div>
          <button
            type="button"
            class="  flex items-center justify-center w-full rounded-md  px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-50 hover:bg-gray-50 dark:hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500"
            id="options-menu"
          >
            <svg
              width="30"
              fill="currentColor"
              height="30"
              class="text-gray-800"
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1523 1339q-22-155-87.5-257.5t-184.5-118.5q-67 74-159.5 115.5t-195.5 41.5-195.5-41.5-159.5-115.5q-119 16-184.5 118.5t-87.5 257.5q106 150 271 237.5t356 87.5 356-87.5 271-237.5zm-243-699q0-159-112.5-271.5t-271.5-112.5-271.5 112.5-112.5 271.5 112.5 271.5 271.5 112.5 271.5-112.5 112.5-271.5zm512 256q0 182-71 347.5t-190.5 286-285.5 191.5-349 71q-182 0-348-71t-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z"></path>
            </svg>
          </button>
        </div>
        <div>
          <button
            type="button"
            class="  flex items-center justify-center w-full rounded-md  px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-50 hover:bg-gray-50 dark:hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500"
            id="options-menu"
          >
            <svg 
              class="svg-inline--fa fa-w-14 utilities-icon svg-icon-text w-[25px]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M352 128C352 57.421 294.579 0 224 0 153.42 0 96 57.421 96 128H0v304c0 44.183 35.817 80 80 80h288c44.183 0 80-35.817 80-80V128h-96zM224 32c52.935 0 96 43.065 96 96H128c0-52.935 43.065-96 96-96zm192 400c0 26.467-21.533 48-48 48H80c-26.467 0-48-21.533-48-48V160h64v48c0 8.837 7.164 16 16 16s16-7.163 16-16v-48h192v48c0 8.837 7.163 16 16 16s16-7.163 16-16v-48h64v272z"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
