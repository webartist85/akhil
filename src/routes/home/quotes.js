import Marquee from "react-fast-marquee";

const Quotes = ()=>{
    return(
        <div className="marquee-content w-full bg-[#fff] shadow-2 dark:shadow-[0] border-[#eaebf0] border-[#f2f2f2] dark:bg-[#1B1919] border dark:border-[#403D3D] rounded-[1.25rem] pt-[1.25rem] pb-[1.25rem] pl-[1.5rem] pr-[1.5rem]">
        <Marquee speed="30">
          <div className="quotes font-primaryFont font-medium text-[0.75rem]/[1.375rem] text-[#333] dark:text-[#fff] uppercase mr-[1rem]">
            Good design is about process, not product.
            <span className="inline-block text-[#6E6C6C] dark:text-[#DCD8D8] normal-case ml-[0.5rem]">- Jared Sinclair, iOS Designer</span>
          </div>
          <div className="quotes font-primaryFont font-medium text-[0.75rem]/[1.375rem] text-[#333] dark:text-[#fff] uppercase mr-[1rem]">
            Rule of thumb for UX: More options, more problems.
            <span className="inline-block text-[#6E6C6C] dark:text-[#DCD8D8] normal-case ml-[0.5rem]">- Scott Belsky, Chief Product Officer</span>
          </div>
        </Marquee>
      </div>
    )
}
export default Quotes;