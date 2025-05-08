import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #f5f6f7;
    width: 35%;
    padding: 0 20px;
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
    display: flex;
    justify-content: flex-start;
    `;
const BackButton = styled(FontAwesomeIcon)`
    font-size: 20px;
    color: #000;
    margin: 10px 0 0 20px;
    cursor: pointer;
`

const Apresentation = styled.div`
    width: 100%;
    border-radius: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    border-radius: 20px;
    padding: 25px;
    background: #fff;
    height: 60%;

    .slick-slider {
        height: 100%;
    }

    .slick-prev {
        left: -23px
    }
    
    .slick-next {
        right: -23px
    }
        
    .slick-prev:before {
        color: #f36f2b;
    }

    .slick-next:before {
        color: #f36f2b;
    }

    .slick-list {
        height: 100%;
        border-radius: 20px;
    }

    .slick-dots li.slick-active button:before  {
        color: #f36f2b
    }

`

const Content = styled.div`
    background-color: #fff;
    border-radius: 10px;
    padding: 20px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`

const ContentHeader = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;

`

const ContentText = styled.div`
    display: flex;	    	
    flex-direction: column;	
    justify-content: center;
    align-items: center;
    margin-left: 20px;
`

const Logo = styled.img`
    width: 70px;
    height: 70px;
    border-radius: 10px;
    align-self: end;
`
const Title = styled.h1`
    font-size: 20px;
    font-weight: 400;
    align-self: start;
`
const Subtitle = styled.h2`
    font-size: 16px;
    font-weight: 400;
    color: #666;
`

const Summary = styled.p`
    font-size: 14px;
    color: #666;
    line-height: 1.5;
`
const Footer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 20px;
    gap: 10px;
    background-color: #fff;
    padding: 20px;
    box-sizing: border-box;
    border-radius: 10px;
`
const Button = styled.button<{ $variant?: 'primary' | 'secondary'; }>`
    background-color: ${props => props.$variant === 'primary' ? '#f36f2b' : '#fff'};
    flex: 1;
    padding: 12px 0;
    border-radius: 12px;
    font-weight: bold;
    color: ${props => props.$variant === 'primary' ? '#fff' : '#333'};
    border: none;
    cursor: pointer;
    font-size: 16px;
    transition: all 0.2s ease;
    border: ${props => props.$variant === 'secondary' ? '1px solid #ddd;' : 'none'};

    &:hover {
        background-color: ${props => props.$variant === 'primary' ? '#d95615' : '#f9f9f9'};
        color: ${props => props.$variant === 'primary' ? '#fff' : '#333'};
        border-color: ${props => props.$variant === 'secondary' ? '#ccc' : 'none'};
        box-shadow: ${props => props.$variant === 'secondary' ? '0 2px 5px rgba(0,0,0,0.1)' : '0 4px 8px rgba(243, 111, 43, 0.4)'};
    }       
`

const Tag = styled.div`
    display: flex;
    background-color: #f2f2f2;
    padding: 5px 10px;
    border-radius: 12px;  
    font-size: 14px;
    color: #555;    
`
const ContentTag = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

`


export default { Container, Header, BackButton, Apresentation, Content, 
    ContentHeader, ContentText, Logo, Title, Subtitle, Summary, Footer, Button, Tag, ContentTag};