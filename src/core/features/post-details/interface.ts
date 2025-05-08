export interface PostDetails {
    id: string;
    name: string;
    votesCount: number;
    website: string;
    description: string;
    media: {
        url: string;
    }[];
    thumbnail: {
        url: string;
    };
    topics: {
        nodes: {
            name: string;
        }[];
    };
}

export interface ResultQueryPostDetails {
    data?: {
        post: PostDetails;
    }
}

export interface PostDetailsVM {
    id: string;
    name: string;
    votesCount: number;
    website: string;
    description: string;
    media: string[];
    thumbnail: string;
    topics: string[];
}