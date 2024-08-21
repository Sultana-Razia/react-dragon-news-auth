import { Link } from "react-router-dom";
import { CiBookmark } from "react-icons/ci";
import { CiShare2 } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";


const NewsCard = ({ news }) => {
    const { title, image_url, details, _id, author, total_view, rating } = news;
    return (
        <div>
            <div className="bg-[#F3F3F3] w-full rounded-md h-[80px] mb-4 px-5 py-4 flex justify-between">
                <div className="flex gap-3 items-center">
                    <div>
                        <img className="w-[40px] h-[40px] rounded-full" src={author.img} alt="" />
                    </div>
                    <div>
                        <p className="font-semibold text-[#403F3F]">{author.name}</p>
                        <p className="text-[#706F6F]">{author.published_date}</p>
                    </div>
                </div>
                <div className="flex items-center gap-3 text-2xl">
                    <CiBookmark />
                    <CiShare2 />
                </div>
            </div>
            <h2 className="text-[#403F3F] font-bold text-xl mb-5">{title}</h2>
            <img className="mb-8" src={image_url} alt="" />
            {
                details.length > 200
                    ?
                    <p className="font-semibold text-[#706F6F] mb-10">{details.slice(0, 200)}<Link to={`/news/${_id}`} className="text-[#FF8C47]">   Read More...</Link></p>
                    :
                    <p>{details}</p>
            }
            <div className="flex justify-between p-5 mb-5">
                <div className="flex items-center gap-2 text-[#FF8C47]">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    {rating.number}
                </div>
                <div className="flex gap-2 items-center">
                    <FaEye />
                    {total_view}
                </div>
            </div>
        </div>
    );
};

export default NewsCard;