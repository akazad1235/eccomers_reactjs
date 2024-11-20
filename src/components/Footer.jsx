
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Footer = () => {
    return (
        <div className='flex flex-col items-center justify-center mt-20 bg-primary'>
            <div className="w-5/6 py-10">
                <div className="grid grid-cols-4 gap-20">
                    <div className='my-account'>
                    <h1 className='mb-4 text-2xl font-bold text-white'>My Account</h1>
                        <div className="text-gray-500 list-none ">
                            <li className='my-2'>Shopping Policy</li>
                            <li className='my-2'>Help & Contact Us</li>
                            <li className='my-2'>Returns & Refunds</li>
                            <li className='my-2'>Online Stores</li>
                            <li className='my-2'>Wishlist</li>
                            <li className='my-2'>Terms & Conditions</li>
                        </div>
                    </div>
                <div className='my-account'>
                <h1 className='mb-4 text-2xl font-bold text-white'>Quick Links</h1>
                    <div className="text-gray-500 list-none ">
                            <li className='my-2'>Shopping Policy</li>
                            <li className='my-2'>Help & Contact Us</li>
                            <li className='my-2'>Returns & Refunds</li>
                            <li className='my-2'>Online Stores</li>
                            <li className='my-2'>Wishlist</li>
                            <li className='my-2'>Terms & Conditions</li>
                        </div>
                    </div>
                <div className='my-account'>
                <h1 className='mb-4 text-2xl font-bold text-white'>Company</h1>
                    <div className="text-gray-500 list-none ">
                            <li className='my-2'>Shopping Policy</li>
                            <li className='my-2'>Help & Contact Us</li>
                            <li className='my-2'>Returns & Refunds</li>
                            <li className='my-2'>Online Stores</li>
                            <li className='my-2'>Wishlist</li>
                            <li className='my-2'>Terms & Conditions</li>
                    </div>
                </div>
                <div className='text-start my-account'>
                    <h1 className='mb-4 text-2xl font-bold text-center text-white'>ABOUT OUR SHOP</h1>
                    <div className="text-gray-500 list-none">
                       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmo incididunt ut labore et dolore</p>
                    </div>
                    <div className='my-4 text-gray-500 contact'>
                        <FontAwesomeIcon icon={faLocationDot} className='mr-2' />
                        Mohammadpur, Dhaka, Bangladesh.
                    </div>
                    <div className='my-4 text-gray-500 contact'>
                        <FontAwesomeIcon icon={faPhone} className='mr-2' />
                        01726756074
                    </div>
                    <div className='my-4 text-gray-500 contact'>
                        <FontAwesomeIcon icon={faEnvelope} className='mr-2' />
                        akazad914@gmail.com
                    </div>
                </div>
                
            </div>
            </div> 
            <div className='w-full border-t border-t-gray-700 bg-primary'>
                <p className='p-5 text-center text-white'>All Rights Reserved @ Company 2024</p>
            </div>
        </div>
    );
};

export default Footer;