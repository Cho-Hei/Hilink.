"use client";
import Thumbnail from "@/components/Thumbnail";
import { CheckCircle, XCircle } from "@phosphor-icons/react/dist/ssr";
import { useSearchParams } from "next/navigation";
import useSWR from "swr";

const page = () => {
    const searchParams = useSearchParams();
    const session_id = searchParams.get("session_id");

    const fetcher = (url: string) =>
        fetch(url).then((r) => {
            if (!r.ok) {
                throw new Error("Something went wrong with the request");
            }
            return r.json();
        });

    const { data, error } = useSWR(() => `/api/checkout_session/${session_id}`, fetcher);
    return (
        <div className='text-center'>
            <Thumbnail
                img={"/camps/1440x1080.png"}
                heading='Need Help?'
                subHeading='Contact Us for Assistance'
            />
            {error ? (
                <div className='flexCenter flex-col rounded-md bg-rose-100 text-rose-500 max-w-md mx-auto my-10 p-6'>
                    <XCircle weight='fill' className='w-12 h-12 flex-shrink-0 text-rose-500' />
                    <p className='text-lg'>Sorry, something went wrong!</p>
                </div>
            ) : !data ? (
                <div className='p-2 rounded-md bg-gray-100 text-gray-500 max-w-md mx-auto'>
                    <p className='text-lg animate-pulse'>Loading...</p>
                </div>
            ) : (
                <>
                    <div className='flexCenter flex-col w-full my-10'>
                        <div className=' p-4 rounded-md bg-gray-100'>
                            <h2 className='text-4xl font-semibold flex flex-col items-center space-x-1'>
                                <CheckCircle
                                    weight='fill'
                                    className='w-12 h-12 flex-shrink-0 text-green-600'
                                />
                                <span>Thanks for your payment!</span>
                            </h2>
                            <p className='text-lg mt-3'>Check your inbox for the receipt.</p>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default page;
