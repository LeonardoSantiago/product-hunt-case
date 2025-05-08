import { Card } from "../Card/Card"
import { CardListProps } from "./CardList.interface"
import Styled from "./styled"

export const CardList = ({ posts, onClickPost, onFetchMoreData }: CardListProps) => {
    
    const handleEndReached = (lastIndex: number) => {
        if (posts?.[lastIndex]?.cursor) {
            onFetchMoreData(posts?.[lastIndex]?.cursor)
        }
    }

    return (
        <Styled.CardListContainer
            data={posts}
            endReached={(lastIndex: number) => handleEndReached(lastIndex)}
            itemContent={(index: number) => {
                const post = posts?.[index]
                return (
                    <Card key={post?.id} onClick={() => onClickPost(post?.id)} {...post} />
                )
            }}
        />
    )
}