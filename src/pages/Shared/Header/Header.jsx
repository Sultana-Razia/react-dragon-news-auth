import moment from 'moment';

const Header = () => {
    return (
        <div className="text-center">
            <h1 className="unifrakturcook-bold mt-5 text-6xl text-[#444444]">THe Dragon News</h1>
            <h2 className="text-[#706F6F] text-lg mt-5">Journalism Without Fear or Favour</h2>
            <p className="text-[#706F6F] font-medium text-xl mt-3">{moment().format("dddd, MMMM DD YYYY, h:mm:ss a")}</p>
        </div>
    );
};

export default Header;