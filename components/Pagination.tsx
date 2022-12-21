import { useEffect, useState } from "react";

interface PaginationProps {
    itemPerPage: number, 
    totalItemCount: number,
    paginate: (n: number) => void,
    paginateForward: () => void,
    paginateBackward: () => void,
    currentPage: number
}

export default function Pagination({itemPerPage, totalItemCount, paginate, paginateForward, paginateBackward, currentPage}: PaginationProps) {

let [countOfPagSlots, setCountOfPagSlots] = useState(7);

    useEffect(()=>{
        drawPagination(pagArray())
    },[currentPage])

    let pagArray = (): Array<number | string> => {
        let pageCount = [];
        for(let i = 1; i <=  Math.ceil(totalItemCount / itemPerPage); i++) {
            pageCount.push(i);
        }

        if (pageCount.length <=  countOfPagSlots) {
            return pageCount;
        }

        if(pageCount.length >  countOfPagSlots) {

            let activeSlots = countOfPagSlots - 2;
            let pagPages = Math.ceil(pageCount.length / activeSlots);

          for(let i = 1; i <= pagPages; i++) {
    
            if((currentPage > (i * activeSlots - activeSlots)) && (currentPage <= (i * activeSlots))) {
                let calculated: Array<number | string>;
                if(i == pagPages) {  
                    calculated = pageCount.slice((i * activeSlots) - activeSlots,  -1)
                } else {
                    calculated = pageCount.slice((i * activeSlots) - activeSlots, i * activeSlots)
                }
                
                calculated.push('...');
                calculated.push(pageCount[pageCount.length - 1]);
                return calculated;
            }
          }
        };
        return Array(0);
}

    let drawPagination = (pageCount: Array<number | string>) => {
        return  (pageCount.map((num) => {
            return num == currentPage ?
            <li 
            className={`font-proximaNova font-bold text-xl+ text-[#5876C5] relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2.5px] after:bg-[#5876C5] px-[15px] py-[14px] ${ num != '...' && 'cursor-pointer'}`} 
            key={num} 
            onClick={() => { if(num != '...') paginate(+num)}}>{num}
            </li>
            :
            <li 
            className={`font-proximaNova font-bold text-xl+ text-[#878D9D] px-[15px] py-[14px] ${ num != '...' && 'cursor-pointer'}`} 
            key={num} 
            onClick={() => { if(num != '...') paginate(+num)}}>{num}
            </li>

    })) 
}

    return(
        <ul className="flex justify-center">
            <div className="inline-flex bg-white items-center rounded-[10.5px] grow-0">
                <li className="py-[9px] pl-[23px] pr-[29px] border-r-[1.3px] border-[#DEE3EF] cursor-pointer" onClick={() => {paginateBackward()}}><span className="block h-[13px] w-[13px] relative before:absolute before:w-full before:h-[4px] before:bg-[#7D859C] before:rounded-md after:absolute after:w-[4px] after:h-full after:bg-[#7D859C] after:rounded-md rotate-[-45deg]" ></span></li>
                {drawPagination(pagArray())}
                <li className="py-[9px] pr-[23px] pl-[29px] border-l-[1.3px] border-[#DEE3EF] cursor-pointer" onClick={() => {paginateForward()}}><span className="block h-[13px] w-[13px] relative before:absolute before:w-full before:h-[4px] before:bg-[#7D859C] before:rounded-md after:absolute after:w-[4px] after:h-full after:bg-[#7D859C] after:rounded-md rotate-[135deg]"></span></li>  
            </div>
        </ul>
    )
}