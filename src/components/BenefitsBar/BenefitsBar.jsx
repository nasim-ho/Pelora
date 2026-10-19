import './BenefitsBar.css';

import Box from '../../assets/icons/box.png';
import Return from '../../assets/icons/return.webp';
import Secure from '../../assets/icons/secure.png';
import Support from '../../assets/icons/support.webp';

function BenefitsBar(){
    return(
        <section>
            <div className='w-full bg-button/28  py-8'>
                <ul className="grid w-full grid-cols-2 items-center gap-x-3 gap-y-6 px-4 sm:gap-x-6 sm:px-6 lg:grid-cols-4 lg:gap-x-0 lg:gap-y-0 lg:px-0">
                    
                    <li className="flex min-w-0 items-center justify-center gap-2 border-r-2 border-primary/15 pr-2 lg:pr-0 sm:gap-3">
                        <img src={Box} className="w-7 shrink-0 sm:w-8 lg:w-10" alt="Free Shipping" />
                        <div className="flex min-w-0 flex-col gap-0.5">
                            <h1 className="cursor-default text-[12px] font-medium leading-tight text-ink sm:text-[14px] lg:text-[18px]">Free Shipping</h1>
                            <p className="cursor-default text-[10px] leading-tight text-secondary sm:text-[12px] lg:text-[14px]">On orders over $60</p>
                        </div>
                    </li>

                    <li className="flex min-w-0 items-center justify-center gap-2 border-r-0 sm:gap-3 lg:border-r-2 lg:border-primary/15">
                        <img src={Return} className="w-7 shrink-0 sm:w-8 lg:w-10" alt="Easy Returns" />
                        <div className="flex min-w-0 flex-col gap-0.5">
                            <h1 className="cursor-default text-[12px] font-medium leading-tight text-ink sm:text-[14px] lg:text-[18px]">Easy Returns</h1>
                            <p className="cursor-default text-[10px] leading-tight text-secondary sm:text-[12px] lg:text-[14px]">30-day return policy</p>
                        </div>
                    </li>

                    <li className="flex min-w-0 items-center justify-center gap-2 border-r-2 border-primary/15 pr-2 sm:gap-3 lg:pr-0">
                        <img src={Secure} className="w-7 shrink-0 sm:w-8 lg:w-10" alt="Secure Payment" />
                        <div className="flex min-w-0 flex-col gap-0.5">
                            <h1 className="cursor-default text-[12px] font-medium leading-tight text-ink sm:text-[14px] lg:text-[18px]">Secure Payment</h1>
                            <p className="cursor-default text-[10px] leading-tight text-secondary sm:text-[12px] lg:text-[14px]">100% protect checkout</p>
                        </div>
                    </li>

                    <li className="flex min-w-0 items-center justify-center gap-2 border-r-0 sm:gap-3">
                        <img src={Support} className="w-7 shrink-0 sm:w-8 lg:w-10" alt="Customer Support" />
                        <div className="flex min-w-0 flex-col gap-0.5">
                            <h1 className="cursor-default text-[12px] font-medium leading-tight text-ink sm:text-[14px] lg:text-[18px]">Customer Support</h1>
                            <p className="cursor-default text-[10px] leading-tight text-secondary sm:text-[12px] lg:text-[14px]">Here to help anytime</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}
export default BenefitsBar;