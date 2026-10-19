import Why1 from '../../assets/icons/Why1.webp';
import Why2 from '../../assets/icons/Why2.webp';
import Why3 from '../../assets/icons/Why3.webp';

function WhyChoose() {
    return (
        <section className="px-6 md:px-10 lg:px-19.75 pt-13">


            <h2
                data-reveal="up"
                className="text-[32px] md:text-[40px] cursor-default text-primary font-newsreader">
                Why Choose Us ?
            </h2>

            {/*--------Features{/*--------*/}
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 mt-15 items-center">

                {/*{/*--------Column 1{/*--------*/}
                <li
                    data-reveal="up"
                    data-reveal-delay="1"
                    className="flex min-w-0 items-center justify-center md:justify-start gap-4 md:h-25 md:pr-6 md:border-r md:border-primary/60">
                    <img
                        src={Why1}
                        className="h-auto w-14 shrink-0 lg:w-22.5"
                        alt=""
                    />

                    <div className="min-w-0">
                        <h3 className="cursor-default text-[16px] font-medium text-primary sm:text-[17px] lg:text-[18px] xl:text-[20px]">
                            Natural Ingredients
                        </h3>

                        <p className="mt-2 max-w-55.5 cursor-default text-[13px] leading-[1.4] text-ink/90 lg:text-[13px] xl:text-[14px]">
                            Made with carefully selected natural and organic ingredients
                        </p>
                    </div>
                </li>

                {/*--------Column 2--------*/}
                <li
                    data-reveal="up"
                    data-reveal-delay="2"
                    className="flex min-w-0 items-center justify-center gap-4 md:h-25 md:px-6 md:border-r md:border-primary/60">
                    <img
                        src={Why2}
                        className="h-auto w-14 shrink-0 lg:w-22.5"
                        alt=""
                    />

                    <div className="min-w-0">
                        <h3 className="cursor-default text-[16px] font-medium text-primary sm:text-[17px] lg:text-[18px] xl:text-[20px]">
                            Quality You Can Trust
                        </h3>

                        <p className="mt-2 max-w-55.5 cursor-default text-[13px] leading-[1.4] text-ink/90 lg:text-[13px] xl:text-[14px]">
                            Carefully selected ingredients and thoughtfully developed formulas
                        </p>
                    </div>
                </li>

                {/*--------Column 3--------*/}
                <li
                    data-reveal="up"
                    data-reveal-delay="3"
                    className="flex min-w-0 items-center justify-center md:justify-end gap-4 md:h-25 md:pl-6">
                    <img
                        src={Why3}
                        className="h-auto w-14 shrink-0 lg:w-22.5"
                        alt=""
                    />

                    <div className="min-w-0">
                        <h3 className="cursor-default text-[16px] font-medium text-primary sm:text-[17px] lg:text-[18px] xl:text-[20px]">
                            Cruelty-Free
                        </h3>

                        <p className="mt-2 max-w-55.5 cursor-default text-[13px] leading-[1.4] text-ink/90 lg:text-[13px] xl:text-[14px]">
                            Beauty products made without animal testing
                        </p>
                    </div>
                </li>

            </ul>
        </section>
    );
}

export default WhyChoose;