import { PostVM } from '@core'
import Styled from './styled'
import { faSortUp } from '@fortawesome/free-solid-svg-icons'

export const Card = (post: PostVM & {onClick: () => void}) => {
    return (
        <Styled.Container>
            <Styled.Content onClick={post.onClick}>
                <Styled.Image data-testid="image-logo" src={post?.thumbnail} alt={post?.name}/>
                <Styled.InfoContainer >
                    <Styled.Title>{post?.name}</Styled.Title>
                    <Styled.Description>{post?.tagline}</Styled.Description>
                </Styled.InfoContainer >
                        
            </Styled.Content>
            <Styled.Votes>
                <Styled.VotesIcon icon={faSortUp}/>
                <Styled.VotesText> {post?.votesCount} </Styled.VotesText>
            </Styled.Votes> 
        </Styled.Container>
    )

}