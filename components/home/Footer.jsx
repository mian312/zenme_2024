import React from 'react';

function Footer() {
    return (
        <footer className="flex z-10 pt-5 pb-8 flex-col justify-center items-center px-20 mb-0 w-full bg-zinc-300 max-md:px-5 max-md:mb-2.5 max-md:max-w-full">
            <div className="flex flex-col -mb-11 max-w-full w-[461px] max-md:mb-2.5">
                <nav className="flex gap-5 justify-between self-center max-w-full text-base font-bold text-orange-500 w-[233px]">
                    <a href="#support">Support ZENMe</a>
                    <a href="#about">About Us</a>
                </nav>
                <div className="flex gap-5 justify-between items-start px-20 py-7 mt-16 max-md:px-5 max-md:mt-10">
                    <a href="#facebook" aria-label="Facebook">
                        <img loading="lazy" src="/images/footer/facebook.png" alt="" className="object-contain w-9 aspect-[1.06]" />
                    </a>
                    <a href="#twitter" aria-label="Twitter">
                        <img loading="lazy" src="/images/footer/twiter.png" alt="" className="object-contain shrink-0 w-9 aspect-[1.06]" />
                    </a>
                    <a href="#youtube" aria-label="Youtube">
                        <img loading="lazy" src="/images/footer/youtube.png" alt="" className="object-contain shrink-0 aspect-[2.47] w-[84px]" />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;