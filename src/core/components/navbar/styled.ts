import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const Avatar = styled.div`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: black;
`;

const NavbarContainer = styled.nav`
    display: flex;
    padding: 20px;
    height: 10%
    width: 100%;
    justify-content: space-between;
    align-items: center;
`

const NavbarDate = styled.div`
    display: flex;
    background-color: #f2f2f2;
    padding: 5px 10px;
    border-radius: 12px;  
    font-size: 14px;
    color: #555;
`
const SearchIcon = styled(FontAwesomeIcon)`
    font-size: 18px;
    color: #999;
`

export default { Avatar, NavbarContainer, NavbarDate, SearchIcon }