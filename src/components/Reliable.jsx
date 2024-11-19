import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruckFast, faSackDollar, faMoneyCheck } from '@fortawesome/free-solid-svg-icons';

const Reliable = () => {
    return (
        <>
           <div className="flex items-center justify-center w-5/6 px-2 mx-auto my-4 border border-indigo-600 py-7">
               <div className="flex items-center flex-1 gap-2"> 
                    <FontAwesomeIcon icon={faTruckFast} size='3x' className='text-secondary'/>
                    <div>
                        <h2 className='text-lg font-bold'>Free Shipping</h2>
                        <p>Free shipping on orders over $99.</p>
                    </div>
                </div>
                <div className="flex items-center flex-1 gap-2">
                    <FontAwesomeIcon icon={faSackDollar} size='3x' className='text-secondary'/>
                    <div>
                        <h2 className='text-lg font-bold'>Money Back</h2>
                        <p>15 days money back guarantee.</p>
                    </div>
                </div>   
                <div className="flex items-center flex-1 gap-2">
                    <FontAwesomeIcon icon={faMoneyCheck} size='3x' className='text-secondary'/>
                    <div>
                        <h2 className='text-lg font-bold'>Secure Checkout</h2>
                        <p>We ensure 100% Payment Secure.</p>
                    </div>
                </div>        
           </div>
        </>
    );
};

export default Reliable;