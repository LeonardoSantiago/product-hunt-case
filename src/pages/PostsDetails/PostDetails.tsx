import { useFetchPostDetails } from "./useFetchPostDetail";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import Styled from "./styled";
import { useNavigate, useParams } from "react-router";
import { Carousel, Loading } from "@core";
export const PostsDetails = () => {

    const { id } = useParams<{ id: string }>();
    const { data: details, isLoading } = useFetchPostDetails(id);
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(`/posts`);
    };

    if (isLoading) {
        return (
            <Styled.Container>
                <Loading />
            </Styled.Container>
        )
    }

    return (
       <Styled.Container>
        <Styled.Header>
        <Styled.BackButton onClick={handleBack} icon={faChevronLeft} />
        </Styled.Header>
        <Styled.Apresentation>
            <Carousel medias={details?.media}/>
        </Styled.Apresentation>
        <Styled.Content>
            <Styled.ContentHeader>
                <Styled.Logo src={details?.thumbnail} alt={details?.name} />
                <Styled.ContentText>
                    <Styled.Title>{details?.name}</Styled.Title>
                    <Styled.ContentTag>
                        {details?.topics?.map((topic: string) => (
                            <Styled.Tag key={topic}>{topic}</Styled.Tag>
                        ))}
                    </Styled.ContentTag>
                </Styled.ContentText>
            </Styled.ContentHeader>
            <Styled.Summary>{details?.description}</Styled.Summary>
        </Styled.Content>
        <Styled.Footer>
                <Styled.Button $variant="secondary"> Get it </Styled.Button>
                <Styled.Button $variant="primary"> Upvote </Styled.Button>
            </Styled.Footer>
       </Styled.Container>
    )
};