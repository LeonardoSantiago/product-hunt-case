import { ResultQueryPost } from "./interface"

export const resultQueryPostsAdapter = (resultQuery: ResultQueryPost) => {
    return resultQuery?.data?.posts?.edges?.map((post) => {
        return {
            ...post.node,
            cursor: post.cursor,
            thumbnail: post.node.thumbnail?.url,
        }
    })
}