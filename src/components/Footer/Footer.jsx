import Logo from '../../assets/images/Logo.webp';
import SocialMedia from '../../assets/icons/SocialMedia.webp';

function Footer() {
    return (
        <section className="mt-15 md:mt-10 bg-primary/10 px-4 pt-6 sm:px-6 md:px-10 lg:mt-15 lg:px-13">
            <div className="mt-6 grid grid-cols-1 gap-y-6 sm:mt-8 lg:mt-10 lg:grid-cols-3">
                <div className="flex min-w-0 justify-center lg:justify-start">
                    <img src={Logo}
                        className='w-35'
                        alt="Logo" />
                </div>
                <div className="flex w-full min-w-0 justify-center">
                    <ul className='flex flex-row text-[18px] justify-center items-center gap-7 text-primary font-medium'>
                        <li className='cursor-pointer hover:text-hover-button transition-all duration-400'>Shop</li>
                        <li className='cursor-pointer hover:text-hover-button transition-all duration-400'>About</li>
                        <li className='cursor-pointer hover:text-hover-button transition-all duration-400'>Journal</li>
                        <li className='cursor-pointer hover:text-hover-button transition-all duration-400'>Contact</li>
                    </ul>
                </div>

                <div className="flex min-w-0 items-center justify-center lg:justify-end">
                    <img src={SocialMedia}
                        className='w-35 cursor-pointer'
                        alt="" />
                </div>
            </div>
            
            <div className="mt-15 border-t border-primary/25 py-5 text-center justify-center">
                <p className="text-sm text-primary cursor-default">
                    Designed by NSM © 2026
                </p>
            </div>
            
        </section>
    )
}
export default Footer;