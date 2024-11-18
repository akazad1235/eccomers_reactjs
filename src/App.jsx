import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faUser, faCartShopping } from '@fortawesome/free-solid-svg-icons';

function App() {

  return (
    <>
     <div className='bg-gray-500 flex justify-center'>
        <div className="flex items-center w-5/6 bg-gray-100 gap-4">
          <div className='flex-none w-40'>
            <img className="w-full" src="../public/logo.png" alt="" />
          </div>
          <div className='flex items-center gap-2 flex-none w-40'>
            <p className='text-secondary'><FontAwesomeIcon icon={ faPhone } size='2x'/></p>
            <div>
              <p>Get Support</p>
              <p>012543256541</p>
            </div>
          </div>
          <div className='flex gap-1 flex-1 w-40'>
            <input type="text" placeholder="Search Anything..." className="w-full p-1 rounded-lg"/>
            <button className="bg-secondary rounded-lg p-1 p1-2 pr-2">Search</button>
          </div>
          <div className='flex gap-2 items-center flex-none w-60'>
            <p className='w-5'><FontAwesomeIcon icon={faUser }/></p>
            <p className='w-10'><FontAwesomeIcon icon={ faCartShopping } /><span>0</span></p>
            <div className='flex-1'>
              <p>Your Cart</p>
              <p className='text-secondary'>$0.00</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
