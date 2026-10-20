import './Hero.css';

import Drop from '../../assets/icons/drop.webp';
import Leaf from '../../assets/icons/leaf.webp';
import Rabbit from '../../assets/icons/rabbit.webp';

function Hero() {
    return (
        <section id="hero" className="HeroSection relative flex w-full flex-col px-5 pb-8 sm:px-6 sm:pb-10 md:min-h-150 md:pl-10 md:pr-0 md:pb-0 lg:min-h-150 lg:pl-15">

            {/*--------title--------*/}
            <div className=''>
                <h1
                    data-reveal="up"
                    className="mt-10 cursor-default text-[36px] font-Zenitha text-primary sm:mt-12 sm:text-[44px] md:mt-14 md:text-[50px] lg:mt-18 lg:text-[60px]">
                    Beauty in
                    <br />
                    Its Purest Form
                </h1>
                <p
                    data-reveal="up"
                    data-reveal-delay="1"
                    className="mt-4 w-full max-w-60 md:max-w-100 lg:max-w-100 cursor-default text-[14px] leading-relaxed text-secondary sm:text-[16px] lg:w-100 lg:text-[18px]">
                    Thoughtfully crafted skincare that nourishes,
                    hydrates, and brings out your skin’s natural glow
                </p>
                <button 
                data-reveal="up"
                data-reveal-delay="2"
                className="group relative cursor-pointer mt-6.5 flex h-13 w-full max-w-48 sm:max-w-57 md:max-w-61 items-center justify-center gap-2 rounded-[43px] border-0 bg-button text-[11px] md:text-[13px] font-medium uppercase text-[#FFFAFA] transition-colors duration-400 hover:bg-hover-button sm:h-14 sm:text-[14px] lg:h-15 lg:w-61 lg:text-[15px]">
                    <span>Shop the Collection</span>
                    <span className="inline-block transition-transform duration-300 ease-in-out group-hover:translate-x-0.5">→</span>
                </button>
            </div>
            {/*--------Features--------*/}
            <ul className="mt-6.5 grid w-full max-w-52 grid-cols-3 items-center gap-1 sm:mt-10 sm:w-auto sm:max-w-none sm:flex sm:gap-5 lg:gap-9">
                <li 
                data-reveal="up"
                data-reveal-delay="4"
                className="flex h-20 min-w-0 flex-col items-center justify-center gap-2 md:border-r-2 border-primary/15 pr-1 sm:pr-4 lg:pr-8">
                    <img src={Drop} className="h-auto w-4 sm:w-6.5" alt="" />
                    <span className="cursor-default text-center text-[10px] text-ink sm:text-[13px] lg:text-[15px]">For all skin types</span>
                </li>
                <li 
                data-reveal="up"
                data-reveal-delay="5"
                className="flex h-20 min-w-0 flex-col items-center justify-center gap-2.5 md:border-r-2 border-primary/15 pr-1 sm:pr-4 lg:pr-8">
                    <img src={Leaf} className="h-auto w-6 sm:w-9" alt="" />
                    <span className="cursor-default text-center text-[10px] text-ink sm:text-[13px] lg:text-[15px]">Cruelty free</span>
                </li>
                <li 
                data-reveal="up"
                data-reveal-delay="6"
                className="flex h-20 min-w-0 flex-col items-center justify-center gap-2.5  pr-1 sm:pr-4 lg:pr-8">
                    <img src={Rabbit} className="h-auto w-6 sm:w-9" alt="" />
                    <span className="cursor-default text-center text-[10px] text-ink sm:text-[13px] lg:text-[15px]">Eco-friendly</span>
                </li>
            </ul>
        </section>
    )
}
export default Hero;