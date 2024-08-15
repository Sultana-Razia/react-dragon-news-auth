import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div>
            <h2 className="text-[#403F3F] text-xl font-semibold">All Category</h2>
            {
                categories.map(category => <Link
                    className="block text-[#9F9F9F] font-medium text-xl my-4 ml-2"
                    key={category.id}
                    to={`/category/${category.id}`}
                >{category.name}</Link>)
            }
        </div>
    );
};

export default LeftSideNav;