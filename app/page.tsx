import Camp from "@/components/Camp";
import Features from "@/components/Features";
import GetApp from "@/components/GetApp";
import Guide from "@/components/Guide";
import Intro from "@/components/Intro";

export default function Home() {
    return (
        <section className='relative overflow-hidden'>
            <Intro />
            <Camp />
            <Guide />
            <Features />
            <GetApp />
        </section>
    );
}
