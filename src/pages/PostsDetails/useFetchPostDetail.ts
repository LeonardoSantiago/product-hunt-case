import { useQuery } from "urql";
import { POST_DETAILS_QUERY, resultQueryPostDetailsAdapter } from "@core";

export const useFetchPostDetails = (id?: string) => {
    const [result] = useQuery({
        query: POST_DETAILS_QUERY,
        variables: {
            id,
        },
        pause: !id,
    });

    return {
        data: resultQueryPostDetailsAdapter(result) || null,
        isLoading: result.fetching,
        error: result.error,
    }
    
}