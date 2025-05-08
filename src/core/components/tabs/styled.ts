import styled from "styled-components";

export const TabContainer = styled.div`
    display: flex;
    width: 100%;
    border-bottom: 2px solid #eee;
`

export const TabItem = styled.div<{ $isActive?: boolean; }>`
    flex: 1;
    color: ${props => props.$isActive ? '#f36f2b !important' : '#aaa'};
    border-bottom:${props => props.$isActive && '4px solid #f36f2b !important'};
    text-align: center;
    background: none;
    border: none;
    padding: 10px 0;
    font-weight: 500;
    font-size: 20px;
    cursor: pointer;
`