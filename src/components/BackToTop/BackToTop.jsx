import { useEffect, useState } from 'react';

function BackToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        function handleScroll() {
            setIsVisible(window.scrollY > 300);
        }

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
}

    return (
        <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className={`fixed bottom-5 cursor-pointer right-5 z-50 flex h-15 shadow-[0_3px_10px_rgba(86,54,50,0.2)] hover:shadow-[0_5px_14px_rgba(86,54,50,0.28)] w-15 items-center justify-center rounded-full bg-button text-2xl text-[#FFFAFA] transition-all duration-300 hover:bg-hover-button ${
                isVisible
                    ? 'translate-y-0 opacity-100'
                    : 'pointer-events-none translate-y-3 opacity-0'
            }`}
        >
            ↑
        </button>
    );
}

export default BackToTop;