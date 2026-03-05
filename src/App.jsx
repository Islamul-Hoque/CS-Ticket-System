import { ToastContainer} from 'react-toastify';
import { Suspense, useState } from 'react';

import Navbar from './Components/Navbar/Navbar'
import Banner from './Components/Banner/Banner'
import CustomerTicketsManagement from './Components/CustomerTicketsManagement/CustomerTicketsManagement';
import Footer from './Components/Footer/Footer'

const fetchCustomer = async () => {
  const res = await fetch('/tickets.json')
  return res.json()
}
const fetchPromise = fetchCustomer()


function App() {
  const [ inProgressCount, setInProgressCount ] = useState(0) 
  const [ selectedTicket, setSelectedTicket ] = useState([]) 
  const [ resolvedCount, setResolvedCount ] = useState(0) 
  const [ resolvedTicket, setResolvedTicket ] = useState([]) 
  const [ allTicket, setAllTicket ] = useState([]) 
  return (
    <>
      <Navbar></Navbar>
      <Banner 
        resolvedCount={resolvedCount}
        inProgressCount={inProgressCount} >
      </Banner>

      <Suspense fallback={<div className="flex justify-center bg-[#f7f7f7] py-10"> <span className="loading loading-dots loading-xl"></span> </div>}>
        <CustomerTicketsManagement 
        allTicket={allTicket} 
        setAllTicket={setAllTicket}

        resolvedTicket={resolvedTicket}
        setResolvedTicket={setResolvedTicket}

        resolvedCount={resolvedCount}
        setResolvedCount={setResolvedCount}

        selectedTicket={selectedTicket}
        setSelectedTicket={setSelectedTicket}

        inProgressCount={inProgressCount} 
        setInProgressCount={setInProgressCount}
        fetchPromise={fetchPromise}> </CustomerTicketsManagement>
      </Suspense>

      <Footer></Footer>
      <ToastContainer />
    </>
  )
}

export default App;