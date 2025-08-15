import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import MernStackLogo from "../images/MERN-logo2.webp";
import GraphicsDesigningLogo from "../images/graphics-designing-logo.png";

const courses = [
    {
        title: "MERN Stack Development",
        icon: MernStackLogo,
        description: "A complete guide to building full-stack web apps using MongoDB, Express.js, React, and Node.js.",
        points: [
            "Learn MERN Stack from basics to advanced",
            "Hands-on labs and real-world projects",
            "Get certified in MERN Stack"
        ]
    },
    {
        title: "Frontend Development with React",
        icon: GraphicsDesigningLogo,
        description: "Master modern React.js to create responsive, dynamic, and user-friendly web applications.",
        points: [
            "Master modern React (Hooks, Context, Router)",
            "Build responsive, interactive UIs",
            "Work with APIs and state management"
        ]
    },
    {
        title: "Backend Development with Node.js",
        icon: MernStackLogo,
        description: "Learn to create scalable backend applications using Node.js, Express, and databases.",
        points: [
            "Learn Node.js fundamentals and Express",
            "Work with databases (MongoDB, SQL)",
            "Build scalable backend applications"
        ]
    },
    {
        title: "Graphic Designing",
        icon: GraphicsDesigningLogo,
        description: "Unleash your creativity with design tools like Photoshop, Illustrator, and more.",
        points: [
            "Master design principles and color theory",
            "Create stunning visuals with Adobe Photoshop & Illustrator",
            "Build a portfolio with real-world projects"
        ]
    },
    {
        title: "Social Media Marketing",
        icon: MernStackLogo,
        description: "Grow your brand and reach the right audience using social media strategies.",
        points: [
            "Learn marketing strategies for all major platforms",
            "Create engaging content and ad campaigns",
            "Measure and optimize campaign performance"
        ]
    },
    {
        title: "Video Editing",
        icon: GraphicsDesigningLogo,
        description: "Become a pro in video editing with tools like Adobe Premiere Pro & After Effects.",
        points: [
            "Master tools like Adobe Premiere Pro & After Effects",
            "Edit videos for YouTube, ads, and social media",
            "Add effects, transitions, and sound design"
        ]
    },
];

export default function CourseDetail() {
    const { courseId } = useParams();
    const navigate = useNavigate();

    const course = courses[courseId];

    if (!course) {
        return <p className="p-10 text-center text-red-500">Course not found!</p>;
    }

    return (
        <div className="max-w-4xl mx-auto p-6">
            <button
                onClick={() => navigate(-1)}
                className="mb-4 text-yellow-500 underline cursor-pointer"
            >
                ← Back to Courses
            </button>

            <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-6">
                    <img src={course.icon} alt={course.title} className="w-16 h-16 mr-4" />
                    <h1 className="text-3xl font-bold">{course.title}</h1>
                </div>

                <p className="text-gray-700 mb-4">{course.description}</p>

                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    {course.points.map((point, i) => (
                        <li key={i}>{point}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
