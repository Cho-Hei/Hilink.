import Marquee from "./marquee";
import { TestimonialType as Testimonial } from "@/type/TestimonialType";

interface TestimonialProps {
    data: Testimonial[];
}

function TestimonialCard({
    testimonial: { avatar, name, description, position },
}: {
    testimonial: Testimonial;
}) {
    return (
        <div
            className='flex w-96 overflow-hidden rounded-xl border bg-background dark:border-zinc-700'
            key={name}>
            <div className='relative h-full w-32 flex-shrink-0 overflow-hidden'>
                <img src={avatar} alt={name} className='h-full w-full object-cover' />
            </div>
            <div className='px-4 py-2'>
                <span className='block text-lg font-bold text-foreground'>{name}</span>
                <span className='-mt-1 mb-1 block text-sm font-medium leading-loose text-muted-foreground'>
                    {position}
                </span>
                <span className='block text-sm text-foreground'>{description} </span>
            </div>
        </div>
    );
}

export default function ScrollingTestimonials({ data }: TestimonialProps) {
    return (
        <div className='w-full'>
            <Marquee className='[--duration:50s]' pauseOnHover applyMask={false}>
                {data.map((testimonial) => (
                    <TestimonialCard key={testimonial.name} testimonial={testimonial} />
                ))}
            </Marquee>
        </div>
    );
}
