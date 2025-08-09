import React from "react";
import HeroImage from "../images/abc3.webp";

const HeroSection = () => {
    return (
        <section className="bg-[#f4f0f5] py-16 px-6 md:px-12">
            {/* bg-[#f4f0f5] */}
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
                {/* Left Text Side */}
                <div>
                    {/* <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                        Building Brands for the{" "}
                        <span className="text-purple-500">Digital</span> World
                    </h1> */}
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                        From <span className="text-yellow-400">Learning</span> to <span className="text-yellow-400">Earning</span> — Start Your <span className="text-yellow-400">Journey</span> Today
                    </h1>
                    <p className="mt-4 text-gray-600 text-lg">
                        We provide industry-focused training in IT, business, and creative skills — helping you build a career with confidence.
                    </p>

                    {/* Buttons */}
                    <div className="mt-6 flex flex-wrap gap-4">
                        <button className="bg-yellow-400 cursor-pointer text-black px-6 py-3 shadow rounded-full hover:bg-yellow-500">
                            View Courses
                        </button>
                        <button className="bg-[#253238] cursor-pointer text-white border border-gray-200 px-6 py-3 rounded-full hover:bg-transparent hover:text-black hover:border-gray-800">
                            Enroll Now
                        </button>
                    </div>

                    {/* Services */}
                    <div className="mt-10 bg-yellow-400  p-6 rounded-3xl text-white flex flex-wrap gap-4">
                        {/* bg-gradient-to-r from-[#253238] to-yellow-400 */}
                        <span className="bg-[#253238] px-4 py-2 rounded-full">UI/UX Design</span>
                        <span className="bg-white text-black px-4 py-2 rounded-full">
                            Web Design
                        </span>
                        <span className="bg-[#253238] px-4 py-2 rounded-full">Social Media</span>
                        <span className="bg-white text-black px-4 py-2 rounded-full">
                            Mobile Apps
                        </span>
                        <span className="bg-[#253238] px-4 py-2 rounded-full">E-commerce</span>
                        <span className="bg-white text-black px-4 py-2 rounded-full">
                            Analytics
                        </span>
                    </div>
                </div>

                {/* Right Image Side */}
                <div className="flex justify-center relative">
                    <img
                        src={HeroImage}
                        alt="VR Person"
                        className="rounded-3xl max-w-full"
                        object-cover w-full h-full
                    />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
