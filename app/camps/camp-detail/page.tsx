"use client";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Campsdata from "@/data/Camps.json";
import { TentType } from "@/type/TentType";
import { addDays } from "date-fns";
import Campinfo from "@/components/Campinfo";
import CampSidebar from "@/components/CampSidebar";

const CampDetail = () => {
    const params = useSearchParams();
    const campID = params.get("id");

    const CAMP = Campsdata.find((camp) => camp.id === campID) as TentType;

    const settings = {
        // arrows: true,
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        touchThreshold: 100,
        swipe: true,
        swipeToSlide: true,
        draggable: true,
        useTransform: false,
        centerMode: true,
        centerPadding: "300px",
        autoplay: true,
        autoplaySpeed: 2000,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: "24px",
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: "160px",
                },
            },
            {
                breakpoint: 1340,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 2000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const [range, setRange] = useState([
        {
            startDate: new Date(),
            endDate: addDays(new Date(), 7),
            key: "selection",
        },
    ]);

    return (
        <section>
            <div className='camp-slider overflow-hidden pb-6'>
                <Slider {...settings} className='h-full'>
                    {CAMP.listImage.map((img, index) => (
                        <div className='bg-img w-full aspect-[4/3]' key={index}>
                            <Image
                                src={img}
                                width={3000}
                                height={3000}
                                alt={img}
                                priority={true}
                                className='w-full h-full object-cover'
                            />
                        </div>
                    ))}
                </Slider>
            </div>

            <div className='content-detail lg:py-20 md:py-14 py-10'>
                <div className='container'>
                    <div className='flex max-lg:flex-col-reverse gap-y-10 justify-between'>
                        <Campinfo camp={CAMP} daterange={range} setDaterange={setRange} />
                        <CampSidebar camp={CAMP} range={range} setRange={setRange} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CampDetail;
