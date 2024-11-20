import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartShopping, faEye, faHeart, faCodeCompare } from '@fortawesome/free-solid-svg-icons';

const ProductsCard = () => {
    return (
        <>
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
       
        </>
    );
};

export default ProductsCard;