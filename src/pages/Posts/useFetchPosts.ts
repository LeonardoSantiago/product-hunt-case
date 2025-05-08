import { useQuery } from "urql";
import { PostVM, resultQueryPostsAdapter, POSTS_QUERY } from "@core";
import { useEffect, useRef, useState } from "react";
import isEqual from "lodash/isEqual";

export const useFetchPosts = () => {
    const [cursor, setCursor] = useState<string | null>(null)
    const [order, setOrder] = useState<"NEWEST" | "VOTES">("VOTES")
    const [posts, setPosts] = useState([] as PostVM[])
    const previousOrder = useRef("VOTES")

    const [result] = useQuery({
        query: POSTS_QUERY,
        variables: {
            cursor: cursor,
            first: 15,
            order: order,
        }
    });

    const onFetchMoreData = (nextCursor?: string) => {
        if(nextCursor) {
            setCursor(nextCursor)
        }
    }

    const handleChangeOrder = (newOrder: "NEWEST" | "VOTES") => {
        if (newOrder !== order) {
            previousOrder.current = order;
            setCursor(null);
            setPosts([]);
            setOrder(newOrder);
        }
    }


    useEffect(() => {
        const parsedPosts = resultQueryPostsAdapter(result);

        if (!parsedPosts) return;
      
        const isOrderChanged = previousOrder.current !== order;
        const resultOrder = result.operation?.variables?.order;
      
        if (resultOrder !== order) {
          return;
        }
      
        if (isOrderChanged) {
          previousOrder.current = order;
          setCursor(null);
          setPosts(parsedPosts);
          
        } else {
          if (!isEqual(parsedPosts, posts)) {
            setPosts((prevPosts) => [...prevPosts, ...parsedPosts]);
          }
        }
      }, [result]);
    
    return {
        data: posts,
        onChangeOrder: handleChangeOrder,
        order,
        onFetchMoreData,
    }
}