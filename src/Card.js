import {ImLocation} from "react-icons/im"; 
import data from './cardData.json';

function Desc(props){
    console.log(process.env.PUBLIC_URL + props.data.img);
    return(
        <div className="flex flex-row h-fit w-fit py-5 border-b-2 border-slate-100">
        <img src={process.env.PUBLIC_URL + props.data.img} alt={data.picAlt} className='pr-5 w-40 h-48'/>
        <div className="flex flex-col gap-20 mt-2">
        <div className="flex flex-col mt-1 max-w-sm">
            <div className="flex flex-row items-center gap-1">
                <span><ImLocation className="inline text-[#F55A5A] -mt-1 text-xs"/></span>
                <span className="font-mono tracking-widest text-xs"> {props.data.location}</span>
                <a href={props.data.mapsLink} target="blank" className="text-[10px] pl-1 underline text-[#918E9B]">View on Google Maps</a>
            </div>    
            <p className="text-2xl font-bold">{props.data.picAlt}</p>
            <p className="mt-2 text-xs font-bold">{props.data.travelDates}</p>
            <p className="mt-2 text-xs font-light">{props.data.description}</p>
        </div>
        </div>
        </div>
    );
}

export default function Card(){
    return(
        <div className="flex flex-col h-screen items-center mx-auto p-2">
            {data.map(data => <Desc data={data} key= {data.id} />)}
        </div>

    );
}