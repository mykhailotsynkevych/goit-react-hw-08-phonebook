import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  max-width: 700px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;
  > nav {
    display: flex;
  }
`;


export const Link = styled(NavLink)`
padding: 8px 16px;
font-size: 20px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &.active {
    
    color: rgb(50, 214, 0);
      transform: scale(1.1);
        text-shadow: 0 1px 1px rgb(0 0 0 / 12%), 0 1px 1px rgb(0 0 0 / 14%), 0 1px 1px rgb(0 0 0 / 20%);
  }
`;