import styled from "styled-components";

const Container = styled.div`
    display: flex;
    width: 35%;
    flex-direction: column;
    padding-bottom: 20px;

    @media (max-width: 1024px) {
        width: 60%;
    }

    @media (max-width: 768px) {
        width: 80%;
    }

    @media (max-width: 480px) {
        width: 95%;
    }
`

const Header = styled.div`
    background-color: #fff;
`

export default { Container, Header }