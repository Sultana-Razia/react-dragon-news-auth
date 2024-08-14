import Marquee from "react-fast-marquee";

const BreakingNews = () => {
    return (
        <div className="flex gap-2 mt-6">
            <button className="bg-[#D72050] text-white font-medium text-xl py-2 px-6">Latest</button>
            <Marquee pauseOnHover={true} speed={70}>
                Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
            </Marquee>
        </div>
    );
};

export default BreakingNews;