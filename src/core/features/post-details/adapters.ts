import { ResultQueryPostDetails } from "./interface";

export const resultQueryPostDetailsAdapter = (resultQuery: ResultQueryPostDetails) => {
    const post = resultQuery?.data?.post;

    return {
        ...post,
        thumbnail: post?.thumbnail?.url,
        media: post?.media?.map((media: { url: string }) => media?.url),
        topics: post?.topics?.nodes?.map((topic: { name: string }) => topic?.name),
    }
}