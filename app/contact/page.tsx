import Button from "@/components/Button";
import Thumbnail from "@/components/Thumbnail";
import { SOCIALS } from "@/constants";
import { EnvelopeSimpleOpen, MapPinLine, Phone } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";

const page = () => {
    return (
        <section>
            <Thumbnail
                img={"/camps/1440x1080.png"}
                heading='Contact Us'
                subHeading='We Are Here for Your Next Journey'
            />
            <div className='contact-us lg:pt-20 md:pt-14 pt-10'>
                <div className='container'>
                    <div className='flex justify-between max-lg:flex-col gap-y-10'>
                        <div className='left lg:w-1/2 lg:pr-[30px]'>
                            <div className='infor'>
                                <div className='heading'>
                                    <div className='heading4'>24/7 Support</div>
                                    <div className='body2 text-variant1 mt-4'>
                                        Start Your Journey with Us Today. Make Your Dream Camping
                                        Come True. Let us Help with Your Next Adventure.
                                    </div>
                                </div>
                                <div className='style-contact-us'>
                                    <div className='list-social flex items-center flex-wrap gap-5 mt-4'>
                                        <ul className='regular-14 flex gap-4 text-gray-30'>
                                            {SOCIALS.media.map((media) => (
                                                <Link href={media.href} key={media.title}>
                                                    <Image
                                                        src={media.links}
                                                        alt='logo'
                                                        width={24}
                                                        height={24}
                                                    />
                                                </Link>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className='list-more-infor mt-10'>
                                    <div className='item flex items-center gap-6'>
                                        <Link href='mailto:'>
                                            <div className='flex items-center justify-center w-12 h-12 bg-primary flex-shrink-0 rounded-full'>
                                                <EnvelopeSimpleOpen className='text-black text-2xl' />
                                            </div>
                                        </Link>
                                        <div className='w-px h-12 bg-outline'></div>
                                        <div className='body2'>hilink@akinthil.com</div>
                                    </div>
                                    <div className='item flex items-center gap-6 mt-5'>
                                        <div className='flex items-center justify-center w-12 h-12 bg-primary flex-shrink-0 rounded-full'>
                                            <Phone className='text-black text-2xl' />
                                        </div>
                                        <div className='w-px h-12 bg-outline'></div>
                                        <div className='body2'>123-456-7890</div>
                                    </div>
                                    <div className='item flex items-center gap-6 mt-5'>
                                        <div className='flex items-center justify-center w-12 h-12 bg-primary flex-shrink-0 rounded-full'>
                                            <MapPinLine className='text-black text-2xl' />
                                        </div>
                                        <div className='w-px h-12 bg-outline'></div>
                                        <div className='body2'>
                                            105 Pitt St, Sydney, New South Wales 2000, Australia
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='right lg:w-1/2 lg:pl-[30px]'>
                            <div className='heading4'>Drop Us A Line</div>
                            <div className='body2 text-variant1 mt-3'>
                                Chat with us or send us a message. We are here to help you with your
                                next adventure.
                            </div>
                            <form className='md:mt-7 mt-4'>
                                <div className='grid sm:grid-cols-2 grid-cols-1 gap-5'>
                                    <div className='name'>
                                        <label htmlFor='username' className='text-variant1'>
                                            Name
                                        </label>
                                        <input
                                            className='border-line mt-2 px-4 py-3 w-full rounded-lg'
                                            id='username'
                                            type='text'
                                            placeholder='Your Name *'
                                            required
                                        />
                                    </div>
                                    <div className='email'>
                                        <label htmlFor='email' className='text-variant1'>
                                            Email
                                        </label>
                                        <input
                                            className='border-line mt-2 px-4 pt-3 pb-3 w-full rounded-lg'
                                            id='email'
                                            type='email'
                                            placeholder='Your Email *'
                                            required
                                        />
                                    </div>
                                    <div className='message sm:col-span-2'>
                                        <label htmlFor='message' className='text-variant1'>
                                            Message
                                        </label>
                                        <textarea
                                            className='border-line mt-2 px-4 pt-3 pb-3 w-full rounded-lg'
                                            id='message'
                                            rows={3}
                                            placeholder='Your Message *'
                                            required
                                        />
                                    </div>
                                </div>
                                <div className='block-button md:mt-6 mt-4'>
                                    <Button
                                        type='submit'
                                        title='Send message'
                                        variant='btn_green'
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className='map-block lg:my-20 md:my-14 my-10'>
                <div className='container'>
                    <div className='map'>
                        <iframe
                            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d185120.4270165965!2d144.18318808396!3d43.53347920221423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f6d7db103f09497%3A0x9c519d311f9996e9!2z6Zi_5a-S5pGp5ZGo5ZyL56uL5YWs5ZyS!5e0!4v1737542846735!2s'
                            loading='lazy'
                            className='w-full lg:h-[600px] md:h-[500px] sm:h-[400px] h-[360px] rounded-[20px]'></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default page;
