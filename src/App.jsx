import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartShopping, faEye, faHeart, faCodeCompare } from '@fortawesome/free-solid-svg-icons';
import MegaMenu from './components/MegaMenu';
import Banner from './components/Banner';
import Reliable from './components/Reliable';
import Footer from './components/Footer';
import Header from './components/Header';
import ProductsCard from './components/ProductsCard';
import { Link } from 'react-router-dom';

function App() {

  return (
    <>
      <header>
        <Header />
      </header>
      <nav>
         <MegaMenu/>
      </nav>
      {/* Banner */}
      <section className='w-5/6 mx-auto'>
        <Banner/>
      </section>
      {/* reliable */}
      <section className='mt-10'>
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
          <ProductsCard/>
        </div>
        <div className='flex flex-col items-center justify-center'>
           <Link to="/product/filter">
            <button className='p-3 text-2xl font-normal text-white rounded-md bg-secondary'>View All</button>
           </Link>
        </div>
      </div>
      </section>
      {/* news letter */}
      <section>
        <div className="w-2/3 p-10 mx-auto bg-gray-200 rounded-md w- w-5/4 news-latter">
            <h2 className='text-3xl font-bold text-center'>Newsletter</h2>
            <p className='text-center'>Learn about our most recent news, updates, and deals by subscribing.</p>
            <div className='flex items-center justify-center my-9'>
              <input type="text" className='w-2/4 p-3 focus:outline-none' placeholder='Input Your Email'/>
              <button className='p-3 text-white bg-secondary'>Subscribe</button>
            </div>
        </div>
      </section>
      {/* footer */}
      <footer>
        <Footer/>
      </footer>
    </>
  )
}

export default App
