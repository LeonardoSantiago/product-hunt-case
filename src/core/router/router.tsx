import { Posts, PostsDetails } from "@pages";
import { Navigate, type RouteObject } from "react-router";

export const router: RouteObject[] = [
    {
        path: "/posts",
        element: <Posts />
    },
    {
        path: "/posts/newest",
        element: <Posts />
    },
    {
        path: "post/:id",
        element: <PostsDetails />
    },
    {
        path: '/',
        element: <Navigate to="/posts" replace />,
    },
    {
        path: '*',
        element: <Navigate to="/posts" replace />,
    },

];
