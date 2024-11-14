import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

const ProductSlider = () => {
  return (
    <div className="container mx-auto product-slide">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination , Autoplay]}
        className="mySwiper"
      >
        {[1, 2, 3, 4, 5, 6, 7].map((id) => (
          <SwiperSlide key={id} id="SwiperSlide">
            <div className="w-full max-w-sm bg-white border border-gray-400 mb-10 duration-75 transition-all ease-out hover:shadow-lg">
            <a href="#">
                <img
                  className="p-8 rounded-t-lg"
                  src="https://flowbite.com/docs/images/products/apple-watch.png"
                  alt="product image"
                />
              </a>
              <div className="px-5 pb-5">
                <a href="#"> 
                  <h5 className="text-lg font-light tracking-tight text-[#202124]  ">
                    Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
                  </h5>
                </a>
                {/* <div className="flex items-center mt-2.5 mb-5">
                  <svg
                    className="w-4 h-4 text-yellow-300"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded ms-3">
                    5.0
                  </span>
                </div> */}
                <div className="flex items-center justify-center">
                  <span className="text-md font-bold text-red-700 mb-4 text-decoration-line: line-through">
                    $599 
                  </span>
                  <span className="text-xl font-bold text-green-700">
                    $499
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductSlider;
