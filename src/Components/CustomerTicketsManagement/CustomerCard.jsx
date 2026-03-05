import React from 'react';
import { CiCalendar } from "react-icons/ci";
import { toast } from 'react-toastify';

const CustomerCard = ({customerCard, inProgressCount, setInProgressCount, selectedTicket, setSelectedTicket }) => {
    const handleCard = () => {
        const ticketAlreadyAdded = selectedTicket.some( ticket => ticket.id === customerCard.id );

        if (ticketAlreadyAdded) {
            return toast.info('This ticket is already in Task Status.');
        }
        setInProgressCount(inProgressCount + 1);
        setSelectedTicket([...selectedTicket, customerCard])
        toast.success('Ticket moved to In Progress!');
    }
    return (
        <div onClick={handleCard} className='cursor-pointer shadow-[0px_4px_16px_0px_#00000014] bg-white border-gray-700 p-[1rem] rounded-[0.5rem]'>
            <div className='flex justify-between items-center'>
                <h2 className='text-[1.1rem] font-semibold'>{customerCard.title}</h2>

                <div className={`px-3 py-1 rounded-[0.9rem] flex items-center gap-2 text-[0.9rem] ${customerCard.status === 'Open' ? "bg-[#b9f8cf]" : "bg-[#f8f3b9]"}`}>
                    <div className={`w-3 h-3 rounded-full ${customerCard.status === 'Open' ? "bg-[#02a53b]" : "bg-[#febb0c]" } `}></div> 
                    <div className={` ${customerCard.status === 'Open' ? "text-[#0b5e06]" : "text-[#9c7700]" } `}>{customerCard.status}</div>
                </div>
            </div>

            <p className='text-[#627382] text-[0.82rem] my-2'>{customerCard.description}</p>
            <div className='flex justify-between items-center text-[#a1a1aa]'>
                <div className='flex items-center gap-2'>
                    <span className='text-[0.8rem]'>#{customerCard.id}</span>
                    <span className={`text-[0.8rem] font-semibold 
                    ${ customerCard.priority === 'HIGH PRIORITY' ?  "text-[#f83044]" :
                        customerCard.priority === 'MEDIUM PRIORITY' ?  "text-[#febb0c]" : "text-[#02A53B]" }`}>{customerCard.priority}</span>
                </div>

                <div className='flex items-center gap-3'>
                    <span className='text-[0.8rem]'>{customerCard.customer}</span>
                    <div className='flex items-center gap-1'>
                        <div className='text-[1.2rem]'><CiCalendar /></div>
                        <span className='text-[0.8rem]'> {customerCard.createdAt} </span>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CustomerCard;