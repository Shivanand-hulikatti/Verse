import React from "react";
import BlogCard from "../components/BlogCard";
import NavBar from "../components/NavBar";
import { useBlogs } from "../hooks";

const Blogs: React.FC = () => {
    const { blogs, loading } = useBlogs();
    const userName: string = localStorage.getItem("name") || "";

    return (
        <div className="bg-gray-50 min-h-screen">
            <NavBar name={userName} />
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <div className="space-y-10">
                    {loading ? (
                        // Skeleton loading
                        Array(3).fill(0).map((_, index) => (
                            <SkeletonBlogCard key={index} />
                        ))
                    ) : (
                        blogs.map((blog) => (
                            <BlogCard
                                key={blog.id}
                                id={blog.id}
                                authorName={blog.author.name}
                                title={blog.title}
                                content={blog.content}
                                publishedDate={blog.publishedDate}
                            />
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

const SkeletonBlogCard: React.FC = () => {
    return (
        <div className="bg-white shadow-md rounded-lg p-6 animate-pulse">
            <div className="h-4 bg-gray-200 rounded w-1/4 mb-4"></div>
            <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
            <div className="space-y-2">
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            </div>
            <div className="mt-4 h-4 bg-gray-200 rounded w-1/4"></div>
        </div>
    );
};

export default Blogs;