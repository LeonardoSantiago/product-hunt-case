import { PostVM } from "@core"

export interface CardListProps {
    posts: PostVM[]
    onClickPost: (id: string) => void
    onFetchMoreData: (cursor?: string) => void
}