import React from 'react';
import banner from "../../assets/Banner.png"
const Banner = () => {
    return (
        <div className="flex justify-between items-center p-16 bg-[#1313130d] gap-[px] rounded-3xl my-9">
            <div className="space-y-6">
                <h1 className="text-5xl">
                    Books to freshen up <br /> your bookself{" "}
                </h1>
                <button className="btn bg-[#23BE0A] text-2xl p-7 rounded-xl text-white">View The List</button>
            </div>
            <div>
                <img src={banner} alt="" className="w-[250px]" />
            </div>
        </div>
    );
};

export default Banner;