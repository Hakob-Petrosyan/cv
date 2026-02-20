import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import './slider.css'

export default function MySlider({className, spaceBetween = 12, grabCursor = true}) {
    return (
        <Swiper className={className}
            modules={[Navigation]}
            navigation={{
                prevEl: '#experience_slide_left',
                nextEl: '#experience_slide_Right',
            }}
                slidesPerView='auto'
                spaceBetween={spaceBetween}
                grabCursor={grabCursor}
                speed={800}
        >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
        </Swiper>
    );
}