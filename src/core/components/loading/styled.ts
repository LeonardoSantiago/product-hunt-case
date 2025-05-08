import styled from "styled-components";

const LoaderContainer = styled.div`
    position: fixed;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
`

const Loader = styled.div`
    width: 48px;
    height: 48px;
    border: 6px solid #f3f3f3;
    border-top: 6px solid #f36f2b;
    border-radius: 50%;
    animation: spin 0.8s linear infinite;

    @keyframes spin {
        to {
            transform: rotate(360deg);
        }
    }
`

export default { LoaderContainer, Loader };

