import Image from "next/image";
import ScrollingTestimonials from "../../components/animata/container/scrolling-testimonials";
import Testimonials from "@/data/Testimonial.json";
import Button from "@/components/Button";
import Link from "next/link";

const services = () => {
    return (
        <section className='flexCenter flex-col overflow-hidden pb-24 text-justify'>
            <div className='w-full'>
                <div className='relative w-full pb-12'>
                    <div className='flexCenter relative w-full lg:h-[320px] sm:h-[280px] h-[240px]'>
                        <Image
                            src='/camping-site.jpg'
                            alt='camping-site'
                            layout='fill'
                            className='w-full object-cover object-center'
                        />
                        <div className='w-full bg-[#FFE7AB] bg-opacity-80 absolute bottom-0'>
                            <h2 className='bold-40 lg:bold-64 xl:max-w-[390px] text-white px-2'>
                                Services
                            </h2>
                        </div>
                    </div>
                </div>
                <div className='flex flex-wrap justify-between max-container padding-container gap-5 lg:gap-10 lg:justify-center py-12'>
                    <h2 className='bold-40 lg:bold-56 xl:max-w-[490px] text-left'>
                        No time to plan? We have your back!
                    </h2>
                    <p className='regular-16 text-gray-30 xl:max-w-[520px]'>
                        We offer a variety of services to make your camping experience as seamless
                        as possible. From setting up your tent to providing you with a guide, we
                        have you covered. You can also join various activities in our community
                        centre to make your camping experience more enjoyable.
                    </p>
                </div>
            </div>
            {/* Overview */}

            <div className='flexCenter flex-col max-container padding-container gap-5 md:gap-10 py-12 '>
                <h2 className='w-full bold-40 lg:bold-56 my-4 md:text-center text-left'>
                    Overview
                </h2>

                <p className='regular-16 text-gray-30 md:max-w-[520px]'>
                    Our camping site is located in the heart of the forest, surrounded by nature. We
                    offer a variety of services to make your camping experience as seamless as
                    possible. From setting up your tent to providing you with a guide, we have you
                    covered. You can also join various activities in our community centre to make
                    your camping experience more enjoyable.
                </p>
            </div>

            <div className='flexCenter flex-col py-5'>
                <div className='absolute h-screen w-screen bg-pattern-3 opacity-40 bg-cover bg-center -z-10' />
                <h2 className='w-full bold-40 lg:bold-56 my-4 md:text-center text-left'>
                    How to Book?
                </h2>
                <Image src='/campgroundBooking.png' alt='campbooking' width={500} height={650} />
            </div>

            <div className='text-left'>
                <h2 className='w-full bold-40 lg:bold-56 my-4 md:text-center'>
                    Trusted by thousands of campers
                </h2>
                <ScrollingTestimonials data={Testimonials} />
            </div>

            <div className='flexCenter flex-col max-container padding-container gap-5 md:gap-10 py-12'>
                <h2 className='w-full bold-32 md:bold-40 lg:bold-56 my-4 md:text-center'>
                    Start your camping journey today!
                </h2>
                <Link href='/camps'>
                    <Button title='Book Now' variant='btn_green' type='button' />
                </Link>
            </div>
        </section>
    );
};

export default services;
