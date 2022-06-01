import React from "react";

import Anh1 from '../images/Slide1.png';
// import Anh2 from '../images/Slide2.jpg';
import Anh3 from '../images/Slide3.jpg';
import Anh4 from '../images/Slide4.jpg';



export function Slider() {
  return (
    <div id="carouselExampleControls" class="carousel slide relative border-b-4 border-red-600" data-bs-ride="carousel">
      <div class="carousel-inner relative w-full overflow-hidden">
        <div class="carousel-item active relative float-left w-full">
          <img
            src={Anh1}
            class="block w-full"
            alt="Wild Landscape"
          />
        </div>
        <div class="carousel-item relative float-left w-full">
          <img
            src={Anh1}
            class="block w-full"
            alt="Camera"
          />
        </div>
        <div class="carousel-item relative float-left w-full">
          <img
            src={Anh3}
            class="block w-full"
            alt="Exotic Fruits"
          />
        </div>
        <div class="carousel-item relative float-left w-full">
          <img
            src={Anh4}
            class="block w-full"
            alt="Exotic Fruits"
          />
        </div>
      </div>
      <button
        class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  )
}