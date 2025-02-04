"use client";
import Image from "next/image";
import { useState } from "react";
import Button from "./Button";
import Link from "next/link";
import Model from "./Model";
import YouTube, { YouTubePlayer, YouTubeProps } from "react-youtube";

// https://codesandbox.io/s/react-youtube-play-pause-video-using-an-external-button-c77o1v
let videoElement: YouTubePlayer = null;

const Intro = () => {
    const [open, setOpen] = useState(false);

    const handleOnClose = () => {
        setOpen(false);
        videoElement.target.pauseVideo();
    };

    const onPlayerReady: YouTubeProps["onReady"] = (event) => {
        videoElement = event;
    };

    const opts: YouTubeProps["opts"] = {
        // playerVars: {
        //     // https://developers.google.com/youtube/player_parameters
        //     autoplay: 1,
        // },
    };
    return (
        <section className='max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row'>
            <div className='hero-map' />
            <div className='relative z-20 flex flex-1 flex-col xl:w-1/2'>
                <Image
                    src='/camp.svg'
                    alt='camp'
                    width={50}
                    height={50}
                    className='absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]'
                />
                <h1 className='bold-52 lg:bold-88'>Welcome to Sunset Tides</h1>
                <p className='regular-16 mt-7 text-gray-30 xl:max-w-[520px]'>
                    We want to be on each of your journeys seeking the satisfaction of seeing the
                    incorruptible beauty of nature. We can help you on an adventure around the world
                    in just one app.
                </p>

                <div className='my-11 flex flex-wrap gap-5'>
                    <div className='flex items-center gap-2'>
                        {Array(5)
                            .fill(1)
                            .map((_, idx) => (
                                <Image
                                    src='/star.svg'
                                    key={idx}
                                    alt='star'
                                    width={24}
                                    height={24}
                                />
                            ))}
                    </div>
                    <p className='bold-16 lg:bold-20 text-blue-70'>
                        198k
                        <span className='regular-16 lg:regular-20 ml-1 '>Excellent Reviews</span>
                    </p>
                </div>

                <div className='flex flex-col w-full gap-3 sm:flex-row relative'>
                    <Link href='/#download'>
                        <Button type='button' title='Download App' variant='btn_green' />
                    </Link>
                    <Button
                        type='button'
                        title='How we work?'
                        icon='/play.svg'
                        variant='btn_white_text'
                        onClick={() => setOpen(true)}
                    />
                </div>
            </div>
            <Model open={open} onClose={handleOnClose}>
                <YouTube videoId='EJr3uAQwGek' opts={opts} onReady={onPlayerReady} />
            </Model>

            <div className='relative flex flex-1 items-start'>
                <div className='relative flex z-20 w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8'>
                    <div className='flex flex-col'>
                        <div className='flexBetween'>
                            <p className='regular-16 text-gray-20'>Location</p>
                            <Image src='/close.svg' alt='close' width={24} height={24} />
                        </div>
                        <p className='bold-20 text-white'>Darling Minogue</p>
                    </div>
                    <div className='flexBetween'>
                        <div className='flex flex-col'>
                            <p className='regular-16 text-gray-20'>Distance</p>
                            <p className='bold-20 text-white'>156.25 mi</p>
                        </div>
                        <div className='flex flex-col'>
                            <p className='regular-16 text-gray-20'>Elevation</p>
                            <p className='bold-20 text-white'>2.023 km</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Intro;
