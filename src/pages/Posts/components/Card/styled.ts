import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  width: 100%;
`

const Content = styled.div`
  display: flex;
  align-items: center;
  background: #fff;
  margin: 10px 0;
  padding: 15px;
  border-radius: 12px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.03);
  overflow: auto;
  flex: 0 0 auto;
  width: 100%;
  box-sizing: border-box;
  cursor: pointer;
  overflow-x: hidden;
  &:hover {
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    transform: scale(1.01);
    color: #f36f2b;
  }
`

const Image = styled.img<{ 'data-testid': string}>`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  margin-right: 15px;

    @media (max-width: 1024px) {
        width: 40px;
        height: 40px;
    }

    @media (max-width: 768px) {
        width: 40px;
        height: 40px;
    }

    @media (max-width: 480px) {
        width: 20px;
        height: 20px;
        padding: 10px;
    }
`

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
`

const Title = styled.h3`
  font-size: 16px;
  color: #222;
  margin: 0;

    @media (max-width: 480px) {
      font-size: 14px
    }

`

const Description = styled.p`
  font-size: 13px;
  color: #777;
  margin: 0;
`

const Votes = styled.div`
  position: absolute;
  top: 15px;
  right: -9px;
  background: #fff;
  padding: 6px 10px;
  border-radius: 8px;
  font-weight: bold;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  display: flex;
  align-items: center;
  flex-direction: column;
  z-index: 1;

   @media (max-width: 480px) {
      padding: 2px 8px
      top: 11px
      right: -12px
    }

  &:hover {
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    transform: scale(1.01);
    color: #fff;
    background: #f36f2b;
    cursor: pointer;
  }
`

const VotesIcon = styled(FontAwesomeIcon)`
  font-size: 14px;

   @media (max-width: 480px) {
      font-size: 12px
    }

`

const VotesText = styled.span`
  margin: 0;
  font-size: 12px;

   @media (max-width: 480px) {
      font-size: 10px
    }
`


export default { Content, Image, InfoContainer, Title, Description, Votes, VotesIcon, Container, VotesText };