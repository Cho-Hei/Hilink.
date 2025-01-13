import Image from "next/image";

const services = () => {
    return (
        <section className='flexCenter flex-col'>
            {/** Thumbnail */}
            <div className='padding-container max-container w-full pb-24'>
                <div className='max-container relative w-full pb-24'>
                    <div className='flexCenter relative w-full h-[400px]'>
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
                <div className='flex flex-wrap justify-between max-container padding-container gap-5 lg:gap-10'>
                    <h2 className='bold-40 lg:bold-56 xl:max-w-[390px]'>
                        No time to plan? We have your back!
                    </h2>
                    <p className='regular-16 text-gray-30 xl:max-w-[520px]'>
                        We offer a variety of services to make your camping experience as seamless
                        as possible. From setting up your tent to providing you with a guide, we
                        have you covered. You can also join various activities in our community
                        centre to make your camping experience more enjoyable.
                    </p>
                </div>
                <div className='flex flex-wrap justify-between max-container padding-container gap-5 lg:gap-10'>
                    <h2 className='bold-40 lg:bold-56 xl:max-w-[390px]'></h2>
                    <p className='regular-16 text-gray-30 xl:max-w-[520px]'></p>
                </div>
            </div>
        </section>
    );
};

export default services;
