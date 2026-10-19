import './Reviews.css';

import Quote from '../../assets/icons/quote.webp';

import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination, EffectFade, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const reviews = [
    {
        id: 1,
        name: 'Emma R.',
        text: 'Absolutely love this product. It feels incredibly soft on my skin and leaves it looking fresh, smooth, and hydrated. It has quickly become a favorite in my daily routine.',
    },
    {
        id: 2,
        name: 'Olivia M.',
        text: 'My skin feels so much smoother and softer since I started using these products. I love how lightweight they feel, and my skincare routine has become something I truly look forward to.',
    },
    {
        id: 3,
        name: 'Sophia L.',
        text: 'I really appreciate how gentle these products feel on my skin. The textures are lovely, and my skin looks healthier and more radiant. Definitely a beautiful addition to my daily routine.',
    },
];

function Reviews() {
    return (
        <section className="px-4 pt-12 sm:px-6 sm:pt-16 md:px-10 lg:px-15 lg:pt-20">
            <div className="reviews-banner relative overflow-hidden rounded-[20px] md:rounded-[30px]">

                <img
                    src={Quote}
                    alt=""
                    className="absolute left-4 top-5 z-10 w-8 opacity-47 sm:left-6 sm:top-6 sm:w-9 md:left-15.75 md:top-10 md:w-11"
                />

                <Swiper
                    modules={[Pagination, EffectFade, Autoplay]}
                    effect="fade"
                    fadeEffect={{ crossFade: true }}
                    speed={1200}
                    pagination={{ clickable: true }}
                    loop={true}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: false,
                    }}
                    className="reviews-swiper"
                >
                    {reviews.map((review) => (
                        <SwiperSlide key={review.id}>
                            <div className="flex min-h-70 flex-col px-5 pb-10 pt-16 sm:min-h-80 sm:px-8 sm:pt-20 md:px-15.75 md:pt-24">

                                <p className="max-w-169 cursor-default text-[15px] font-normal leading-normal text-secondary sm:text-[16px] md:text-[20px]">
                                    {review.text}
                                </p>

                                <div
                                    className="mt-2 sm:mt-3 w-fit cursor-default text-[22px] tracking-[2px] text-primary sm:text-[24px] md:text-[26px]"
                                    aria-label="5 out of 5 stars"
                                >
                                    ★★★★★
                                </div>

                                <p className="mt-2 sm:mt-3 cursor-default text-[18px] font-semibold text-secondary sm:text-[19px] md:text-[20px]">
                                    — {review.name}
                                </p>

                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>
        </section>
    );
}

export default Reviews;