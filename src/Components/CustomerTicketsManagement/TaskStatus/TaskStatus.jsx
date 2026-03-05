import React from 'react';
import { toast } from 'react-toastify';

const TaskStatus = ({selectedTicket, setSelectedTicket, inProgressCount, setInProgressCount, resolvedCount, setResolvedCount, resolvedTicket, setResolvedTicket, allTicket, setAllTicket}) => {
    const handleCompleteBtn = (removeCardId) => {
        setInProgressCount(inProgressCount -1)  
        setResolvedCount( resolvedCount + 1)    

        setSelectedTicket(selectedTicket.filter(ticket => ticket.id !== removeCardId))  

        const completedTicket = selectedTicket.find(ticket => ticket.id === removeCardId )
        setResolvedTicket([...resolvedTicket, completedTicket ])

        const removeFromMainSection = allTicket.filter(ticket => ticket.id !== removeCardId)
        setAllTicket(removeFromMainSection); 

        toast.success('Task Completed Successfully!')   
    } 
    return (
        <div>
            <h2 className='font-bold text-[1.4rem]'>Task Status</h2>

            {
                selectedTicket.length === 0 && ( <p className='text-[0.9rem] mt-1 text-[#a1a1aa]'> Select a ticket to add to Task Status </p> )
            }

            { selectedTicket.length > 0 && ( 
                <div className='mt-[1.1rem]'>
                    {selectedTicket.map(ticket => (
                        <div key={ticket.id} className='shadow mt-3 p-4 rounded-[0.7rem] bg-white'>
                            <h2 className='text-[1.1rem] font-semibold mb-3'>{ticket.title}</h2>
                            <button onClick={()=> handleCompleteBtn(ticket.id)} className='btn btn-success shadow-none text-white bg-[#02a53b] w-full'> Complete </button>
                        </div>))
                    }
                </div>)
            }

            <div className='mt-[1.3rem]'>
                <h2 className='font-bold text-[1.4rem]'>Resolved Task</h2>
                {
                    resolvedTicket.length === 0 && ( <p className='text-[0.9rem] mt-1 text-[#a1a1aa]'>No resolved tasks yet.</p> )
                }

                { resolvedTicket.length > 0 && ( 
                    resolvedTicket.map(ticket => (
                        <div key={ticket.id} className='bg-[#e0e7ff] mt-3 shadow rounded-[0.7rem] px-4 py-2'>
                            <h2 className=' font-semibold'>{ticket.title}</h2>
                        </div>
                    )))
                }
            </div>
        </div>
    );
};

export default TaskStatus;