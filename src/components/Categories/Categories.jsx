import Skincare from '../../assets/images/Skincare.jpg';
import Bodycare from '../../assets/images/Bodycare.jpg';
import Makeup from '../../assets/images/Makeup.jpg';
import Gift from '../../assets/images/Gift.jpg';

function Categories() {
    return (
        <section>
            <div className="px-4 pt-3 sm:px-6 md:px-10 lg:px-15">
                {/*------------Title------------*/}
                <div className="my-6 flex flex-col items-start gap-3 sm:my-8 sm:flex-row sm:items-center sm:justify-between">
                    <h1
                        data-reveal="up"
                        className="cursor-default text-[28px] font-newsreader text-primary sm:text-[32px] md:text-[36px] lg:text-[40px]">
                        Shop by Category
                    </h1>
                    <a href="#shop"
                        data-reveal="up"
                        className='group gap-1.5 flex justify-center items-center text-primary hover:text-hover-button'>
                        <span>View all products</span>
                        <span className="inline-block transition-transform duration-300 ease-in-out group-hover:translate-x-0.5">→</span>
                    </a>
                </div>
                {/*------------Cards------------*/}
                <ul className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-4 lg:gap-6 xl:gap-10">
                    <li data-reveal="up"
                        data-reveal-delay="1">
                        <div className='cursor-pointer group hover:drop-shadow-[0px_0px_5px_rgba(0,0,0,0.15)] duration-700 transition-all ease-in-out'>
                            <div className='rounded-t-[30px] overflow-hidden'>
                                <img src={Skincare}
                                    className="h-52 w-full object-cover transition-all duration-700 ease-in-out group-hover:scale-102 group-hover:brightness-107 sm:h-64 md:h-72 xl:h-83"
                                    alt="Facecare" />
                            </div>

                            <div className=' bg-button/13 group-hover:bg-button/75 duration-400 px-1 py-2 sm:py-3 flex flex-col items-center rounded-b-[30px]'>
                                <h1 className="text-primary group-hover:text-hover-text text-[16px] font-medium transition-colors duration-500 sm:text-[19px] xl:text-[23px]">
                                    Skin Care
                                </h1>
                                <a href="#shop" className='group gap-1 flex justify-center items-center text-secondary/80 group-hover:text-hover-text/80 duration-500 mt-0.5 mb-1 text-[11px] sm:text-[12px] xl:text-[14px]'>
                                    <span>Shop Now</span>
                                    <span className="inline-block transition-transform duration-300 ease-in-out group-hover:translate-x-0.5"> →</span>
                                </a>
                            </div>
                        </div>
                    </li>

                    <li
                        data-reveal="up"
                        data-reveal-delay="2">
                        <div className='cursor-pointer group hover:drop-shadow-[0px_0px_5px_rgba(0,0,0,0.15)] duration-700 transition-all ease-in-out'>
                            <div className='rounded-t-[30px] overflow-hidden'>
                                <img src={Bodycare}
                                    className="h-52 w-full object-cover transition-all duration-700 ease-in-out group-hover:scale-102 group-hover:brightness-107 sm:h-64 md:h-72 xl:h-83"
                                    alt="Bodycare" />
                            </div>
                            <div className='bg-button/13 group-hover:bg-button/75 duration-400 px-1 py-2 sm:py-3 flex flex-col items-center rounded-b-[30px]'>
                                <h1 className="text-primary group-hover:text-hover-text text-[16px] font-medium transition-colors duration-500 sm:text-[19px] xl:text-[23px]">
                                    Body Care
                                </h1>
                                <a href="#shop" className='group gap-1 flex justify-center items-center text-secondary/80 group-hover:text-hover-text/80 duration-500 mt-0.5 mb-1 text-[11px] sm:text-[12px] xl:text-[14px]'>
                                    <span>Shop Now</span>
                                    <span className="inline-block transition-transform duration-300 ease-in-out group-hover:translate-x-0.5"> →</span>
                                </a>
                            </div>
                        </div>
                    </li>

                    <li
                        data-reveal="up"
                        data-reveal-delay="3">
                        <div className='cursor-pointer group hover:drop-shadow-[0px_0px_5px_rgba(0,0,0,0.15)] duration-700 transition-all ease-in-out'>
                            <div className='rounded-t-[30px] overflow-hidden'>
                                <img src={Makeup}
                                    className="h-52 w-full object-cover transition-all duration-700 ease-in-out group-hover:scale-102 group-hover:brightness-107 sm:h-64 md:h-72 xl:h-83"
                                    alt="Makeup" />
                            </div>
                            <div className='bg-button/13 group-hover:bg-button/75 duration-400 px-1 py-2 sm:py-3 flex flex-col items-center rounded-b-[30px]'>
                                <h1 className="text-primary group-hover:text-hover-text text-[16px] font-medium transition-colors duration-500 sm:text-[19px] xl:text-[23px]">
                                    Makeup
                                </h1>
                                <a href="#shop" className='group gap-1 flex justify-center items-center text-secondary/80 group-hover:text-hover-text/80 duration-500 mt-0.5 mb-1 text-[11px] sm:text-[12px] xl:text-[14px]'>
                                    <span>Shop Now</span>
                                    <span className="inline-block transition-transform duration-300 ease-in-out group-hover:translate-x-0.5"> →</span>
                                </a>
                            </div>
                        </div>
                    </li>

                    <li
                        data-reveal="up"
                        data-reveal-delay="4">
                        <div className='cursor-pointer group hover:drop-shadow-[0px_0px_5px_rgba(0,0,0,0.15)] duration-700 transition-all ease-in-out'>
                            <div className='rounded-t-[30px] overflow-hidden'>
                                <img src={Gift}
                                    className="h-52 w-full object-cover transition-all duration-700 ease-in-out group-hover:scale-102 group-hover:brightness-107 sm:h-64 md:h-72 xl:h-83"
                                    alt="Gift" />
                            </div>

                            <div className='bg-button/13 group-hover:bg-button/75 duration-400 px-1 py-2 sm:py-3 flex flex-col items-center rounded-b-[30px]'>
                                <h1 className="text-primary group-hover:text-hover-text text-[16px] font-medium transition-colors duration-500 sm:text-[19px] xl:text-[23px]">
                                    Gift Sets
                                </h1>
                                <a href="#shop" className='group gap-1 flex justify-center items-center text-secondary/80 group-hover:text-hover-text/80 duration-500 mt-0.5 mb-1 text-[11px] sm:text-[12px] xl:text-[14px]'>
                                    <span>Shop Now</span>
                                    <span className="inline-block transition-transform duration-300 ease-in-out group-hover:translate-x-0.5"> →</span>
                                </a>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}
export default Categories;