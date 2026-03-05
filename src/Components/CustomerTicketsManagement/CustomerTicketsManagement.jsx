import React, { use, useEffect } from 'react';
import { CiCalendar } from "react-icons/ci";
import CustomerCard from './CustomerCard';
import TaskStatus from './TaskStatus/TaskStatus';

const CustomerTicketsManagement = ({fetchPromise, inProgressCount, setInProgressCount, selectedTicket, setSelectedTicket, resolvedCount, setResolvedCount, resolvedTicket, setResolvedTicket, allTicket, setAllTicket}) => {
    const customerData = use(fetchPromise)

    useEffect(() => {
        if (customerData && allTicket.length === 0) {
            setAllTicket(customerData);
        }
    }, [customerData, allTicket.length, setAllTicket])

    return (
        <div className='bg-[#f7f7f7]'>
        <div className='p-[2rem] max-w-7xl mx-auto'>
            <div className='grid md:grid-cols-12 gap-5'>
                <div className='col-span-9 '>
                    <h2 className='font-bold text-[1.5rem]'>Customer Tickets</h2>
                    <div className='grid md:grid-cols-2 gap-4 mt-4'>
                        {
                            allTicket.map(customerCard => <CustomerCard 
                                selectedTicket={selectedTicket}
                                setSelectedTicket={setSelectedTicket}

                                inProgressCount={inProgressCount}
                                setInProgressCount={setInProgressCount}

                                key={customerCard.id} 
                                customerCard={customerCard}></CustomerCard> )
                        }
                    </div>
                </div>

                <div className='md:col-span-3 col-span-9'>
                    <TaskStatus 
                    allTicket={allTicket} 
                    setAllTicket={setAllTicket}

                    resolvedTicket={resolvedTicket}
                    setResolvedTicket={setResolvedTicket}

                    resolvedCount={resolvedCount}
                    setResolvedCount={setResolvedCount}

                    inProgressCount={inProgressCount}
                    setInProgressCount={setInProgressCount}

                    selectedTicket={selectedTicket} 
                    setSelectedTicket={setSelectedTicket}></TaskStatus> 
                </div>

            </div>
        </div>
        </div>
    );
};

export default CustomerTicketsManagement;