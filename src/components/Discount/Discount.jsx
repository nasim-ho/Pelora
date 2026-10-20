import Banner from '../../assets/images/banner.webp';

import './Discount.css';

function Discount() {
    return (
        <section className="px-4 sm:px-6 md:px-10 lg:px-15">
            <div className="DiscountBanner relative mt-8 flex min-h-55 w-full flex-col items-start justify-center overflow-hidden rounded-3xl pl-5 sm:min-h-57.5 sm:pl-8 md:min-h-62.5 md:pl-8 lg:mt-15 lg:min-h-82.25 lg:pl-15 lg:rounded-[30px]">
                <div className="w-[75%] py-6 sm:w-[70%] sm:py-7 md:w-[65%] lg:w-auto lg:py-9">
                    <h1
                        data-reveal="up"
                        className="cursor-default font-newsreader text-[26px] leading-tight text-primary sm:text-[36px] md:text-[42px] lg:text-[53px]">
                        Up to 25% Off
                    </h1>
                    <p
                        data-reveal="up"
                        data-reveal-delay="1"
                        className="mt-2 max-w-47.5 sm:max-w-full cursor-default text-[13px] leading-relaxed text-secondary sm:text-[15px] md:text-[17px] lg:text-[20px]">
                        Your favorite beauty essentials, now at a special price
                    </p>
                    <button
                        data-reveal="up"
                        data-reveal-delay="2"
                        className="group cursor-pointer mt-4 flex h-11 w-42 items-center justify-center gap-2 rounded-[43px] border-0 bg-button text-[12px] font-medium uppercase text-[#FFFAFA] transition-colors duration-400 hover:bg-hover-button sm:h-12 sm:w-46 sm:text-[13px] lg:mt-4.5 lg:h-13 lg:w-50 lg:text-[15px]">
                        <span>Explore Offers</span>
                        <span className="inline-block transition-transform duration-300 ease-in-out group-hover:translate-x-0.5">→</span>
                    </button>
                </div>
            </div>
        </section>
    )
}
export default Discount;