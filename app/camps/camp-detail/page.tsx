"use client";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Campsdata from "@/data/Camps.json";
import { TentType } from "@/type/TentType";
import { ShareIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { MapPinIcon } from "@heroicons/react/24/outline";
import { ReadMore } from "@/components/ReadMore";

const CampDetail = () => {
    const params = useSearchParams();
    const campID = params.get("id");
    const [isExpanded, setIsExpanded] = useState(false);

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
            <div className='camp-detail'>
                <div className='container'>
                    <div className='flex max-lg:flex-col-reverse gap-y-10 justify-between'>
                        <div className='w-full xl:w-2/3 lg:w-[60%] lg:pr-[15px]'>
                            <div className='flex items-center justify-between gap-6'>
                                <div className='heading3'>{CAMP.name}</div>
                                <ShareIcon className='text-variant1 h-8 w-8' />
                            </div>
                            <div className='flex items-center gap-4 flex-wrap gap-y-1 mt-2'>
                                <div className='flex items-center gap-1.5'>
                                    <MapPinIcon className='text-variant1 h-6 w-6' />
                                    <span className='text-variant1 capitalize'>
                                        {CAMP.location}
                                    </span>
                                </div>
                                <Link
                                    href={`http://maps.google.com/?q=${CAMP.locationMap.lat},${CAMP.locationMap.lng}`}
                                    target='_blank'
                                    className='text-primary underline'>
                                    Show on map
                                </Link>
                            </div>
                            <div className='desc lg:mt-10 mt-6 lg:pt-10 pt-6 border-t border-outline'>
                                <div className='heading5'>Description</div>
                                <ReadMore
                                    id='read-more'
                                    text={CAMP.shortDesc + " " + CAMP.description}
                                />
                                {/* <div className='body2 text-variant1 mt-3'>{CAMP.shortDesc}</div>
                                <div
                                    className={`body2 text-variant1 ${isExpanded ? "" : "hidden"}`}>
                                    {CAMP.description}
                                </div>
                                <div
                                    className='text-button-sm underline inline-block duration-300 cursor-pointer mt-3 hover:text-primary'
                                    onClick={() => setIsExpanded((isExpanded) => !isExpanded)}>
                                    {isExpanded ? <>Hidden less</> : <>View More</>}
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CampDetail;
