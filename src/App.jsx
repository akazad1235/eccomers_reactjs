import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faUser, faCartShopping, faEye, faHeart, faCodeCompare  } from '@fortawesome/free-solid-svg-icons';
import MegaMenu from './components/MegaMenu';
import Banner from './components/Banner';
import Reliable from './components/Reliable';

function App() {

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
          <div className='flex flex-1 w-40 gap-1'>
            <input type="text" placeholder="Search Anything..." className="w-full p-1 rounded-lg"/>
            <button className="p-1 pr-2 rounded-lg bg-secondary p1-2">Search</button>
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
      <nav>
         <MegaMenu/>
      </nav>
      {/* Banner */}
      <section>
        <Banner/>
      </section>
      {/* reliable */}
      <section>
        <Reliable/>
      </section>
      {/* Two Product Card */}
      <section>
          <div className="flex w-5/6 gap-6 mx-auto my-10">
            <div className='flex-1 overflow-hidden group'>
              <div className="flex items-center gap-6 p-4 transition-transform duration-700 rounded-md bg-cyan-50 group-hover:scale-105">
                <div className='flex-1 text-center'>
                      <h1 className='text-3xl font-black'>Bowl & Spoon</h1>
                      <p>Wooden Product</p>
                      <button className='p-2 py-1 mt-5 rounded-lg bg-secondary hover:text-white'>Explore All</button>
                </div>
                <div className='flex-1'>
                  <img src="../public/wood&spoonse.png" alt="" />
                </div>
              </div>
            </div>
            
            <div className='flex-1 overflow-hidden group'>
              <div className="flex items-center gap-6 p-4 transition-transform duration-700 rounded-md bg-cyan-50 group-hover:scale-105 hover:shadow-lg">
                  <div className='flex-1 text-center'>
                    <h1 className='text-3xl font-black'>Colorful Kettle</h1>
                    <p>Seramic Product</p>
                    <button className='p-2 py-1 mt-5 rounded-lg bg-secondary hover:text-white'>Explore All</button>
                  </div>
                  <div className='flex-1'>
                    <img src="../public/kettle.png" alt="" />
                  </div>
              </div>
            </div>
          </div>
      </section>
      {/* new Arrival products */}
      <section>
      <div className="w-5/6 mx-auto my-10">
          <div className="flex flex-col items-center justify-center my-10 heading">
            <h2 className='text-3xl font-bold'>New Arrivals</h2>
            <p>There are many variations of passages</p>
          </div>
        <div className="grid grid-cols-5 gap-4">
          {/* card item */}
          <div className="relative bg-gray-200 border border-red-100 product-card group">
            {/* <!-- Image Section --> */}
            <div className="relative w-full img">
              <img
                src="../public/kettle.png"
                alt=""
                 className="absolute inset-0 w-full h-full transition-opacity duration-300 opacity-100 group-hover:opacity-0"
              />
              <img
                src="../public/products1.png"
                alt=""
                className="inset-0 w-full transition-opacity duration-300 opacity-0 group-hover:opacity-100"
              />
             
            </div>

            {/* <!-- Info Section --> */}
            <div className="flex flex-col items-center justify-center info">
              <h2 className="text-2xl font-bold text-center">Microsoft Windows 12</h2>
              <p>$1225</p>
            </div>

            {/* <!-- Hover Icon Section --> */}
            <div
              className="absolute inset-x-0 flex justify-center gap-2 transition-all duration-300 -translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 icon"
              style={{ top: 'calc(65% - 10px)' }}
            >
              <button className="p-2 bg-white rounded-full hover:bg-secondary">
                <FontAwesomeIcon icon={faEye} size="2x" className="hover:text-white" />
              </button>
              <button className="p-2 bg-white rounded-full hover:bg-secondary">
                <FontAwesomeIcon
                  icon={faCartShopping}
                  size="2x"
                  className="hover:text-white"
                />
              </button>
              <button className="p-2 bg-white rounded-full hover:bg-secondary">
                <FontAwesomeIcon icon={faHeart} size="2x" className="hover:text-white" />
              </button>
              <button className="p-2 bg-white rounded-full hover:bg-secondary">
                <FontAwesomeIcon
                  icon={faCodeCompare}
                  size="2x"
                  className="hover:text-white"
                />
              </button>
            </div>
          </div>
          <div className="relative bg-gray-200 border border-red-100 product-card group">
            {/* <!-- Image Section --> */}
            <div className="relative w-full img">
              <img
                src="../public/kettle.png"
                alt=""
                 className="absolute inset-0 w-full h-full transition-opacity duration-300 opacity-100 group-hover:opacity-0"
              />
              <img
                src="../public/products1.png"
                alt=""
                className="inset-0 w-full transition-opacity duration-300 opacity-0 group-hover:opacity-100"
              />
             
            </div>

            {/* <!-- Info Section --> */}
            <div className="flex flex-col items-center justify-center info">
              <h2 className="text-2xl font-bold text-center">Microsoft Windows 12</h2>
              <p>$1225</p>
            </div>

            {/* <!-- Hover Icon Section --> */}
            <div
              className="absolute inset-x-0 flex justify-center gap-2 transition-all duration-300 -translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 icon"
              style={{ top: 'calc(65% - 10px)' }}
            >
              <button className="p-2 bg-white rounded-full hover:bg-secondary">
                <FontAwesomeIcon icon={faEye} size="2x" className="hover:text-white" />
              </button>
              <button className="p-2 bg-white rounded-full hover:bg-secondary">
                <FontAwesomeIcon
                  icon={faCartShopping}
                  size="2x"
                  className="hover:text-white"
                />
              </button>
              <button className="p-2 bg-white rounded-full hover:bg-secondary">
                <FontAwesomeIcon icon={faHeart} size="2x" className="hover:text-white" />
              </button>
              <button className="p-2 bg-white rounded-full hover:bg-secondary">
                <FontAwesomeIcon
                  icon={faCodeCompare}
                  size="2x"
                  className="hover:text-white"
                />
              </button>
            </div>
          </div>
          <div className="relative bg-gray-200 border border-red-100 product-card group">
            {/* <!-- Image Section --> */}
            <div className="relative w-full img">
              <img
                src="../public/kettle.png"
                alt=""
                 className="absolute inset-0 w-full h-full transition-opacity duration-300 opacity-100 group-hover:opacity-0"
              />
              <img
                src="../public/products1.png"
                alt=""
                className="inset-0 w-full transition-opacity duration-300 opacity-0 group-hover:opacity-100"
              />
             
            </div>

            {/* <!-- Info Section --> */}
            <div className="flex flex-col items-center justify-center info">
              <h2 className="text-2xl font-bold text-center">Microsoft Windows 12</h2>
              <p>$1225</p>
            </div>

            {/* <!-- Hover Icon Section --> */}
            <div
              className="absolute inset-x-0 flex justify-center gap-2 transition-all duration-300 -translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 icon"
              style={{ top: 'calc(65% - 10px)' }}
            >
              <button className="p-2 bg-white rounded-full hover:bg-secondary">
                <FontAwesomeIcon icon={faEye} size="2x" className="hover:text-white" />
              </button>
              <button className="p-2 bg-white rounded-full hover:bg-secondary">
                <FontAwesomeIcon
                  icon={faCartShopping}
                  size="2x"
                  className="hover:text-white"
                />
              </button>
              <button className="p-2 bg-white rounded-full hover:bg-secondary">
                <FontAwesomeIcon icon={faHeart} size="2x" className="hover:text-white" />
              </button>
              <button className="p-2 bg-white rounded-full hover:bg-secondary">
                <FontAwesomeIcon
                  icon={faCodeCompare}
                  size="2x"
                  className="hover:text-white"
                />
              </button>
            </div>
          </div>
          <div className="relative bg-gray-200 border border-red-100 product-card group">
            {/* <!-- Image Section --> */}
            <div className="relative w-full img">
              <img
                src="../public/kettle.png"
                alt=""
                 className="absolute inset-0 w-full h-full transition-opacity duration-300 opacity-100 group-hover:opacity-0"
              />
              <img
                src="../public/products1.png"
                alt=""
                className="inset-0 w-full transition-opacity duration-300 opacity-0 group-hover:opacity-100"
              />
             
            </div>

            {/* <!-- Info Section --> */}
            <div className="flex flex-col items-center justify-center info">
              <h2 className="text-2xl font-bold text-center">Microsoft Windows 12</h2>
              <p>$1225</p>
            </div>

            {/* <!-- Hover Icon Section --> */}
            <div
              className="absolute inset-x-0 flex justify-center gap-2 transition-all duration-300 -translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 icon"
              style={{ top: 'calc(65% - 10px)' }}
            >
              <button className="p-2 bg-white rounded-full hover:bg-secondary">
                <FontAwesomeIcon icon={faEye} size="2x" className="hover:text-white" />
              </button>
              <button className="p-2 bg-white rounded-full hover:bg-secondary">
                <FontAwesomeIcon
                  icon={faCartShopping}
                  size="2x"
                  className="hover:text-white"
                />
              </button>
              <button className="p-2 bg-white rounded-full hover:bg-secondary">
                <FontAwesomeIcon icon={faHeart} size="2x" className="hover:text-white" />
              </button>
              <button className="p-2 bg-white rounded-full hover:bg-secondary">
                <FontAwesomeIcon
                  icon={faCodeCompare}
                  size="2x"
                  className="hover:text-white"
                />
              </button>
            </div>
          </div>
          <div className="relative bg-gray-200 border border-red-100 product-card group">
            {/* <!-- Image Section --> */}
            <div className="relative w-full img">
              <img
                src="../public/kettle.png"
                alt=""
                 className="absolute inset-0 w-full h-full transition-opacity duration-300 opacity-100 group-hover:opacity-0"
              />
              <img
                src="../public/products1.png"
                alt=""
                className="inset-0 w-full transition-opacity duration-300 opacity-0 group-hover:opacity-100"
              />
             
            </div>

            {/* <!-- Info Section --> */}
            <div className="flex flex-col items-center justify-center info">
              <h2 className="text-2xl font-bold text-center">Microsoft Windows 12</h2>
              <p>$1225</p>
            </div>

            {/* <!-- Hover Icon Section --> */}
            <div
              className="absolute inset-x-0 flex justify-center gap-2 transition-all duration-300 -translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 icon"
              style={{ top: 'calc(65% - 10px)' }}
            >
              <button className="p-2 bg-white rounded-full hover:bg-secondary">
                <FontAwesomeIcon icon={faEye} size="2x" className="hover:text-white" />
              </button>
              <button className="p-2 bg-white rounded-full hover:bg-secondary">
                <FontAwesomeIcon
                  icon={faCartShopping}
                  size="2x"
                  className="hover:text-white"
                />
              </button>
              <button className="p-2 bg-white rounded-full hover:bg-secondary">
                <FontAwesomeIcon icon={faHeart} size="2x" className="hover:text-white" />
              </button>
              <button className="p-2 bg-white rounded-full hover:bg-secondary">
                <FontAwesomeIcon
                  icon={faCodeCompare}
                  size="2x"
                  className="hover:text-white"
                />
              </button>
            </div>
          </div>
          <div className="relative bg-gray-200 border border-red-100 product-card group">
            {/* <!-- Image Section --> */}
            <div className="relative w-full img">
              <img
                src="../public/kettle.png"
                alt=""
                 className="absolute inset-0 w-full h-full transition-opacity duration-300 opacity-100 group-hover:opacity-0"
              />
              <img
                src="../public/products1.png"
                alt=""
                className="inset-0 w-full transition-opacity duration-300 opacity-0 group-hover:opacity-100"
              />
             
            </div>

            {/* <!-- Info Section --> */}
            <div className="flex flex-col items-center justify-center info">
              <h2 className="text-2xl font-bold text-center">Microsoft Windows 12</h2>
              <p>$1225</p>
            </div>

            {/* <!-- Hover Icon Section --> */}
            <div
              className="absolute inset-x-0 flex justify-center gap-2 transition-all duration-300 -translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 icon"
              style={{ top: 'calc(65% - 10px)' }}
            >
              <button className="p-2 bg-white rounded-full hover:bg-secondary">
                <FontAwesomeIcon icon={faEye} size="2x" className="hover:text-white" />
              </button>
              <button className="p-2 bg-white rounded-full hover:bg-secondary">
                <FontAwesomeIcon
                  icon={faCartShopping}
                  size="2x"
                  className="hover:text-white"
                />
              </button>
              <button className="p-2 bg-white rounded-full hover:bg-secondary">
                <FontAwesomeIcon icon={faHeart} size="2x" className="hover:text-white" />
              </button>
              <button className="p-2 bg-white rounded-full hover:bg-secondary">
                <FontAwesomeIcon
                  icon={faCodeCompare}
                  size="2x"
                  className="hover:text-white"
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      </section>


    </>
  )
}

export default App
