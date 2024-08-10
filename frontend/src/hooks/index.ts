import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../../config";

export interface Blog {
    id: string;
    content: string;
    title: string;
    publishedDate : string,
    author: {
        name?: string;
    };
}

export const useBlog = ({ id }: { id: string }) => {
    const [loading, setLoading] = useState(true);
    const [blog, setBlog] = useState<Blog | undefined>(undefined);

    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        })
            .then((res) => {
                setBlog(res.data.blog);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching blog:", error);
                setLoading(false);
            });
    }, [id]);

    return { loading, blog };
};

export const useBlogs = () => {
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState<Blog[]>([]);

    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        })
            .then((res) => {
                setBlogs(res.data.blogs);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching blogs:", error);
                setLoading(false);
            });
    }, []);

    return { loading, blogs };
};
