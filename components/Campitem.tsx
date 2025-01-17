"use client";
import { useWishlist } from "@/context/WishlistContext";
import { TentType } from "@/type/TentType";
import { HeartIcon, StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { MapPinIcon } from "@heroicons/react/16/solid";

type CampitemProps = {
    data: TentType;
    type: string;
};

const Campitem = ({ data, type }: CampitemProps) => {
    const { wishlistState, addToWishlist, removeFromWishlist } = useWishlist();
    const router = useRouter();

    const handleClickItem = (id: string) => {
        router.push(`/camps/camp-detail?id=${id}`);
        // router.push(`/`);
    };

    const handleAddToWishlist = () => {
        // if product existed in wishlit, remove from wishlist and set state to false
        if (wishlistState.wishlistArray.some((item) => item.id === data.id)) {
            removeFromWishlist(data.id);
        } else {
            // else, add to wishlist and set state to true
            addToWishlist(data);
        }
    };

    return (
        <div
            className='tent-item hover-scale'
            onClick={() => {
                handleClickItem(data.id);
            }}>
            <div className='thumb-img relative'>
                <Swiper
                    pagination={{
                        type: "fraction",
                    }}
                    loop={true}
                    modules={[Pagination]}
                    className='mySwiper rounded-xl '>
                    {data.listImage.map((img, index) => (
                        <SwiperSlide key={index} className='overflow-hidden'>
                            <div className='bg-img w-full aspect-square'>
                                <Image
                                    src={img}
                                    width={2000}
                                    height={2000}
                                    alt={img}
                                    priority={true}
                                    className='w-full h-full object-cover'
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div
                    className={`wishlist-icon absolute top-3 right-3 z-[1] flex items-center justify-center w-8 h-8 text-white rounded-full duration-300 ${
                        wishlistState.wishlistArray.some((item) => item.id === data.id)
                            ? "active"
                            : ""
                    }`}
                    onClick={(e) => {
                        e.stopPropagation();
                        handleAddToWishlist();
                    }}>
                    {wishlistState.wishlistArray.some((item) => item.id === data.id) ? (
                        <>
                            <HeartIcon className='body2 text-white duration-500' />
                        </>
                    ) : (
                        <>
                            <HeartIcon className='body2 duration-500' />
                        </>
                    )}
                </div>
            </div>
            <div className='infor mt-4'>
                <div className='flex items-center justify-between flex-wrap gap-2'>
                    <div className='flex items-center gap-1'>
                        <MapPinIcon className='md:text-lg text-variant1 h-6 w-6' />
                        <div className='caption1 text-variant1'>100 km</div>
                    </div>
                    <div className='flex items-center gap-1'>
                        <div className='text-button-sm'>{data.rate}</div>
                        <StarIcon className='text-yellow' />
                    </div>
                </div>
                <div className='name text-title capitalize mt-1'>{data.name}</div>
                <div className='flex items-center justify-between gap-2 mt-1'>
                    <div className='text-variant1'>Nov. 12 - 15</div>
                    <div className='flex lg:items-end'>
                        <span className='text-button'>${data.price}</span>
                        <span className='caption1 text-variant1'>/night</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Campitem;
