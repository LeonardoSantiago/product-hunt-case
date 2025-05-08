export interface PostVM {
    id: string;
    name: string;
    tagline: string;
    thumbnail: string;
    votesCount: number;
    cursor: string;
}

export interface Post {
    id: string;
    name: string;
    tagline: string;
    thumbnail: {
        url: string;
    };
    votesCount: number;
}

export interface PostsEdges {
    cursor: string;
    node: Post;
}

export interface ResultQueryPost {
    data?: {
        posts: {
            edges: {
                cursor: string;
                node: Post
            }[];
            pageInfo: {
                hasNextPage: boolean;
                endCursor: string;
            }
        }
    }
}