import { FaGoogle, FaGithub, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import qZone1 from '../../../assets/qZone1.png';
import qZone2 from '../../../assets/qZone2.png';
import qZone3 from '../../../assets/qZone3.png';


const RightSideNav = () => {
    return (
        <div>
            <div>
                <h2 className="text-xl font-semibold">Login With</h2>
                <button className="btn btn-outline w-full mt-3"><FaGoogle />  Login With Google</button>
                <button className="btn btn-outline w-full mt-3"><FaGithub />  Login With Github</button>
            </div>

            <div className="mt-7">
                <h2 className="text-[#403F3F] font-semibold text-xl">Find Us On</h2>
                <a href="" className="flex items-center gap-2 mt-7 px-4 py-3 border rounded-lg">
                    <FaFacebookF />
                    Facebook
                </a>
                <a href="" className="flex items-center gap-2 px-4 py-3 border rounded-lg">
                    <FaTwitter />
                    Twitter
                </a>
                <a href="" className="flex items-center gap-2 px-4 py-3 border rounded-lg">
                    <FaInstagram />
                    Instagram
                </a>
            </div>

            <div className="bg-[#F3F3F3] mt-7 border rounded-md">
                <h2 className="text-xl font-semibold my-4 ml-2">Q-Zone</h2>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
            </div>
        </div>
    );
};

export default RightSideNav;