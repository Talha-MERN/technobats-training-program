import React from "react";
import { useNavigate } from "react-router-dom";
import MernStackLogo from "../images/MERN-logo2.webp";
import GraphicsDesigningLogo from "../images/graphics-designing-logo.png";

const courses = [
    {
        title: "MERN Stack Development",
        icon: MernStackLogo,
        points: [
            "Learn MERN Stack from basics to advanced",
            "Hands-on labs and real-world projects",
            "Get certified in MERN Stack"
        ]
    },
    {
        title: "Frontend Development with React",
        icon: GraphicsDesigningLogo,
        points: [
            "Master modern React (Hooks, Context, Router)",
            "Build responsive, interactive UIs",
            "Work with APIs and state management"
        ]
    },
    {
        title: "Backend Development with Node.js",
        icon: MernStackLogo,
        points: [
            "Learn Node.js fundamentals and Express",
            "Work with databases (MongoDB, SQL)",
            "Build scalable backend applications"
        ]
    },
    {
        title: "Graphic Designing",
        icon: GraphicsDesigningLogo,
        points: [
            "Master design principles and color theory",
            "Create stunning visuals with Adobe Photoshop & Illustrator",
            "Build a portfolio with real-world projects"
        ]
    },
    {
        title: "Social Media Marketing",
        icon: MernStackLogo,
        points: [
            "Learn marketing strategies for all major platforms",
            "Create engaging content and ad campaigns",
            "Measure and optimize campaign performance"
        ]
    },
    {
        title: "Video Editing",
        icon: GraphicsDesigningLogo,
        points: [
            "Master tools like Adobe Premiere Pro & After Effects",
            "Edit videos for YouTube, ads, and social media",
            "Add effects, transitions, and sound design"
        ]
    },
];

export default function CoursesOverview() {
    const navigate = useNavigate();

    return (
        <section className="bg-yellow-400 py-16 px-6 md:px-12 border-b">
            <div className="max-w-7xl mx-auto px-4">
                {/* Heading */}
                <h2 className="text-3xl font-bold text-center mb-10 underline">
                    Courses Overview
                </h2>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {courses.map((course, idx) => (
                        <div
                            key={idx}
                            className="bg-[#f4f0f5] border rounded-lg shadow-sm p-6 flex flex-col justify-between"
                        >
                            {/* Header */}
                            <div>
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-xl font-bold">{course.title}</h3>
                                    <img
                                        src={course.icon}
                                        alt={`${course.title} icon`}
                                        className="w-12 h-12 object-contain"
                                    />
                                </div>

                                {/* Points */}
                                <ul className="space-y-3 text-gray-700">
                                    {course.points.map((point, i) => (
                                        <li key={i} className="text-sm leading-relaxed">
                                            {i + 1}. {point}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Button */}
                            <button
                                className="mt-6 bg-yellow-400 text-white py-2 px-4 rounded hover:bg-yellow-600 transition duration-300 cursor-pointer"
                                onClick={() => navigate(`/course/${idx}`)}
                            >
                                Learn More
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
