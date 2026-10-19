import AppDownloadIcon from '../../assets/icons/AppDownload.webp';
import AppStore from '../../assets/images/AppStore.webp';
import GooglePlay from '../../assets/images/GooglePlay.webp';

function AppDownload() {
    return (
        <section className="px-6 pt-15 md:px-10 xl:px-19.75">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-4">
                {/*-------------col 1------------*/}
                <div className='flex gap-3 justify-start items-center'>
                    <img
                        data-reveal="up"
                        src={AppDownloadIcon}
                        className="h-auto w-32 shrink-0 sm:w-36 lg:w-40"
                        alt="AppDownloadIcon" />
                    <div className='flex flex-col gap-1 justify-center'>
                        <h3
                            data-reveal="up"
                            data-reveal-delay="1"
                            className="text-[18px] md:text-[22px] font-bold text-primary cursor-default">
                            Share Beauty. Enjoy More
                        </h3>
                        <p
                            data-reveal="up"
                            data-reveal-delay="2"
                            className="mt-2 text-[12px] leading-4 text-secondary cursor-default sm:text-[14px] sm:leading-5 xl:text-[17px] xl:leading-7">
                            Download the PÉLORA app and invite a friend.<br />
                            You’ll both enjoy 25% off your next order
                        </p>
                    </div>
                </div>
                {/*-------------col 2------------*/}
                <div className='flex gap-2 justify-end items-center'>
                    <div
                        data-reveal="up"
                        data-reveal-delay="3">
                        <img
                            src={AppStore}
                            className="h-auto w-51 cursor-pointer transition-all duration-700 ease-in-out hover:brightness-103 hover:drop-shadow-[0px_0px_5px_rgba(0,0,0,0.06)] lg:w-55"
                            alt="AppStore" />
                    </div>

                    <div
                        data-reveal="up"
                        data-reveal-delay="4">
                        <img src={GooglePlay}
                            className="h-auto w-51 cursor-pointer transition-all duration-700 ease-in-out hover:brightness-103 hover:drop-shadow-[0px_0px_5px_rgba(0,0,0,0.06)] lg:w-55"
                            alt="GooglePlay" />
                    </div>

                </div>
            </div>
        </section>
    )
}
export default AppDownload;