import React, { useState } from 'react';
import Header from '../../components/Header';
import MegaMenu from '../../components/MegaMenu';
import Footer from '../../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faPlus, faMinus, faMoneyCheck, faTruckFast  } from '@fortawesome/free-solid-svg-icons';
import Reliable from '../../components/Reliable';
import TabsDetails from './TabsDetails';
import ProductSlider from '../../components/ProductSlider';
import ProductFaq from './ProductFaq';

const ProductDetails = () => {
    const [productCount, setProductCount] = useState(1)
    const handleIncrementCount = () => {
        setProductCount(productCount+1);
    }
    const handleDecreamentCount = () => {
        setProductCount(productCount-1);
    }
    console.log(productCount);
    
    return (
        <>
            <Header/>
            <MegaMenu/>
            <div className='w-5/6 mx-auto my-10'>
                <div className="flex gap-10">
                    <div className="flex-1 w-full product-image">
                        <img  className='w-full' src="https://new-99.myshopify.com/cdn/shop/products/30_27d6af23-a8d0-42ae-8019-452086d0749a_1024x1024.png?v=1680176669" alt="" />

                    </div>
                    <div className="flex-1 w-full product-info">
                        <div className="main-info">
                            <h2 className='text-3xl font-bold'>Z. Digital Downloads Product</h2>
                            <p className='my-5'>Lorem ipsum dolor, deleniti laborum et animi. Nisi officiis ducimus nobis iure laboriosam illum quod excepturi eaque consequatur autem. Illum quae tenetur earum maiores voluptatibus quo sit placeat quisquam autem necessitatibus. In impedit nulla labore deserunt.</p>
                            <hr/>
                            <div className='my-3'>
                                <p><strong>Price: </strong>$5241</p>
                                <p><strong>Availability: </strong>$5241</p>
                                <p><strong>SKU: </strong>left in stock</p>
                                <p><strong>Vendor: </strong>Vendor E</p>
                            </div>
                            <div className="flex items-center gap-3 my-10 action-button">
                                <div className="flex-none w-30">
                                    <div className="flex product-count">
                                        <button onClick={handleDecreamentCount} className='px-1'><FontAwesomeIcon icon={faMinus}/></button>
                                        <input type="text" value={productCount} className='w-10 p-2 text-center border border-red-100'/>
                                        <button onClick={handleIncrementCount} className='px-1'><FontAwesomeIcon icon={faPlus}/></button>
                                    </div>
                                </div>
                                <div className="flex-none w-30 add-to-cart">
                                    <button className='p-2 text-white rounded-md bg-secondary'>
                                        <FontAwesomeIcon icon={faCartShopping}/>Add to Cart
                                    </button>
                                </div>
                                <div className="flex-none w-30 add-to-cart">
                                    <button className='p-2 text-white rounded-md bg-primary'>
                                    <FontAwesomeIcon icon={faMoneyCheck}/> Buy it now
                                    </button>
                                </div>
                            </div>
                            <hr/>
                            <div className="rules-return">
                                <h2 className='my-5'>
                                    <FontAwesomeIcon icon={faTruckFast} className='mr-3'/>
                                    Estimated Delivery Date : 23 - 25 November, 2024..
                                </h2>
                                <h2 className='my-5 font-bold'>Return rules summary</h2>
                                <div className="list">
                                    <li>Returns accepted for 30 days</li>
                                    <li>Free return shipping</li>
                                    <li>No restocking fee</li>
                                    <li>No final sale items</li>
                                </div>
                            </div>
                            <hr />
                            <div className="share">
                                <p>Share</p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-5/6 mx-auto reliable">
                <Reliable/>
            </div>
            <div className="w-5/6 mx-auto my-10 tabs">
                <TabsDetails/>
            </div>
            <div className="w-5/6 mx-auto my-10 relative-products">
                <div className="info">
                    <h2 className='my-3 text-4xl font-bold text-center'>Related Products</h2>
                    <p className='text-center'>You may also like</p>
                </div>
                <div className="my-10 product-slider">
                    <ProductSlider/>
                </div>
            </div>
            <div className="w-3/6 mx-auto my-20 faq">
                <div className="info">
                    <h2 className='my-3 text-4xl font-bold text-center'>FAQs</h2>
                </div>
                <ProductFaq/>
            </div>
            <div className="footer">
               <Footer/>  
            </div>
              
        </>
    );
};

export default ProductDetails;