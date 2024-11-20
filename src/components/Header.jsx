import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faUser, faCartShopping, faEye, faHeart, faCodeCompare, faMagnifyingGlass  } from '@fortawesome/free-solid-svg-icons';
const Header = () => {
    return (
        <>
                 <div className='flex justify-center bg-gray-100'>
        <div className="flex items-center w-5/6 gap-4">
          <div className='flex-none w-40'>
            <img className="w-full" src="../public/logo.png" alt="" />
          </div>
          <div className='flex items-center flex-none w-40 gap-2'>
            <p className='text-secondary'><FontAwesomeIcon icon={ faPhone } size='2x'/></p>
            <div>
              <p>Get Support</p>
              <p>012543256541</p>
            </div>
          </div>
          <div className='flex-1 w-40 gap-1'>
            <div className='flex items-center border border-red-200'>
            <input
              type="text"
              placeholder="Search Anything..."
              className="w-full p-3 border-none rounded-lg focus:outline-none"
            />              
            <button className="p-3 pr-2 pr-4 bg-white">
              <FontAwesomeIcon icon={ faMagnifyingGlass }/>
            </button>
            </div>
          </div>
          <div className='flex items-center flex-none gap-2 w-60'>
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
    );
};

export default Header;