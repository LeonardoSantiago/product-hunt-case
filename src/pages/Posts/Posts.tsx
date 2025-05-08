import { useLocation, useNavigate } from "react-router";
import { buildTabs } from "./Posts.helpers";
import { useFetchPosts } from "./useFetchPosts";
import { CardList } from "./components/CardList/CardList";
import { useEffect } from "react";
import Styled from './styled'
import { Navbar, Tabs } from "@core";

export const Posts = () => {
    const navigate = useNavigate();
    const tabs = buildTabs(navigate);
    const {
        data: posts,
        onFetchMoreData,
        order,
        onChangeOrder,
    } = useFetchPosts();
    const location = useLocation();
    
    useEffect(() => {
        onChangeOrder(location.pathname === "/posts/newest" ? "NEWEST" : "VOTES")
    }, [location.pathname]);

    const handleClickItem = (id: string) => {
        navigate(`/post/${id}`);
    }

    return (
    <Styled.Container>
        <Styled.Header>
            <Navbar />
            <Tabs tabs={tabs} activeTab={order}/>
        </Styled.Header>
        <CardList 
            onFetchMoreData={onFetchMoreData}
            posts={posts}
            onClickPost={handleClickItem}
        />
    </Styled.Container>
    )
};