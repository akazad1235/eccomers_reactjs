import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faUser, faCartShopping, faMagnifyingGlass, faCircleXmark  } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { useState } from 'react';
 
const Header = () => {
  const [open, setOpen] = useState(false);
  const [openRight, setOpenRight] = useState(false);

  const openDrawerRight = () => setOpenRight(true);
  const closeDrawerRight = () => setOpenRight(false);
    return (
        <>
        <div className='flex justify-center bg-gray-100'>
        <div className="flex items-center w-5/6 gap-4">
          <div className='flex-none w-40'>
            <Link to="/">
                <img className="w-full" src="../public/logo.png" alt="" />
            </Link>
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
           <p onClick={ openDrawerRight } className='w-10'><FontAwesomeIcon icon={ faCartShopping } /><span>0</span></p>
            <div className='flex-1'>
              <p>Your Cart</p>
              <p className='text-secondary'>$0.00</p>
            </div>
          </div>
        </div>
      </div>
      <React.Fragment>
          <Drawer 
          placement="right"
          open={openRight}
          onClose={closeDrawerRight}
          className="p-4"
          
          >
            <div className="flex items-center justify-between mb-6">
              <Typography variant="h5" color="blue-gray">
                Cart View
              </Typography>
              <IconButton variant="text" color="blue-gray" onClick={closeDrawerRight}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </IconButton>
            </div>
            <Typography color="gray" className="pr-4 mb-8 font-normal">
                <div className="relative flex items-center gap-2 my-5">
                  <div className="relative w-20 product-img">
                      {/* Icon positioned in the top-left corner */}
                      <p className="absolute p-0 text-lg text-gray-800 rounded cursor-pointer -left-1 -top-3">
                        <FontAwesomeIcon icon={faCircleXmark}/>
                      </p>
                      <img
                        src="https://new-99.myshopify.com/cdn/shop/products/product_1_100x.png?v=1676035416"
                        alt="Product"
                        className="w-full h-auto"
                      />
                  </div>
                  <div className="flex-1 info">
                    <h2 className="font-bold">Export Bag</h2>
                    <p>$4524</p>
                  </div>
                </div>
                <div className="relative flex items-center gap-2 my-5">
                  <div className="relative w-20 product-img">
                      {/* Icon positioned in the top-left corner */}
                      <p className="absolute p-0 text-lg text-gray-800 rounded cursor-pointer -left-1 -top-3">
                        <FontAwesomeIcon icon={faCircleXmark}/>
                      </p>
                      <img
                        src="https://new-99.myshopify.com/cdn/shop/products/product_1_100x.png?v=1676035416"
                        alt="Product"
                        className="w-full h-auto"
                      />
                  </div>
                  <div className="flex-1 info">
                    <h2 className="font-bold">Export Bag</h2>
                    <p>$4524</p>
                  </div>
                </div>
                 <div className="relative flex items-center gap-2 my-5">
                  <div className="relative w-20 product-img">
                      {/* Icon positioned in the top-left corner */}
                      <p className="absolute p-0 text-lg text-gray-800 rounded cursor-pointer -left-1 -top-3">
                        <FontAwesomeIcon icon={faCircleXmark}/>
                      </p>
                      <img
                        src="https://cdn.shopify.com/s/files/1/0268/3017/6353/files/9_68344025-ae14-49f6-b80f-062ccfa1ac2c.jpg?v=1689269156"
                        alt="Product"
                        className="w-full h-auto"
                      />
                  </div>
                  <div className="flex-1 info">
                    <h2 className="font-bold">Flowers Tob</h2>
                    <p>$4524</p>
                  </div>
                </div>
                <hr />
                <div className="flex items-center py-5 sub-total">
                  <p className="flex-1 font-bold">Sub-total:</p>
                  <p className="flex-1">$21545</p>
                </div>
                <hr />
            </Typography>
            <div className="flex gap-2">
              <Button size="sm" variant="outlined">
                View Cart
              </Button>
              <Button size="sm">Checkout</Button>
            </div>
          </Drawer>
        </React.Fragment>
        </>
    );
};

export default Header;