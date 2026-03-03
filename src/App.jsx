import { ToastContainer} from 'react-toastify';
import { Suspense, useState } from 'react';

import Navbar from "./Components/Navbar/Navbar";
import Banner from './Components/Banner/Banner'
import Footer from './Components/Footer/Footer';

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
      <Footer/>

      
    </>
  )
}

export default App;