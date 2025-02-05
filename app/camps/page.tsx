import Campitem from "@/components/Campitem";
import Campsdata from "@/data/Camps.json";

const page = () => {
    return (
        <section className='pb-24'>
            <div className='lg:pt-20 md:pt-14 pt-10'>
                <div className='container'>
                    <div className='flexCenter flex-col w-full'>
                        <h1 className='heading3'>Discovery Camping Near You On Hilink.</h1>
                        <h2 className='body2 text-gray-30'>
                            Various types of camping size available
                        </h2>
                    </div>
                    <div className='list-cate grid lg:grid-cols-4 md:grid-cols-3 min-[360px]:grid-cols-2 lg:gap-[30px] gap-4 gap-y-7 md:mt-10 mt-6'>
                        {Campsdata.map((item) => (
                            <Campitem key={item.id} data={item} type='default' />
                        ))}
                    </div>
                    {/* <div className='button-block w-full text-center md:mt-10 mt-6'>
                        <Link href={"/camp/topmap-grid"} className='button-main'>
                            View All Camp
                        </Link>
                    </div> */}
                </div>
            </div>
        </section>
    );
};

export default page;
