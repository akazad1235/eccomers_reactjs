import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import required modules
import { Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import ProductsCard from './ProductsCard';

const ProductSlider = () => {
    const [setSwiperRef] = useState(null);

    return (
        <>
            <Swiper
                onSwiper={setSwiperRef}
                slidesPerView={4} // Always 3 items
                centeredSlides={false} // Ensure proper alignment
                spaceBetween={20} // Add some spacing
                pagination={{
                    type: 'fraction',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
                style={{ width: '100%', height: 'auto' }} // Ensure proper sizing
            >
                <SwiperSlide>
                    <div>
                        <ProductsCard/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <ProductsCard/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <ProductsCard/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <ProductsCard/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <ProductsCard/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <ProductsCard/>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default ProductSlider;
