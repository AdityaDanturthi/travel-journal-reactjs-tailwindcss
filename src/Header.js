import {FaGlobeAmericas} from "react-icons/fa"; 

export default function Header(){
    return(
        <div className="bg-[#F55A5A] text-white w-full flex flex-row">
            <span className="py-3.5 text-center font-open-sans font-bold text-4xl w-full"><FaGlobeAmericas className="inline"/><span className="text-lg"> Travel Journal</span></span>
        </div>
    );
}