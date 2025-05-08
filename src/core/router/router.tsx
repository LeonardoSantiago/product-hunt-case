import { Posts, PostsDetails } from "@pages";
import type { RouteObject } from "react-router";

export const router: RouteObject[] = [{
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
}];
