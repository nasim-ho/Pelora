import './BestSellers.css';

import product1 from '../../assets/images/product1.webp';
import product2 from '../../assets/images/product2.webp';
import product3 from '../../assets/images/product3.webp';
import product4 from '../../assets/images/product4.webp';
import product5 from '../../assets/images/product5.webp';
import product6 from '../../assets/images/product6.webp';

import ProductCard from './ProductCard/ProductCard';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

{/*-----------------Products Array------------------*/ }
const products = [
    {
        id: 1,
        image: product1,
        name: 'Exfoliating Skin Care',
        oldPrice: '$42.99',
        price: '$32.99',
    },
    {
        id: 2,
        image: product2,
        name: 'Collagen Boost Serum',
        oldPrice: '$36.99',
        price: '$30.99',
    },
    {
        id: 3,
        image: product3,
        name: 'Revitalizing Serum',
        oldPrice: '$48.99',
        price: '$42.99',
    },
    {
        id: 4,
        image: product4,
        name: 'Renewing Night Cream',
        oldPrice: '$28.99',
        price: '$21.99',
    },
    {
        id: 5,
        image: product5,
        name: 'Cleansing Gel',
        oldPrice: '$24.99',
        price: '$19.99',
    },
    {
        id: 6,
        image: product6,
        name: 'Balancing Toner',
        oldPrice: '$31.99',
        price: '$27.99',
    },
];

function BestSellers() {
    return (
        <section>
            <div className="px-4 pt-8 sm:px-6 sm:pt-9 md:px-10 lg:px-15 lg:pt-11">
                <h1
                data-reveal="up"
                className="cursor-default text-[28px] font-newsreader text-primary sm:text-[32px] md:text-[36px] lg:text-[40px]">
                    Best Sellers
                </h1>

                {/*------------Products Slider-----------*/}
                <div className="relative mt-6">
                    <button
                        type="button"
                        className="best-sellers-nav best-sellers-prev"
                        aria-label="Previous products"
                    >
                        <span className="best-sellers-arrow best-sellers-arrow-prev" aria-hidden="true"></span>
                    </button>

                    <Swiper
                        modules={[Navigation, Autoplay]}
                        slidesPerView={4}
                        loop={true}
                        slidesPerGroup={1}
                        spaceBetween={20}
                        speed={1200}
                        autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                        navigation={{
                            prevEl: '.best-sellers-prev',
                            nextEl: '.best-sellers-next',
                        }}
                        breakpoints={{
                            0: {
                                slidesPerView: 1.2,
                                spaceBetween: 16,
                            },
                            480: {
                                slidesPerView: 2,
                                spaceBetween: 16,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 20,
                            },
                            1280: {
                                slidesPerView: 4,
                                spaceBetween: 20,
                            },
                        }}
                    >
                        {products.map((product) => (
                            <SwiperSlide key={product.id} className="px-1 py-3">
                                <ProductCard
                                    image={product.image}
                                    name={product.name}
                                    oldPrice={product.oldPrice}
                                    price={product.price}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <button
                        type="button"
                        className="best-sellers-nav best-sellers-next"
                        aria-label="Next products"
                    >
                      <span className="best-sellers-arrow best-sellers-arrow-next" aria-hidden="true"></span>  
                    </button>
                </div>

            </div>
        </section>
    )
}
export default BestSellers;