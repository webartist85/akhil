const Footer = () => {
    return (
        <footer className="akhil-footer font-primaryFont bg-[#f4f5f7] dark:bg-[#101010] h-[5.313rem] sm:h-[8.75rem]">
            <div className="container h-full">
                <div className="akhil-footer--inner flex flex-col items-center justify-center h-full">
                    <div className="akhil-footer--logo text-[#333] dark:text-white font-secondaryFont text-[2rem]/[1.5rem] sm:text-[2.5rem] sm:leading-10 text-center mb-[0.75rem] md:mb-[1.563rem]">
                        akhil
                    </div>
                    <div className="akhil-footer--copy-right text-center text-[#333] dark:text-[#B9B5B5] text-[0.875rem] font-medium">
                        © All rights reserved by aj.web.designs
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;