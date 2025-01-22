import { ShareIcon } from "@heroicons/react/24/outline";
import { MapPinIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import React from "react";
import { ReadMore } from "./ReadMore";
import {
    Alarm,
    CheckCircle,
    CigaretteSlash,
    Clock,
    Drone,
    PawPrint,
    Recycle,
    SpeakerSlash,
} from "@phosphor-icons/react";
import Image from "next/image";
import testimonialData from "@/data/Testimonial.json";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import Rating from "./Rating";
import { TentType } from "@/type/TentType";
import { DateRangeType } from "@/type/DateRangeType";
import dynamic from "next/dynamic";
import Button from "./Button";
const ExploreCamp = dynamic(() => import("@/components/ExploreCamp"), { ssr: false });

interface CampinfoProps {
    camp: TentType;
    daterange: DateRangeType[];
    setDaterange: (daterange: DateRangeType[]) => void;
}

const Campinfo = ({ camp, daterange, setDaterange }: CampinfoProps) => {
    return (
        <div className='w-full xl:w-2/3 lg:w-[60%] lg:pr-[15px]'>
            <div className='flex items-center justify-between gap-6'>
                <div className='heading3'>{camp.name}</div>
                <ShareIcon className='text-variant1 h-8 w-8' />
            </div>
            <div className='flex items-center gap-4 flex-wrap gap-y-1 mt-2'>
                <div className='flex items-center gap-1.5'>
                    <MapPinIcon className='text-variant1 h-6 w-6' />
                    <span className='text-variant1 capitalize'>{camp.location}</span>
                </div>
                <Link
                    href={`http://maps.google.com/?q=${camp.locationMap.lat},${camp.locationMap.lng}`}
                    target='_blank'
                    className='text-primary underline'>
                    Show on map
                </Link>
            </div>
            <div className='desc lg:mt-10 mt-6 lg:pt-10 pt-6 border-t border-outline'>
                <div className='heading5'>Description</div>
                <ReadMore id='read-more' text={camp.shortDesc + " " + camp.description} />
            </div>
            <div className='rule lg:mt-8 mt-5'>
                <div className='heading5'>House Rules</div>
                <div className='list xl:grid grid-cols-3 xl:gap-16 max-xl:flex max-xl:flex-wrap max-xl:gap-8 max-xl:gap-y-2 xl:gap-y-2 mt-4'>
                    <div className='flex items-center gap-2'>
                        <Clock className='text-2xl' />
                        <div className='body2'>Check-in: From 1pm</div>
                    </div>
                    <div className='flex items-center gap-2'>
                        <SpeakerSlash className='text-2xl' />
                        <div className='body2'>Quiet hours</div>
                    </div>
                    <div className='flex items-center gap-2'>
                        <PawPrint className='text-2xl' />
                        <div className='body2'>Pet allowed</div>
                    </div>
                    <div className='flex items-center gap-2'>
                        <Alarm className='text-2xl' />
                        <div className='body2'>Check-out: By 11am</div>
                    </div>
                    <div className='flex items-center gap-2'>
                        <CigaretteSlash className='text-2xl' />
                        <div className='body2'>No smoking</div>
                    </div>
                    <div className='flex items-center gap-2'>
                        <Recycle className='text-2xl' />
                        <div className='body2'>Recycle</div>
                    </div>
                    <div className='flex items-center gap-2'>
                        <Drone className='text-2xl' />
                        <div className='body2'>Drone allowed</div>
                    </div>
                </div>
            </div>
            <div className='feature lg:mt-10 mt-6 lg:pt-10 pt-6 border-t border-outline'>
                <div className='heading5'>Amenities and features</div>
                <div className='list flex justify-between w-full mt-4'>
                    <div className='w-fit'>
                        <div className='text-title'>Services:</div>
                        <div className='list flex flex-col gap-2 mt-3'>
                            {camp.services.map((item, index) => (
                                <div key={index} className='item capitalize'>
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='w-fit'>
                        <div className='text-title'>Amenities:</div>
                        <div className='list flex flex-col gap-2 mt-3'>
                            {camp.amenities.map((item, index) => (
                                <div key={index} className='item capitalize'>
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='w-fit max-sm:hidden'>
                        <div className='text-title'>Activities:</div>
                        <div className='list flex flex-col gap-2 mt-3'>
                            {camp.activities.map((item, index) => (
                                <div key={index} className='item capitalize'>
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className='explore-block lg:mt-10 mt-6 lg:pt-10 pt-6 border-t border-outline'>
                <div className='heading5'>Explore Camp</div>
                <div className='bg-img rounded-2xl max-sm:h-[240px] relative overflow-hidden sm:aspect-[2/1] mt-4'>
                    <ExploreCamp />
                    <div className='icon-block bg-white sm:w-20 w-16 sm:h-20 h-16 rounded-full flex items-center justify-center absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 duration-300'>
                        <Image
                            src={"/icon-360.png"}
                            width={400}
                            height={400}
                            alt='icon'
                            priority={true}
                            className='sm:w-12 w-10 sm:h-12 h-10'
                        />
                    </div>
                </div>
            </div>
            <div className='date lg:mt-10 mt-6 lg:pt-10 pt-6 border-t border-outline'>
                <div className='heading5'>Dates & Availability</div>
                <div className='w-full bg-img relative mt-1'>
                    <DateRangePicker
                        className={`form-date-picker style-detail w-full border border-outline rounded-none open`}
                        onChange={(item) => setDaterange([item.selection] as any)}
                        minDate={new Date()}
                        moveRangeOnFirstSelection={false}
                        months={2}
                        ranges={daterange}
                        direction='horizontal'
                    />
                </div>
            </div>
            <div className='map lg:mt-10 mt-6 lg:pt-10 pt-6 border-t border-outline'>
                <div className='heading5'>Map</div>
                <div className='bg-img relative mt-3'>
                    <iframe
                        className='w-full h-[360px]'
                        src={`https://maps.google.com/maps?q=${camp.locationMap.lat}, ${camp.locationMap.lng}&z=14&output=embed`}></iframe>
                </div>
            </div>
            <div className='review-block lg:mt-10 mt-6 lg:pt-10 pt-6 border-t border-outline'>
                <div className='flex items-center justify-between'>
                    <div className='heading5'>Guest reviews</div>
                    <Link
                        href={"#form-review"}
                        className='text-button-sm px-5 py-2 rounded-lg border border-black duration-300 hover:bg-primary hover:text-white hover:border-primary'>
                        Add Reviews
                    </Link>
                </div>
                <div className='list-review lg:pt-4 pt-2'>
                    {testimonialData.slice(0, 4).map((item, index) => (
                        <div key={index} className='item flex gap-5 md:mt-6 mt-4'>
                            <div className='avatar w-[60px] h-[60px] rounded-full overflow-hidden flex-shrink-0'>
                                <Image
                                    src={item.avatar}
                                    width={400}
                                    height={400}
                                    alt={item.name}
                                    priority={true}
                                    className='w-full h-full object-cover'
                                />
                            </div>
                            <div className='review pb-6 border-b border-outline'>
                                <div className='flex items-center gap-2'>
                                    <div className='heading5'>{item.name}</div>
                                    <CheckCircle weight='fill' className='text-[#30af5b]' />
                                </div>
                                <div className='date mt-1 text-variant2'>{item.date}</div>
                                <Rating currentRate={item.star} classname='mt-2' />
                                <div className='body2 mt-2'>{item.description}</div>
                                {item.images.length !== 0 && (
                                    <div className='list-img flex items-center gap-4 mt-4'>
                                        {item.images.map((img, index) => (
                                            <Image
                                                key={index}
                                                src={img}
                                                width={400}
                                                height={400}
                                                priority={true}
                                                alt={item.name}
                                                className='w-[60px] h-[60px] object-cover'
                                            />
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='caption1 font-bold underline duration-300 cursor-pointer hover:text-primary'>
                See more answered questions (719)
            </div>
            <div id='form-review' className='mt-6 pt-6 border-t border-outline'>
                <div className='list-star xl:grid xl:grid-cols-5 gap-10 max-xl:flex flex-wrap gap-y-5 bg-surface p-6 rounded-2xl my-6'>
                    <div className='item'>
                        <div>Location</div>
                        <Rating currentRate={5} classname='mt-2' />
                    </div>
                    <div className='item'>
                        <div>Rooms</div>
                        <Rating currentRate={4} classname='mt-2' />
                    </div>
                    <div className='item'>
                        <div>Services</div>
                        <Rating currentRate={2} classname='mt-2' />
                    </div>
                    <div className='item'>
                        <div>Cleanliness</div>
                        <Rating currentRate={4} classname='mt-2' />
                    </div>
                    <div className='item'>
                        <div>Value for money</div>
                        <Rating currentRate={4} classname='mt-2' />
                    </div>
                    <div className='item'>
                        <div>Comfortable</div>
                        <Rating currentRate={3} classname='mt-2' />
                    </div>
                    <div className='item'>
                        <div>Facilities</div>
                        <Rating currentRate={4} classname='mt-2' />
                    </div>
                    <div className='item'>
                        <div>Breakfast</div>
                        <Rating currentRate={4} classname='mt-2' />
                    </div>
                    <div className='item'>
                        <div>Food</div>
                        <Rating currentRate={4} classname='mt-2' />
                    </div>
                </div>
                <div className='heading5'>Leave A Reply</div>
                <div className='text-variant1 mt-2'>Your email address will not be published</div>

                <form className='grid sm:grid-cols-2 gap-4 gap-y-5 mt-6'>
                    <div className='name '>
                        <label htmlFor='username' className='text-variant1'>
                            Name
                        </label>
                        <input
                            className='border border-line px-4 pt-3 pb-3 w-full rounded-lg mt-3'
                            id='username'
                            type='text'
                            placeholder='Your Name *'
                            required
                        />
                    </div>
                    <div className='mail '>
                        <label htmlFor='email' className='text-variant1'>
                            Email
                        </label>
                        <input
                            className='border border-line px-4 pt-3 pb-3 w-full rounded-lg mt-3'
                            id='email'
                            type='email'
                            placeholder='Your Email *'
                            required
                        />
                    </div>
                    <div className='col-span-full review'>
                        <label htmlFor='review' className='text-variant1'>
                            Review
                        </label>
                        <textarea
                            className='border border-line px-4 py-3 w-full rounded-lg mt-3'
                            rows={3}
                            id='review'
                            name='review'
                            placeholder='Write comment *'
                            required></textarea>
                    </div>
                    <div className='col-span-full flex items-start -mt-2 gap-2'>
                        <input
                            type='checkbox'
                            id='saveAccount'
                            name='saveAccount'
                            className='mt-1.5'
                        />
                        <label className='' htmlFor='saveAccount'>
                            Save your name, email for the next time review
                        </label>
                    </div>
                    <div className='col-span-full'>
                        <Button type='submit' title='Post comment' variant='btn_green' />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Campinfo;
