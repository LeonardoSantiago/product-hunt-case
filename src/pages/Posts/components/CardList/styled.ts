import { Virtuoso } from "react-virtuoso";
import styled from "styled-components";

const CardListContainer = styled(Virtuoso)`
    display: flex;
    justify-content: center;
    flex-wrap: nowrap;
    flex-direction: column;
    padding: 0 20px;
    box-sizing: border-box;
    overflow: auto;
    height: calc(98vh - 145px);
    background-color: #f5f6f7;

    @media (max-width: 480px) {
        padding: 0 8px;
    }

    div[data-viewport-type="element"] {
        width: calc(100% - 40px) !important;
    }
`
export default  { CardListContainer }