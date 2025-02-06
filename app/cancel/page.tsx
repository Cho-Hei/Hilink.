import Thumbnail from "@/components/Thumbnail";
import { XCircle } from "@phosphor-icons/react/dist/ssr";

const page = () => {
    return (
        <section>
            <Thumbnail
                img={"/camps/1440x1080.png"}
                heading='Need Help?'
                subHeading='Contact Us for Assistance'
            />

            <div className='flexCenter flex-col w-full'>
                <div className='flexCenter flex-col max-w-md rounded-md bg-rose-100 text-rose-500 my-10 p-6 text-center'>
                    <XCircle weight='fill' className='w-12 h-12 flex-shrink-0 text-rose-500' />
                    <p className='text-lg'>The transaction was cancelled. Please try again.</p>
                </div>
            </div>
        </section>
    );
};

export default page;
